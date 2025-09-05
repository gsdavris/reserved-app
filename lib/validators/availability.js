export const ALLOWED_AVAILABILITY_TYPES = ['COUNT', 'UNIT', 'APPOINTMENT'];
export const ALLOWED_SLOT_STRATEGIES = ['FIXED', 'FLEX'];

/**
 * Επιστρέφει array με errors (κενό = OK)
 */
export function validateAvailability (input = {}) {
    const errors = [];

    // type
    if (!ALLOWED_AVAILABILITY_TYPES.includes(input.type)) {
        errors.push(
            `Invalid "type" — must be one of: ${ALLOWED_AVAILABILITY_TYPES.join(', ')}`
        );
    }

    // rules (required)
    if (!Array.isArray(input.rules)) {
        errors.push('Invalid "rules" — must be an array');
    }

    // openHours (optional)
    if (input.openHours != null && !Array.isArray(input.openHours)) {
        errors.push('Invalid "openHours" — must be an array if provided');
    }

    // exceptions (optional)
    if (input.exceptions != null && !Array.isArray(input.exceptions)) {
        errors.push('Invalid "exceptions" — must be an array if provided');
    }

    // slot (optional)
    if (input.slot != null && typeof input.slot !== 'object') {
        errors.push('Invalid "slot" — must be an object if provided');
    } else if (input.slot) {
        const s = input.slot;
        if (s.strategy && !ALLOWED_SLOT_STRATEGIES.includes(s.strategy)) {
            errors.push(
                `Invalid "slot.strategy" — must be one of: ${ALLOWED_SLOT_STRATEGIES.join(', ')}`
            );
        }
        if (s.durationMin != null && (!Number.isInteger(s.durationMin) || s.durationMin <= 0)) {
            errors.push('Invalid "slot.durationMin" — positive integer required');
        }
        if (s.intervalMin != null && (!Number.isInteger(s.intervalMin) || s.intervalMin < 0)) {
            errors.push('Invalid "slot.intervalMin" — integer >= 0 required');
        }
        if (s.bufferBeforeMin != null && (!Number.isInteger(s.bufferBeforeMin) || s.bufferBeforeMin < 0)) {
            errors.push('Invalid "slot.bufferBeforeMin" — integer >= 0 required');
        }
        if (s.bufferAfterMin != null && (!Number.isInteger(s.bufferAfterMin) || s.bufferAfterMin < 0)) {
            errors.push('Invalid "slot.bufferAfterMin" — integer >= 0 required');
        }
    }

    // capacity (optional; για type=COUNT απαιτεί perSlot>0)
    if (input.capacity != null && typeof input.capacity !== 'object') {
        errors.push('Invalid "capacity" — must be an object if provided');
    } else if (input.type === 'COUNT') {
        const perSlot = input?.capacity?.perSlot;
        if (!Number.isInteger(perSlot) || perSlot <= 0) {
            errors.push('Invalid "capacity.perSlot" — positive integer required for type=COUNT');
        }
    }

    // bookingWindow (optional)
    if (input.bookingWindow != null && typeof input.bookingWindow !== 'object') {
        errors.push('Invalid "bookingWindow" — must be an object if provided');
    } else if (input.bookingWindow) {
        const { minLeadMinutes, maxAdvanceDays } = input.bookingWindow;
        if (minLeadMinutes != null && (!Number.isInteger(minLeadMinutes) || minLeadMinutes < 0)) {
            errors.push('Invalid "bookingWindow.minLeadMinutes" — integer >= 0 required');
        }
        if (maxAdvanceDays != null && (!Number.isInteger(maxAdvanceDays) || maxAdvanceDays < 0)) {
            errors.push('Invalid "bookingWindow.maxAdvanceDays" — integer >= 0 required');
        }
    }

    return errors;
}
