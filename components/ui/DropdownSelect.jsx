'use client';

import { useMemo, useState } from 'react';
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react';
import { Check, ChevronDown, Search } from 'lucide-react';

export default function DropdownSelect({
	label,
	options,
	value,
	onChange,
	className = '',
	searchable = false,
	searchPlaceholder = 'Αναζήτηση...',
}) {
	const [query, setQuery] = useState('');

	const filtered = useMemo(() => {
		if (!searchable || !query.trim()) return options;
		const q = query.trim().toLowerCase();
		return options
			.map((item) => {
				if ('groupLabel' in item && Array.isArray(item.options)) {
					const hits = item.options.filter(
						(o) =>
							o.label.toLowerCase().includes(q) ||
							String(o.value).toLowerCase().includes(q)
					);
					return hits.length
						? { groupLabel: item.groupLabel, options: hits }
						: null;
				}
				return item.label.toLowerCase().includes(q) ||
					String(item.value).toLowerCase().includes(q)
					? item
					: null;
			})
			.filter(Boolean);
	}, [options, query, searchable]);

	const renderOption = (opt) => (
		<ListboxOption
			key={opt.value}
			value={opt.value}
			className={({ active }) =>
				`px-3 py-2 cursor-pointer text-sm ${
					active ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
				}`
			}>
			{({ selected }) => (
				<div className='flex items-center justify-between'>
					{opt.label}
					{selected && <Check className='w-4 h-4 text-blue-600' />}
				</div>
			)}
		</ListboxOption>
	);

	const renderOptions = () => {
		return filtered.map((item) => {
			if ('groupLabel' in item && Array.isArray(item.options)) {
				return (
					<div key={item.groupLabel}>
						<div className='px-3 py-1 text-xs text-gray-400 font-medium'>
							{item.groupLabel}
						</div>
						{item.options.map(renderOption)}
					</div>
				);
			}

			return renderOption(item);
		});
	};

	const flatOptions = options.flatMap((item) =>
		'groupLabel' in item ? item.options : [item]
	);

	const selectedOption = flatOptions.find((opt) => opt.value === String(value));
	const currentLabel = selectedOption?.label || label;

	return (
		<div className='relative w-full'>
			<Listbox
				value={selectedOption?.value ?? ''}
				onChange={onChange}>
				<ListboxButton
					className={`relative w-full h-10 rounded border px-3 text-left flex items-center justify-between ${className}`}>
					<span>{currentLabel}</span>
					<ChevronDown className='h-4 w-4 text-gray-500' />
				</ListboxButton>

				<ListboxOptions className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded border bg-white shadow-lg ring-1 ring-black/5'>
					{renderOptions()}
				</ListboxOptions>
				<ListboxOptions className='absolute z-50 mt-1 max-h-72 w-full overflow-auto rounded border bg-white shadow-lg ring-1 ring-black/5 p-1'>
					{searchable && (
						<div className='mb-1 px-2 py-1 flex items-center gap-2 rounded border border-gray-200 mx-1'>
							<Search className='h-4 w-4 text-gray-400' />
							<input
								type='text'
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder={searchPlaceholder}
								className='w-full outline-none text-sm'
							/>
						</div>
					)}

					{renderOptions()}

					{searchable && Array.isArray(filtered) && filtered.length === 0 && (
						<div className='px-3 py-3 text-sm text-gray-500'>
							Δεν βρέθηκαν επιλογές
						</div>
					)}
				</ListboxOptions>
			</Listbox>
		</div>
	);
}
