import prisma from '@/lib/prisma';

export async function getExperiences (businessId) {
    const where = businessId ? { businessId: parseInt(businessId) } : {};

    const experiences = await prisma.experience.findMany({
        where,
        orderBy: { createdAt: 'desc' },
    });

    return experiences;
}

export async function createExperience (data) {
    const experience = await prisma.experience.create({
        data: {
            title: data.title,
            description: data.description,
            location: data.location,
            category: data.category,
            price: parseFloat(data.price),
            businessId: data.businessId ? parseInt(data.businessId) : null,
        },
    });

    return experience;
}