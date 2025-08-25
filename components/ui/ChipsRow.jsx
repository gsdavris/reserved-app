'use client';

import Chip from './Chip';

export default function ChipsRow({
	items = [],
	onRemove,
	onClick,
	variant = 'outline',
	size = 'xs',
	className = '',
}) {
	return (
		<div className={`flex flex-wrap gap-2 ${className}`}>
			{items.map((it) => (
				<Chip
					key={it.id ?? it.value ?? it.label}
					label={it.label}
					color={it.color}
					active={!!it.active}
					variant={variant}
					size={size}
					onRemove={onRemove ? () => onRemove(it) : undefined}
					onClick={onClick ? () => onClick(it) : undefined}
				/>
			))}
		</div>
	);
}
