import prisma from '@/lib/prisma';
import { generateUniqueSlug } from '@/lib/utils/generateUniqueSlug';


export async function getTagGroups () {
    return prisma.tagGroup.findMany({
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
        include: { tags: { orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }] } },
    });
}

export async function createOrUpdateTagGroup (input) {
    const { id, name, slug: slugInput, description, sortOrder = 0 } = input;
    const slug = slugInput || await generateUniqueSlug(name, 'tagGroup');

    if (id) {
        return prisma.tagGroup.update({
            where: { id: Number(id) },
            data: { name, slug, description, sortOrder },
        });
    }

    return prisma.tagGroup.create({
        data: { name, slug, description, sortOrder },
    });
}

export async function deleteTagGroup (id) {
    return prisma.tagGroup.delete({ where: { id: Number(id) } });
}

export async function getTags ({ groupId, groupSlug, q, onlyFilterable = false } = {}) {
    const where = {};
    if (groupId) where.groupId = Number(groupId);
    if (groupSlug) where.group = { slug: groupSlug };
    if (q) where.name = { contains: q, mode: 'insensitive' };
    if (onlyFilterable) where.isFilterable = true;

    return prisma.tag.findMany({
        where,
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
        include: { group: true },
    });
}

export async function createOrUpdateTag (input) {
    const {
        id,
        name,
        slug: slugInput,
        description,
        color,
        icon,
        isFilterable = true,
        groupId = null,
        sortOrder = 0,
    } = input;

    const slug = slugInput || await generateUniqueSlug(name, 'tag');

    if (id) {
        return prisma.tag.update({
            where: { id: Number(id) },
            data: {
                name, slug, description, color, icon,
                isFilterable, sortOrder,
                group: groupId ? { connect: { id: Number(groupId) } } : { disconnect: true },
            },
        });
    }

    return prisma.tag.create({
        data: {
            name, slug, description, color, icon,
            isFilterable, sortOrder,
            group: groupId ? { connect: { id: Number(groupId) } } : undefined,
        },
    });
}

export async function deleteTag (id) {

    return prisma.tag.delete({ where: { id: Number(id) } });
}


export async function setCategoryRecommendedTags (categoryId, tagIds = []) {
    const cid = Number(categoryId);
    const ids = (Array.isArray(tagIds) ? tagIds : [])
        .map(Number)
        .filter((x) => Number.isInteger(x) && x > 0);

    return prisma.$transaction(async (tx) => {
        await tx.categoryTag.deleteMany({ where: { categoryId: cid } });
        if (!ids.length) return [];
        await tx.categoryTag.createMany({
            data: ids.map((tid) => ({ categoryId: cid, tagId: tid })),
            skipDuplicates: true,
        });
        return tx.tag.findMany({ where: { id: { in: ids } } });
    });
}

export async function getRecommendedTagsForCategory (categoryId) {
    const cid = Number(categoryId);
    const rec = await prisma.categoryTag.findMany({
        where: { categoryId: cid },
        include: { tag: true },
        orderBy: [{ tag: { sortOrder: 'asc' } }, { tag: { name: 'asc' } }],
    });
    return rec.map((r) => r.tag);
}


export async function setExperienceTags (experienceId, tagIds = []) {
    const eid = Number(experienceId);
    const ids = (Array.isArray(tagIds) ? tagIds : [])
        .map(Number)
        .filter((x) => Number.isInteger(x) && x > 0);

    return prisma.$transaction(async (tx) => {
        await tx.experienceTag.deleteMany({ where: { experienceId: eid } });
        if (!ids.length) return [];
        await tx.experienceTag.createMany({
            data: ids.map((tid) => ({ experienceId: eid, tagId: tid })),
            skipDuplicates: true,
        });
        return tx.tag.findMany({ where: { id: { in: ids } } });
    });
}


export function applyTagFilterToWhere (where = {}, tagIds = [], match = 'OR') {
    const ids = (Array.isArray(tagIds) ? tagIds : []).map(Number).filter((x) => x > 0);
    if (!ids.length) return where;


    if (match === 'AND') {

        where.experienceTags = {
            every: { tagId: { in: ids } },
        };
    } else {

        where.experienceTags = {
            some: { tagId: { in: ids } },
        };
    }
    return where;
}
