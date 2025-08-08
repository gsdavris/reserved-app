'use client';

import { Search } from 'lucide-react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function SearchLocationInput({
	query,
	setQuery,
	onSearch,
	loading = false,
	placeholder = 'Αναζήτηση τοποθεσίας (π.χ. Χαλκίδα)',
}) {
	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			onSearch?.();
		}
	};

	return (
		<div className='relative'>
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder={placeholder}
				className='w-full border px-3 py-2 rounded text-sm pr-10'
			/>
			<button
				type='button'
				onClick={onSearch}
				disabled={loading}
				className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black'>
				{loading ? (
					<LoadingSpinner
						size={16}
						borderWidth={2}
					/>
				) : (
					<Search className='cursor-pointer w-4 h-4' />
				)}
			</button>
		</div>
	);
}
