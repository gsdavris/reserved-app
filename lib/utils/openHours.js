// lib/utils/openHours.js

// Δευ=1 … Σαβ=6, Κυρ=0
export const DOW = [
    { key: 1, label: 'Δευ' },
    { key: 2, label: 'Τρι' },
    { key: 3, label: 'Τετ' },
    { key: 4, label: 'Πεμ' },
    { key: 5, label: 'Παρ' },
    { key: 6, label: 'Σαβ' },
    { key: 0, label: 'Κυρ' },
];

export const EMPTY_DAY = { enabled: false, intervals: [] };
// intervals: [{ start:'HH:mm', end:'HH:mm' }]

// Helpers: HH:mm <-> minutes
export const toMin = (hhmm) => {
    if (!hhmm || !/^\d{2}:\d{2}$/.test(hhmm)) return null;
    const [h, m] = hhmm.split(':').map(Number);

    // επιτρέπουμε 24:00 ως συμβολικό τέλος ημέρας
    if (h === 24 && m === 0) return 24 * 60;

    if (h < 0 || h > 23 || m < 0 || m > 59) return null;
    return h * 60 + m;
};

export const toHHMM = (min) => {
    if (min === 1440) return '24:00'; // συμβολικό display για τέλος ημέρας
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

// Καθαρίζει/ενώνει intervals: ταξινόμηση, drop invalid, merge overlaps/touches
export function normalizeIntervals (intervals) {
    const clean = (Array.isArray(intervals) ? intervals : [])
        .map(({ start, end }) => {
            const s = toMin(start);
            const e = toMin(end);
            if (s == null || e == null || s >= e) return null;
            return { s, e };
        })
        .filter(Boolean)
        .sort((a, b) => a.s - b.s);

    const out = [];
    for (const curr of clean) {
        if (!out.length) {
            out.push(curr);
            continue;
        }
        const prev = out[out.length - 1];
        // merge αν επικαλύπτονται ή ακουμπάνε (π.χ. 09:00–12:00 & 12:00–15:00)
        if (curr.s <= prev.e) {
            prev.e = Math.max(prev.e, curr.e);
        } else {
            out.push(curr);
        }
    }
    return out.map(({ s, e }) => ({ start: toHHMM(s), end: toHHMM(e) }));
}

// Validation per day
export function validateDayIntervals (intervals) {
    const errs = [];
    for (const { start, end } of intervals || []) {
        const s = toMin(start);
        const e = toMin(end);
        if (s == null || e == null) errs.push('Μη έγκυρη ώρα.');
        else if (s >= e) errs.push('Η έναρξη πρέπει να είναι πριν τη λήξη.');
    }
    return errs;
}

export function labelFromDow (dow) {
    switch (dow) {
        case 1: return 'Δευτέρας';
        case 2: return 'Τρίτης';
        case 3: return 'Τετάρτης';
        case 4: return 'Πέμπτης';
        case 5: return 'Παρασκευής';
        case 6: return 'Σαββάτου';
        case 0: return 'Κυριακής';
        default: return '';
    }
}
