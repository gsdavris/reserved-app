'use client';

import { ImageIcon, Upload } from 'lucide-react';

export default function AddImageCard({ onClick, disabled = false }) {
	return (
		<div
			className='relative h-32 w-full sm:w-32 border-2 border-dashed rounded flex flex-col items-center justify-center text-center cursor-pointer text-gray-400 hover:bg-gray-50'
			onClick={!disabled ? onClick : undefined}>
			<ImageIcon className='w-6 h-6 mb-1' />
			<button
				type='button'
				className='inline-flex items-center gap-1 text-xs text-blue-600 hover:underline disabled:opacity-50'
				disabled={disabled}>
				<Upload className='w-4 h-4' /> Προσθήκη
			</button>
		</div>
	);
}
