'use client';

import { useMemo } from 'react';
import DropdownSelect from '@/components/ui/DropdownSelect';

const STRATEGY_OPTIONS = [
	{ label: 'Fixed (ίδια διάρκεια, σταθερό interval)', value: 'FIXED' },
	{ label: 'Flex (θα οριστεί αργότερα)', value: 'FLEX' },
];

// helper: μετατρέπει raw -> integer ή null, με min floor
function toIntOrNull(raw, min = 0) {
	if (raw === '' || raw === null || raw === undefined) return null;
	const n = parseInt(raw, 10);
	if (Number.isNaN(n)) return null;
	return Math.max(min, n);
}

export default function SlotConfig({ value = {}, onChange = () => {} }) {
	const v = {
		strategy: value.strategy || 'FIXED',
		durationMin:
			value.durationMin === 0 || Number.isInteger(value.durationMin)
				? value.durationMin
				: 60,
		intervalMin:
			value.intervalMin === 0 || Number.isInteger(value.intervalMin)
				? value.intervalMin
				: 60,
		bufferBeforeMin:
			value.bufferBeforeMin === 0 || Number.isInteger(value.bufferBeforeMin)
				? value.bufferBeforeMin
				: 0,
		bufferAfterMin:
			value.bufferAfterMin === 0 || Number.isInteger(value.bufferAfterMin)
				? value.bufferAfterMin
				: 0,
	};

	const set = (patch) => onChange({ ...v, ...patch });

	const strategyOption = useMemo(
		() =>
			STRATEGY_OPTIONS.find((o) => o.value === v.strategy) ||
			STRATEGY_OPTIONS[0],
		[v.strategy]
	);

	const isFlex = v.strategy === 'FLEX';

	// Normalizers: σε FLEX γυρνάμε null για να είναι προαιρετικά
	const handleDuration = (raw) => {
		if (isFlex) return set({ durationMin: null });
		const n = toIntOrNull(raw, 1); // >=1
		if (n === null) return; // μην περάσεις NaN
		set({ durationMin: n });
	};
	const handleInterval = (raw) => {
		if (isFlex) return set({ intervalMin: null });
		const n = toIntOrNull(raw, 0); // >=0
		if (n === null) return;
		set({ intervalMin: n });
	};
	const handleBufferBefore = (raw) => {
		const n = toIntOrNull(raw, 0);
		if (n === null) return;
		set({ bufferBeforeMin: n });
	};
	const handleBufferAfter = (raw) => {
		const n = toIntOrNull(raw, 0);
		if (n === null) return;
		set({ bufferAfterMin: n });
	};

	// onBlur “ασφάλεια”: FIXED απαιτεί duration>=1, interval>=0
	const normalizeDurationOnBlur = () => {
		if (isFlex) return; // αφήνουμε null
		if (!Number.isInteger(v.durationMin) || v.durationMin < 1) {
			set({ durationMin: 60 });
		}
	};
	const normalizeIntervalOnBlur = () => {
		if (isFlex) return;
		if (!Number.isInteger(v.intervalMin) || v.intervalMin < 0) {
			set({ intervalMin: 60 });
		}
	};

	return (
		<div className='border rounded p-3'>
			<div className='font-medium mb-2'>Slot</div>

			<div className='grid sm:grid-cols-2 gap-3'>
				{/* Strategy */}
				<div>
					<label className='block text-sm font-medium mb-1'>Στρατηγική</label>
					<DropdownSelect
						options={STRATEGY_OPTIONS}
						value={strategyOption.value}
						onChange={(val) => {
							// όταν γυρνάμε σε FLEX, κάνε τα duration/interval null
							if (val === 'FLEX') {
								set({ strategy: val, durationMin: null, intervalMin: null });
							} else {
								// FIXED: βάλε default αν είναι null
								set({
									strategy: val,
									durationMin: Number.isInteger(v.durationMin)
										? v.durationMin
										: 60,
									intervalMin: Number.isInteger(v.intervalMin)
										? v.intervalMin
										: 60,
								});
							}
						}}
					/>
				</div>

				{/* Duration */}
				<div>
					<label className='block text-sm font-medium mb-1'>
						Διάρκεια (λεπτά)
					</label>
					<input
						type='number'
						inputMode='numeric'
						className='w-full border rounded px-3 h-10 disabled:opacity-60 focus:ring-2 focus:ring-blue-500 focus:outline-none'
						placeholder={isFlex ? '—' : ''}
						min={1}
						value={isFlex ? '' : v.durationMin ?? ''}
						onChange={(e) => handleDuration(e.target.value)}
						onBlur={normalizeDurationOnBlur}
						disabled={isFlex}
					/>
					<p className='mt-1 text-xs text-gray-500'>
						{isFlex
							? 'Στη FLEX στρατηγική δεν απαιτείται διάρκεια εδώ.'
							: 'Υποχρεωτικό για FIXED.'}
					</p>
				</div>

				{/* Interval */}
				<div>
					<label className='block text-sm font-medium mb-1'>
						Interval (λεπτά)
					</label>
					<input
						type='number'
						inputMode='numeric'
						className='w-full border rounded px-3 h-10 disabled:opacity-60 focus:ring-2 focus:ring-blue-500 focus:outline-none'
						placeholder={isFlex ? '—' : ''}
						min={0}
						value={isFlex ? '' : v.intervalMin ?? ''}
						onChange={(e) => handleInterval(e.target.value)}
						onBlur={normalizeIntervalOnBlur}
						disabled={isFlex}
					/>
					{!isFlex && (
						<p className='mt-1 text-xs text-gray-500'>
							Μπορεί να είναι και 0 (back-to-back).
						</p>
					)}
				</div>

				{/* Buffers */}
				<div className='grid grid-cols-2 gap-3'>
					<div>
						<label className='block text-sm font-medium mb-1'>
							Buffer πριν
						</label>
						<input
							type='number'
							inputMode='numeric'
							className='w-full border rounded px-3 h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none'
							min={0}
							value={v.bufferBeforeMin ?? 0}
							onChange={(e) => handleBufferBefore(e.target.value)}
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>
							Buffer μετά
						</label>
						<input
							type='number'
							inputMode='numeric'
							className='w-full border rounded px-3 h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none'
							min={0}
							value={v.bufferAfterMin ?? 0}
							onChange={(e) => handleBufferAfter(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
