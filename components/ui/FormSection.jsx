'use client';

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function FormSection({
	variant = 'simple', // 'simple' | 'collapsible'
	title,
	description,
	defaultOpen = true,
	className = '',
	headerRight = null, // right-side area in header (e.g., counters, actions)
	children,
}) {
	const base = 'bg-white rounded-lg shadow-sm';

	if (variant === 'collapsible') {
		return (
			<Disclosure defaultOpen={defaultOpen}>
				{({ open }) => (
					<div className={`${base} p-4 sm:p-5 ${className}`}>
						<DisclosureButton className='flex items-start justify-between w-full text-left'>
							<div className='min-w-0'>
								{title && (
									<h3 className='text-base sm:text-lg font-semibold tracking-tight'>
										{title}
									</h3>
								)}
								{description && (
									<p className='mt-1 text-sm text-gray-500 line-clamp-2'>
										{description}
									</p>
								)}
							</div>
							<div className='ml-4 flex items-center gap-3 shrink-0'>
								{headerRight}
								{open ? (
									<ChevronUp className='w-5 h-5' />
								) : (
									<ChevronDown className='w-5 h-5' />
								)}
							</div>
						</DisclosureButton>

						<DisclosurePanel className='mt-4'>{children}</DisclosurePanel>
					</div>
				)}
			</Disclosure>
		);
	}

	// simple variant
	return (
		<section className={`${base} p-4 sm:p-5 ${className}`}>
			{(title || description || headerRight) && (
				<header className='mb-4 flex items-start justify-between gap-3'>
					<div className='min-w-0'>
						{title && (
							<h3 className='text-base sm:text-lg font-semibold tracking-tight'>
								{title}
							</h3>
						)}
						{description && (
							<p className='mt-1 text-sm text-gray-500'>{description}</p>
						)}
					</div>
					{headerRight && <div className='shrink-0'>{headerRight}</div>}
				</header>
			)}
			<div>{children}</div>
		</section>
	);
}
