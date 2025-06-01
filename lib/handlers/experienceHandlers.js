import prisma from '@/lib/prisma';

export async function getExperiences (businessId) {
    const query = {
        orderBy: { createdAt: 'desc' },
    };

    if (businessId && !isNaN(Number(businessId))) {
        query.where = { businessId: Number(businessId) };
    }

    const experiences = await prisma.experience.findMany(query);

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