'use client';

import { Trash2 } from 'lucide-react';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import DropdownSelect from '@/components/ui/DropdownSelect';
import DatePickerDynamic from '@/components/ui/DatePickerDynamic';

const durationOptions = [
	{ label: 'Ανά Ώρα', value: 'hour' },
	{ label: 'Μισή Ημέρα', value: 'half_day' },
	{ label: 'Ημέρα', value: 'day' },
	{ label: 'Εκδήλωση', value: 'event' },
	{ label: 'Custom', value: 'custom' },
];

export default function PricingOptionCard({
	option,
	index,
	updateOption,
	onRemove,
	dragIndex,
	hoverIndex,
	onDragStart,
	onDragOver,
	onDrop,
	onDragEnd,
}) {
	const isDragging = dragIndex === index;
	const isHover = hoverIndex === index && dragIndex !== index;

	const handleChange = (key, value) => {
		updateOption({ ...option, [key]: value });
	};

	return (
		<div
			draggable
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDrop={onDrop}
			onDragEnd={onDragEnd}
			className={`border rounded p-4 space-y-4 bg-white shadow-sm transition-transform ${
				isDragging ? 'cursor-grabbing ring-2 ring-blue-500 opacity-70' : ''
			} ${isHover ? 'ring-2 ring-blue-300 translate-x-2' : ''}`}>
			<div className='flex justify-between items-center gap-2'>
				<input
					type='text'
					value={option.label ?? ''}
					onChange={(e) => handleChange('label', e.target.value)}
					className='w-full border rounded px-3 py-2 text-sm'
					placeholder='Όνομα Τιμής'
				/>
				<button
					type='button'
					onClick={onRemove}
					title='Αφαίρεση επιλογής'
					className='text-red-600 hover:text-red-800'>
					<Trash2 className='w-4 h-4' />
				</button>
			</div>

			<div className='grid sm:grid-cols-2 gap-4'>
				<div>
					<label className='block text-sm font-medium mb-1'>Τιμή</label>
					<input
						type='number'
						value={option.basePrice || ''}
						onChange={(e) =>
							handleChange('basePrice', parseFloat(e.target.value) || 0)
						}
						placeholder='Τιμή'
						className='w-full border rounded px-3 py-2 h-10 text-sm'
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>Διάρκεια</label>
					<DropdownSelect
						label='Διάρκεια'
						options={durationOptions}
						value={option.durationUnit || 'hour'}
						className='text-sm'
						onChange={(val) => handleChange('durationUnit', val)}
					/>
				</div>
			</div>

			<div className='grid sm:grid-cols-2 gap-4'>
				<ToggleSwitch
					label='Ανά άτομο'
					checked={option.perPerson ?? false}
					onChange={(v) => handleChange('perPerson', v)}
				/>

				<ToggleSwitch
					label='Ενεργή'
					checked={option.isActive ?? true}
					onChange={(v) => handleChange('isActive', v)}
				/>
			</div>

			<DatePickerDynamic
				mode='range'
				value={{
					from: option.availableFrom,
					to: option.availableTo,
				}}
				onChange={({ from, to }) => {
					updateOption({
						...option,
						availableFrom: from,
						availableTo: to,
					});
				}}
			/>
		</div>
	);
}
