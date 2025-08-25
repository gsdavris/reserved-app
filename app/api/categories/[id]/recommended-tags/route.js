import { NextResponse } from 'next/server';
import { getRecommendedTagsForCategory } from '@/lib/handlers/tagHandlers';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS () {
    return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export async function GET (_, { params }) {
    const resolvedParams = await params;
    const id = Number(resolvedParams.id);
    if (!id || isNaN(id)) {
        return NextResponse.json({ error: 'Invalid category id' }, { status: 400 });
    }
    const tags = await getRecommendedTagsForCategory(id);
    return NextResponse.json(tags.map(t => ({ id: t.id, name: t.name })));
}