// 00:00 της ημέρας (local)
export const at00 = (d) =>
    d ? new Date(d.getFullYear(), d.getMonth(), d.getDate()) : null;

export const isBeforeOrEqual = (a, b) => +at00(a) <= +at00(b);

export function normalizeRange (r) {
    if (!r?.from || !r?.to) return null;
    const from = at00(r.from);
    const to = at00(r.to);
    return isBeforeOrEqual(from, to) ? { from, to } : { from: to, to: from };
}

export function mergeRanges (ranges) {
    const clean = (ranges || [])
        .map(normalizeRange)
        .filter(Boolean)
        .sort((a, b) => +a.from - +b.from);

    const out = [];
    for (const r of clean) {
        if (!out.length) {
            out.push(r);
            continue;
        }
        const last = out[out.length - 1];
        const nextDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
        // overlap ή «ακουμπάνε» κατά 1 μέρα
        if (+last.from <= +nextDay(r.to) && +r.from <= +nextDay(last.to)) {
            out[out.length - 1] = {
                from: last.from < r.from ? last.from : r.from,
                to: last.to > r.to ? last.to : r.to,
            };
        } else out.push(r);
    }
    return out;
}

export function daysBetweenExclusive (from, to) {
    const n = normalizeRange({ from, to });
    if (!n) return [];
    const arr = [];
    let cur = new Date(n.from.getFullYear(), n.from.getMonth(), n.from.getDate() + 1);
    while (+cur < +n.to) {
        arr.push(new Date(cur));
        cur = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate() + 1);
    }
    return arr;
}

export function uniqDates (arr = []) {
    const seen = new Set();
    return arr.filter((d) => {
        const k = d?.toISOString?.();
        if (!k || seen.has(k)) return false;
        seen.add(k);
        return true;
    });
}