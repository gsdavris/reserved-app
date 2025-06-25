'use client';
import { Trash2 } from 'lucide-react';

export default function ClientDeleteButton({ id, onDelete }) {
	const handleDelete = async () => {
		const confirmDelete = confirm(
			'Θες σίγουρα να διαγράψεις αυτή την εμπειρία;'
		);
		if (!confirmDelete) return;

		await fetch(`/api/partner/experiences/${id}`, { method: 'DELETE' });
		onDelete?.(id);
	};

	return (
		<button
			onClick={handleDelete}
			className='text-red-500 hover:underline'
			title='Διαγραφή'>
			<Trash2 size={18} />
		</button>
	);
}
