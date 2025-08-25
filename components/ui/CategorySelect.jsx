'use client';

import DropdownSelect from './DropdownSelect';

export default function CategorySelect({
	categories = [],
	value,
	onChange,
	className = '',
}) {
	const buildGroupedOptions = () => {
		const options = [];

		for (const parent of categories) {
			if (Array.isArray(parent.children) && parent.children.length > 0) {
				options.push({
					groupLabel: parent.label,
					options: parent.children.map((child) => ({
						label: child.label,
						value: String(child.value),
					})),
				});
			} else {
				options.push({
					label: parent.label,
					value: String(parent.value),
				});
			}
		}

		return options;
	};

	return (
		<DropdownSelect
			label='Επιλέξτε κατηγορία'
			options={buildGroupedOptions()}
			value={value ?? ''}
			onChange={onChange}
			className={className}
			searchable
			searchPlaceholder='Αναζήτηση κατηγορίας...'
		/>
	);
}
