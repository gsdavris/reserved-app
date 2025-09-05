'use client';

import { useState, useEffect, useMemo } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { format } from 'date-fns';
import {
	at00,
	normalizeRange,
	mergeRanges,
	daysBetweenExclusive,
	uniqDates,
} from '@/lib/utils/dateRanges';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { CalendarIcon, X } from 'lucide-react';

/**
 * Props:
 * - mode: 'single' | 'range' | 'multiple' | 'multi-range'
 * - value:
 *   single      -> Date|null
 *   range       -> {from?:Date|null, to?:Date|null}
 *   multiple    -> Date[]
 *   multi-range -> Array<{from:Date|null, to:Date|null}>
 * - label?: string | null (αν null, δεν εμφανίζεται καθόλου)
 * - labelByMode?: { single?, range?, multiple?, 'multi-range'? }
 * - hideLabel?: boolean (shortcut για απόκρυψη)
 */
export default function DatePickerDynamic({
	mode = 'range',
	value,
	onChange,
	disabled = false,
	dayPickerProps = {},
	showPreview = false,
	label = undefined,
	labelByMode = {},
	hideLabel = false,
	disablePast = true,
}) {
	const [selected, setSelected] = useState(value);
	const [anchor, setAnchor] = useState(null); // μόνο για multi-range

	useEffect(() => {
		setSelected(value);
	}, [value]);

	const handleClear = () => {
		let cleared;
		if (mode === 'multiple') cleared = [];
		else if (mode === 'range') cleared = { from: null, to: null };
		else if (mode === 'multi-range') cleared = [];
		else cleared = null; // single
		setAnchor(null);
		setSelected(cleared);
		onChange?.(cleared);
	};

	const handleSelectStandard = (val) => {
		setSelected(val);
		onChange?.(val);
	};

	const handleDayClickMultiRange = (day) => {
		if (disabled) return;
		const d = at00(day);
		const current = Array.isArray(selected) ? selected : [];

		if (!anchor) {
			setAnchor(d);
			return;
		}

		const range = normalizeRange({ from: anchor, to: d || anchor });
		const next = mergeRanges([...current, range]);
		setAnchor(null);
		setSelected(next);
		onChange?.(next);
	};

	const formatDate = (date) => (date ? format(date, 'dd/MM/yyyy') : '—');

	const buttonText = useMemo(() => {
		if (mode === 'single')
			return selected ? formatDate(selected) : 'Επιλέξτε ημερομηνία';
		if (mode === 'range')
			return `${formatDate(selected?.from)} – ${formatDate(selected?.to)}`;
		if (mode === 'multiple')
			return selected?.length
				? `${selected.length} ημερομηνίες`
				: 'Επιλέξτε ημερομηνίες';
		if (mode === 'multi-range')
			return Array.isArray(selected) && selected.length
				? selected.length === 1
					? `${selected.length} διάστημα`
					: `${selected.length} διαστήματα`
				: 'Επιλέξτε διαστήματα';
		return '';
	}, [mode, selected]);

	const baseDisabled = disablePast ? { before: at00(new Date()) } : undefined;

	const commonDP = {
		numberOfMonths: mode === 'range' || mode === 'multi-range' ? 2 : 1,
		showOutsideDays: true,
		weekStartsOn: 1,
		disabled: { ...(baseDisabled || {}), ...(dayPickerProps.disabled || {}) },
		...dayPickerProps,
	};

	// ---- multi-range rendering: endpoints selected + range classes για styling ----
	const ranges = Array.isArray(selected) ? selected : [];
	const starts = ranges.map((r) => at00(r?.from)).filter(Boolean);
	const ends = ranges.map((r) => at00(r?.to)).filter(Boolean);
	const middles = ranges.flatMap((r) => daysBetweenExclusive(r?.from, r?.to));
	const endpoints = uniqDates([...starts, ...ends]); // μόνο άκρα => κύκλοι στα άκρα

	// NEW: default labels per mode (δεν σπάει τίποτα — μπορείς να τα κάνεις override)
	const defaultLabels = {
		single: 'Ημερομηνία',
		range: 'Ημερολογιακό εύρος',
		multiple: 'Ημερομηνίες',
		'multi-range': 'Διαστήματα',
	};
	const resolvedLabelText = hideLabel
		? null
		: label !== undefined
		? label // explicit
		: labelByMode?.[mode] ?? defaultLabels[mode] ?? '';

	return (
		<div className='w-full'>
			{resolvedLabelText !== null && (
				<div className='flex items-center justify-between mb-1'>
					<label className='block text-sm font-medium'>
						{resolvedLabelText}
					</label>
					{((mode === 'single' && selected) ||
						(mode === 'range' && selected?.from && selected?.to) ||
						(mode === 'multiple' && selected?.length > 0) ||
						(mode === 'multi-range' &&
							Array.isArray(selected) &&
							selected.length > 0) ||
						(mode === 'multi-range' && anchor)) && (
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
				<PopoverButton
					disabled={disabled}
					className='w-full h-10 px-3 border rounded text-left flex items-center justify-between text-sm bg-white hover:bg-gray-50 disabled:opacity-50'>
					<span>
						{buttonText}
						{mode === 'multi-range' && anchor && ' (επιλέξτε τέλος)'}
					</span>
					<CalendarIcon className='w-4 h-4 text-gray-500' />
				</PopoverButton>

				<PopoverPanel className='absolute z-10 mt-2 bg-white border rounded shadow-md p-4 w-auto'>
					{mode === 'multi-range' ? (
						<DayPicker
							{...commonDP}
							mode='multiple'
							selected={endpoints} // κύκλοι μόνο στα άκρα
							onDayClick={handleDayClickMultiRange}
							modifiers={{
								range_start: starts,
								range_end: ends,
								range_middle: middles,
								anchor: anchor ? [anchor] : [],
							}}
							modifiersClassNames={{
								// reuse τα built-in classnames του range mode για ίδιο look
								range_start: 'rdp-range_start',
								range_end: 'rdp-range_end',
								range_middle: 'rdp-range_middle',
							}}
						/>
					) : (
						<DayPicker
							{...commonDP}
							mode={mode}
							selected={selected}
							onSelect={handleSelectStandard}
						/>
					)}
				</PopoverPanel>
			</Popover>

			{showPreview &&
				mode === 'multi-range' &&
				Array.isArray(selected) &&
				selected.length > 0 && (
					<div className='mt-2 flex flex-wrap gap-2'>
						{selected.map((r, i) => (
							<span
								key={i}
								className='text-xs border rounded px-2 py-1 bg-gray-50'>
								{formatDate(r.from)} – {formatDate(r.to)}
							</span>
						))}
					</div>
				)}
		</div>
	);
}
