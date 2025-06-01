const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main () {
    // Δημιουργούμε έναν test συνεργάτη
    const partner = await prisma.user.upsert({
        where: { email: 'partner@example.com' },
        update: {},
        create: {
            email: 'partner@example.com',
            name: 'Test Partner',
            role: 'partner',
        },
    });

    // Δημιουργούμε εμπειρίες
    await prisma.experience.createMany({
        data: [
            {
                title: 'Sunset Boat Tour',
                description: 'A beautiful boat tour during sunset.',
                location: 'Santorini',
                category: 'Boat',
                price: 150,
                businessId: partner.id,
            },
            {
                title: 'Snorkeling Adventure',
                description: 'Explore the underwater world.',
                location: 'Crete',
                category: 'Snorkeling',
                price: 80,
                businessId: partner.id,
            },
            {
                title: 'Off-Road Safari',
                description: 'Thrilling 4x4 adventure in the mountains.',
                location: 'Athens',
                category: 'Safari',
                price: 120,
                businessId: partner.id,
            },
        ],
    });
}

main()
    .then(() => {
        console.log('Seed data created successfully!');
        return prisma.$disconnect();
    })
    .catch((error) => {
        console.error('Error creating seed data:', error);
        return prisma.$disconnect();
    });
