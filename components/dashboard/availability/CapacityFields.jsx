'use client';

export default function CapacityFields({ value = {}, onChange = () => {} }) {
	// safe defaults
	const v = { perSlot: Number.isInteger(value?.perSlot) ? value.perSlot : 1 };

	// helper: κρατά μόνο θετικούς ακέραιους (>=1). Κενό => δεν αλλάζουμε state
	const handlePerSlot = (raw) => {
		// επιτρέπουμε προσωρινά κενό input χωρίς να “σπάει” το state
		if (raw === '' || raw === null || raw === undefined) return;
		const n = parseInt(raw, 10);
		if (Number.isNaN(n)) return;
		const clamped = Math.max(1, n);
		onChange({ perSlot: clamped });
	};

	// onBlur: αν ο χρήστης αφήσει 0/NaN, επαναφέρουμε σε 1
	const normalizeOnBlur = (e) => {
		const n = parseInt(e.target.value, 10);
		if (Number.isNaN(n) || n < 1) onChange({ perSlot: 1 });
	};

	return (
		<div className='border rounded p-3'>
			<div className='font-medium mb-2'>Χωρητικότητα</div>

			<div className='grid sm:grid-cols-3 gap-3'>
				<div>
					<label className='block text-sm font-medium mb-1'>
						Άτομα ανά slot
					</label>
					<input
						type='number'
						inputMode='numeric'
						step={1}
						min={1}
						className='w-full border rounded px-3 h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none'
						value={v.perSlot}
						onChange={(e) => handlePerSlot(e.target.value)}
						onBlur={normalizeOnBlur}
					/>
					<p className='mt-1 text-xs text-gray-500'>
						Για type=COUNT είναι υποχρεωτικό &gt; 0.
					</p>
				</div>
			</div>
		</div>
	);
}
