import prisma from '@/lib/prisma';

export async function getBookings (businessId) {
    const where = businessId
        ? { experience: { businessId: parseInt(businessId) } }
        : {};

    const bookings = await prisma.booking.findMany({
        where,
        include: {
            user: true,
            experience: {
                include: {
                    category: true,
                },
            },
        },
        orderBy: { createdAt: 'desc' },
    });

    return bookings;
}

export async function createBooking (data) {
    const booking = await prisma.booking.create({
        data: {
            userId: parseInt(data.userId),
            experienceId: parseInt(data.experienceId),
            date: new Date(data.date),
            status: data.status || 'pending',
        },
    });

    return booking;
}