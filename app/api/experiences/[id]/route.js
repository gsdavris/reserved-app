import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {
    updateExperience,
    deleteExperience,
    getExperienceById,
} from '@/lib/handlers/experienceHandlers';

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

        if (session.user.role === 'partner') {
            const existing = await getExperienceById(id);
            if (!existing || existing.businessId !== session.user.id) {
                return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
                    status: 403,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                });
            }
        }

        const updated = await updateExperience(id, data);

        return new NextResponse(JSON.stringify(updated), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to update experience' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}

export async function DELETE (req, { params }) {
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
            try {
                const existing = await getExperienceById(id);

                if (existing.businessId !== session.user.id) {
                    return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
                        status: 403,
                        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                    });
                }
            } catch (err) {
                console.error('❌ getExperienceById failed:', err.message);
                return new NextResponse(JSON.stringify({ error: 'Not found' }), {
                    status: 404,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                });
            }
        }

        await deleteExperience(id);

        return new NextResponse(null, {
            status: 204,
            headers: corsHeaders,
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to delete experience' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}
