'use client';

import { Switch } from '@headlessui/react';

export default function ToggleSwitch({
	checked,
	onChange,
	label = '',
	className = '',
	enabledLabel = 'Ενεργό',
	disabledLabel = 'Ανενεργό',
}) {
	return (
		<div className={`flex items-center gap-3 ${className}`}>
			<Switch
				checked={checked}
				onChange={onChange}
				className={`${
					checked ? 'bg-blue-600' : 'bg-gray-300'
				} relative inline-flex h-6 w-11 items-center rounded-full transition duration-200`}>
				<span
					className={`${
						checked ? 'translate-x-6' : 'translate-x-1'
					} inline-block h-4 w-4 transform rounded-full bg-white transition duration-200`}
				/>
			</Switch>
			{label && (
				<span className='text-sm'>
					{label}:{' '}
					<span className='font-medium'>
						{checked ? enabledLabel : disabledLabel}
					</span>
				</span>
			)}
		</div>
	);
}
