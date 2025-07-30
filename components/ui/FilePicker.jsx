'use client';

import { useRef } from 'react';
import { Upload } from 'lucide-react';

export default function FilePicker({
	onFiles,
	multiple = true,
	disabled = false,
}) {
	const fileInputRef = useRef();

	const handleChange = (e) => {
		const files = Array.from(e.target.files || []).filter((f) =>
			f.type.startsWith('image/')
		);
		if (files.length) {
			onFiles(files);
			// reset input για να μπορεί να ανέβει ξανά το ίδιο αρχείο αν χρειαστεί
			e.target.value = '';
		}
	};

	return (
		<>
			<input
				ref={fileInputRef}
				type='file'
				accept='image/*'
				onChange={handleChange}
				className='hidden'
				multiple={multiple}
				disabled={disabled}
			/>
			<button
				type='button'
				onClick={() => !disabled && fileInputRef.current?.click()}
				className='inline-flex items-center gap-1 text-sm text-blue-600 hover:underline disabled:opacity-50'
				disabled={disabled}>
				<Upload className='w-4 h-4' /> Ανέβασμα
			</button>
		</>
	);
}
