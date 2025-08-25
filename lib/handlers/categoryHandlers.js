import prisma from '@/lib/prisma';
import { slugify } from '@/lib/utils/slugify';
import { mapCategoryDTO, mapCategoriesDTO } from '@/lib/utils/mapCategoryDTO';
import { setCategoryRecommendedTags } from '@/lib/handlers/tagHandlers';
import { generateUniqueSlug } from '../utils/generateUniqueSlug';

/**
 * Επιστρέφει μία κατηγορία με parent, children, featured image και gallery εικόνων.
 */
export async function getCategoryById (id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid category ID');
    }

    const category = await prisma.category.findUnique({
        where: { id: Number(id) },
        include: {
            parent: true,
            children: true,
            featuredImage: true,
            imageGallery: {
                include: {
                    galleryImages: {
                        include: { image: true },
                        orderBy: { order: 'asc' },
                    },
                },
            },
            categoryTags: { include: { tag: true } },
        },
    });

    if (!category) {
        throw new Error('Category not found');
    }

    return mapCategoryDTO(category);
}

/**
 * Επιστρέφει όλες τις κύριες κατηγορίες. Προαιρετικά συμπεριλαμβάνει τα παιδιά.
 * Δεν συμπεριλαμβάνει gallery για λόγους απόδοσης 
 */
export async function getCategories ({ includeChildren = true, includeRecommendedTags = false } = {}) {
    const categories = await prisma.category.findMany({
        where: { parentId: null },
        include: {
            children: includeChildren,
            featuredImage: true,
            ...(includeRecommendedTags && { categoryTags: { include: { tag: true } } }),
        },
        orderBy: { name: 'asc' },
    });

    return includeRecommendedTags ? mapCategoriesDTO(categories) : categories;
}

export async function getAllCategoriesFlat ({ includeRecommendedTags = false } = {}) {
    const cats = await prisma.category.findMany({
        include: {
            parent: true,
            featuredImage: true,
            ...(includeRecommendedTags && { categoryTags: { include: { tag: true } } }),
        },
        orderBy: { name: 'asc' },
    });

    return includeRecommendedTags ? mapCategoriesDTO(cats) : cats;
}

export async function getCategoryOptions () {
    const categories = await prisma.category.findMany({
        where: { parentId: null },
        include: { children: true },
        orderBy: { name: 'asc' },
    });

    return categories.map((cat) => ({
        label: cat.name,
        value: cat.id,
        children: cat.children.map((child) => ({
            label: child.name,
            value: child.id,
        })),
    }));
}

/**
 * Δημιουργία κατηγορίας.  Υποστηρίζει featured image και gallery εικόνων.
 * Αναμένει ότι στο data.imageIds δίνεται η σειρά των ids της gallery (μέχρι 10).
 */
export async function createCategory (data) {
    if (!data.name) {
        throw new Error('Category name is required');
    }

    const parentId = data.parentId ? Number(data.parentId) : null;
    const featuredImageId = data.featuredImageId ? Number(data.featuredImageId) : undefined;
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


    const uniqueSlug = await generateUniqueSlug(data.name, 'category');

    // 1. Δημιουργία κατηγορίας
    const category = await prisma.category.create({
        data: {
            name: data.name,
            slug: uniqueSlug,
            description: data.description || null,
            parentId,
            featuredImage: featuredImageId
                ? { connect: { id: featuredImageId } }
                : undefined,
        },
    });

    // 2. Δημιουργία gallery μόνο αν έχουμε ≥2 εικόνες
    if (imageIds.length >= 2) {
        const gallery = await prisma.imageGallery.create({
            data: { category: { connect: { id: category.id } } },
        });
        await prisma.galleryImage.createMany({
            data: imageIds.map((imgId, index) => ({
                imageGalleryId: gallery.id,
                imageId: imgId,
                order: index,
            })),
        });
    }

    if (Array.isArray(data.recommendedTagIds)) {
        await setCategoryRecommendedTags(category.id, data.recommendedTagIds);
    }


    // 3. Επιστροφή κατηγορίας με parent, featured image και gallery
    const full = await prisma.category.findUnique({
        where: { id: category.id },
        include: {
            parent: true,
            featuredImage: true,
            imageGallery: {
                include: {
                    galleryImages: {
                        include: { image: true },
                        orderBy: { order: 'asc' },
                    },
                },
            },
            categoryTags: { include: { tag: true } },
        },
    });

    return mapCategoryDTO(full);
}

