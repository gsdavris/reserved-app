'use client';

import { useState } from 'react';
import { ImageIcon, Upload } from 'lucide-react';

/**
 * Αν δεν έχει εικόνες (isEmpty = true), η κάρτα γίνεται πιο ψηλή και καταλαμβάνει όλο το πλάτος.
 * Σε διαφορετική περίπτωση, έχει σταθερό ύψος και (σε desktop) διπλάσιο πλάτος από τις υπόλοιπες εικόνες.
 * Υποστηρίζει drag‑and‑drop και ενημερώνει τον χρήστη με το κατάλληλο μήνυμα.
 */
export default function AddImageCard({
	isEmpty = false,
	onClick,
	onDrop,
	disabled = false,
}) {
	const [isDragActive, setIsDragActive] = useState(false);

	const handleDragEnter = (e) => {
		e.preventDefault();
		setIsDragActive(true);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		setIsDragActive(false);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
	};
	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragActive(false);
		if (disabled) return;
		const files = Array.from(e.dataTransfer.files || []).filter((file) =>
			file.type.startsWith('image/')
		);
		if (files.length && onDrop) {
			onDrop(files);
		}
	};

	// Στις κενές galleries θέλουμε μεγαλύτερο ύψος και πλήρες πλάτος σε όλα τα breakpoints
	const heightClass = isEmpty ? 'h-36' : 'h-32';
	const widthClass = isEmpty ? 'w-full' : 'w-full sm:w-64';

	return (
		<div
			className={`relative ${heightClass} ${widthClass} border-2 border-dashed rounded flex flex-col items-center justify-center text-center cursor-pointer text-gray-400 hover:bg-gray-50 ${
				isDragActive ? 'border-blue-500 bg-blue-50 text-blue-500' : ''
			}`}
			onClick={!disabled ? onClick : undefined}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}>
			<ImageIcon className='w-6 h-6 mb-1' />
			{/* Διαφορετικό μήνυμα όταν είναι κενή η gallery */}
			{isEmpty ? (
				<p className='text-sm flex items-center gap-2'>
					Σύρε εικόνες εδώ ή
					<button
						type='button'
						className='inline-flex items-center gap-1 text-blue-600 hover:underline disabled:opacity-50'
						disabled={disabled}>
						<Upload className='w-4 h-4' /> Ανέβασμα
					</button>
				</p>
			) : (
				<p className='text-xs flex items-center gap-2'>
					Σύρε εικόνες εδώ ή
					<button
						type='button'
						className='inline-flex items-center gap-1 text-blue-600 hover:underline disabled:opacity-50'
						disabled={disabled}>
						<Upload className='w-4 h-4' /> Προσθήκη
					</button>
				</p>
			)}
		</div>
	);
}
