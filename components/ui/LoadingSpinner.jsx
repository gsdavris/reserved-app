export default function LoadingSpinner({
	className = '',
	size = 24,
	color = 'border-gray-300',
	topColor = 'border-t-blue-600',
	borderWidth = 3,
}) {
	return (
		<div
			className={`animate-spin rounded-full ${color} ${topColor} ${className}`.replace(
				/\s+/g,
				' '
			)}
			style={{
				width: size,
				height: size,
				borderWidth: borderWidth,
			}}
			role='status'
		/>
	);
}
