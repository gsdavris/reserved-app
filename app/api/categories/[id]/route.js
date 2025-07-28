import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {
    updateCategory,
    deleteCategory,
    getCategoryById,
} from '@/lib/handlers/categoryHandlers';

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

// ✅ GET /api/categories/:id
export async function GET (_, { params }) {
    try {
        const id = parseInt(params.id);
        if (isNaN(id)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        const category = await getCategoryById(id);

        return NextResponse.json(category, {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch category' },
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
}

// ✅ PUT /api/categories/:id
export async function PUT (req, { params }) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }

    try {
        const id = parseInt(params.id);
        if (isNaN(id)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        const data = await req.json();
        const updated = await updateCategory(id, data);

        return NextResponse.json(updated, {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to update category' }, {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}

// ✅ DELETE /api/categories/:id
export async function DELETE (_, { params }) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }

    try {
        const id = parseInt(params.id);
        if (isNaN(id)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        await deleteCategory(id);

        return new NextResponse(null, {
            status: 204,
            headers: corsHeaders,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message || 'Failed to delete category' }, {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}
