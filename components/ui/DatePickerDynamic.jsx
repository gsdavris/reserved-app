'use client';

import { useState, useEffect } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { CalendarIcon, X } from 'lucide-react';

export default function DatePickerDynamic({
	mode = 'range',
	value,
	onChange,
	disabled = false,
}) {
	const [selected, setSelected] = useState(() => value);

	useEffect(() => {
		setSelected(value);
	}, [value]);

	const handleSelect = (val) => {
		setSelected(val);
		onChange(val);
	};

	const handleClear = () => {
		const cleared =
			mode === 'multiple'
				? []
				: mode === 'range'
				? { from: null, to: null }
				: null;
		setSelected(cleared);
		onChange(cleared);
	};

	const formatDate = (date) => (date ? format(date, 'dd/MM/yyyy') : '—');

	let label = '';
	if (mode === 'single') {
		label = selected ? formatDate(selected) : 'Επιλέξτε ημερομηνία';
	} else if (mode === 'range') {
		label = `${formatDate(selected?.from)} – ${formatDate(selected?.to)}`;
	} else if (mode === 'multiple') {
		label =
			selected?.length > 0
				? `${selected.length} ημερομηνίες`
				: 'Επιλέξτε ημερομηνίες';
	}

	return (
		<div className='w-full'>
			<div className='flex items-center justify-between mb-1'>
				<label className='block text-sm font-medium'>
					Ημερομηνίες Διαθεσιμότητας
				</label>
				{((mode === 'single' && selected) ||
					(mode === 'range' && selected?.from && selected?.to) ||
					(mode === 'multiple' && selected?.length > 0)) && (
					<button
						type='button'
						onClick={handleClear}
						className='text-xs text-gray-500 hover:text-red-600 inline-flex items-center gap-1'>
						<X className='w-3 h-3' /> Καθαρισμός
					</button>
				)}
			</div>

			<Popover className='relative'>
				<PopoverButton
					disabled={disabled}
					className='w-full h-10 px-3 border rounded text-left flex items-center justify-between text-sm bg-white hover:bg-gray-50 disabled:opacity-50'>
					<span>{label}</span>
					<CalendarIcon className='w-4 h-4 text-gray-500' />
				</PopoverButton>

				<PopoverPanel className='absolute z-10 mt-2 bg-white border rounded shadow-md p-4 w-auto'>
					<DayPicker
						mode={mode}
						selected={selected}
						onSelect={handleSelect}
						numberOfMonths={mode === 'range' ? 2 : 1}
						showOutsideDays
						weekStartsOn={1}
						disabled={{ before: new Date() }}
						className='flex justify-center'
					/>
				</PopoverPanel>
			</Popover>
		</div>
	);
}
