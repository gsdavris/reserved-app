export function buildLocationRelation (input, hasExisting = false) {
    if (!input) return { disconnect: true };

    const locData = {
        name: input.name,
        type: input.type,
        coordinates: input.coordinates,
        boundingBox: input.boundingBox,
        country: input.country || null,
        locality: input.locality || null,
        adminArea: input.adminArea || null,
        placeId: input.placeId || null,
    };

    return hasExisting ? { update: locData } : { create: locData };
}
