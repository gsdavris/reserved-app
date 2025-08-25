import { nanoid } from 'nanoid';

export const ADDON_PRICING_MODES = [
    { label: 'Ανά κράτηση', value: 'per_booking' },
    { label: 'Ανά άτομο', value: 'per_person' },
    { label: 'Ανά μονάδα χρόνου', value: 'per_unit_time' },
];

export const ADDON_INVENTORY_MODES = [
    { label: 'Απεριόριστο', value: 'unlimited' },
    { label: 'Περιορισμένο (global)', value: 'limited' },
];

export function createDefaultAddonOption () {
    return {
        id: nanoid(),
        label: '',
        description: '',
        isActive: true,
        required: false,
        defaultSelected: false,
        pricing: {
            mode: 'per_booking', // per_booking | per_person | per_unit_time
            price: 0,
            currency: 'EUR',
            taxClass: null,
        },
        quantity: { min: 0, max: 1, step: 1 },
        inventory: { mode: 'unlimited', total: null },
        visibilityRules: {},
        availability: {
            windows: [], // [{ from: '2025-06-01', to: '2025-09-30' }]
            rrule: null,
        },
    };
}

