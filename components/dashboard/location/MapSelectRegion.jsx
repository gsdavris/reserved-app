// 'use client';

// import { useCallback, useEffect, useRef, useState } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import { Move3D } from 'lucide-react';
// import { useNotification } from '@/context/NotificationContext';
// import { useLocationSearch } from '@/hooks/useLocationSearch';
// import useFixedSelectionBounds from '@/hooks/useFixedSelectionBounds';
// import {
// 	computeZoomForBounds,
// 	centerFromBounds,
// } from '@/lib/map/fitZoomForBounds';
// import SearchLocationInput from './SearchLocationInput';

// function almost(a = 0, b = 0, eps = 1e-7) {
// 	return Math.abs(a - b) < eps;
// }
// function almostEqualBounds(a, b, eps = 1e-7) {
// 	if (!a && !b) return true;
// 	if (!a || !b) return false;
// 	return (
// 		almost(a?.sw?.lat, b?.sw?.lat, eps) &&
// 		almost(a?.sw?.lng, b?.sw?.lng, eps) &&
// 		almost(a?.ne?.lat, b?.ne?.lat, eps) &&
// 		almost(a?.ne?.lng, b?.ne?.lng, eps)
// 	);
// }

// export default function MapSelectRegion({
// 	value = null,
// 	onChange = () => {},
// 	height = '400px',
// 	zoom = 10,
// 	center = [38.5, 23.5],
// 	selectionBox = { width: 520, height: 320 },
// 	aspect = 1,
// 	autoFit = 'mount', // 'mount' | 'always' | 'none'
// }) {
// 	if (typeof window === 'undefined') return null;

// 	const mapRef = useRef(null);
// 	const wrapRef = useRef(null);
// 	const [pendingCoords, setPendingCoords] = useState(null);
// 	const [boxPx, setBoxPx] = useState(selectionBox);
// 	const { showNotification } = useNotification();

// 	const didFitRef = useRef(false);
// 	const isFittingRef = useRef(false);
// 	const lastEmittedRef = useRef(null);

// 	const centerFromValue =
// 		value?.sw && value?.ne
// 			? [(value.sw.lat + value.ne.lat) / 2, (value.sw.lng + value.ne.lng) / 2]
// 			: center;

// 	const { query, setQuery, search, loading } = useLocationSearch({
// 		onResult: ({ lat, lng }) => setPendingCoords([lat, lng]),
// 		onError: (msg) => showNotification(msg, 'warning'),
// 	});

// 	useEffect(() => {
// 		if (mapRef.current && pendingCoords) {
// 			const map = mapRef.current;
// 			// map.setView(pendingCoords, 13);
// 			map.flyTo(pendingCoords, 13, { duration: 0.6 });
// 			setPendingCoords(null);
// 		}
// 	}, [pendingCoords]);

// 	useEffect(() => {
// 		const el = wrapRef.current;
// 		if (!el) return;
// 		const resize = () => {
// 			const pad = 24;
// 			const parsedH =
// 				typeof height === 'string' ? parseInt(height, 10) : height;
// 			const hBase = Number.isFinite(parsedH) ? parsedH : 400;

// 			const W = Math.max(0, el.clientWidth - pad);
// 			const H = Math.max(0, hBase - pad);

// 			let w, h;
// 			if (W / H < aspect) {
// 				w = Math.min(W, selectionBox.width);
// 				h = w / aspect;
// 			} else {
// 				h = Math.min(H, selectionBox.height);
// 				w = h * aspect;
// 			}

// 			w = Math.max(120, w);
// 			h = Math.max(120, h);

// 			setBoxPx({ width: Math.round(w), height: Math.round(h) });
// 		};
// 		resize();
// 		const ro = new ResizeObserver(resize);
// 		ro.observe(el);
// 		return () => ro.disconnect();
// 	}, [selectionBox.width, selectionBox.height, height, aspect]);

// 	const emitBounds = useCallback(
// 		(bounds) => {
// 			if (isFittingRef.current) return;

// 			lastEmittedRef.current = bounds;
// 			onChange?.(bounds);
// 		},
// 		[onChange]
// 	);

// 	useFixedSelectionBounds({ mapRef, boxPx, onChange: emitBounds });

// 	useEffect(() => {
// 		if (autoFit === 'none') return;

// 		const map = mapRef.current;
// 		if (!map || !value?.sw || !value?.ne || !boxPx?.width || !boxPx?.height)
// 			return;

// 		if (almostEqualBounds(value, lastEmittedRef.current)) return;

