'use client';

import { useEffect, useRef } from 'react';

export default function useFixedSelectionBounds ({ mapRef, boxPx, onChange }) {
    const onChangeRef = useRef(onChange);
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    const lastBoundsRef = useRef(null);
    const frameRef = useRef(null);

    useEffect(() => {
        const map = mapRef.current;
        if (!map || !boxPx?.width || !boxPx?.height) return;

        const compute = () => {
            const size = map.getSize();
            const centerPt = map.latLngToContainerPoint(map.getCenter());
            const halfW = boxPx.width / 2;
            const halfH = boxPx.height / 2;

            const tl = { x: Math.max(0, centerPt.x - halfW), y: Math.max(0, centerPt.y - halfH) };
            const br = { x: Math.min(size.x, centerPt.x + halfW), y: Math.min(size.y, centerPt.y + halfH) };

            const sw = map.containerPointToLatLng([tl.x, br.y]);
            const ne = map.containerPointToLatLng([br.x, tl.y]);
            const next = { sw: { lat: sw.lat, lng: sw.lng }, ne: { lat: ne.lat, lng: ne.lng } };

            const prev = lastBoundsRef.current;
            const eps = 1e-7; // tiny epsilon to avoid noise
            const same =
                prev &&
                Math.abs(prev.sw.lat - next.sw.lat) < eps &&
                Math.abs(prev.sw.lng - next.sw.lng) < eps &&
                Math.abs(prev.ne.lat - next.ne.lat) < eps &&
                Math.abs(prev.ne.lng - next.ne.lng) < eps;

            if (!same) {
                lastBoundsRef.current = next;
                onChangeRef.current?.(next);
            }
        };

        const schedule = () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            frameRef.current = requestAnimationFrame(compute);
        };

        // initial
        compute();

        // events
        map.on('moveend zoomend resize', schedule);

        const ro = new ResizeObserver(schedule);
        ro.observe(map.getContainer());

        return () => {
            map.off('moveend zoomend resize', schedule);
            ro.disconnect();
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
        // NOTE: do NOT depend on `onChange` here by design
    }, [mapRef, boxPx.width, boxPx.height]);
}
