'use client';

import { useEffect, useMemo, useState } from 'react';
import DropdownSelect from '@/components/ui/DropdownSelect';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useNotification } from '@/context/NotificationContext';
import SlotConfig from './SlotConfig';
import CapacityFields from './CapacityFields';
import RulesEditor from './RulesEditor';
import OpenHoursEditor from './OpenHoursEditor';
import ExceptionsEditor from './ExceptionsEditor';
import { Save, Trash2 } from 'lucide-react';

const DEFAULTS = {
	type: 'COUNT',
	rules: [],
	openHours: null,
	exceptions: null,
	slot: {
		strategy: 'FIXED',
		durationMin: 60,
		intervalMin: 60,
		bufferBeforeMin: 0,
		bufferAfterMin: 0,
	},
	capacity: { perSlot: 6 },
	bookingWindow: { minLeadMinutes: 60, maxAdvanceDays: 30 },
};

const TYPE_OPTIONS = [
	{ label: 'Χωρητικότητα (per slot)', value: 'COUNT' },
	{ label: 'Συγκεκριμένες μονάδες', value: 'UNIT' },
	{ label: 'Ραντεβού (providers)', value: 'APPOINTMENT' },
];

export default function AvailabilitySection({ experienceId }) {
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [data, setData] = useState(DEFAULTS);
	const [error, setError] = useState(null);
	const [details, setDetails] = useState(null);
	const { showNotification } = useNotification();

	const set = (patch) => setData((prev) => ({ ...prev, ...patch }));

	const selectedType = useMemo(
		() =>
			TYPE_OPTIONS.find((o) => o.value === data.type)?.value ??
			TYPE_OPTIONS[0].value,
		[data.type]
	);

	// Load
	useEffect(() => {
		let ignore = false;
		async function load() {
			setLoading(true);
			setError(null);
			setDetails(null);
			try {
				const res = await fetch(
					`/api/experiences/${experienceId}/availability`,
					{ method: 'GET' }
				);
				const json = await res.json();
				if (ignore) return;

				if (res.ok) {
					setData(json ?? DEFAULTS);
				} else {
					setError(json?.error || 'Αποτυχία φόρτωσης διαθεσιμότητας');
				}
			} catch {
				if (!ignore) setError('Σφάλμα δικτύου');
			} finally {
				if (!ignore) setLoading(false);
			}
		}
		load();
		return () => {
			ignore = true;
		};
	}, [experienceId]);

	// Save
	async function handleSave() {
		setSaving(true);
		setError(null);
		setDetails(null);
		try {
			const res = await fetch(`/api/experiences/${experienceId}/availability`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			const json = await res.json();
			if (res.ok) {
				setData(json);
				showNotification('Η διαθεσιμότητα αποθηκεύτηκε.', 'success');
			} else {
				setError(json?.error || 'Αποτυχία αποθήκευσης');
				if (json?.details) setDetails(json.details);
				showNotification('Σφάλμα κατά την αποθήκευση διαθεσιμότητας.', 'error');
			}
		} catch {
			setError('Σφάλμα δικτύου');
			showNotification('Σφάλμα δικτύου.', 'error');
		} finally {
			setSaving(false);
		}
	}

	// Delete
	async function handleDelete() {
		if (!window.confirm('Διαγραφή ρυθμίσεων διαθεσιμότητας;')) return;

		setSaving(true);
		setError(null);
		setDetails(null);
		try {
			const res = await fetch(`/api/experiences/${experienceId}/availability`, {
				method: 'DELETE',
			});
			if (res.status === 204) {
				setData(DEFAULTS);
				showNotification('Η διαθεσιμότητα διαγράφηκε.', 'success');
			} else {
				const json = await res.json();
				setError(json?.error || 'Αποτυχία διαγραφής');
				showNotification('Σφάλμα κατά τη διαγραφή διαθεσιμότητας.', 'error');
			}
		} catch {
			setError('Σφάλμα δικτύου');
			showNotification('Σφάλμα δικτύου.', 'error');
		} finally {
			setSaving(false);
		}
	}

	if (loading) {
		return (
			<div className='flex items-center gap-2'>
				<LoadingSpinner size={18} />
				<span>Φόρτωση…</span>
			</div>
		);
	}

	return (
		<div className='space-y-4'>
			{/* Πρώτη γραμμή: Τύπος + actions */}
			<div className='grid gap-3 sm:grid-cols-2 items-end'>
				<div>
					<label className='block text-sm font-medium mb-1'>Τύπος</label>
					<DropdownSelect
						options={TYPE_OPTIONS}
						value={selectedType}
						onChange={(val) => set({ type: val })}
					/>
				</div>

				<div className='flex sm:justify-end gap-2'>
					<button
						onClick={handleSave}
						disabled={saving}
						className='px-3 h-10 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 inline-flex items-center gap-2'>
						<Save className='w-4 h-4' />
						{saving ? 'Αποθήκευση…' : 'Αποθήκευση'}
					</button>
					{data.id && (
						<button
							onClick={handleDelete}
							disabled={saving}
							className='px-3 h-10 rounded border text-red-700 border-red-300 hover:border-red-400 hover:bg-red-50 disabled:opacity-60 inline-flex items-center gap-2'
							title='Διαγραφή'>
							<Trash2 className='w-4 h-4' />
							Διαγραφή
						</button>
					)}
				</div>
			</div>

			{error && (
				<div className='p-3 rounded border border-red-300 bg-red-50 text-red-700'>
					<div className='font-medium'>Σφάλμα:</div>
					<div>{error}</div>
					{Array.isArray(details) && details.length > 0 && (
						<ul className='list-disc pl-5 mt-2'>
							{details.map((d, i) => (
								<li key={i}>{d}</li>
							))}
						</ul>
					)}
				</div>
			)}

			{/* Rules */}
			<RulesEditor
				value={data.rules}
				onChange={(rules) => set({ rules })}
			/>

			{/* Open Hours */}
			<OpenHoursEditor
				value={data.openHours}
				onChange={(openHours) => set({ openHours })}
			/>

			{/* Exceptions */}
			<ExceptionsEditor
				value={data.exceptions}
				onChange={(exceptions) => set({ exceptions })}
			/>

			{/* Slot */}
			<SlotConfig
				value={data.slot}
				onChange={(slot) => set({ slot })}
			/>

			{/* Capacity (μόνο για type=COUNT) */}
			{data.type === 'COUNT' && (
				<CapacityFields
					value={data.capacity || { perSlot: 1 }}
					onChange={(capacity) => set({ capacity })}
				/>
			)}

			{/* Booking Window */}
			<div className='grid sm:grid-cols-2 gap-3'>
				<div>
					<label className='block text-sm font-medium mb-1'>
						Min Lead (λεπτά)
					</label>
					<input
						type='number'
						inputMode='numeric'
						className='w-full border rounded px-3 h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none'
						min={0}
						value={data.bookingWindow?.minLeadMinutes ?? 0}
						onChange={(e) =>
							set({
								bookingWindow: {
									...(data.bookingWindow || {}),
									minLeadMinutes: Math.max(
										0,
										parseInt(e.target.value || '0', 10)
									),
								},
							})
						}
					/>
				</div>
				<div>
					<label className='block text-sm font-medium mb-1'>
						Max Advance (ημέρες)
					</label>
					<input
						type='number'
						inputMode='numeric'
						className='w-full border rounded px-3 h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none'
						min={0}
						value={data.bookingWindow?.maxAdvanceDays ?? 30}
						onChange={(e) =>
							set({
								bookingWindow: {
									...(data.bookingWindow || {}),
									maxAdvanceDays: Math.max(
										0,
										parseInt(e.target.value || '0', 10)
									),
								},
							})
						}
					/>
				</div>
			</div>

			{/* TODO next: OpenHoursEditor, ExceptionsEditor */}
		</div>
	);
}
