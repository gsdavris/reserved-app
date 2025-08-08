'use client';
import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

export default function ViewportBoundingBox({ onChange }) {
	const map = useMap();

	useMapEvents({
		moveend: updateBounds,
		zoomend: updateBounds,
	});

	function updateBounds() {
		const bounds = map.getBounds();
		const sw = bounds.getSouthWest();
		const ne = bounds.getNorthEast();

		const latPadding = (ne.lat - sw.lat) * 0.1;
		const lngPadding = (ne.lng - sw.lng) * 0.1;

		const insetBounds = {
			sw: {
				lat: sw.lat + latPadding,
				lng: sw.lng + lngPadding,
			},
			ne: {
				lat: ne.lat - latPadding,
				lng: ne.lng - lngPadding,
			},
		};

		onChange(insetBounds);
	}

	useEffect(() => {
		updateBounds();
	}, []);

	return null;
}
