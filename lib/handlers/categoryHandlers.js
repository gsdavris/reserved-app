import prisma from '@/lib/prisma';
import { slugify } from '@/lib/utils/slugify';

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
        },
    });

    if (!category) {
        throw new Error('Category not found');
    }

    return category;
}

export async function getCategories ({ includeChildren = true } = {}) {
    const categories = await prisma.category.findMany({
        where: {
            parentId: null,
        },
        include: {
            children: includeChildren,
            featuredImage: true,
        },
        orderBy: { name: 'asc' },
    });

    return categories;
}

export async function getAllCategoriesFlat () {
    return await prisma.category.findMany({
        include: { parent: true, featuredImage: true },
        orderBy: { name: 'asc' },
    });
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


export async function createCategory (data) {
    if (!data.name) {
        throw new Error('Category name is required');
    }

    const newCategory = await prisma.category.create({
        data: {
            name: data.name,
            slug: slugify(data.name),
            description: data.description || null,
            parentId: data.parentId ? Number(data.parentId) : null,
            featuredImage: data.featuredImageId
                ? { connect: { id: Number(data.featuredImageId) } }
                : undefined,
        },
        include: {
            parent: true,
            featuredImage: true,
        },
    });

    return newCategory;
}

export async function updateCategory (id, data) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid category ID');
    }

    const featuredImageUpdate =
        data.featuredImageId === null
            ? { disconnect: true }
            : data.featuredImageId
                ? { connect: { id: Number(data.featuredImageId) } }
                : undefined;

    const updatedCategory = await prisma.category.update({
        where: { id: Number(id) },
        data: {
            name: data.name,
            slug: slugify(data.name),
            description: data.description || null,
            parentId: data.parentId ? Number(data.parentId) : null,
            featuredImage: featuredImageUpdate,
        },
        include: {
            parent: true,
            featuredImage: true,
        },
    });

    return updatedCategory;
}

export async function deleteCategory (id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('Invalid category ID');
    }

    // Προαιρετικά: Έλεγχος αν έχει children ή εμπειρίες
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
