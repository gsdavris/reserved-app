'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useLocationSearch } from '@/hooks/useLocationSearch';
import { useNotification } from '@/context/NotificationContext';
import { Move3D } from 'lucide-react';
import SearchLocationInput from './SearchLocationInput';

function ClickHandler({ onPick }) {
	useMapEvents({
		click(e) {
			onPick([e.latlng.lat, e.latlng.lng]);
		},
	});
	return null;
}

function usePinIcon() {
	return useMemo(
		() =>
			L.divIcon({
				className: '',
				iconSize: [16, 16],
				iconAnchor: [8, 8],
				html: '<div style="width:14px;height:14px;border-radius:50%;background:#2563eb;border:2px solid #fff;box-shadow:0 0 0 2px rgba(0,0,0,.15)"></div>',
			}),
		[]
	);
}

export default function MapSelectPoint({
	value = null, // { lat, lng } | null
	onChange = () => {},
	height = '400px',
	zoom = 12,
	center = [38.5, 23.5],
}) {
	const [mounted, setMounted] = useState(false);
	const [mapInstance, setMapInstance] = useState(null); // ✅ παίρνουμε L.Map μέσω ref callback
	const [pendingCoords, setPendingCoords] = useState(null);

	const { showNotification } = useNotification();
	useEffect(() => setMounted(true), []);

	// καθαρισμός για HMR
	useEffect(() => () => setMapInstance(null), []);

	const pinIcon = usePinIcon();

	const emitPoint = useCallback(
		(lat, lng) => {
			onChange?.({ lat, lng });
		},
		[onChange]
	);

	const { query, setQuery, search, loading } = useLocationSearch({
		onResult: ({ lat, lng }) => {
			emitPoint(lat, lng); // move pin
			setPendingCoords([lat, lng]); // trigger flyTo
		},
		onError: (msg) => showNotification(msg, 'warning'),
	});

	const markerPos = useMemo(() => {
		if (value?.lat != null && value?.lng != null) return [value.lat, value.lng];
		return Array.isArray(center) ? center : [center.lat, center.lng];
	}, [value?.lat, value?.lng, center]);

	// flyTo μόλις έχουμε map + νέες coords
	useEffect(() => {
		if (!mapInstance || !pendingCoords) return;
		mapInstance.flyTo(pendingCoords, 13, { duration: 0.6 });
		setPendingCoords(null);
	}, [mapInstance, pendingCoords]);

	return (
		<div className='w-full border rounded overflow-hidden'>
			<p className='text-sm text-gray-600 px-3 pt-2 flex items-center gap-2'>
				<Move3D className='w-4 h-4 text-gray-500' />
				Μετακινήστε τον χάρτη, κάντε click για να επιλέξετε σημείο.
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

			{mounted ? (
				<MapContainer
					key='point'
					center={markerPos}
					zoom={zoom}
					scrollWheelZoom
					style={{ height }}
					className='z-10'
					ref={(map) => setMapInstance(map)}>
					{/* render layers ΜΟΝΟ όταν υπάρχει map instance */}
					{mapInstance && (
						<>
							<TileLayer
								url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
								attribution='&copy; OpenStreetMap contributors'
							/>

							<ClickHandler onPick={([lat, lng]) => emitPoint(lat, lng)} />

							<Marker
								position={markerPos}
								icon={pinIcon}
								draggable
								eventHandlers={{
									dragend: (e) => {
										const { lat, lng } = e.target.getLatLng();
										emitPoint(lat, lng);
									},
								}}
							/>
						</>
					)}
				</MapContainer>
			) : (
				<div
					className='w-full border-0 rounded-none flex items-center justify-center bg-gray-50'
					style={{ height }}>
					Φόρτωση χάρτη...
				</div>
			)}
		</div>
	);
}
