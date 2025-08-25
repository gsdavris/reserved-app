export function mapExperienceDTO (exp, { stripNested = true } = {}) {
    if (!exp || typeof exp !== 'object') return exp;

    const images =
        exp.imageGallery?.galleryImages?.map((gi) => ({
            id: gi.image?.id,
            url: gi.image?.url,
        }))?.filter((i) => i?.id && i?.url) || [];

    const tags =
        exp.experienceTags?.map((et) => ({
            id: et.tag?.id,
            name: et.tag?.name,
            slug: et.tag?.slug,
            color: et.tag?.color || null,
            icon: et.tag?.icon || null,
        }))?.filter((t) => t?.id && t?.name) || [];

    const addons = Array.isArray(exp.addons?.options) ? exp.addons.options : [];

    if (!stripNested) {
        // επέστρεψε και τα nested όπως είναι + flat arrays
        return { ...exp, images, tags, addons };
    }

    // αφαίρεσε nested relations που δεν χρειάζονται στο response
    const { imageGallery, experienceTags, addons: addonsRelation, ...rest } = exp;
    return { ...rest, images, tags, addons };
}

/**
 * Batch helper για λίστα.
 */
export function mapExperiencesDTO (list, opts) {
    if (!Array.isArray(list)) return [];
    return list.map((exp) => mapExperienceDTO(exp, opts));
}