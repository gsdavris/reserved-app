'use client';

import { useRef, useState } from 'react';
import { ImageIcon, Upload } from 'lucide-react';
import FilePicker from './FilePicker';

export default function AddImageCard({
	isEmpty = false,
	onDrop,
	onUpload,
	disabled = false,
}) {
	const [isDragActive, setIsDragActive] = useState(false);
	const filePickerRef = useRef();

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
			onClick={!disabled ? () => filePickerRef.current?.click() : undefined}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}>
			<ImageIcon className='w-6 h-6 mb-1' />
			{/* Διαφορετικό μήνυμα όταν είναι κενή η gallery */}
			{isEmpty ? (
				<p className='text-sm flex items-center gap-2 text-center'>
					<span className='hidden sm:inline'>Σύρε εικόνες εδώ ή</span>
					<span className='inline sm:hidden'>Ανεβάστε εικόνες</span>
					<FilePicker
						ref={filePickerRef}
						onFiles={onUpload}
						label='Ανέβασμα'
						disabled={disabled}
						multiple
					/>
				</p>
			) : (
				<p className='text-xs flex items-center gap-2 text-center'>
					<span className='hidden sm:inline'>Σύρε εικόνες εδώ ή</span>
					<FilePicker
						ref={filePickerRef}
						onFiles={onUpload}
						label='Ανεβάστε εικόνες'
						disabled={disabled}
						multiple
					/>
				</p>
			)}
		</div>
	);
}
