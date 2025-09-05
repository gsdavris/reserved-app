export function buildAvailabilityData (input = {}) {
    return {
        type: input.type,
        rules: Array.isArray(input.rules) ? input.rules : [],
        openHours: input.openHours ?? null,
        exceptions: input.exceptions ?? null,
        slot: input.slot ?? null,
        capacity: input.capacity ?? null,
        bookingWindow: input.bookingWindow ?? null,
    };
}