// 		if (autoFit === 'mount' && didFitRef.current) return;

// 		const center = centerFromBounds(value);
// 		const minZ = map.getMinZoom ? map.getMinZoom() : 2;
// 		const maxZ = map.getMaxZoom ? map.getMaxZoom() : 19;
// 		const z = computeZoomForBounds(value, boxPx, {
// 			min: minZ,
// 			max: maxZ,
// 			paddingPx: 0,
// 		});

// 		isFittingRef.current = true;
// 		didFitRef.current = true;

// 		const clear = () => {
// 			isFittingRef.current = false;
// 			map.off('moveend', clear);
// 			map.off('zoomend', clear);
// 		};
// 		map.on('moveend', clear);
// 		map.on('zoomend', clear);

// 		map.setView(center, z, { animate: false });
// 	}, [
// 		autoFit,
// 		value?.sw?.lat,
// 		value?.sw?.lng,
// 		value?.ne?.lat,
// 		value?.ne?.lng,
// 		boxPx.width,
// 		boxPx.height,
// 	]);

// 	return (
// 		<div className='w-full max-w-3xl border rounded overflow-hidden'>
// 			<p className='text-sm text-gray-600 px-3 pt-2 flex items-center gap-2'>
// 				<Move3D className='w-4 h-4 text-gray-500' />
// 				Μετακινήστε και προσαρμόστε τον χάρτη ώστε να ορίσετε την επιθυμητή
// 				περιοχή.
// 			</p>

// 			<div className='px-3 pb-2'>
// 				<SearchLocationInput
// 					query={query}
// 					setQuery={setQuery}
// 					onSearch={search}
// 					loading={loading}
// 					placeholder='Αναζήτηση τοποθεσίας'
// 				/>
// 			</div>

// 			{/* Map wrapper με overlay */}
// 			<div
// 				ref={wrapRef}
// 				className='relative mx-auto'
// 				style={{ height }}>
// 				<MapContainer
// 					center={centerFromValue}
// 					zoom={zoom}
// 					scrollWheelZoom
// 					className='cursor-move z-10'
// 					style={{ height: '100%' }}
// 					ref={mapRef}>
// 					<TileLayer
// 						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// 						attribution='&copy; OpenStreetMap contributors'
// 					/>
// 				</MapContainer>

// 				{/*  dashed box (px) */}
// 				<div className='pointer-events-none absolute inset-0 z-20 flex items-center justify-center'>
// 					<div
// 						className='border-2 border-dashed rounded-md shadow-inner'
// 						style={{ width: boxPx.width, height: boxPx.height }}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Move3D } from 'lucide-react';
import { useNotification } from '@/context/NotificationContext';
import { useLocationSearch } from '@/hooks/useLocationSearch';
import useFixedSelectionBounds from '@/hooks/useFixedSelectionBounds';
import {
	computeZoomForBounds,
	centerFromBounds,
} from '@/lib/map/fitZoomForBounds';
import SearchLocationInput from './SearchLocationInput';

function almost(a = 0, b = 0, eps = 1e-7) {
	return Math.abs(a - b) < eps;
}
function almostEqualBounds(a, b, eps = 1e-7) {
	if (!a && !b) return true;
	if (!a || !b) return false;
	return (
		almost(a?.sw?.lat, b?.sw?.lat, eps) &&
		almost(a?.sw?.lng, b?.sw?.lng, eps) &&
		almost(a?.ne?.lat, b?.ne?.lat, eps) &&
		almost(a?.ne?.lng, b?.ne?.lng, eps)
	);
}

