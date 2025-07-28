import prisma from '@/lib/prisma';
import { generateUniqueSlug } from '../utils/generateUniqueSlug';


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
            category: true,
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
            category: true,
        },
    });

    if (!experience) {
        throw new Error('Experience not found');
    }

    return experience;
}

export async function createExperience (data) {
    const uniqueSlug = await generateUniqueSlug(data.title);

    // ✅ Safety: Ensure all ID inputs are valid integers
    const categoryId = Number(data.categoryId);
    const businessId = Number(data.businessId);
    const featuredImageId = Number(data.featuredImageId);
    const imageIds = Array.isArray(data.imageIds)
        ? data.imageIds
            .map((id) => Number(id))
            .filter((id) => Number.isInteger(id) && id > 0)
        : [];

    if (!Number.isInteger(categoryId) || !Number.isInteger(businessId)) {
        throw new Error('Invalid categoryId or businessId');
    }

    

    if (imageIds.length > 10) {
        throw new Error('Maximum 10 gallery images allowed.');
    }

    const experience = await prisma.experience.create({
        data: {
            title: data.title,
            slug: uniqueSlug,
            description: data.description,
            location: data.location,
            price: parseFloat(data.price),
            available: data.available ?? true,
            category: {
                connect: { id: categoryId },
            },
            business: {
                connect: { id: businessId },
            },
            featuredImage: Number.isInteger(featuredImageId)
                ? { connect: { id: featuredImageId } }
                : undefined,
            images: imageIds.length > 0
                ? { connect: imageIds.map((id) => ({ id })) }
                : undefined,
        },
        include: {
            category: true,
            featuredImage: true,
            images: true,
        },
    });

    return experience;
}

export async function updateExperience (id, data) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    const featuredImageUpdate =
        data.featuredImageId === null
            ? { disconnect: true }
            : data.featuredImageId
                ? { connect: { id: data.featuredImageId } }
                : undefined;

    const experience = await prisma.experience.update({
        where: { id: Number(id) },
        data: {
            title: data.title,
            description: data.description,
            location: data.location,
            price: parseFloat(data.price),
            category: {
                connect: { id: parseInt(data.categoryId) },
            },
            featuredImage: featuredImageUpdate,
        },
        include: {
            featuredImage: true,
            category: true,
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
