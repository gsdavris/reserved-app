'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useNotification } from '@/context/NotificationContext';
import { useLocationSearch } from '@/hooks/useLocationSearch';
import SearchLocationInput from './SearchLocationInput';

// Leaflet default marker fix for Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
	iconRetinaUrl:
		'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
	shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function LocationMarker({ value, onChange }) {
	useMapEvents({
		click(e) {
			onChange({ lat: e.latlng.lat, lng: e.latlng.lng });
		},
	});

	if (!value) return null;

	return <Marker position={[value.lat, value.lng]} />;
}

export default function MapSelectPoint({
	value = null,
	onChange = () => {},
	height = '400px',
	zoom = 10,
	center = [38.5, 23.5],
}) {
	if (typeof window === 'undefined') return null;

	const mapRef = useRef(null);
	const [pendingCoords, setPendingCoords] = useState(null);
	const { showNotification } = useNotification();

	const { query, setQuery, search, loading } = useLocationSearch({
		onResult: ({ lat, lng }) => {
			setPendingCoords([lat, lng]);
			onChange({ lat, lng }); // Optional: update external value
		},
		onError: (msg) => {
			showNotification(msg, 'warning');
		},
	});

	useEffect(() => {
		if (mapRef.current && pendingCoords) {
			mapRef.current.setView(pendingCoords, 13);
			setPendingCoords(null);
		}
	}, [pendingCoords]);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			search();
		}
	};

	const centerFromValue = value ? [value.lat, value.lng] : center;

	return (
		<div className='w-full border rounded overflow-hidden space-y-2'>
			<div className='px-3 pt-2'>
				<SearchLocationInput
					query={query}
					setQuery={setQuery}
					onSearch={search}
					loading={loading}
					placeholder='Αναζήτηση τοποθεσίας ή κάντε κλικ στον χάρτη'
				/>
			</div>

			<MapContainer
				center={centerFromValue}
				zoom={zoom}
				scrollWheelZoom={true}
				style={{ height }}
				className='z-20'
				ref={mapRef}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; OpenStreetMap contributors'
				/>
				<LocationMarker
					value={value}
					onChange={onChange}
				/>
			</MapContainer>
		</div>
	);
}
