'use client';

import { useRef, useState } from 'react';
import { Upload, ImagePlus } from 'lucide-react';

import useMediaPicker from '@/hooks/useMediaPicker';
import FilePicker from '@/components/ui/FilePicker';
import MediaSelectModal from '@/components/dashboard/media/MediaSelectModal';
import ImagePreviewBox from '@/components/ui/ImagePreviewBox';

export default function ImageUploaderSingle({
	imageUrl,
	onUpload,
	onRemove,
	uploaded = false,
	disabled = false,
	noLibrary = false,
}) {
	const fileInputRef = useRef();
	const [isUploading, setIsUploading] = useState(false);

	// Picker with single image
	const mediaPicker = useMediaPicker(
		imageUrl ? [{ id: '', url: imageUrl }] : [],
		async (images) => {
			const image = images?.[0];
			if (image?.id && image?.url) {
				setIsUploading(true);
				await onUpload({ id: image.id, url: image.url });
				setIsUploading(false);
			}
		}
	);

	// File upload (single)
	const handleUploadFromFile = async (files) => {
		const file = files?.[0];
		if (!file) return;
		setIsUploading(true);
		const fd = new FormData();
		fd.append('file', file);
		const res = await fetch('/api/media', { method: 'POST', body: fd });
		if (res.ok) {
			const data = await res.json();
			await onUpload({ id: data.imageId, url: data.imageUrl });
		}
		setIsUploading(false);
	};

	return (
		<div className='space-y-2'>
			<ImagePreviewBox
				imageUrl={imageUrl}
				isUploading={isUploading}
				uploaded={uploaded}
				disabled={disabled}
				onRemove={onRemove}
			/>

			{/* File upload hidden input */}
			<FilePicker
				ref={fileInputRef}
				onFiles={handleUploadFromFile}
				disabled={disabled || isUploading}
				label={null}
				multiple={false} // <- ΕΔΩ ο περιορισμός
			/>

			{/* Modal for Media Library */}
			<MediaSelectModal
				open={mediaPicker.isOpen}
				onClose={mediaPicker.closePicker}
				onSelect={mediaPicker.handleSelect}
			/>

			{/* Action Buttons */}
			<div className='flex gap-2'>
				{!noLibrary && (
					<button
						type='button'
						onClick={mediaPicker.openPicker}
						className='inline-flex items-center gap-1 text-sm text-blue-600 hover:underline disabled:opacity-50'
						disabled={disabled || isUploading}>
						<ImagePlus className='w-4 h-4' /> Επιλογή από Media Library
					</button>
				)}
				<button
					type='button'
					onClick={() => fileInputRef.current?.click()}
					className='inline-flex items-center gap-1 text-sm text-blue-600 hover:underline disabled:opacity-50'
					disabled={disabled || isUploading}>
					<Upload className='w-4 h-4' /> Ανέβασμα
				</button>
			</div>
		</div>
	);
}
