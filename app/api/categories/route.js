import {
    getCategories,
    createCategory,
} from '@/lib/handlers/categoryHandlers';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS () {
    return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export async function GET () {
    try {
        const categories = await getCategories();
        return new NextResponse(JSON.stringify(categories), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(
            JSON.stringify({ error: 'Failed to fetch categories' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
}

export async function POST (req) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'admin') {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }

    try {
        const data = await req.json();
        const category = await createCategory(data);

        return new NextResponse(JSON.stringify(category), {
            status: 201,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to create category' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}
