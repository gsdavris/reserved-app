import prisma from '@/lib/prisma';

export async function getExperiences (businessId) {
    const where = {};

    if (businessId && !isNaN(Number(businessId))) {
        where.businessId = Number(businessId);
    }

    const experiences = await prisma.experience.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        include: {
            featuredImage: true,
            images: true,
        },
    });

    return experiences;
}

export async function getExperienceById (id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    const experience = await prisma.experience.findUnique({
        where: { id: Number(id) },
        include: {
            featuredImage: true,
            images: true,
        },
    });

    if (!experience) {
        throw new Error('Experience not found');
    }

    return experience;
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

export async function updateExperience (id, data) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    const experience = await prisma.experience.update({
        where: { id: Number(id) },
        data: {
            title: data.title,
            description: data.description,
            location: data.location,
            category: data.category,
            price: parseFloat(data.price),
        },
    });

    return experience;
}

export async function deleteExperience (id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    await prisma.experience.delete({
        where: { id: Number(id) },
    });

    return { success: true };
}
