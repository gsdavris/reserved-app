export default function SkeletonCard() {
	return (
		<div className='tw:animate-pulse tw:bg-white tw:rounded-lg tw:shadow tw:p-4 tw:space-y-2'>
			<div className='tw:bg-gray-300 tw:h-40 tw:w-full tw:rounded'></div>
			<div className='tw:h-4 tw:bg-gray-300 tw:rounded tw:w-3/4'></div>
			<div className='tw:h-3 tw:bg-gray-200 tw:rounded tw:w-1/2'></div>
			<div className='tw:h-3 tw:bg-gray-200 tw:rounded tw:w-1/3'></div>
		</div>
	);
}
