import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { updateImageMeta, deleteImage } from '@/lib/handlers/mediaHandlers';

export const runtime = 'nodejs';

// ✅ PATCH /api/media/:id → update alt / caption
export async function PATCH (req, { params }) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const { alt, caption } = await req.json();

    try {
        const updated = await updateImageMeta({
            id,
            alt,
            caption,
            userId: session.user.id,
        });
        return NextResponse.json(updated);
    } catch (err) {
        console.error('❌ Failed to update image:', err);
        return NextResponse.json({ error: 'Failed to update image' }, { status: 500 });
    }
}

// ✅ DELETE /api/media/:id → delete if not used
export async function DELETE (_, { params }) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    try {
        const result = await deleteImage({ id, userId: session.user.id });
        return NextResponse.json(result);
    } catch (err) {
        console.error('❌ Failed to delete image:', err);
        return NextResponse.json({ error: err.message || 'Failed to delete image' }, { status: 500 });
    }
}
