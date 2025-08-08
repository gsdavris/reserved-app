'use client';

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { ChevronUp, ChevronDown, PlusCircle } from 'lucide-react';
import PricingOptionCard from './PricingOptionCard';
import usePricingDragSort from '@/hooks/usePricingDragSort';
import { createDefaultPricingOption } from '@/lib/utils/pricing';

export default function PricingBuilderSection({ pricing, setPricing }) {
	const updateOption = (index, newOption) => {
		const newOptions = [...pricing.options];
		newOptions[index] = newOption;
		setPricing({ ...pricing, options: newOptions });
	};

	const removeOption = (index) => {
		const newOptions = pricing.options.filter((_, i) => i !== index);
		setPricing({ ...pricing, options: newOptions });
	};

	const addOption = () => {
		const newOption = createDefaultPricingOption();
		setPricing({ ...pricing, options: [...pricing.options, newOption] });
	};

	const onMoveOption = (fromIndex, toIndex) => {
		const updated = [...pricing.options];
		const [moved] = updated.splice(fromIndex, 1);
		updated.splice(toIndex, 0, moved);
		setPricing({ ...pricing, options: updated });
	};

	const { dragIndex, hoverIndex, onDragStart, onDragOver, onDrop, onDragEnd } =
		usePricingDragSort(false, onMoveOption);

	return (
		<Disclosure defaultOpen>
			{({ open }) => (
				<div className='border rounded p-4'>
					<DisclosureButton className='flex justify-between items-center w-full font-medium text-left'>
						<div className='flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm sm:text-base'>
							<span>Επιλογές τιμολόγησης</span>
							{!open && (
								<span className='text-gray-500 text-sm font-normal'>
									({pricing.options.length} επιλογές)
								</span>
							)}
						</div>
						{open ? (
							<ChevronUp className='w-5 h-5' />
						) : (
							<ChevronDown className='w-5 h-5' />
						)}
					</DisclosureButton>

					<DisclosurePanel className='mt-4 space-y-4'>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
							{pricing.options.map((opt, index) => (
								<PricingOptionCard
									key={opt.id}
									option={opt}
									index={index}
									updateOption={(updated) => updateOption(index, updated)}
									onRemove={() => removeOption(index)}
									dragIndex={dragIndex}
									hoverIndex={hoverIndex}
									onDragStart={() => onDragStart(index)}
									onDragOver={(e) => onDragOver(e, index)}
									onDrop={() => onDrop(index)}
									onDragEnd={onDragEnd}
								/>
							))}
						</div>
						<button
							type='button'
							onClick={addOption}
							className='inline-flex items-center gap-1 text-blue-600 text-sm hover:underline'>
							<PlusCircle className='w-4 h-4' /> Προσθήκη επιλογής
						</button>
					</DisclosurePanel>
				</div>
			)}
		</Disclosure>
	);
}
