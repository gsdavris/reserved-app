'use client';

import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Move3D } from 'lucide-react';
import ViewportBoundingBox from './ViewportBoundingBox';
import RectangleOverlay from './RectangleOverlay';
import { useNotification } from '@/context/NotificationContext';
import { useLocationSearch } from '@/hooks/useLocationSearch';
import SearchLocationInput from './SearchLocationInput';

export default function MapSelectRegion({
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

	const centerFromValue =
		value?.sw && value?.ne
			? [(value.sw.lat + value.ne.lat) / 2, (value.sw.lng + value.ne.lng) / 2]
			: center;

	const { query, setQuery, search, loading } = useLocationSearch({
		onResult: ({ lat, lng }) => {
			console.log('📍 Location found:', lat, lng);
			setPendingCoords([lat, lng]);
		},
		onError: (msg) => {
			showNotification(msg, 'warning');
		},
	});

	useEffect(() => {
		if (mapRef.current && pendingCoords) {
			const map = mapRef.current;
			map.setView(pendingCoords, 13);
			setPendingCoords(null);
		}
	}, [pendingCoords]);

	return (
		<div className='w-full border rounded overflow-hidden space-y-2'>
			<p className='text-sm text-gray-600 px-3 pt-2 flex items-center gap-2'>
				<Move3D className='w-4 h-4 text-gray-500' />
				Μετακινήστε και προσαρμόστε τον χάρτη ώστε να ορίσετε την επιθυμητή
				περιοχή.
			</p>

			<div className='px-3'>
				<SearchLocationInput
					query={query}
					setQuery={setQuery}
					onSearch={search}
					loading={loading}
					placeholder='Αναζήτηση τοποθεσίας'
				/>
			</div>

			<MapContainer
				center={centerFromValue}
				zoom={zoom}
				scrollWheelZoom={true}
				className='cursor-move z-20'
				style={{ height }}
				ref={mapRef}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; OpenStreetMap contributors'
				/>
				<ViewportBoundingBox onChange={onChange} />
				<RectangleOverlay bounds={value} />
			</MapContainer>
		</div>
	);
}
