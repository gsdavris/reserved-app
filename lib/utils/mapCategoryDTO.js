export function mapCategoryDTO (cat, { stripNested = true } = {}) {
    if (!cat || typeof cat !== 'object') return cat;

    const images =
        cat.imageGallery?.galleryImages?.map((gi) => ({
            id: gi.image?.id,
            url: gi.image?.url,
        }))?.filter(i => i?.id && i?.url) || [];

    const recommendedTags =
        cat.categoryTags?.map((ct) => ({
            id: ct.tag?.id,
            name: ct.tag?.name,
            slug: ct.tag?.slug,
            color: ct.tag?.color || null,
            icon: ct.tag?.icon || null,
        }))?.filter(t => t?.id && t?.name) || [];

    if (!stripNested) {
        return { ...cat, images, recommendedTags };
    }

    const { imageGallery, categoryTags, ...rest } = cat;
    return { ...rest, images, recommendedTags };
}

export function mapCategoriesDTO (list, opts) {
    if (!Array.isArray(list)) return [];
    return list.map((cat) => mapCategoryDTO(cat, opts));
}