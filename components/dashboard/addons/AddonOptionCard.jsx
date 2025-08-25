'use client';

import { Trash2 } from 'lucide-react';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import DateRangeInputs from '@/components/dashboard/pricing/DateRangeInputs';
import { ADDON_PRICING_MODES, ADDON_INVENTORY_MODES } from '@/lib/utils/addons';

export default function AddonOptionCard({
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
	const isHover = hoverIndex === index;

	const set = (patch) => updateOption({ ...option, ...patch });

	const setNested = (key, field, value) => {
		set({ [key]: { ...(option[key] || {}), [field]: value } });
	};

	const addAvailWindow = () => {
		const prev = option.availability?.windows || [];
		set({
			availability: {
				...(option.availability || {}),
				windows: [...prev, { from: '', to: '' }],
			},
		});
	};

	const updateAvailWindow = (i, val) => {
		const windows = [...(option.availability?.windows || [])];
		windows[i] = { from: val.from || '', to: val.to || '' };
		set({
			availability: { ...(option.availability || {}), windows },
		});
	};

	const removeAvailWindow = (i) => {
		const windows = (option.availability?.windows || []).filter(
			(_, idx) => idx !== i
		);
		set({
			availability: { ...(option.availability || {}), windows },
		});
	};

	return (
		<div
			draggable
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDrop={onDrop}
			onDragEnd={onDragEnd}
			className={`border rounded p-4 space-y-4 bg-white shadow-sm transition 
        ${isDragging ? 'cursor-grabbing ring-2 ring-blue-500 opacity-70' : ''} 
        ${isHover ? 'ring-2 ring-blue-300' : ''}`}>
			{/* Header */}
			<div className='flex items-center justify-between gap-3'>
				<div className='flex-1'>
					<label className='block text-sm font-medium'>Όνομα add‑on</label>
					<input
						type='text'
						value={option.label || ''}
						onChange={(e) => set({ label: e.target.value })}
						className='w-full border rounded px-3 py-2 h-10 text-sm'
						placeholder='π.χ. GoPro kit'
					/>
				</div>
				<button
					type='button'
					onClick={onRemove}
					className='text-red-600 hover:text-red-700 flex items-center gap-1'
					title='Διαγραφή'>
					<Trash2 className='w-5 h-5' />
				</button>
			</div>

			{/* Description */}
			<div>
				<label className='block text-sm font-medium'>Περιγραφή</label>
				<textarea
					rows={2}
					value={option.description || ''}
					onChange={(e) => set({ description: e.target.value })}
					className='w-full border rounded px-3 py-2 text-sm'
					placeholder='Σύντομη περιγραφή...'
				/>
			</div>

			{/* Flags */}
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
				<ToggleSwitch
					checked={!!option.isActive}
					onChange={(v) => set({ isActive: v })}
					label='Ενεργό'
					enabledLabel='Ναι'
					disabledLabel='Όχι'
				/>
				<ToggleSwitch
					checked={!!option.required}
					onChange={(v) => set({ required: v })}
					label='Υποχρεωτικό'
					enabledLabel='Ναι'
					disabledLabel='Όχι'
				/>
				<ToggleSwitch
					checked={!!option.defaultSelected}
					onChange={(v) => set({ defaultSelected: v })}
					label='Προεπιλεγμένο'
					enabledLabel='Ναι'
					disabledLabel='Όχι'
				/>
			</div>

			{/* Pricing */}
			<div className='border rounded p-3 space-y-2'>
				<div className='font-medium text-sm'>Τιμολόγηση</div>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
					<div>
						<label className='block text-sm'>Mode</label>
						<select
							className='w-full border rounded px-3 py-2 h-10 text-sm'
							value={option.pricing?.mode || 'per_booking'}
							onChange={(e) => setNested('pricing', 'mode', e.target.value)}>
							{ADDON_PRICING_MODES.map((m) => (
								<option
									key={m.value}
									value={m.value}>
									{m.label}
								</option>
							))}
						</select>
					</div>
					<div>
						<label className='block text-sm'>Τιμή</label>
						<input
							type='number'
							min='0'
							step='0.01'
							className='w-full border rounded px-3 py-2 h-10 text-sm'
							value={option.pricing?.price ?? 0}
							onChange={(e) =>
								setNested(
									'pricing',
									'price',
									e.target.value === '' ? 0 : Number(e.target.value)
								)
							}
						/>
					</div>
					<div>
						<label className='block text-sm'>Νόμισμα</label>
						<input
							type='text'
							className='w-full border rounded px-3 py-2 h-10 text-sm'
							value={option.pricing?.currency || 'EUR'}
							onChange={(e) => setNested('pricing', 'currency', e.target.value)}
							placeholder='EUR'
						/>
					</div>
				</div>
			</div>

			{/* Quantity */}
			<div className='border rounded p-3 space-y-2'>
				<div className='font-medium text-sm'>Ποσότητα (ανά κράτηση)</div>
				<div className='grid grid-cols-3 gap-3'>
					<div>
						<label className='block text-sm'>Min</label>
						<input
							type='number'
							className='w-full border rounded px-3 py-2 h-10 text-sm'
							value={option.quantity?.min ?? 0}
							onChange={(e) =>
								setNested(
									'quantity',
									'min',
									e.target.value === '' ? 0 : Number(e.target.value)
								)
							}
						/>
					</div>
					<div>
						<label className='block text-sm'>Max</label>
						<input
							type='number'
							className='w-full border rounded px-3 py-2 h-10 text-sm'
							value={option.quantity?.max ?? 1}
							onChange={(e) =>
								setNested(
									'quantity',
									'max',
									e.target.value === '' ? 1 : Number(e.target.value)
								)
							}
						/>
					</div>
					<div>
						<label className='block text-sm'>Βήμα</label>
						<input
							type='number'
							min='1'
							className='w-full border rounded px-3 py-2 h-10 text-sm'
							value={option.quantity?.step ?? 1}
							onChange={(e) =>
								setNested(
									'quantity',
									'step',
									e.target.value === '' ? 1 : Number(e.target.value)
								)
							}
						/>
					</div>
				</div>
			</div>

			{/* Inventory */}
			<div className='border rounded p-3 space-y-2'>
				<div className='font-medium text-sm'>Απόθεμα</div>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
					<div className='sm:col-span-1'>
						<label className='block text-sm'>Τύπος</label>
						<select
							className='w-full border rounded px-3 py-2 h-10 text-sm'
							value={option.inventory?.mode || 'unlimited'}
							onChange={(e) => setNested('inventory', 'mode', e.target.value)}>
							{ADDON_INVENTORY_MODES.map((m) => (
								<option
									key={m.value}
									value={m.value}>
									{m.label}
								</option>
							))}
						</select>
					</div>
					{option.inventory?.mode === 'limited' && (
						<div className='sm:col-span-2'>
							<label className='block text-sm'>Συνολικά διαθέσιμα</label>
							<input
								type='number'
								min='0'
								className='w-full border rounded px-3 py-2 h-10 text-sm'
								value={option.inventory?.total ?? 0}
								onChange={(e) =>
									setNested(
										'inventory',
										'total',
										e.target.value === '' ? 0 : Number(e.target.value)
									)
								}
							/>
						</div>
					)}
				</div>
			</div>

			{/* Availability windows */}
			<div className='border rounded p-3 space-y-2'>
				<div className='flex items-center justify-between'>
					<div className='font-medium text-sm'>Διαθεσιμότητα (προαιρετικό)</div>
					<button
						type='button'
						onClick={addAvailWindow}
						className='text-blue-600 text-sm hover:underline'>
						+ Προσθήκη διαστήματος
					</button>
				</div>

				{(option.availability?.windows || []).length === 0 && (
					<p className='text-sm text-gray-500'>Δεν έχουν οριστεί διαστήματα.</p>
				)}

				<div className='space-y-2'>
					{(option.availability?.windows || []).map((w, i) => (
						<div
							key={i}
							className='border rounded p-2'>
							<DateRangeInputs
								from={w.from || ''}
								to={w.to || ''}
								onChange={(val) => updateAvailWindow(i, val)}
							/>
							<div className='flex justify-end mt-2'>
								<button
									type='button'
									onClick={() => removeAvailWindow(i)}
									className='text-red-600 text-xs hover:underline'>
									Αφαίρεση
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* (προαιρετικά) Visibility rules – μπορείς να το εξελίξεις */}
			{/* <div className="border rounded p-3 space-y-2">
        <div className="font-medium text-sm">Visibility Rules</div>
        // Προσάρμοσε inputs ανάλογα με τα rules που θέλεις να υποστηρίξεις
      </div> */}
		</div>
	);
}
