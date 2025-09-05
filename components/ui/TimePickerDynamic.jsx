'use client';

import { useEffect, useMemo, useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Clock, X } from 'lucide-react';
import {
	fmt12,
	formatDisplay,
	isValidRange,
	hoursList,
	minutesList,
} from '@/lib/utils/time';
import TimeSelectWheel from '@/components/ui/TimeSelectWheel';

// Μικρό εσωτερικό select-UI: 2 selects (ώρες/λεπτά)
function TimeSelect({
	value,
	onChange,
	step = 5,
	include24 = false, // μόνο για END
	disabled = false,
	displayFormat = '24h', // δεν επηρεάζει το value, μόνο την σήμανση στο button
}) {
	const h = value?.slice(0, 2) ?? '00';
	const m = value?.slice(3, 5) ?? '00';

	const hours = useMemo(() => hoursList(include24), [include24]);
	const minutes = useMemo(() => minutesList(step, h), [step, h]);

	// αν hour αλλάξει σε '24', το λεπτό πρέπει να είναι '00'
	const handleHourChange = (nextH) => {
		const nextM = nextH === '24' ? '00' : m;
		onChange?.(`${nextH}:${nextM}`);
	};
	const handleMinuteChange = (nextM) => {
		onChange?.(`${h}:${nextM}`);
	};

	return (
		<div className='flex items-center gap-2'>
			<select
				aria-label='Ώρα'
				value={h}
				onChange={(e) => handleHourChange(e.target.value)}
				disabled={disabled}
				className='border rounded px-2 h-9 bg-white disabled:bg-gray-100'>
				{hours.map((hh) => (
					<option
						key={hh}
						value={hh}>
						{displayFormat === '12h'
							? fmt12(`${hh}:00`).replace(':00 ', ' ')
							: hh}
					</option>
				))}
			</select>

			<span className='text-gray-500'>:</span>

			<select
				aria-label='Λεπτά'
				value={minutes.includes(m) ? m : minutes[0]}
				onChange={(e) => handleMinuteChange(e.target.value)}
				disabled={disabled}
				className='border rounded px-2 h-9 bg-white disabled:bg-gray-100'>
				{minutes.map((mm) => (
					<option
						key={mm}
						value={mm}>
						{mm}
					</option>
				))}
			</select>
		</div>
	);
}

/**
 * TimePickerDynamic
 *
 * Props:
 * - mode: 'single' | 'range'
 * - value:
 *    single -> 'HH:mm' | null
 *    range  -> { start: 'HH:mm'|null, end: 'HH:mm'|null }
 * - onChange(next)
 * - step?: number (default 5 minutes)
 * - displayFormat?: '24h' | '12h'  (default '24h' — affects ONLY labels)
 * - allow24End?: boolean (default true)  // επιτρέπεται end=24:00
 * - label, hideLabel: όπως στο DatePickerDynamic
 * - disabled?: boolean
 */
