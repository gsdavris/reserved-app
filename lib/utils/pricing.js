import { nanoid } from 'nanoid';


export function createDefaultPricingOption () {
    return {
        id: nanoid(), // π.χ. "qjtzpQZhxk2hRj5VlfWTK"
        label: '',
        basePrice: 0,
        durationUnit: 'day', // ή 'hour', 'half_day', 'event', 'custom'
        perPerson: true,
        isActive: true,
        availabilityWindows: [],
    };
}


