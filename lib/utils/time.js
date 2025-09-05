const pad2 = (n) => String(n).padStart(2, '0');

// Επιτρέπουμε 24:00 (μόνο ως END)
export const toMinAllow24 = (hhmm) => {
    if (!hhmm || !/^\d{2}:\d{2}$/.test(hhmm)) return null;
    const [h, m] = hhmm.split(':').map(Number);
    if (h === 24 && m === 0) return 24 * 60;
    if (h < 0 || h > 23 || m < 0 || m > 59) return null;
    return h * 60 + m;
};

export const toHHMMAllow24 = (mins) => {
    if (mins == null) return null;
    if (mins === 1440) return '24:00';
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${pad2(h)}:${pad2(m)}`;
};

export const fmt12 = (hhmm) => {
    if (!hhmm) return '';
    if (hhmm === '24:00') return '12:00 AM'; // εμφάνιση μόνο
    const [h, m] = hhmm.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${pad2(hour12)}:${pad2(m)} ${period}`;
};

export const formatDisplay = (hhmm, displayFormat = '24h') =>
    !hhmm ? '—' : displayFormat === '12h' ? fmt12(hhmm) : hhmm;

export const isValidRange = (start, end) => {
    const s = toMinAllow24(start);
    const e = toMinAllow24(end);
    return s != null && e != null && s < e;
};

export const hoursList = (include24ForEnd = false) => {
    const base = Array.from({ length: 24 }, (_, h) => pad2(h)); // 00..23
    return include24ForEnd ? [...base, '24'] : base;
};

export const minutesList = (step = 5, hour = '00') => {
    const max = hour === '24' ? 1 : Math.floor(60 / step);
    return Array.from({ length: max }, (_, i) => pad2(i * step));
};