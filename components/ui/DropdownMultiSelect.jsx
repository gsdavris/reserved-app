'use client';

import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from '@headlessui/react';
import { Check, ChevronDown, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import ChipsRow from '@/components/ui/ChipsRow';

export default function DropdownMultiSelect({
	label = 'Επιλογή',
	options = [],
	value = [],
	onChange = () => {},
	className = '',
	searchable = true,
	showChips = true,
}) {
	const [query, setQuery] = useState('');

	const flatOptions = useMemo(() => {
		return options.flatMap((item) =>
			'groupLabel' in item ? item.options : [item]
		);
	}, [options]);

	const selectedItems = useMemo(() => {
		const map = new Map(flatOptions.map((o) => [String(o.value), o]));
		return value.map((v) => map.get(String(v))).filter(Boolean);
	}, [flatOptions, value]);

	const toggleValue = (val) => {
		const s = String(val);
		if (value.includes(s)) {
			onChange(value.filter((x) => x !== s));
		} else {
			onChange([...value, s]);
		}
	};

	const clearAll = () => onChange([]);

	const filtered = useMemo(() => {
		if (!searchable || !query.trim()) return options;
		const q = query.trim().toLowerCase();

		return options
			.map((item) => {
				if ('groupLabel' in item) {
					const hits = item.options.filter(
						(o) =>
							o.label.toLowerCase().includes(q) ||
							String(o.value).toLowerCase().includes(q)
					);
					if (hits.length)
						return { groupLabel: item.groupLabel, options: hits };
					return null;
				}
				return item.label.toLowerCase().includes(q) ||
					String(item.value).toLowerCase().includes(q)
					? item
					: null;
			})
			.filter(Boolean);
	}, [options, query, searchable]);

	const currentLabel =
		selectedItems.length === 0
			? label
			: selectedItems.length === 1
			? selectedItems[0].label
			: `${selectedItems.length} επιλεγμένα`;

	const renderOption = (opt) => {
		const selected = value.includes(String(opt.value));
		return (
			<ListboxOption
				key={opt.value}
				value={String(opt.value)}
				className={({ active }) =>
					`px-3 py-2 cursor-pointer text-sm flex items-center justify-between ${
						active ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
					}`
				}
				onClick={(e) => {
					e.preventDefault();
					toggleValue(opt.value);
				}}>
				<div className='flex items-center gap-2'>
					{opt.color && (
						<span
							className='inline-block h-2.5 w-2.5 rounded-full ring-1 ring-gray-300'
							style={{ background: opt.color }}
						/>
					)}
					<span>{opt.label}</span>
				</div>
				{selected && <Check className='w-4 h-4 text-blue-600' />}
			</ListboxOption>
		);
	};

	const renderOptions = () =>
		filtered.map((item) => {
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

	return (
		<div className='relative w-full'>
			<div className='mb-2 flex items-center justify-between'>
				<label className='block text-sm font-medium text-gray-700'>
					{label}
				</label>
				{value.length > 0 && (
					<button
						type='button'
						onClick={clearAll}
						className='text-xs text-red-600 hover:underline'>
						Εκκαθάριση
					</button>
				)}
			</div>

			<Listbox
				value={value}
				onChange={onChange}
				multiple>
				<ListboxButton
					className={`relative w-full h-10 rounded border px-3 text-left flex items-center justify-between ${className}`}>
					<span className='truncate'>{currentLabel}</span>
					<ChevronDown className='h-4 w-4 text-gray-500' />
				</ListboxButton>

				<ListboxOptions className='absolute z-50 mt-1 max-h-72 w-full overflow-auto rounded border bg-white shadow-lg ring-1 ring-black/5 p-1'>
					{searchable && (
						<div className='mb-1 px-2 py-1 flex items-center gap-2 rounded border border-gray-200 mx-1'>
							<Search className='h-4 w-4 text-gray-400' />
							<input
								type='text'
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder='Αναζήτηση...'
								className='w-full outline-none text-sm'
							/>
						</div>
					)}

					{renderOptions()}

					{Array.isArray(filtered) && filtered.length === 0 && (
						<div className='px-3 py-3 text-sm text-gray-500'>
							Δεν βρέθηκαν επιλογές
						</div>
					)}
				</ListboxOptions>
			</Listbox>

			{showChips && selectedItems.length > 0 && (
				<ChipsRow
					className='mt-2'
					items={selectedItems.map((opt) => ({
						id: opt.value,
						value: opt.value,
						label: opt.label,
						color: opt.color,
					}))}
					variant='outline'
					size='xs'
					onRemove={(it) => toggleValue(it.value)}
				/>
			)}
		</div>
	);
}
