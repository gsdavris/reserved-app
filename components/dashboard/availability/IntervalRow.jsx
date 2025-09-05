'use client';

import TimePickerDynamic from '@/components/ui/TimePickerDynamic';
import { Trash2 } from 'lucide-react';

export default function IntervalRow({
	value = {},
	onChange = () => {},
	onRemove = () => {},
	disabled = false,
}) {
	return (
		<div className='flex items-center gap-2'>
			<TimePickerDynamic
				mode='range'
				value={{ start: value.start || null, end: value.end || null }}
				onChange={(r) =>
					onChange({ ...value, start: r?.start || null, end: r?.end || null })
				}
				step={5}
				displayFormat='24h' // ή '12h'
				allow24End={true}
				hideLabel
				ui='wheel'
			/>
			<div className='flex-1' />
			<button
				type='button'
				onClick={onRemove}
				title='Αφαίρεση διαστήματος'
				aria-label='Αφαίρεση διαστήματος'
				disabled={disabled}
				className='text-red-600 hover:text-red-800 inline-flex items-center justify-center h-9 w-9 border rounded disabled:opacity-50 disabled:cursor-not-allowed'>
				<Trash2 className='w-4 h-4' />
			</button>
		</div>
	);
}
