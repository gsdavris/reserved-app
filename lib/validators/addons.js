export function validateAddonOption (option) {
    const errs = [];
    if (!option) {
        errs.push('Κενή επιλογή add-on.');
        return errs;
    }
    const { label, pricing, quantity, inventory } = option;

    if (!label || String(label).trim().length < 2) {
        errs.push('Το label είναι υποχρεωτικό (≥ 2 χαρακτήρες).');
    }

    if (!pricing || !['per_booking', 'per_person', 'per_unit_time'].includes(pricing.mode)) {
        errs.push('Μη έγκυρο pricing mode.');
    } else {
        const p = Number(pricing.price ?? 0);
        if (Number.isNaN(p) || p < 0) errs.push('Η τιμή πρέπει να είναι ≥ 0.');
        if (pricing.currency && String(pricing.currency).length < 3) {
            errs.push('Μη έγκυρο currency (π.χ. EUR).');
        }
    }

    const q = quantity || {};
    if (q.min != null && q.max != null && Number(q.min) > Number(q.max)) {
        errs.push('Το quantity min δεν μπορεί να είναι > max.');
    }
    if (q.step != null && Number(q.step) <= 0) {
        errs.push('Το quantity step πρέπει να είναι > 0.');
    }

    if (!inventory || !['unlimited', 'limited'].includes(inventory.mode)) {
        errs.push('Μη έγκυρο inventory mode.');
    } else if (inventory.mode === 'limited') {
        const t = Number(inventory.total ?? -1);
        if (Number.isNaN(t) || t < 0) errs.push('Το συνολικό απόθεμα (total) πρέπει να είναι ≥ 0.');
    }

    // Διαστήματα διαθεσιμότητας (αν υπάρχουν)
    const windows = option?.availability?.windows || [];
    for (const w of windows) {
        if (w?.from && w?.to && new Date(w.from) > new Date(w.to)) {
            errs.push('Στο availability: "Από" δεν μπορεί να είναι μετά το "Έως".');
        }
    }

    return errs;
}
