const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main () {
    // Sample εικόνες
    const images = [
        {
            url: 'https://reserved-app-media.s3.eu-central-1.amazonaws.com/sample-images/Sunset-Boat-Tour.jpg',
            alt: 'Sunset Boat Tour',
        },
        {
            url: 'https://reserved-app-media.s3.eu-central-1.amazonaws.com/sample-images/Snorkeling-Adventure.jpg',
            alt: 'Snorkeling Adventure',
        },
        {
            url: 'https://reserved-app-media.s3.eu-central-1.amazonaws.com/sample-images/Off-Road-Safari.jpg',
            alt: 'Off-Road Safari',
        },
    ];

    // Βρίσκουμε τα experiences
    const experiences = await prisma.experience.findMany();

    if (experiences.length !== images.length) {
        throw new Error('Number of experiences and images do not match!');
    }

    // Για κάθε εμπειρία, δημιουργούμε featured image και gallery images
    for (let i = 0; i < experiences.length; i++) {
        const exp = experiences[i];
        const img = images[i];

        // Δημιουργούμε featured image
        const featuredImage = await prisma.image.create({
            data: {
                url: img.url,
                alt: img.alt,
            },
        });

        // Κάνουμε update το experience με connect
        await prisma.experience.update({
            where: { id: exp.id },
            data: {
                featuredImage: {
                    connect: { id: featuredImage.id },
                },
                images: {
                    connect: [{ id: featuredImage.id }],
                },
            },
        });
    }


    console.log('Images added successfully to experiences!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
