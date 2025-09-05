'use client';

import { useMemo, useRef, useState } from 'react';
import { Wand2, X } from 'lucide-react';
import { useNotification } from '@/context/NotificationContext';
import {
	DOW,
	EMPTY_DAY,
	normalizeIntervals,
	validateDayIntervals,
	labelFromDow,
	toMin,
	toHHMM,
} from '@/lib/utils/openHours';
import DayCard from './DayCard';
import { setExperienceTags } from '@/lib/handlers/tagHandlers';

export default function OpenHoursEditor({ value = null, onChange = () => {} }) {
	const { showNotification } = useNotification();
	const clipboardRef = useRef(null); // intervals[] για copy/paste
	const [errorsByDay, setErrorsByDay] = useState({});
	const lastNotifiedErrorRef = useRef({});

	// value: [{ dow, intervals:[{start,end}] }] | null
	const byDay = useMemo(() => {
		const map = new Map();
		(Array.isArray(value) ? value : []).forEach((d) =>
			map.set(d.dow, { ...d, enabled: (d.intervals?.length ?? 0) > 0 })
		);
		return map;
	}, [value]);

	const emit = (nextMap) => {
		const compact = DOW.map((d) => nextMap.get(d.key))
			.filter(Boolean)
			.filter(
				(d) => d.enabled && Array.isArray(d.intervals) && d.intervals.length > 0
			)
			.map(({ dow, intervals }) => ({
				dow,
				intervals: normalizeIntervals(intervals),
			}));
		onChange(compact.length ? compact : null);
	};

	const setDay = (dow, patch) => {
		const map = new Map(byDay);
		const cur = map.get(dow) || { dow, ...EMPTY_DAY };
		const nextDay = { ...cur, ...patch, dow };
		nextDay.intervals = normalizeIntervals(nextDay.intervals);
		map.set(dow, nextDay);

		const errs = validateDayIntervals(nextDay.intervals);
		setErrorsByDay((prev) => ({ ...prev, [dow]: errs }));
		if (errs.length > 0) {
			const msg = errs[0];
			if (lastNotifiedErrorRef.current[dow] !== msg) {
				lastNotifiedErrorRef.current[dow] = msg;
				showNotification(`Ημ. ${labelFromDow(dow)}: ${msg}`, 'error');
			}
		} else {
			delete lastNotifiedErrorRef.current[dow];
		}
		emit(map);
	};

	const toggleEnabled = (dow) => {
		const cur = byDay.get(dow) || { dow, ...EMPTY_DAY };
		if (cur.enabled) {
			setDay(dow, { enabled: false, intervals: [] });
		} else {
			setDay(dow, {
				enabled: true,
				intervals: [{ start: '09:00', end: '17:00' }],
			});
			showNotification(`Ημέρα ${labelFromDow(dow)} ενεργοποιήθηκε.`, 'success');
		}
	};

	const addInterval = (dow) => {
		const cur = byDay.get(dow) || { dow, ...EMPTY_DAY };
		const intervals = Array.isArray(cur.intervals) ? cur.intervals : [];

		// αν υπάρχει ήδη 00:00–24:00, δεν έχει νόημα να προσθέσεις άλλο
		if (intervals.some((it) => it.start === '00:00' && it.end === '24:00')) {
			showNotification('Η μέρα είναι ήδη 24/7.', 'info');
			return;
		}

		// default όταν δεν υπάρχει τίποτα
		let next = { start: '09:00', end: '17:00' };

		if (intervals.length > 0) {
			// δουλεύουμε πάνω σε normalized για σταθερό αποτέλεσμα
			const norm = normalizeIntervals(intervals);
			const last = norm[norm.length - 1];
			const lastEndMin = toMin(last.end); // π.χ. 17:00 => 1020

			// ξεκίνα 1' μετά για να ΜΗΝ "ακουμπάει" => να μην γίνει merge
			let startMin = Math.min(lastEndMin + 1, 1439); // max 23:59
			let endMin = Math.min(startMin + 60, 1440); // 1 ώρα

			// Αν δεν χωράει (είμαστε πολύ κοντά στα μεσάνυχτα), γύρνα στην αρχή της μέρας
			if (endMin <= startMin) {
				startMin = 0; // 00:00
				endMin = 60; // 01:00
			}

			next = { start: toHHMM(startMin), end: toHHMM(endMin) };
		}

		setDay(dow, { enabled: true, intervals: [...intervals, next] });
	};

	const updateInterval = (dow, idx, next) => {
		const cur = byDay.get(dow) || { dow, ...EMPTY_DAY };
		const intervals = (cur.intervals || []).map((it, i) =>
			i === idx ? next : it
		);
		setDay(dow, { ...cur, intervals });
	};

	const removeInterval = (dow, idx) => {
		const cur = byDay.get(dow) || { dow, ...EMPTY_DAY };
		const intervals = (cur.intervals || []).filter((_, i) => i !== idx);
		setDay(dow, { ...cur, intervals });
	};

	const setPreset = (assignments = []) => {
		const map = new Map();
		for (const { dow, enabled, intervals } of assignments) {
			map.set(dow, { dow, enabled, intervals: intervals || [] });
		}
		emit(map);
		setErrorsByDay({});
		lastNotifiedErrorRef.current = {};
	};

	// Presets
	const applyWeekdays_9_17 = () => {
		setPreset([
			...[1, 2, 3, 4, 5].map((dow) => ({
				dow,
				enabled: true,
				intervals: [{ start: '09:00', end: '17:00' }],
			})),
			{ dow: 6, enabled: false, intervals: [] },
			{ dow: 0, enabled: false, intervals: [] },
		]);
		showNotification('Εφαρμόστηκε preset: Καθημερινές 09:00–17:00.', 'success');
	};

	const applyWeekdays_9_21 = () => {
		setPreset([
			...[1, 2, 3, 4, 5].map((dow) => ({
				dow,
				enabled: true,
				intervals: [{ start: '09:00', end: '21:00' }],
			})),
			{ dow: 6, enabled: false, intervals: [] },
			{ dow: 0, enabled: false, intervals: [] },
		]);
		showNotification('Εφαρμόστηκε preset: Καθημερινές 09:00–21:00.', 'success');
	};

	const apply247 = () => {
		setPreset(
			[0, 1, 2, 3, 4, 5, 6].map((dow) => ({
				dow,
				enabled: true,
				intervals: [{ start: '00:00', end: '24:00' }],
			}))
		);
		showNotification('Εφαρμόστηκε preset: 24/7.', 'success');
	};

	const clearAll = () => {
		const map = new Map();
		emit(map);
		setErrorsByDay({});
		lastNotifiedErrorRef.current = {};
		showNotification('Καθαρίστηκαν όλα τα ωράρια.', 'info');
	};

	const copyDay = (dow) => {
		const d = byDay.get(dow);
		clipboardRef.current = d?.intervals ? [...d.intervals] : [];
		showNotification(
			`Αντιγράφηκε το ωράριο της ${labelFromDow(dow)}.`,
			'success'
		);
	};

	const pasteDay = (dow) => {
		const intervals = Array.isArray(clipboardRef.current)
			? clipboardRef.current
			: [];
		if (intervals.length === 0) {
			showNotification('Το πρόχειρο είναι άδειο.', 'warning');
			return;
		}
		setDay(dow, { enabled: true, intervals });
		showNotification(
			`Επικολλήθηκε ωράριο στη ${labelFromDow(dow)}.`,
			'success'
		);
	};

	return (
		<div className='space-y-3'>
			<div className='flex items-center justify-between'>
				<h4 className='font-medium'>Ωράριο (Open Hours)</h4>
				<div className='flex items-center gap-2'>
					<button
						type='button'
						onClick={applyWeekdays_9_17}
						className='inline-flex items-center gap-1 text-blue-600 text-sm hover:underline'
						title='Δευ–Παρ 09:00–17:00, Σαβ/Κυρ κλειστά'>
						<Wand2 className='w-4 h-4' /> Καθημερινές 09–17
					</button>
					<button
						type='button'
						onClick={applyWeekdays_9_21}
						className='inline-flex items-center gap-1 text-blue-600 text-sm hover:underline'
						title='Δευ–Παρ 09:00–17:00, Σαβ/Κυρ κλειστά'>
						<Wand2 className='w-4 h-4' /> Καθημερινές 09–21
					</button>
					<button
						type='button'
						onClick={apply247}
						className='inline-flex items-center gap-1 text-blue-600 text-sm hover:underline'
						title='Όλες οι μέρες 24/7'>
						<Wand2 className='w-4 h-4' /> 24/7
					</button>
					<button
						type='button'
						onClick={clearAll}
						className='inline-flex items-center gap-1 text-gray-600 text-sm hover:underline'
						title='Καθαρισμός όλων'>
						<X className='w-4 h-4' /> Καθάρισμα
					</button>
				</div>
			</div>

			<div className='grid md:grid-cols-2 gap-3'>
				{DOW.map(({ key: dow, label }) => {
					const day = byDay.get(dow) || { dow, ...EMPTY_DAY };
					const errs = errorsByDay[dow] || [];
					const clickable = !day.enabled;

					return (
						<DayCard
							key={dow}
							label={label}
							day={day}
							errors={errs}
							clickable={clickable}
							onToggle={() => toggleEnabled(dow)}
							onCopy={() => copyDay(dow)}
							onPaste={() => pasteDay(dow)}
							onAddInterval={() => addInterval(dow)}
							onUpdateInterval={(idx, next) => updateInterval(dow, idx, next)}
							onRemoveInterval={(idx) => removeInterval(dow, idx)}
						/>
					);
				})}
			</div>
		</div>
	);
}
