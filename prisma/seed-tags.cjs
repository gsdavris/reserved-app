const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const groups = [
    { name: 'Features', slug: 'features', sortOrder: 1 },
    { name: 'Audience', slug: 'audience', sortOrder: 2 },
    { name: 'Amenities', slug: 'amenities', sortOrder: 3 },
    { name: 'Activity Level', slug: 'activity-level', sortOrder: 4 },
];

const tags = [
    // Features
    { name: 'Kid friendly', slug: 'kid-friendly', color: '#10B981', groupSlug: 'features' },
    { name: 'Pet friendly', slug: 'pet-friendly', color: '#A78BFA', groupSlug: 'features' },
    { name: 'Beginner-friendly', slug: 'beginner-friendly', color: '#60A5FA', groupSlug: 'features' },

    // Audience
    { name: 'Couples', slug: 'couples', color: '#F472B6', groupSlug: 'audience' },
    { name: 'Families', slug: 'families', color: '#FB923C', groupSlug: 'audience' },
    { name: 'Small groups', slug: 'small-groups', color: '#34D399', groupSlug: 'audience' },

    // Amenities
    { name: 'Snorkeling gear', slug: 'snorkeling-gear', color: '#06B6D4', groupSlug: 'amenities' },
    { name: 'Cooler with drinks', slug: 'cooler-drinks', color: '#22C55E', groupSlug: 'amenities' },
    { name: 'Shade canopy', slug: 'shade-canopy', color: '#EAB308', groupSlug: 'amenities' },

    // Activity Level
    { name: 'Relaxed', slug: 'relaxed', color: '#93C5FD', groupSlug: 'activity-level' },
    { name: 'Moderate', slug: 'moderate', color: '#F59E0B', groupSlug: 'activity-level' },
    { name: 'Adventurous', slug: 'adventurous', color: '#EF4444', groupSlug: 'activity-level' },
];

// Κατηγορίες και τα προτεινόμενα tags για κάθε κατηγορία
// Αν δεν υπάρχει ειδικός κανόνας, θα χρησιμοποιηθούν τα defaultRecommended
const categoryToRecommended = {
    'boat-trips': ['kid-friendly', 'snorkeling-gear', 'relaxed'],
    'off-road': ['moderate', 'adventurous', 'small-groups'],
    'boat-rental': ['couples', 'relaxed', 'shade-canopy'],
};

// Προτεινόμενα tags για τις κατηγορίες που δεν έχουν ειδικό κανόνα
const defaultRecommended = [
    'kid-friendly', 'families', 'couples', 'snorkeling-gear', 'relaxed', 'features'
];

async function upsertGroups () {
    const map = new Map();
    for (const g of groups) {
        const rec = await prisma.tagGroup.upsert({
            where: { slug: g.slug },
            update: { name: g.name, sortOrder: g.sortOrder },
            create: { ...g },
        });
        map.set(g.slug, rec.id);
    }
    return map;
}

async function upsertTags (groupSlugToId) {
    const map = new Map();
    for (const t of tags) {
        const groupId = groupSlugToId.get(t.groupSlug) ?? null;
        const rec = await prisma.tag.upsert({
            where: { slug: t.slug },
            update: {
                name: t.name,
                color: t.color,
                isFilterable: true,
                groupId,
                sortOrder: 0,
            },
            create: {
                name: t.name,
                slug: t.slug,
                color: t.color,
                isFilterable: true,
                groupId,
                sortOrder: 0,
            },
        });
        map.set(t.slug, rec.id);
    }
    return map;
}

async function seedRecommended (categorySlugToTagSlugs, tagSlugToId) {
    const cats = await prisma.category.findMany({ select: { id: true, slug: true } });

    for (const cat of cats) {
        const wantedSlugs =
            categorySlugToTagSlugs[cat.slug] && categorySlugToTagSlugs[cat.slug].length
                ? categorySlugToTagSlugs[cat.slug]
                : defaultRecommended;

        const tagIds = wantedSlugs
            .map((s) => tagSlugToId.get(s))
            .filter(Boolean);

        // καθάρισε παλιά και γράψε καινούργια
        await prisma.categoryTag.deleteMany({ where: { categoryId: cat.id } });
        if (tagIds.length) {
            await prisma.categoryTag.createMany({
                data: tagIds.map((tid) => ({ categoryId: cat.id, tagId: tid })),
                skipDuplicates: true,
            });
        }
        console.log(`✅ Category ${cat.slug} -> recommended tags: ${wantedSlugs.join(', ')}`);
    }
}

async function main () {
    console.log('⏳ Seeding TagGroups...');
    const groupSlugToId = await upsertGroups();

    console.log('⏳ Seeding Tags...');
    const tagSlugToId = await upsertTags(groupSlugToId);

    console.log('⏳ Seeding Category recommended tags...');
    await seedRecommended(categoryToRecommended, tagSlugToId);

    console.log('🎉 Done.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