/**
 * Ενημέρωση κατηγορίας (όνομα, slug, description, parentId, featured image, gallery εικόνες).
 * Θα βρει ή θα δημιουργήσει gallery, θα διαγράψει τα παλιά gallery items και θα δημιουργήσει τα νέα.
 */
export async function updateCategory (id, data) {
    if (!id || isNaN(Number(id))) throw new Error('Invalid category ID');

    const parentId = data.parentId ? Number(data.parentId) : null;

    const featuredImageUpdate =
        data.featuredImageId === null
            ? { disconnect: true }
            : data.featuredImageId
                ? { connect: { id: Number(data.featuredImageId) } }
                : undefined;

    const imageIds = Array.isArray(data.imageIds)
        ? data.imageIds.map(Number).filter((i) => Number.isInteger(i) && i > 0)
        : [];

    if (imageIds.length > 10) throw new Error('Maximum 10 gallery images allowed.');
    if (imageIds.length === 1) throw new Error('Gallery must contain at least 2 images.');

    // Βασικά πεδία (χωρίς slug)
    const updateData = {
        name: data.name,
        description: data.description || null,
        parentId,
        featuredImage: featuredImageUpdate,
    };

    // NEW: αλλαγή slug μόνο αν ζητηθεί ρητά
    if (typeof data.slug === 'string' && data.slug.trim()) {
        updateData.slug = await generateUniqueSlug(data.slug.trim(), 'category');
    } else if (data.regenerateSlug === true && data.name) {
        updateData.slug = await generateUniqueSlug(data.name, 'category');
    }

    // 1) Ενημέρωση κατηγορίας
    const category = await prisma.category.update({
        where: { id: Number(id) },
        data: updateData,
    });

    // 2) Gallery update
    let gallery = await prisma.imageGallery.findFirst({ where: { categoryId: category.id } });

    if (imageIds.length === 0) {
        if (gallery) {
            await prisma.galleryImage.deleteMany({ where: { imageGalleryId: gallery.id } });
            await prisma.imageGallery.delete({ where: { id: gallery.id } });
        }
    } else {
        if (!gallery) {
            gallery = await prisma.imageGallery.create({
                data: { category: { connect: { id: category.id } } },
            });
        } else {
            await prisma.galleryImage.deleteMany({ where: { imageGalleryId: gallery.id } });
        }
        await prisma.galleryImage.createMany({
            data: imageIds.map((imgId, index) => ({
                imageGalleryId: gallery.id,
                imageId: imgId,
                order: index,
            })),
        });
    }

    // 3) recommendedTagIds (optional)
    if (Array.isArray(data.recommendedTagIds)) {
        await setCategoryRecommendedTags(category.id, data.recommendedTagIds);
    }

    // 4) Επιστροφή
    const full = await prisma.category.findUnique({
        where: { id: category.id },
        include: {
            parent: true,
            featuredImage: true,
            imageGallery: {
                include: {
                    galleryImages: { include: { image: true }, orderBy: { order: 'asc' } },
                },
            },
            categoryTags: { include: { tag: true } },
        },
    });

    return mapCategoryDTO(full);
}

/**
 * Διαγραφή κατηγορίας. Διατηρεί τους ελέγχους για υποκατηγορίες/εμπειρίες.
 * Αν χρειαστεί, μπορείς να προσθέσεις διαγραφή της imageGallery (θα διαγραφεί μέσω cascade αν έχει δηλωθεί).
 */
export async function deleteCategory (id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid category ID');
    }

    const category = await prisma.category.findUnique({
        where: { id: Number(id) },
        include: {
            children: true,
            experiences: true,
        },
    });

    if (!category) throw new Error('Category not found');

    if (category.children.length > 0) {
        throw new Error('Cannot delete category with subcategories');
    }
    if (category.experiences.length > 0) {
        throw new Error('Cannot delete category that is in use');
    }

    await prisma.category.delete({
        where: { id: Number(id) },
    });

    return { success: true };
}
