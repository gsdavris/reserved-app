export default function StatusPill({ isPublished }) {
	const on = Boolean(isPublished);
	const base =
		'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border';
	return (
		<span
			className={
				on
					? `${base} bg-green-50 text-green-700 border-green-200`
					: `${base} bg-amber-50 text-amber-700 border-amber-200`
			}
			title={on ? 'Ορατό στο κοινό' : 'Κρυφό από το κοινό'}>
			<span
				className={
					on
						? 'h-1.5 w-1.5 rounded-full bg-green-500'
						: 'h-1.5 w-1.5 rounded-full bg-amber-500'
				}
			/>
			{on ? 'Δημοσιευμένο' : 'Μη δημοσιευμένο'}
		</span>
	);
}
