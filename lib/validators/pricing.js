import dayjs from 'dayjs';


export function validatePricingOption (option) {
    const errors = [];

    if (!option.label || option.label.trim() === '') {
        errors.push('Το πεδίο "τίτλος" είναι υποχρεωτικό.');
    }

    if (option.basePrice == null || isNaN(option.basePrice) || option.basePrice < 0) {
        errors.push('Η βασική τιμή πρέπει να είναι έγκυρος αριθμός >= 0.');
    }

    if (option.discount) {
        if (!option.discount.label?.trim()) {
            errors.push('Η έκπτωση χρειάζεται τίτλο.');
        }
        if (
            option.discount.value == null ||
            isNaN(option.discount.value) ||
            option.discount.value < 0
        ) {
            errors.push('Η τιμή της έκπτωσης πρέπει να είναι έγκυρος αριθμός >= 0.');
        }
        if (
            option.discount.startsAt &&
            option.discount.expiresAt &&
            dayjs(option.discount.expiresAt).isBefore(dayjs(option.discount.startsAt))
        ) {
            errors.push('Η ημερομηνία λήξης της έκπτωσης δεν μπορεί να προηγείται της έναρξης.');
        }
    }

    if (
        option.availableFrom &&
        option.availableTo &&
        dayjs(option.availableTo).isBefore(dayjs(option.availableFrom))
    ) {
        errors.push('Η διαθεσιμότητα "Έως" δεν μπορεί να είναι πριν το "Από".');
    }

    return errors;
}
