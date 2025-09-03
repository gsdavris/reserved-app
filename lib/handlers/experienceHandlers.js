import prisma from '@/lib/prisma';
import { generateUniqueSlug } from '../utils/generateUniqueSlug';
import { buildLocationRelation } from '../utils/location';
import { mapExperienceDTO, mapExperiencesDTO } from '../utils/mapExperienceDTO';
import { setExperienceTags } from '@/lib/handlers/tagHandlers';

function resolveIsPublished (input) {
    const raw = input?.isPublished;
    if (typeof raw === 'boolean') return raw;
    if (typeof raw === 'string') {
        const v = raw.trim().toLowerCase();
        if (v === 'true' || v === '1' || v === 'yes') return true;
        if (v === 'false' || v === '0' || v === 'no') return false;
    }
    if (typeof raw === 'number') return raw !== 0;
    return true; // default
}

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
            addons: true,
            location: true,
            imageGallery: {
                include: {
                    galleryImages: {
                        include: { image: true },
                        orderBy: { order: 'asc' },
                    },
                },
            },
            experienceTags: { include: { tag: true } },
        },
    });


    return mapExperiencesDTO(experiences);
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
            addons: true,
            location: true,
            imageGallery: {
                include: {
                    galleryImages: {
                        include: { image: true },
                        orderBy: { order: 'asc' },
                    }
                },
            },
            experienceTags: { include: { tag: true } },
        },
    });

    if (!experience) {
        throw new Error('Experience not found');
    }


    return mapExperienceDTO(experience);
}

/**
 * Δημιουργεί νέα εμπειρία μαζί με gallery εικόνων. Δημιουργεί τη gallery και τα GalleryImage items
 * με τη σειρά που έρχονται τα imageIds.
 */
export async function createExperience (data) {
    const uniqueSlug = await generateUniqueSlug(data.title);
    const addonOptions = Array.isArray(data.addons?.options) ? data.addons.options : [];

    const isPublished = resolveIsPublished(data);

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
            isPublished,
            pricing: {
                create: {
                    currency: data.pricing?.currency || 'EUR',
                    options: Array.isArray(data.pricing?.options) ? data.pricing.options : [],
                },
            },
            ...(addonOptions.length
                ? { addons: { create: { options: addonOptions } } }
                : {}),
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

    // Aποθήκευση tags (αν ήρθαν)
    if (Array.isArray(data.tagIds)) {
        await setExperienceTags(experience.id, data.tagIds);
    }

    // Επιστροφή εμπειρίας με gallery (αν υπάρχει)
    const full = await prisma.experience.findUnique({
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
            addons: true,
            experienceTags: { include: { tag: true } },
        },
    });

    return mapExperienceDTO(full);
}

/**
 * Ενημερώνει εμπειρία. Ενημερώνει τα βασικά πεδία, το featuredImage,
 * και συγχρονίζει τη gallery (διαγράφει τα παλιά και δημιουργεί νέα με σωστή σειρά).
 */
export async function updateExperience (id, data) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    const addonOptions = Array.isArray(data.addons?.options) ? data.addons.options : [];
    const isPublishedPatch = data.hasOwnProperty('isPublished')
        ? resolveIsPublished(data)
        : undefined;

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
            ...(isPublishedPatch !== undefined ? {
                isPublished: isPublishedPatch,
            } : {}),
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
            ...(addonOptions
                ? {
                    addons: {
                        upsert: {
                            create: { options: addonOptions },
                            update: { options: addonOptions },
                        },
                    },
                }
                : {}),
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

    // Aντικατάσταση tags (αν ήρθαν)
    if (Array.isArray(data.tagIds)) {
        await setExperienceTags(experience.id, data.tagIds);
    }

    // επιστρέφουμε ενημερωμένη εμπειρία με gallery (αν υπάρχει)
    const full = await prisma.experience.findUnique({
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
            addons: true,
            experienceTags: { include: { tag: true } },
        },
    });

    return mapExperienceDTO(full);
}

/**
 * Διαγράφει εμπειρία.
 */
export async function deleteExperience (id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid experience ID');
    }

    await prisma.experienceAddons.deleteMany({
        where: { experienceId: Number(id) },
    });

    await prisma.experiencePricing.deleteMany({
        where: { experienceId: Number(id) },
    });

    await prisma.experience.delete({
        where: { id: Number(id) },
    });

    return { success: true };
}
