'use client';

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import DropdownSelect from '@/components/ui/DropdownSelect';
import dynamic from 'next/dynamic';

const MapSelectPoint = dynamic(() => import('./MapSelectPoint'), {
	ssr: false,
	loading: () => (
		<div className='w-full h-[400px] border rounded flex items-center justify-center bg-gray-50'>
			Φόρτωση χάρτη...
		</div>
	),
});

const MapSelectRegion = dynamic(() => import('./MapSelectRegion'), {
	ssr: false,
	loading: () => (
		<div className='w-full h-[400px] border rounded flex items-center justify-center bg-gray-50'>
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
		<Disclosure>
			{({ open }) => (
				<div className='border rounded p-4'>
					<DisclosureButton className='flex justify-between items-center w-full font-medium text-left'>
						<div className='flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm sm:text-base'>
							<span>Τοποθεσία</span>
							{!open && location?.name && (
								<span className='text-gray-500 text-sm font-normal'>
									({location.name})
								</span>
							)}
						</div>
						{open ? (
							<ChevronUp className='w-5 h-5' />
						) : (
							<ChevronDown className='w-5 h-5' />
						)}
					</DisclosureButton>

					<DisclosurePanel className='mt-4 space-y-4'>
						<div>
							<label className='block text-sm font-medium mb-1'>
								Όνομα Τοποθεσίας
							</label>
							<input
								type='text'
								value={location?.name || ''}
								onChange={(e) => handleChange('name', e.target.value)}
								placeholder='π.χ. Χαλκίδα'
								className='w-full border rounded px-3 py-2 text-sm'
							/>
						</div>

						<div>
							<label className='block text-sm font-medium mb-1'>Τύπος</label>
							<DropdownSelect
								label='Επιλέξτε τύπο'
								options={locationTypeOptions}
								value={location?.type || ''}
								className='text-sm'
								onChange={(val) => handleChange('type', val)}
							/>
						</div>

						{isPoint && (
							<div className='space-y-2'>
								<label className='block text-sm font-medium'>
									Επιλέξτε Σημείο στον Χάρτη
								</label>
								<MapSelectPoint
									value={location.coordinates}
									onChange={(coords) => handleChange('coordinates', coords)}
								/>
							</div>
						)}

						{isRegion && (
							<div className='space-y-2'>
								<label className='block text-sm font-medium'>
									Επιλέξτε Περιοχή στον Χάρτη
								</label>
								<MapSelectRegion
									value={location.boundingBox}
									onChange={(bbox) => handleChange('boundingBox', bbox)}
								/>
							</div>
						)}
					</DisclosurePanel>
				</div>
			)}
		</Disclosure>
	);
}
