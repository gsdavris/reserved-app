export default function SkeletonImageCard() {
	return (
		<div className='rounded-lg overflow-hidden shadow-sm animate-pulse bg-white'>
			{/* Εικονική εικόνα */}
			<div className='w-full h-48 bg-gray-200' />

			{/* Overlay (χωρίς κουμπιά εδώ, απλώς το χρώμα) */}
			<div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100' />

			{/* Info */}
			<div className='p-2 text-sm'>
				<div className='h-4 bg-gray-200 rounded w-3/4 mb-2' />
				<div className='h-3 bg-gray-100 rounded w-1/2' />
			</div>
		</div>
	);
}
