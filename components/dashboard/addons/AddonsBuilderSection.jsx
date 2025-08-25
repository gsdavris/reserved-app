'use client';

import { PlusCircle } from 'lucide-react';
import AddonOptionCard from './AddonOptionCard';
import usePricingDragSort from '@/hooks/usePricingDragSort';
import { createDefaultAddonOption } from '@/lib/utils/addons';

export default function AddonsBuilderSection({ addons, setAddons }) {
	const updateOption = (index, newOption) => {
		const newOptions = [...addons.options];
		newOptions[index] = newOption;
		setAddons({ ...addons, options: newOptions });
	};

	const removeOption = (index) => {
		const newOptions = addons.options.filter((_, i) => i !== index);
		setAddons({ ...addons, options: newOptions });
	};

	const addOption = () => {
		const newOption = createDefaultAddonOption();
		setAddons({ ...addons, options: [...(addons.options || []), newOption] });
	};

	const onMoveOption = (fromIndex, toIndex) => {
		const updated = [...addons.options];
		const [moved] = updated.splice(fromIndex, 1);
		updated.splice(toIndex, 0, moved);
		setAddons({ ...addons, options: updated });
	};

	// Reuse the same hook as pricing (identical DnD UX)
	const { dragIndex, hoverIndex, onDragStart, onDragOver, onDrop, onDragEnd } =
		usePricingDragSort(false, onMoveOption);

	return (
		<>
			<div className='grid grid-cols-1 2xl:grid-cols-2 gap-4'>
				{(addons.options || []).map((opt, index) => (
					<AddonOptionCard
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
				<PlusCircle className='w-4 h-4' /> Προσθήκη add‑on
			</button>
		</>
	);
}
