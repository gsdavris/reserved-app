'use client';

import { X } from 'lucide-react';

export default function Chip({
	label,
	color,
	onRemove,
	onClick,
	variant = 'outline',
	size = 'xs',
	active = false,
	className = '',
	title,
}) {
	const Tag = onClick ? 'button' : 'span';

	const sizeCls =
		size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-2 py-0.5 text-[11px]'; // xs default

	const base =
		'inline-flex items-center gap-1 rounded-full border transition whitespace-nowrap';

	const variants = {
		outline: active
			? 'bg-blue-50 text-blue-700 border-blue-300'
			: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50',
		soft: active
			? 'bg-blue-100 text-blue-700 border-blue-200'
			: 'bg-gray-100 text-gray-700 border-gray-200',
		solid: active
			? 'bg-blue-600 text-white border-blue-600'
			: 'bg-gray-700 text-white border-gray-700',
	};

	return (
		<Tag
			type={onClick ? 'button' : undefined}
			onClick={onClick}
			className={`${base} ${sizeCls} ${variants[variant]} ${className}`}
			title={title ?? (typeof label === 'string' ? label : undefined)}>
			{color && (
				<span
					className='inline-block h-2 w-2 rounded-full ring-1 ring-gray-300'
					style={{ background: color }}
				/>
			)}
			<span className='truncate'>{label}</span>
			{onRemove && (
				<X
					className='h-3 w-3 text-gray-400 hover:text-gray-600'
					onClick={(e) => {
						e.stopPropagation();
						onRemove();
					}}
					aria-label='remove'
				/>
			)}
		</Tag>
	);
}
