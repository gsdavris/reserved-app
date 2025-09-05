'use client';

import DatePickerDynamic from '@/components/ui/DatePickerDynamic';
import ChipsRow from '@/components/ui/ChipsRow';
import { format } from 'date-fns';

const toDate = (v) => (v instanceof Date ? v : v ? new Date(v) : null);
const toISODate = (d) => {
	if (!d) return null;
	const utc = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	return utc.toISOString().slice(0, 10);
};

/**
 * value: [{ date: 'YYYY-MM-DD' }, ...] | null
 */
export default function ExceptionsEditor({
	value = null,
	onChange = () => {},
}) {
	const arr = Array.isArray(value) ? value : [];

	const setDates = (dates) => {
		const seen = new Set();
		const list = (dates || [])
			.map((d) => toISODate(d))
			.filter(Boolean)
			.filter((d) => !seen.has(d) && seen.add(d)) // remove duplicates
			.sort() // YYYY-MM-DD sorts lexicographically ok
			.map((date) => ({ date }));
		onChange(list.length ? list : null);
	};

	const removeAt = (idx) => {
		const next = arr.filter((_, i) => i !== idx);
		onChange(next.length ? next : null);
	};

	return (
		<div className='space-y-3'>
			<h4 className='font-medium'>Εξαιρέσεις (Κλειστές μέρες)</h4>

			<DatePickerDynamic
				mode='multiple'
				label='Επιλέξτε ημέρες που ΔΕΝ λειτουργείτε'
				value={arr.map((x) => toDate(x.date))}
				onChange={(dates) => setDates(dates)}
				disablePast={false}
			/>

			{arr.length > 0 && (
				<div className='mt-1'>
					<ChipsRow
						items={arr.map((x, i) => ({
							id: i,
							label: x.date ? format(toDate(x.date), 'dd/MM/yyyy') : '—',
						}))}
						onRemove={(item) => removeAt(item.id)}
						variant='outline'
						size='xs'
					/>
				</div>
			)}
		</div>
	);
}
