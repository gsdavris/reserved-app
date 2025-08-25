'use client';

import DropdownMultiSelect from '@/components/ui/DropdownMultiSelect';
import ChipsRow from '@/components/ui/ChipsRow';

export default function TagsSelect({
	tags = [],
	recommendedTagIds = [],
	value = [],
	onChange = () => {},
	className = '',
}) {
	const tagsById = new Map(tags.map((t) => [t.id, t]));

	const recommendedTags = recommendedTagIds
		.map((id) => tagsById.get(id))
		.filter(Boolean);

	const toggleId = (id) => {
		const s = Number(id);
		if (value.includes(s)) {
			onChange(value.filter((x) => x !== s));
		} else {
			onChange([...value, s]);
		}
	};

	const groups = new Map();
	for (const t of tags) {
		const g = t.group?.name || 'Χωρίς ομάδα';
		if (!groups.has(g)) groups.set(g, []);
		groups.get(g).push({
			label: t.name,
			value: String(t.id),
			color: t.color || undefined,
		});
	}

	const options = [...groups.entries()].map(([groupLabel, opts]) => ({
		groupLabel,
		options: opts,
	}));

	return (
		<div className={className}>
			{recommendedTags.length > 0 && (
				<ChipsRow
					className='mb-2'
					items={recommendedTags.map((t) => ({
						id: t.id,
						label: t.name,
						color: t.color,
						active: value.includes(t.id),
					}))}
					variant='outline'
					size='xs'
					onClick={(it) => toggleId(it.id)}
				/>
			)}

			<DropdownMultiSelect
				label='Tags εμπειρίας'
				options={options}
				value={value.map(String)}
				onChange={(vals) => onChange(vals.map((v) => Number(v)))}
				searchable
				showChips
			/>
		</div>
	);
}