export default function MapSelectRegion({
	value = null,
	onChange = () => {},
	height = '400px',
	zoom = 10,
	center = [38.5, 23.5],
	selectionBox = { width: 520, height: 320 },
	aspect = 1,
	autoFit = 'mount', // 'mount' | 'always' | 'none'
}) {
	// ✅ no typeof window early-return — αποφεύγουμε hydration mismatch
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	const mapRef = useRef(null);
	const wrapRef = useRef(null);
	const [pendingCoords, setPendingCoords] = useState(null);
	const [boxPx, setBoxPx] = useState(selectionBox);
	const { showNotification } = useNotification();

	const didFitRef = useRef(false);
	const isFittingRef = useRef(false);
	const lastEmittedRef = useRef(null);

	const centerFromValue =
		value?.sw && value?.ne
			? [(value.sw.lat + value.ne.lat) / 2, (value.sw.lng + value.ne.lng) / 2]
			: center;

	const { query, setQuery, search, loading } = useLocationSearch({
		onResult: ({ lat, lng }) => setPendingCoords([lat, lng]),
		onError: (msg) => showNotification(msg, 'warning'),
	});

	useEffect(() => {
		if (mapRef.current && pendingCoords) {
			const map = mapRef.current;
			map.flyTo(pendingCoords, 13, { duration: 0.6 });
			setPendingCoords(null);
		}
	}, [pendingCoords]);

	useEffect(() => {
		const el = wrapRef.current;
		if (!el) return;

		const resize = () => {
			const pad = 24;
			const parsedH =
				typeof height === 'string' ? parseInt(height, 10) : height;
			const hBase = Number.isFinite(parsedH) ? parsedH : 400;

			const W = Math.max(0, el.clientWidth - pad);
			const H = Math.max(0, hBase - pad);

			let w, h;
			if (W / H < aspect) {
				w = Math.min(W, selectionBox.width);
				h = w / aspect;
			} else {
				h = Math.min(H, selectionBox.height);
				w = h * aspect;
			}

			w = Math.max(120, w);
			h = Math.max(120, h);

			// μικρό smoothing σε resize για να αποφεύγονται jitter
			window.requestAnimationFrame(() => {
				setBoxPx({ width: Math.round(w), height: Math.round(h) });
			});
		};

		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(el);
		return () => ro.disconnect();
	}, [selectionBox.width, selectionBox.height, height, aspect]);

	const emitBounds = useCallback(
		(bounds) => {
			if (isFittingRef.current) return;
			lastEmittedRef.current = bounds;
			onChange?.(bounds);
		},
		[onChange]
	);

	useFixedSelectionBounds({ mapRef, boxPx, onChange: emitBounds });

	useEffect(() => {
		if (autoFit === 'none') return;

		const map = mapRef.current;
		if (!map || !value?.sw || !value?.ne || !boxPx?.width || !boxPx?.height)
			return;

		if (almostEqualBounds(value, lastEmittedRef.current)) return;
		if (autoFit === 'mount' && didFitRef.current) return;

		const ctr = centerFromBounds(value);
		const minZ = map.getMinZoom ? map.getMinZoom() : 2;
		const maxZ = map.getMaxZoom ? map.getMaxZoom() : 19;
		const z = computeZoomForBounds(value, boxPx, {
			min: minZ,
			max: maxZ,
			paddingPx: 0,
		});

		isFittingRef.current = true;
		didFitRef.current = true;

		const clear = () => {
			isFittingRef.current = false;
			map.off('moveend', clear);
			map.off('zoomend', clear);
		};
		map.on('moveend', clear);
		map.on('zoomend', clear);

		map.setView(ctr, z, { animate: false });
	}, [
		autoFit,
		value?.sw?.lat,
		value?.sw?.lng,
		value?.ne?.lat,
		value?.ne?.lng,
		boxPx.width,
		boxPx.height,
	]);

	return (
		<div className='w-full border rounded overflow-hidden'>
			<p className='text-sm text-gray-600 px-3 pt-2 flex items-center gap-2'>
				<Move3D className='w-4 h-4 text-gray-500' />
				Μετακινήστε και προσαρμόστε τον χάρτη ώστε να ορίσετε την επιθυμητή
				περιοχή.
			</p>

			<div className='px-3 pb-2'>
				<SearchLocationInput
					query={query}
					setQuery={setQuery}
					onSearch={search}
					loading={loading}
					placeholder='Αναζήτηση τοποθεσίας'
				/>
			</div>

			{/* Map wrapper με overlay */}
			<div
				ref={wrapRef}
				className='relative mx-auto'
				style={{ height }}>
				{mounted ? (
					<>
						<MapContainer
							center={centerFromValue}
							zoom={zoom}
							scrollWheelZoom
							className='cursor-move z-10'
							style={{ height: '100%' }}
							ref={mapRef}>
							<TileLayer
								url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
								attribution='&copy; OpenStreetMap contributors'
							/>
						</MapContainer>

						{/* dashed box (px) */}
						<div className='pointer-events-none absolute inset-0 z-20 flex items-center justify-center'>
							<div
								className='border-2 border-dashed rounded-md shadow-inner'
								style={{ width: boxPx.width, height: boxPx.height }}
							/>
						</div>
					</>
				) : (
					// skeleton / placeholder για SSR
					<div
						className='w-full bg-gray-50'
						style={{ height: '100%' }}
					/>
				)}
			</div>
		</div>
	);
}
