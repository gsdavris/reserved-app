'use client';

import { Trash2 } from 'lucide-react';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import DropdownSelect from '@/components/ui/DropdownSelect';
import DatePickerDynamic from '@/components/ui/DatePickerDynamic';
import ChipsRow from '@/components/ui/ChipsRow';
import { format } from 'date-fns';
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
	const isHover = hoverIndex === index && dragIndex !== index;

	const set = (patch) => updateOption({ ...option, ...patch });
	const setNested = (key, field, value) => {
		set({ [key]: { ...(option[key] || {}), [field]: value } });
	};

	// ---- helpers για availability windows (multi-range) ----
	const toDate = (val) =>
		val instanceof Date ? val : val ? new Date(val) : null;
	const toISODate = (d) => {
		if (!d) return null;
		const utc = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
		return utc.toISOString().slice(0, 10); // YYYY-MM-DD
	};

	const setAvailabilityWindows = (windows) => {
		set({
			availability: {
				...(option.availability || {}),
				windows,
			},
		});
	};

	const removeRangeAt = (i) => {
		const next = (option.availability?.windows || []).filter(
			(_, idx) => idx !== i
		);
		setAvailabilityWindows(next);
	};
	// -------------------------------------------------------

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
			{/* Header */}
			<div className='flex items-center justify-between gap-3'>
				<div className='flex-1'>
					<label className='block text-sm font-medium'>Όνομα add-on</label>
					<input
						type='text'
						value={option.label || ''}
						onChange={(e) => set({ label: e.target.value })}
						className='w-full border rounded px-3 py-2 h-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
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
					className='w-full border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
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
			<div className='border rounded p-3 space-y-3'>
				<div className='font-medium text-sm'>Τιμολόγηση</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
					<div className='w-full'>
						<label className='block text-sm mb-1'>Mode</label>
						<DropdownSelect
							label='Mode'
							options={ADDON_PRICING_MODES.map((o) => ({
								label: o.label,
								value: o.value,
							}))}
							value={option.pricing?.mode || 'per_booking'}
							onChange={(val) => setNested('pricing', 'mode', val)}
							className='w-full text-sm'
						/>
					</div>
					<div className='w-full'>
						<label className='block text-sm mb-1'>Τιμή</label>
						<input
							type='number'
							min='0'
							step='0.01'
							className='w-full border rounded px-3 py-2 h-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
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
							className='w-full border rounded px-3 py-2 h-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
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
							className='w-full border rounded px-3 py-2 h-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
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
							className='w-full border rounded px-3 py-2 h-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
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
			<div className='border rounded p-3 space-y-3'>
				<div className='font-medium text-sm'>Απόθεμα</div>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
					<div className='w-full'>
						<label className='block text-sm mb-1'>Τύπος</label>
						<DropdownSelect
							label='Τύπος'
							options={ADDON_INVENTORY_MODES.map((o) => ({
								label: o.label,
								value: o.value,
							}))}
							value={option.inventory?.mode || 'unlimited'}
							onChange={(val) => setNested('inventory', 'mode', val)}
							className='w-full text-sm'
						/>
					</div>
					{option.inventory?.mode === 'limited' && (
						<div className='sm:col-span-2 w-full'>
							<label className='block text-sm mb-1'>Συνολικά διαθέσιμα</label>
							<input
								type='number'
								min='0'
								className='w-full border rounded px-3 py-2 h-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
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

			{/* Availability (multi-range) */}
			<div className='border rounded p-3 space-y-2'>
				<div className='flex items-center justify-between'>
					<div className='font-medium text-sm'>Διαθεσιμότητα (προαιρετικό)</div>
				</div>

				<DatePickerDynamic
					mode='multi-range'
					value={(option.availability?.windows || []).map((w) => ({
						from: toDate(w.from),
						to: toDate(w.to),
					}))}
					onChange={(ranges) => {
						const windows = (ranges || []).map((r) => ({
							from: toISODate(r?.from),
							to: toISODate(r?.to),
						}));
						setAvailabilityWindows(windows);
					}}
				/>

				{(option.availability?.windows || []).length > 0 ? (
					<div className='mt-2'>
						<ChipsRow
							items={(option.availability?.windows || []).map((w, i) => ({
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
				) : (
					<p className='text-sm text-gray-500'>Δεν έχουν οριστεί διαστήματα.</p>
				)}
			</div>

			{/* (προαιρετικά) Visibility rules */}
			{/* <div className="border rounded p-3 space-y-2">
        <div className="font-medium text-sm">Visibility Rules</div>
      </div> */}
		</div>
	);
}
