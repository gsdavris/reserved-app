'use client';

import DropdownSelect from '@/components/ui/DropdownSelect';
import dynamic from 'next/dynamic';

const MapSelectPoint = dynamic(() => import('./MapSelectPoint'), {
	ssr: false,
	loading: () => (
		<div className='w-full max-w-3xl h-[400px] border rounded flex items-center justify-center bg-gray-50'>
			Φόρτωση χάρτη...
		</div>
	),
});

const MapSelectRegion = dynamic(() => import('./MapSelectRegion'), {
	ssr: false,
	loading: () => (
		<div className='w-full max-w-3xl h-[400px] border rounded flex items-center justify-center bg-gray-50'>
			Φόρτωση χάρτη...
		</div>
	),
});

export default function LocationSection({ location, setLocation }) {
	const handleChange = (field, value) => {
		if (field === 'type') {
			setLocation({
				...location,
				type: value,
				coordinates: value === 'point' ? location.coordinates : null,
				boundingBox: value === 'region' ? location.boundingBox : null,
			});
		} else {
			setLocation({ ...location, [field]: value });
		}
	};

	const isPoint = location?.type === 'point';
	const isRegion = location?.type === 'region';

	const locationTypeOptions = [
		{ label: 'Επιλέξτε', value: '' },
		{ label: 'Ακριβές Σημείο', value: 'point' },
		{ label: 'Περιοχή', value: 'region' },
	];

	return (
		<div className='space-y-4'>
			{/* Row: Name (flex-1) + Type (auto) */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				<div className='md:col-span-2'>
					<label className='block text-sm font-medium mb-1'>
						Όνομα Τοποθεσίας
					</label>
					<input
						type='text'
						value={location?.name || ''}
						onChange={(e) => handleChange('name', e.target.value)}
						placeholder='π.χ. Χαλκίδα'
						className='w-full border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
					/>
				</div>
				<div className='md:col-span-1'>
					<label className='block text-sm font-medium mb-1'>Τύπος</label>
					<DropdownSelect
						label='Επιλέξτε τύπο'
						options={locationTypeOptions}
						value={location?.type || ''}
						className='text-sm w-full'
						onChange={(val) => handleChange('type', val)}
					/>
				</div>
			</div>

			{/* Maps */}
			{isPoint && (
				<div className='space-y-2'>
					<label className='block text-sm font-medium'>
						Επιλέξτε Σημείο στον Χάρτη
					</label>
					<div className='rounded overflow-hidden'>
						<MapSelectPoint
							value={location.coordinates}
							onChange={(coords) => handleChange('coordinates', coords)}
							height='400px'
						/>
					</div>
				</div>
			)}

			{isRegion && (
				<div className='space-y-2'>
					<label className='block text-sm font-medium'>
						Επιλέξτε Περιοχή στον Χάρτη
					</label>
					<div className='rounded overflow-hidden'>
						<MapSelectRegion
							value={location.boundingBox}
							onChange={(bbox) => handleChange('boundingBox', bbox)}
							height='400px'
						/>
					</div>
				</div>
			)}
		</div>
	);
}
