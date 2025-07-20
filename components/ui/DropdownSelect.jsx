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
	return (
		<div className='relative w-full sm:max-w-[200px]'>
			<Listbox
				value={value}
				onChange={onChange}>
				<ListboxButton
					className={`relative w-full h-10 rounded border px-3 text-left flex items-center justify-between ${className}`}>
					<span>
						{options.find((opt) => opt.value === value)?.label || label}
					</span>
					<ChevronDown className='h-4 w-4 text-gray-500' />
				</ListboxButton>

				<ListboxOptions className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border bg-white shadow-sm'>
					{options.map((opt) => (
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
					))}
				</ListboxOptions>
			</Listbox>
		</div>
	);
}
