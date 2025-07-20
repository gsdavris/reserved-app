'use client';

import SkeletonImageCard from '@/components/dashboard/media/SkeletonImageCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function LoadingState({
	loading,
	hasMore,
	totalCount = 0,
	shownCount = 0,
	className = '',
}) {
	if (loading && shownCount === 0) {
		return (
			<div
				className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-6 ${className}`}>
				{Array.from({ length: 8 }).map((_, i) => (
					<SkeletonImageCard key={i} />
				))}
			</div>
		);
	}

	if (loading && shownCount > 0) {
		return (
			<div className='flex justify-center py-8'>
				<LoadingSpinner
					size={32}
					color='border-white'
					topColor='border-t-blue-600'
					borderWidth={2}
				/>
			</div>
		);
	}

	return (
		<div className='mt-4 text-sm text-gray-500 text-center'>
			<p>
				Εμφανίζονται {shownCount} από {totalCount} στοιχεία πολυμέσων
			</p>
			{!hasMore && (
				<p className='mt-1 italic'>Δεν υπάρχουν άλλα αποτελέσματα.</p>
			)}
		</div>
	);
}
