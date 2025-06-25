import { getExperiences, createExperience } from '@/lib/handlers/experienceHandlers';
import { getAccessibleBusinessId } from '@/lib/utils/getAccessibleBusinessId';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET (req) {
    try {
        const businessId = await getAccessibleBusinessId(req);
        const experiences = await getExperiences(businessId) || [];


        return new NextResponse(JSON.stringify(experiences), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);

        const status = error.message === 'Missing businessId' ? 400 : 500;
        return new NextResponse(
            JSON.stringify({ error: error.message }),
            { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
}

export async function OPTIONS () {
    return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export async function POST (req) {
    const session = await getServerSession(authOptions);

    if (!session || (session.user.role !== 'partner' && session.user.role !== 'admin')) {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const data = await req.json();

        if (session.user.role === 'partner') {
            data.businessId = session.user.id;
        }

        const experience = await createExperience(data);
        return new NextResponse(JSON.stringify(experience), {
            status: 201,
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to create experience' }), {
            status: 500,
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/json',
            },
        });
    }
}
