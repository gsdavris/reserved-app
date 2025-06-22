export default function LoadingSpinner({ size = '6', className = '' }) {
	return (
		<div
			className={`animate-spin rounded-full border-3 border-white border-t-transparent border-gray-400 h-6 w-6 ${className}`}
			role='status'
		/>
	);
}
