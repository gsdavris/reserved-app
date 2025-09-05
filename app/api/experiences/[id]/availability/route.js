import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import {
    getExperienceAvailability,
    upsertExperienceAvailability,
    deleteExperienceAvailability,
} from '@/lib/handlers/availabilityHandlers';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS () {
    return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export async function GET (_req, { params }) {
    const resolvedParams = await params;

    try {
        const id = parseInt(resolvedParams.id);
        if (!Number.isInteger(id)) {
            return new NextResponse(JSON.stringify({ error: 'Invalid experience id' }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
        }

        // 1) Φέρνουμε published + owner
        const exp = await prisma.experience.findUnique({
            where: { id },
            select: { id: true, businessId: true, isPublished: true },
        });

        if (!exp) {
            return new NextResponse(JSON.stringify({ error: 'Not found' }), {
                status: 404,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
        }

        // 2) Αν είναι published -> δημόσιο GET (χωρίς session check)
        if (!exp.isPublished) {
            // 3) Αλλιώς απαιτείται owner/admin
            const session = await getServerSession(authOptions);
            if (!session || (session.user.role !== 'partner' && session.user.role !== 'admin')) {
                return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
                    status: 401,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                });
            }
            if (session.user.role !== 'admin' && exp.businessId !== session.user.id) {
                return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
                    status: 403,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                });
            }
        }

        const availability = await getExperienceAvailability(id);

        return new NextResponse(JSON.stringify(availability ?? null), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch availability' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}

export async function PUT (req, { params }) {
    const session = await getServerSession(authOptions);
    const resolvedParams = await params;

    if (!session || (session.user.role !== 'partner' && session.user.role !== 'admin')) {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }

    try {
        const id = parseInt(resolvedParams.id);
        const data = await req.json();

        // owner check για partner
        if (session.user.role === 'partner') {
            const exp = await prisma.experience.findUnique({
                where: { id },
                select: { businessId: true },
            });
            if (!exp || exp.businessId !== session.user.id) {
                return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
                    status: 403,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                });
            }
        }

        const saved = await upsertExperienceAvailability(id, data);

        return new NextResponse(JSON.stringify(saved), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        const body =
            error?.details?.length
                ? { error: error.message || 'Validation error', details: error.details }
                : { error: error.message || 'Failed to save availability' };
        return new NextResponse(JSON.stringify(body), {
            status: error.status || 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}

export async function DELETE (_req, { params }) {
    const session = await getServerSession(authOptions);
    const resolvedParams = await params;

    if (!session || (session.user.role !== 'partner' && session.user.role !== 'admin')) {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }

    try {
        const id = parseInt(resolvedParams.id);

        if (session.user.role === 'partner') {
            const exp = await prisma.experience.findUnique({
                where: { id },
                select: { businessId: true },
            });
            if (!exp || exp.businessId !== session.user.id) {
                return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
                    status: 403,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                });
            }
        }

        await deleteExperienceAvailability(id);

        return new NextResponse(null, {
            status: 204,
            headers: corsHeaders,
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to delete availability' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}
