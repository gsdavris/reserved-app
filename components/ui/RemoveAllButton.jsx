'use client';

import { Trash2 } from 'lucide-react';

export default function RemoveAllButton({ onClick, disabled = false }) {
	return (
		<button
			type='button'
			onClick={onClick}
			className='h-32 w-full sm:w-32 flex items-center justify-center border rounded bg-red-50 text-red-600 hover:bg-red-100'
			title='Αφαίρεση όλων'
			disabled={disabled}>
			<Trash2 className='w-6 h-6' />
		</button>
	);
}