export default function TimePickerDynamic({
	mode = 'range',
	value,
	onChange,
	step = 5,
	displayFormat = '24h',
	allow24End = true,
	label = undefined,
	hideLabel = false,
	disabled = false,
	ui = 'wheel',
}) {
	const [selected, setSelected] = useState(value);

	useEffect(() => {
		setSelected(value);
	}, [value]);

	const handleClear = () => {
		const cleared = mode === 'range' ? { start: null, end: null } : null;
		setSelected(cleared);
		onChange?.(cleared);
	};

	// ---- single handlers ----
	const setSingle = (t) => {
		setSelected(t);
		onChange?.(t);
	};

	// ---- range handlers ----
	const setRangeStart = (t) => {
		const cur = selected || { start: null, end: null };
		const next = { ...cur, start: t };
		setSelected(next);
		if (next.start && next.end && isValidRange(next.start, next.end)) {
			onChange?.(next);
		}
	};
	const setRangeEnd = (t) => {
		const cur = selected || { start: null, end: null };
		// αν δεν επιτρέπεται 24:00, clamp σε 23:59 (ή σε κοντινότερο βήμα)
		const legal = t === '24:00' && !allow24End ? '23:59' : t;
		const next = { ...cur, end: legal };
		setSelected(next);
		if (next.start && next.end && isValidRange(next.start, next.end)) {
			onChange?.(next);
		}
	};

	const setFullDay = () => {
		if (mode !== 'range') return;
		const next = { start: '00:00', end: '24:00' };
		setSelected(next);
		onChange?.(next);
	};

	const buttonText = useMemo(() => {
		if (mode === 'single') {
			return selected ? formatDisplay(selected, displayFormat) : 'Επιλέξτε ώρα';
		}
		const s = selected?.start;
		const e = selected?.end;
		if (!s && !e) return 'Επιλέξτε ώρες';
		if (!s || !e)
			return `${formatDisplay(s, displayFormat)} – ${formatDisplay(
				e,
				displayFormat
			)}`;
		return `${formatDisplay(s, displayFormat)} – ${formatDisplay(
			e,
			displayFormat
		)}`;
	}, [mode, selected, displayFormat]);

	const defaultLabels = {
		single: 'Ώρα',
		range: 'Ωράριο',
	};
	const resolvedLabelText = hideLabel ? null : label ?? defaultLabels[mode];

	const canClear =
		(!disabled && mode === 'single' && !!selected) ||
		(!disabled && mode === 'range' && (selected?.start || selected?.end));

	const hasError =
		mode === 'range' &&
		selected?.start &&
		selected?.end &&
		!isValidRange(selected.start, selected.end);

	return (
		<div className='w-full'>
			{resolvedLabelText !== null && (
				<div className='flex items-center justify-between mb-1'>
					<label className='block text-sm font-medium'>
						{resolvedLabelText}
					</label>
					{canClear && (
						<button
							type='button'
							onClick={handleClear}
							className='text-xs text-gray-500 hover:text-red-600 inline-flex items-center gap-1'>
							<X className='w-3 h-3' /> Καθαρισμός
						</button>
					)}
				</div>
			)}

			<Popover className='relative'>
				{({ open, close }) => (
					<>
						<PopoverButton
							disabled={disabled}
							aria-expanded={open}
							className='w-full h-10 px-3 border rounded text-left flex items-center justify-between text-sm bg-white hover:bg-gray-50 disabled:opacity-50'>
							<span>{buttonText}</span>
							<Clock className='w-4 h-4 text-gray-500' />
						</PopoverButton>

						<PopoverPanel
							unmount={false} // κρατά το DOM για να μη remount-άρει
							className='absolute z-10 mt-2 bg-white border rounded shadow-md p-3 sm:p-4 min-w-full max-w-[92vw] overflow-hidden'>
							{mode === 'single' ? (
								<div className='flex items-center gap-3'>
									{ui === 'wheel' ? (
										<TimeSelectWheel
											value={selected || '09:00'}
											onChange={setSingle}
											step={step}
											include24={false}
											disabled={disabled}
											displayFormat={displayFormat}
										/>
									) : (
										<TimeSelect
											value={selected || '09:00'}
											onChange={setSingle}
											step={step}
											include24={false}
											disabled={disabled}
											displayFormat={displayFormat}
										/>
									)}
								</div>
							) : (
								<div className='space-y-3'>
									<div className='flex sm:items-stretch gap-8'>
										<div className='flex-1'>
											<div className='text-xs text-gray-500 mb-1'>Έναρξη</div>
											{ui === 'wheel' ? (
												<TimeSelectWheel
													value={selected?.start || '09:00'}
													onChange={setRangeStart}
													step={step}
													include24={false}
													disabled={disabled}
													displayFormat={displayFormat}
												/>
											) : (
												<TimeSelect
													value={selected?.start || '09:00'}
													onChange={setRangeStart}
													step={step}
													include24={false}
													disabled={disabled}
													displayFormat={displayFormat}
												/>
											)}
										</div>
										<div className='flex-1'>
											<div className='text-xs text-gray-500 mb-1'>Λήξη</div>
											{ui === 'wheel' ? (
												<TimeSelectWheel
													value={selected?.end || '17:00'}
													onChange={setRangeEnd}
													step={step}
													include24={allow24End}
													disabled={disabled}
													displayFormat={displayFormat}
												/>
											) : (
												<TimeSelect
													value={selected?.end || '17:00'}
													onChange={setRangeEnd}
													step={step}
													include24={allow24End}
													disabled={disabled}
													displayFormat={displayFormat}
												/>
											)}
										</div>
									</div>

									<div className='flex items-center justify-between pt-1'>
										<button
											type='button'
											onClick={setFullDay}
											disabled={disabled || !allow24End}
											title='00:00 – 24:00'
											className='text-xs inline-flex items-center gap-2 px-2 py-1 border rounded hover:bg-gray-50 disabled:opacity-50'>
											24 ώρες (00:00–24:00)
										</button>
										{hasError && (
											<span className='text-xs text-red-600'>
												Η έναρξη πρέπει να είναι πριν τη λήξη.
											</span>
										)}
									</div>

									{/* Mobile-only κουμπί για κλείσιμο */}
									<div className='flex justify-end pt-1 sm:hidden'>
										<button
											type='button'
											onClick={() => close()}
											className='px-3 h-9 border rounded text-sm'>
											Έτοιμο
										</button>
									</div>
								</div>
							)}
						</PopoverPanel>
					</>
				)}
			</Popover>
		</div>
	);
}
