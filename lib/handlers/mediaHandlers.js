import prisma from '@/lib/prisma';
import { uploadToS3, deleteFromS3 } from '@/lib/s3';
import { startOfMonth, endOfMonth } from 'date-fns';
import dayjs from 'dayjs';

export async function getImages ({
    uploadedById,
    limit = 20,
    cursor,
    search,
    month,
    sortBy = 'createdAt',
    order = 'desc',
}) {
    const where = {
        ...(uploadedById ? { uploadedById } : {}),
        ...(search
            ? {
                OR: [
                    { alt: { contains: search, mode: 'insensitive' } },
                    { caption: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {}),
        ...(month
            ? {
                createdAt: {
                    gte: startOfMonth(new Date(month)),
                    lte: endOfMonth(new Date(month)),
                },
            }
            : {}),
    };

    const orderBy = [
        { [sortBy]: order },
        { id: order },
    ];

    const images = await prisma.image.findMany({
        where,
        orderBy,
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
    });

    const totalCount = await prisma.image.count({ where });

    let nextCursor = null;
    if (images.length > limit) {
        nextCursor = images.pop().id;
    }

    return { images, nextCursor, totalCount };
}

export async function getAvailableMediaMonths (userId) {
    const images = await prisma.image.findMany({
        where: userId ? { uploadedById: userId } : {},
        select: { createdAt: true },
        orderBy: { createdAt: 'desc' },
    });

    const monthSet = new Set(
        images.map((img) => dayjs(img.createdAt).format('YYYY-MM'))
    );

    return Array.from(monthSet);
}

export async function uploadImage ({ file, alt = '', caption = '', userId }) {
    const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

    if (!file || typeof file === 'string') {
        throw new Error('Missing or invalid file');
    }

    if (file.size > MAX_SIZE_BYTES) {
        throw new Error('Το αρχείο ξεπερνά το μέγιστο επιτρεπτό μέγεθος των 5MB.');
    }

    const { url, key, width, height } = await uploadToS3(file);

    const image = await prisma.image.create({
        data: {
            url,
            width: width || null,
            height: height || null,
            fileName: file.name || null,
            mimeType: file.type || null,
            fileSizeKb: Math.ceil(file.size / 1024),
            alt,
            caption,
            uploadedBy: {
                connect: { id: userId },
            },
        },
    });

    return image;
}

export async function updateImageMeta ({ id, alt, caption, userId }) {
    return await prisma.image.update({
        where: {
            id,
            uploadedById: userId,
        },
        data: {
            alt: alt || '',
            caption: caption || '',
        },
    });
}

export async function deleteImage ({ id, userId }) {
    const image = await prisma.image.findUnique({
        where: { id },
        include: {
            experience: true, // Gallery image
            featuredInExperiences: true, // Featured in Experience
            featuredInCategories: true, // Featured in Category
        },
    });

    if (!image || image.uploadedById !== userId) {
        throw new Error('Not found or forbidden');
    }

    if (
        image.experience || // Gallery
        image.featuredInExperiences.length > 0 || // Featured Experience
        image.featuredInCategories.length > 0 // Featured Category
    ) {
        throw new Error('Image is in use and cannot be deleted');
    }

    await deleteFromS3(image.url);
    await prisma.image.delete({ where: { id } });

    return { success: true };
}

export async function countImagesByUser (userId) {
    if (!userId) throw new Error('Missing userId');

    const images = await prisma.image.count({
        where: { uploadedById: userId },
    });
    return images;
}
