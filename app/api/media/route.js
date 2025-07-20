import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { getImages, uploadImage } from '@/lib/handlers/mediaHandlers';

export const runtime = 'nodejs';

// ✅ GET /api/media?limit=20&cursor=...&search=...&month=YYYY-MM
export async function GET (req) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json([], { status: 401 });

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const cursor = searchParams.get('cursor');
    const search = searchParams.get('search') || '';
    const month = searchParams.get('month') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    try {
        const { images, nextCursor, totalCount } = await getImages({
            uploadedById: session.user.id,
            limit,
            cursor,
            search,
            month,
            sortBy,
            order,
        });

        return NextResponse.json({ images, nextCursor, totalCount });
    } catch (err) {
        console.error('⛔ GET error:', err);
        return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
    }
}

// ✅ POST /api/media
export async function POST (req) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file');
    const alt = formData.get('alt') || '';
    const caption = formData.get('caption') || '';

    try {
        const image = await uploadImage({
            file,
            alt,
            caption,
            userId: session.user.id,
        });

        return NextResponse.json(
            {
                imageId: image.id,
                imageUrl: image.url,
                ...image,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('⛔ Upload error:', error);
        return NextResponse.json({ error: error.message || 'Image upload failed' }, { status: 500 });
    }
}
