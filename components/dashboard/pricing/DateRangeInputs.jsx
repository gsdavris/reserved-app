'use client';

export default function DateRangeInputs({
	from,
	to,
	onChange,
	disabled = false,
	loading = false,
}) {
	const handleFromChange = (value) => {
		onChange({
			from: value || null,
			to: to,
		});
	};

	const handleToChange = (value) => {
		onChange({
			from: from,
			to: value || null,
		});
	};

	return (
		<div className='flex flex-col sm:flex-row gap-2'>
			<div className='flex-1'>
				<label className='block text-sm font-medium'>Από</label>
				{loading ? (
					<div className='h-9 bg-gray-200 rounded animate-pulse w-full' />
				) : (
					<input
						type='date'
						className='w-full border rounded px-3 py-2 h-10 text-sm'
						value={from || ''}
						onChange={(e) => handleFromChange(e.target.value)}
						disabled={disabled}
					/>
				)}
			</div>
			<div className='flex-1'>
				<label className='block text-sm font-medium'>Έως</label>
				{loading ? (
					<div className='h-9 bg-gray-200 rounded animate-pulse w-full' />
				) : (
					<input
						type='date'
						className='w-full border rounded px-3 py-2 h-10 text-sm'
						value={to || ''}
						onChange={(e) => handleToChange(e.target.value)}
						disabled={disabled}
					/>
				)}
			</div>
		</div>
	);
}
