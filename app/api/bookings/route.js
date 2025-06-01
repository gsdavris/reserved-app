import { getBookings, createBooking } from '@/lib/handlers/bookingHandlers';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET (req) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const businessId = searchParams.get('businessId');

    try {
        let bookings;

        if (session.user.role === 'admin') {
            bookings = await getBookings();
        } else if (session.user.role === 'partner') {
            bookings = await getBookings(session.user.id);
        } else if (session.user.role === 'customer') {
            bookings = await prisma.booking.findMany({
                where: { userId: session.user.id },
                include: { experience: true },
                orderBy: { createdAt: 'desc' },
            });
        } else {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        return NextResponse.json(bookings);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}

export async function POST (req) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const data = await req.json();
        data.userId = session.user.id;

        const booking = await createBooking(data);
        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}
