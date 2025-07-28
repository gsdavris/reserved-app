'use client';
import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useNotification } from '@/context/NotificationContext';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ClientDeleteButton({ experienceId, onDelete }) {
	const [loading, setLoading] = useState(false);
	const { showNotification } = useNotification();

	const handleDelete = async () => {
		const confirmDelete = confirm(
			'Θες σίγουρα να διαγράψεις αυτή την εμπειρία;'
		);
		if (!confirmDelete) return;

		setLoading(true);

		try {
			const res = await fetch(`/api/experiences/${experienceId}`, {
				method: 'DELETE',
			});

			if (!res.ok) {
				const errorData = await res.json().catch(() => ({}));
				showNotification(errorData?.error || 'Αποτυχία διαγραφής', 'error');
				return;
			}

			showNotification('Η εμπειρία διαγράφηκε!', 'success');
			onDelete?.(experienceId);
		} catch (err) {
			console.error('Unexpected delete error:', err);
			showNotification('Σφάλμα κατά τη διαγραφή', 'error');
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			onClick={handleDelete}
			disabled={loading}
			className='cursor-pointer text-red-500 hover:underline relative w-6 h-6 flex items-center justify-center'
			title='Διαγραφή'>
			{loading ? (
				<LoadingSpinner
					size={18}
					color='border-white'
					topColor='border-t-red-600'
					borderWidth={2}
				/>
			) : (
				<Trash2 size={18} />
			)}
		</button>
	);
}
