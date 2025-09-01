'use client';

import { Trash2 } from 'lucide-react';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import DropdownSelect from '@/components/ui/DropdownSelect';
import DatePickerDynamic from '@/components/ui/DatePickerDynamic';

import ChipsRow from '@/components/ui/ChipsRow';
import { format } from 'date-fns';

const durationOptions = [
	{ label: 'Ανά Ώρα', value: 'hour' },
	{ label: 'Μισή Ημέρα', value: 'half_day' },
	{ label: 'Ημέρα', value: 'day' },
	{ label: 'Εκδήλωση', value: 'event' },
	{ label: 'Custom', value: 'custom' },
];

const toDate = (val) =>
	val instanceof Date ? val : val ? new Date(val) : null;
const toISODate = (d) => {
	if (!d) return null;
	const utc = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	return utc.toISOString().slice(0, 10); // YYYY-MM-DD
};

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

	const setWindows = (windows) => {
		updateOption({ ...option, availabilityWindows: windows });
	};

	const removeRangeAt = (i) => {
		const next = (option.availabilityWindows || []).filter(
			(_, idx) => idx !== i
		);
		setWindows(next);
	};

	return (
		<div
			draggable
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDrop={onDrop}
			onDragEnd={onDragEnd}
			className={`border rounded p-4 space-y-4 bg-white shadow-sm transition-all
        ${
					isDragging
						? 'cursor-grabbing ring-2 ring-blue-500 opacity-70'
						: 'cursor-grab active:cursor-grabbing'
				}
        ${isHover ? 'ring-2 ring-blue-300 translate-x-2' : ''}`}>
			{/* Title + Delete */}
			<div className='flex flex-col sm:flex-row sm:items-center gap-2'>
				<input
					type='text'
					value={option.label ?? ''}
					onChange={(e) => handleChange('label', e.target.value)}
					className='min-w-0 w-full border rounded px-3 py-2 text-sm  focus:ring-2 focus:ring-blue-500 focus:outline-none'
					placeholder='Όνομα Τιμής'
				/>
				<div className='flex justify-end'>
					<button
						type='button'
						onClick={onRemove}
						title='Αφαίρεση επιλογής'
						aria-label='Αφαίρεση επιλογής'
						className='text-red-600 hover:text-red-800 flex-shrink-0 inline-flex items-center justify-center h-9 w-9 border rounded'>
						<Trash2 className='w-4 h-4' />
					</button>
				</div>
			</div>

			{/* Price + Duration */}
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div className='w-full'>
					<label className='block text-sm font-medium mb-1'>Τιμή</label>
					<input
						type='number'
						step='0.01'
						inputMode='decimal'
						value={option.basePrice ?? ''}
						onChange={(e) =>
							handleChange(
								'basePrice',
								e.target.value === '' ? '' : parseFloat(e.target.value) || 0
							)
						}
						placeholder='Τιμή'
						className='w-full border rounded px-3 py-2 h-10 text-sm  focus:ring-2 focus:ring-blue-500 focus:outline-none'
					/>
				</div>

				<div className='w-full'>
					<label className='block text-sm font-medium mb-1'>Διάρκεια</label>
					<DropdownSelect
						label='Διάρκεια'
						options={durationOptions}
						value={option.durationUnit || 'hour'}
						onChange={(val) => handleChange('durationUnit', val)}
						className='w-full text-sm'
					/>
				</div>
			</div>

			{/* Toggles */}
			<div className='grid gap-3'>
				<div className='flex items-center justify-between sm:justify-start sm:gap-3'>
					<ToggleSwitch
						label='Ανά άτομο'
						checked={option.perPerson ?? false}
						onChange={(v) => handleChange('perPerson', v)}
					/>
				</div>

				<div className='flex items-center justify-between sm:justify-start sm:gap-3'>
					<ToggleSwitch
						label='Ενεργή'
						checked={option.isActive ?? true}
						onChange={(v) => handleChange('isActive', v)}
					/>
				</div>
			</div>

			{/* Availability (multi-range) */}
			<div className='w-full'>
				<DatePickerDynamic
					mode='multi-range'
					value={(option.availabilityWindows || []).map((w) => ({
						from: toDate(w.from),
						to: toDate(w.to),
					}))}
					onChange={(ranges) => {
						const windows = (ranges || []).map((r) => ({
							from: toISODate(r?.from),
							to: toISODate(r?.to),
						}));
						setWindows(windows);
					}}
				/>

				{(option.availabilityWindows || []).length > 0 && (
					<div className='mt-2'>
						<ChipsRow
							items={(option.availabilityWindows || []).map((w, i) => ({
								id: i,
								label: `${
									w.from ? format(toDate(w.from), 'dd/MM/yyyy') : '—'
								} – ${w.to ? format(toDate(w.to), 'dd/MM/yyyy') : '—'}`,
							}))}
							onRemove={(item) => removeRangeAt(item.id)}
							variant='outline'
							size='xs'
						/>
					</div>
				)}
			</div>
		</div>
	);
}
