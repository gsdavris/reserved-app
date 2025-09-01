'use client';

import { PlusCircle } from 'lucide-react';
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
		<>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl-grid-cols-3 xl:grid-cols-3 gap-4'>
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
				className='mt-4 inline-flex items-center gap-1 text-blue-600 text-sm hover:underline'>
				<PlusCircle className='w-4 h-4' /> Προσθήκη επιλογής
			</button>
		</>
	);
}
