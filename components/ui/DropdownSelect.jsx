'use client';

import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';

export default function DropdownSelect({
	label,
	options,
	value,
	onChange,
	className = '',
}) {
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
		return options.map((item) => {
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
		<div className='relative w-full sm:max-w-[200px]'>
			<Listbox
				value={selectedOption?.value ?? ''}
				onChange={onChange}>
				<ListboxButton
					className={`relative w-full h-10 rounded border px-3 text-left flex items-center justify-between ${className}`}>
					<span>{currentLabel}</span>
					<ChevronDown className='h-4 w-4 text-gray-500' />
				</ListboxButton>

				<ListboxOptions className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border bg-white shadow-sm'>
					{renderOptions()}
				</ListboxOptions>
			</Listbox>
		</div>
	);
}
