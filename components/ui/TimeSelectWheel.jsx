'use client';

import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { fmt12, hoursList, minutesList } from '@/lib/utils/time';

const ITEM_H = 32; // ύψος γραμμής
const VISIBLE_ROWS = 5; // πρέπει να είναι περιττός
const PAD_ROWS = (VISIBLE_ROWS - 1) / 2;
const CONTAINER_H = ITEM_H * VISIBLE_ROWS;

function formatHourLabel(hh, displayFormat) {
	if (displayFormat === '12h') {
		// π.χ. "12:00 AM" -> "12 AM"
		return fmt12(`${hh}:00`).replace(':00 ', ' ');
	}
	return hh;
}

/**
 * TimeSelectWheel
 * value: 'HH:mm' | null
 * onChange: (nextHHMM) => void
 * step: minutes step (default 5)
 * include24: αν true, επιτρέπει 24:00 (χρησιμοποιείται μόνο για END picker)
 * displayFormat: '24h' | '12h'
 * disabled
 */
export default function TimeSelectWheel({
	value,
	onChange,
	step = 5,
	include24 = false,
	displayFormat = '24h',
	disabled = false,
}) {
	const h = value?.slice(0, 2) ?? '00';
	const m = value?.slice(3, 5) ?? '00';

	const hours = useMemo(() => hoursList(include24), [include24]);
	const minutes = useMemo(() => minutesList(step, h), [step, h]);

	const hourRef = useRef(null);
	const minuteRef = useRef(null);
	const hourTimer = useRef(null);
	const minuteTimer = useRef(null);
	const isSyncingRef = useRef(false);

	// Scroll helpers
	const scrollToIndex = (ref, idx) => {
		if (!ref.current) return;
		isSyncingRef.current = true;
		// άμεσο scroll (όχι smooth) για να μη στείλει 100 events
		ref.current.scrollTo({ top: idx * ITEM_H, behavior: 'auto' });
		// άφησέ το για το επόμενο frame πριν ξεκλειδώσεις
		requestAnimationFrame(() => {
			isSyncingRef.current = false;
		});
	};

	// Init/Sync scroll positions with current value
	useLayoutEffect(() => {
		const hourIdx = Math.max(0, hours.indexOf(h));
		const minuteIdx = Math.max(0, minutes.indexOf(m));
		scrollToIndex(hourRef, hourIdx);
		scrollToIndex(minuteRef, minuteIdx);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [h, m, hours.join(','), minutes.join(',')]);

	// On scroll end -> snap to nearest & emit change
	const handleSnap = (which, ref, list) => {
		const el = ref.current;
		if (!el) return;
		const idx = Math.min(
			list.length - 1,
			Math.max(0, Math.round(el.scrollTop / ITEM_H))
		);
		const val = list[idx];

		if (which === 'hour') {
			// Αν επιλέχθηκε '24', λεπτό γίνεται '00'
			const nextH = val;
			const nextM =
				nextH === '24' ? '00' : minutes.includes(m) ? m : minutes[0] || '00';
			const next = `${nextH}:${nextM}`;
			if (next !== value) onChange?.(next);
			scrollToIndex(ref, idx);
		} else {
			const nextM = val;
			const next = `${h}:${nextM}`;
			if (next !== value) onChange?.(next);
			scrollToIndex(ref, idx);
		}
	};

	const onHourScroll = () => {
		if (isSyncingRef.current) return;
		if (hourTimer.current) clearTimeout(hourTimer.current);
		hourTimer.current = setTimeout(
			() => handleSnap('hour', hourRef, hours),
			120
		);
	};
	const onMinuteScroll = () => {
		if (isSyncingRef.current) return;
		if (minuteTimer.current) clearTimeout(minuteTimer.current);
		minuteTimer.current = setTimeout(
			() => handleSnap('minute', minuteRef, minutes),
			120
		);
	};

	// Keyboard support (↑/↓)
	const nudge = (which, delta) => {
		if (disabled) return;
		if (which === 'hour') {
			const idx = Math.max(0, hours.indexOf(h));
			const nextIdx = Math.min(hours.length - 1, Math.max(0, idx + delta));
			handleSnap('hour', hourRef, hours);
			scrollToIndex(hourRef, nextIdx);
		} else {
			const idx = Math.max(0, minutes.indexOf(m));
			const nextIdx = Math.min(minutes.length - 1, Math.max(0, idx + delta));
			handleSnap('minute', minuteRef, minutes);
			scrollToIndex(minuteRef, nextIdx);
		}
	};

	return (
		<div
			className={`flex items-center gap-2 ${
				disabled ? 'opacity-50 pointer-events-none' : ''
			}`}>
			{/* HOURS */}
			<div className='relative'>
				{/* highlight line */}
				<div
					className='pointer-events-none absolute left-0 right-0'
					style={{ top: ITEM_H * PAD_ROWS, height: ITEM_H }}>
					<div className='h-full border-y border-blue-200/50' />
				</div>

				<div
					ref={hourRef}
					role='listbox'
					aria-label='Ώρα'
					className='px-2 overflow-y-auto overscroll-contain snap-y snap-mandatory border rounded bg-white'
					style={{ height: CONTAINER_H }}
					onScroll={onHourScroll}
					onKeyDown={(e) => {
						if (e.key === 'ArrowUp') {
							e.preventDefault();
							nudge('hour', -1);
						}
						if (e.key === 'ArrowDown') {
							e.preventDefault();
							nudge('hour', +1);
						}
					}}
					tabIndex={0}>
					{/* top pad */}
					<div style={{ height: ITEM_H * PAD_ROWS }} />
					{hours.map((hh) => {
						const selected = hh === h;
						return (
							<div
								key={hh}
								role='option'
								aria-selected={selected}
								className={`h-8 flex items-center justify-center snap-center ${
									selected ? 'font-semibold text-blue-600' : 'text-gray-700'
								}`}
								style={{ height: ITEM_H }}>
								{formatHourLabel(hh, displayFormat)}
							</div>
						);
					})}
					{/* bottom pad */}
					<div style={{ height: ITEM_H * PAD_ROWS }} />
				</div>
			</div>

			<span className='text-gray-500'>:</span>

			{/* MINUTES */}
			<div className='relative'>
				<div
					className='pointer-events-none absolute left-0 right-0'
					style={{ top: ITEM_H * PAD_ROWS, height: ITEM_H }}>
					<div className='h-full border-y border-blue-200/50' />
				</div>

				<div
					ref={minuteRef}
					role='listbox'
					aria-label='Λεπτά'
					className='px-2 overflow-y-auto overscroll-contain snap-y snap-mandatory border rounded bg-white'
					style={{ height: CONTAINER_H }}
					onScroll={onMinuteScroll}
					onKeyDown={(e) => {
						if (e.key === 'ArrowUp') {
							e.preventDefault();
							nudge('minute', -1);
						}
						if (e.key === 'ArrowDown') {
							e.preventDefault();
							nudge('minute', +1);
						}
					}}
					tabIndex={0}>
					<div style={{ height: ITEM_H * PAD_ROWS }} />
					{minutes.map((mm) => {
						const selected = mm === (minutes.includes(m) ? m : minutes[0]);
						return (
							<div
								key={mm}
								role='option'
								aria-selected={selected}
								className={`h-8 flex items-center justify-center snap-center ${
									selected ? 'font-semibold text-blue-600' : 'text-gray-700'
								}`}
								style={{ height: ITEM_H }}>
								{mm}
							</div>
						);
					})}
					<div style={{ height: ITEM_H * PAD_ROWS }} />
				</div>
			</div>
		</div>
	);
}
