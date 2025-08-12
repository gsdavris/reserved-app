'use client';

import L from 'leaflet';

/**
 * Βρίσκει το μέγιστο zoom ώστε τα bounds (SW/NE) να χωράνε
 * μέσα στο fixed-px selection box (boxPx.width/height).
 */
export function computeZoomForBounds (bounds, boxPx, opts = {}) {
    const { min = 2, max = 19, iterations = 25, paddingPx = 0 } = opts;
    const sw = L.latLng(bounds.sw.lat, bounds.sw.lng);
    const ne = L.latLng(bounds.ne.lat, bounds.ne.lng);

    const targetW = Math.max(1, boxPx.width - paddingPx * 2);
    const targetH = Math.max(1, boxPx.height - paddingPx * 2);

    let lo = min, hi = max, best = min;

    for (let i = 0; i < iterations; i++) {
        const z = (lo + hi) / 2;
        const pSW = L.CRS.EPSG3857.latLngToPoint(sw, z);
        const pNE = L.CRS.EPSG3857.latLngToPoint(ne, z);
        const w = Math.abs(pNE.x - pSW.x);
        const h = Math.abs(pSW.y - pNE.y);
        const scale = Math.max(w / targetW, h / targetH);

        if (scale > 1) {
            // Το περιεχόμενο είναι μεγαλύτερο από το box -> zoom out
            hi = z;
        } else {
            // Χωράει -> δοκίμασε μεγαλύτερο zoom
            best = z;
            lo = z;
        }
    }
    return Math.round(best);
}

export function centerFromBounds (bounds) {
    return [
        (bounds.sw.lat + bounds.ne.lat) / 2,
        (bounds.sw.lng + bounds.ne.lng) / 2,
    ];
}
