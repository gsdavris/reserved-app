import prisma from '@/lib/prisma';
import { generateUniqueSlug } from '../utils/generateUniqueSlug';
import { buildLocationRelation } from '../utils/location';

/**
 * Επιστρέφει τις εμπειρίες για έναν συνεργάτη (business), μαζί με gallery εικόνων στη σωστή σειρά.
 */
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
            category: {
                include: {
                    parent: true,
                },
            },
            pricing: true,
            location: true,
            imageGallery: {
                include: {
                    galleryImages: {
                        include: { image: true },
                        orderBy: { order: 'asc' },
                    },
                },
            },
        },
    });


    return experiences.map((exp) => {
        const images = exp.imageGallery?.galleryImages?.map((gi) => ({
            id: gi.image.id,
            url: gi.image.url,
        })) || [];
        return { ...exp, images };
    });
}

/**
 * Επιστρέφει μία εμπειρία με όλα τα σχετικά δεδομένα, συμπεριλαμβανομένης της gallery.
 */
export async function getExperienceById (id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    const experience = await prisma.experience.findUnique({
        where: { id: Number(id) },
        include: {
            featuredImage: true,
            category: true,
            pricing: true,
            location: true,
            imageGallery: {
                include: {
                    galleryImages: {
                        include: { image: true },
                        orderBy: { order: 'asc' },
                    },
                },
            },
        },
    });

    if (!experience) {
        throw new Error('Experience not found');
    }


    const images = experience.imageGallery?.galleryImages?.map((gi) => ({
        id: gi.image.id,
        url: gi.image.url,
    })) || [];


    return { ...experience, images };
}

/**
 * Δημιουργεί νέα εμπειρία μαζί με gallery εικόνων. Δημιουργεί τη gallery και τα GalleryImage items
 * με τη σειρά που έρχονται τα imageIds.
 */
export async function createExperience (data) {
    const uniqueSlug = await generateUniqueSlug(data.title);

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
    if (imageIds.length === 1) {
        throw new Error('Gallery must contain at least 2 images.');
    }

    // Δημιουργία εμπειρίας
    const experience = await prisma.experience.create({
        data: {
            title: data.title,
            slug: uniqueSlug,
            description: data.description,
            location: buildLocationRelation(data.location, false),
            pricing: {
                create: {
                    currency: data.pricing?.currency || 'EUR',
                    options: Array.isArray(data.pricing?.options) ? data.pricing.options : [],
                },
            },
            available: data.available ?? true,
            category: { connect: { id: categoryId } },
            business: { connect: { id: businessId } },
            featuredImage: Number.isInteger(featuredImageId)
                ? { connect: { id: featuredImageId } }
                : undefined,
        },
    });

    // Δημιουργία gallery μόνο αν υπάρχουν ≥ 2 εικόνες
    if (imageIds.length >= 2) {
        const gallery = await prisma.imageGallery.create({
            data: { experience: { connect: { id: experience.id } } },
        });
        await prisma.galleryImage.createMany({
            data: imageIds.map((imgId, index) => ({
                imageGalleryId: gallery.id,
                imageId: imgId,
                order: index,
            })),
        });
    }

    // Επιστροφή εμπειρίας με gallery (αν υπάρχει)
    return await prisma.experience.findUnique({
        where: { id: experience.id },
        include: {
            category: true,
            featuredImage: true,
            location: true,
            imageGallery: {
                include: {
                    galleryImages: {
                        include: { image: true },
                        orderBy: { order: 'asc' },
                    },
                },
            },
        },
    });
}

/**
 * Ενημερώνει εμπειρία. Ενημερώνει τα βασικά πεδία, το featuredImage,
 * και συγχρονίζει τη gallery (διαγράφει τα παλιά και δημιουργεί νέα με σωστή σειρά).
 */
export async function updateExperience (id, data) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    const categoryId = Number(data.categoryId);
    if (!Number.isInteger(categoryId)) {
        throw new Error('Invalid category ID');
    }

    const featuredImageUpdate =
        data.featuredImageId === null
            ? { disconnect: true }
            : data.featuredImageId
                ? { connect: { id: Number(data.featuredImageId) } }
                : undefined;

    const imageIds = Array.isArray(data.imageIds)
        ? data.imageIds
            .map((id) => Number(id))
            .filter((id) => Number.isInteger(id) && id > 0)
        : [];

    if (imageIds.length > 10) {
        throw new Error('Maximum 10 gallery images allowed.');
    }
    if (imageIds.length === 1) {
        throw new Error('Gallery must contain at least 2 images.');
    }

    // Βρίσκουμε αν υπάρχει ήδη locationId
    const existing = await prisma.experience.findUnique({
        where: { id: Number(id) },
        select: { locationId: true },
    });

    // ενημέρωση πεδίων εμπειρίας
    const experience = await prisma.experience.update({
        where: { id: Number(id) },
        data: {
            title: data.title,
            description: data.description,
            location: buildLocationRelation(data.location, Boolean(existing?.locationId)),
            pricing: {
                upsert: {
                    create: {
                        currency: data.pricing?.currency || 'EUR',
                        options: Array.isArray(data.pricing?.options) ? data.pricing.options : [],
                    },
                    update: {
                        currency: data.pricing?.currency || 'EUR',
                        options: Array.isArray(data.pricing?.options) ? data.pricing.options : [],
                    },
                },
            },
            category: { connect: { id: categoryId } },
            featuredImage: featuredImageUpdate,
        },
    });

    // βρίσκουμε την υπάρχουσα gallery
    let gallery = await prisma.imageGallery.findFirst({
        where: { experienceId: experience.id },
    });

    if (imageIds.length === 0) {
        // δεν θέλουμε gallery: διαγράφουμε την υπάρχουσα αν υπάρχει
        if (gallery) {
            await prisma.galleryImage.deleteMany({
                where: { imageGalleryId: gallery.id },
            });
            await prisma.imageGallery.delete({
                where: { id: gallery.id },
            });
        }
    } else {
        // έχουμε ≥2 εικόνες: δημιουργούμε ή ενημερώνουμε την gallery
        if (!gallery) {
            gallery = await prisma.imageGallery.create({
                data: { experience: { connect: { id: experience.id } } },
            });
        } else {
            await prisma.galleryImage.deleteMany({
                where: { imageGalleryId: gallery.id },
            });
        }
        await prisma.galleryImage.createMany({
            data: imageIds.map((imgId, index) => ({
                imageGalleryId: gallery.id,
                imageId: imgId,
                order: index,
            })),
        });
    }

    // επιστρέφουμε ενημερωμένη εμπειρία με gallery (αν υπάρχει)
    return await prisma.experience.findUnique({
        where: { id: experience.id },
        include: {
            category: true,
            featuredImage: true,
            location: true,
            imageGallery: {
                include: {
                    galleryImages: {
                        include: { image: true },
                        orderBy: { order: 'asc' },
                    },
                },
            },
        },
    });
}

/**
 * Διαγράφει εμπειρία.
 */
export async function deleteExperience (id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    await prisma.experience.delete({
        where: { id: Number(id) },
    });

    return { success: true };
}
