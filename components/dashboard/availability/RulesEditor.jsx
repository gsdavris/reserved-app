'use client';

import { useMemo } from 'react';
import DatePickerDynamic from '@/components/ui/DatePickerDynamic';
import DropdownSelect from '@/components/ui/DropdownSelect';
import { PlusCircle, Trash2 } from 'lucide-react';

const DOW = [
	{ key: 'MO', label: 'Δε', val: 1 },
	{ key: 'TU', label: 'Τρ', val: 2 },
	{ key: 'WE', label: 'Τε', val: 3 },
	{ key: 'TH', label: 'Πε', val: 4 },
	{ key: 'FR', label: 'Πα', val: 5 },
	{ key: 'SA', label: 'Σα', val: 6 },
	{ key: 'SU', label: 'Κυ', val: 0 },
];

// Default weekly rule: Δευ-Παρ 09:00–17:00, χωρίς date range
const DEFAULT_RULE = {
	kind: 'weekly',
	days: ['MO', 'TU', 'WE', 'TH', 'FR'],
	startTime: '09:00',
	endTime: '17:00',
	dateRange: { from: null, to: null },
	label: '',
};

const KIND_OPTIONS = [{ label: 'Εβδομαδιαίο', value: 'weekly' }];

export default function RulesEditor({ value = [], onChange = () => {} }) {
	const rules = useMemo(() => (Array.isArray(value) ? value : []), [value]);

	const setRule = (index, patch) => {
		const next = [...rules];
		next[index] = { ...next[index], ...patch };
		onChange(next);
	};

	const addRule = () => {
		onChange([...rules, { ...DEFAULT_RULE }]);
	};

	const removeRule = (index) => {
		const next = rules.filter((_, i) => i !== index);
		onChange(next);
	};

	const toggleDay = (index, dayKey) => {
		const cur = rules[index];
		const set = new Set(cur.days || []);
		if (set.has(dayKey)) set.delete(dayKey);
		else set.add(dayKey);
		setRule(index, { days: Array.from(set) });
	};

	const handleRangeChange = (index, range) => {
		const toISO = (d) =>
			d instanceof Date ? d.toISOString().slice(0, 10) : null;
		setRule(index, {
			dateRange: { from: toISO(range?.from), to: toISO(range?.to) },
		});
	};

	return (
		<div className='space-y-3'>
			<div className='flex items-center justify-between'>
				<h4 className='font-medium'>Κανόνες (Rules)</h4>
				<button
					type='button'
					onClick={addRule}
					className='inline-flex items-center gap-1 text-blue-600 text-sm hover:underline'>
					<PlusCircle className='w-4 h-4' /> Προσθήκη κανόνα
				</button>
			</div>

			{rules.length === 0 && (
				<div className='text-sm text-gray-600'>
					Δεν υπάρχουν κανόνες. Πρόσθεσε τον πρώτο.
				</div>
			)}

			{rules.map((rule, index) => (
				<div
					key={index}
					className='border rounded p-3 space-y-3 bg-white'>
					{/* Top actions row (align right) */}
					<div className='flex justify-end'>
						<button
							type='button'
							onClick={() => removeRule(index)}
							title='Αφαίρεση κανόνα'
							aria-label='Αφαίρεση κανόνα'
							className='text-red-600 hover:text-red-800 flex-shrink-0 inline-flex items-center justify-center h-9 w-9 border rounded'>
							<Trash2 className='w-4 h-4' />
						</button>
					</div>

					<div className='grid sm:grid-cols-2 gap-3'>
						<div>
							<label className='block text-sm font-medium mb-1'>
								Ετικέτα (προαιρετικό)
							</label>
							<input
								type='text'
								value={rule.label || ''}
								onChange={(e) => setRule(index, { label: e.target.value })}
								className='w-full border rounded px-3 h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none'
								placeholder='π.χ. Καθημερινές 09:00–17:00'
							/>
						</div>

						<div>
							<label className='block text-sm font-medium mb-1'>Είδος</label>
							<DropdownSelect
								options={KIND_OPTIONS}
								value={rule.kind || 'weekly'}
								onChange={(val) => setRule(index, { kind: val })}
							/>
						</div>
					</div>

					{/* Μέρες εβδομάδας */}
					<div>
						<label className='block text-sm font-medium mb-1'>Μέρες</label>
						<div className='flex flex-wrap gap-2'>
							{DOW.map((d) => {
								const active = (rule.days || []).includes(d.key);
								return (
									<button
										key={d.key}
										type='button'
										onClick={() => toggleDay(index, d.key)}
										className={`px-3 h-9 rounded border ${
											active
												? 'bg-blue-600 text-white border-blue-600'
												: 'bg-white text-gray-800'
										}`}
										aria-pressed={active}>
										{d.label}
									</button>
								);
							})}
						</div>
					</div>

					{/* Ώρες */}
					<div className='grid sm:grid-cols-2 gap-3'>
						<div>
							<label className='block text-sm font-medium mb-1'>Έναρξη</label>
							<input
								type='time'
								value={rule.startTime || ''}
								onChange={(e) => setRule(index, { startTime: e.target.value })}
								className='w-full border rounded px-3 h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium mb-1'>Λήξη</label>
							<input
								type='time'
								value={rule.endTime || ''}
								onChange={(e) => setRule(index, { endTime: e.target.value })}
								className='w-full border rounded px-3 h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none'
							/>
						</div>
					</div>

					{/* Προαιρετικό Date Range φίλτρο */}
					<div>
						<DatePickerDynamic
							mode='range'
							label='Ημερολογιακό εύρος (προαιρετικό)'
							value={{
								from: rule?.dateRange?.from
									? new Date(rule.dateRange.from)
									: null,
								to: rule?.dateRange?.to ? new Date(rule.dateRange.to) : null,
							}}
							onChange={(val) => handleRangeChange(index, val)}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
