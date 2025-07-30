'use client';

import { useRef, forwardRef, useImperativeHandle } from 'react';
import { Upload } from 'lucide-react';

const FilePicker = forwardRef(function FilePicker(
	{ onFiles, label = 'Επιλέξτε εικόνες', multiple = true, disabled = false },
	ref
) {
	const fileInputRef = useRef();

	useImperativeHandle(ref, () => ({
		click: () => fileInputRef.current?.click(),
	}));

	const handleChange = (e) => {
		const files = Array.from(e.target.files || []).filter((f) =>
			f.type.startsWith('image/')
		);
		if (files.length) {
			onFiles(files);
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
			{label && (
				<button
					type='button'
					onClick={() => !disabled && fileInputRef.current?.click()}
					className='inline-flex items-center gap-1 text-sm text-blue-600 hover:underline disabled:opacity-50'
					disabled={disabled}>
					<Upload className='w-4 h-4' /> {label}
				</button>
			)}
		</>
	);
});

export default FilePicker;
