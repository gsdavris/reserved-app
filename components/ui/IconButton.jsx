export default function IconButton({
	onClick,
	icon: Icon,
	label,
	ariaLabel,
	className = '',
	full = false,
	...props
}) {
	return (
		<button
			onClick={onClick}
			aria-label={ariaLabel}
			className={`${
				full && 'flex-1'
			} flex gap-2 items-center px-4 py-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-200 active:scale-95 transition duration-200 ${className}`}
			{...props}>
			<Icon className='w-5 h-5' />
			{label && <span className='font-medium text-sm'>{label}</span>}
		</button>
	);
}
