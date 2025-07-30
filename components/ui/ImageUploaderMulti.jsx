'use client';

import { ImagePlus } from 'lucide-react';
import useUploadQueue from '@/hooks/useUploadQueue';
import useImageDragSort from '@/hooks/useImageDragSort';
import useMediaPicker from '@/hooks/useMediaPicker';
import GalleryImageCard from '@/components/ui/GalleryImageCard';
import AddImageCard from '@/components/ui/AddImageCard';
import RemoveAllButton from '@/components/ui/RemoveAllButton';
import MediaSelectModal from '@/components/dashboard/media/MediaSelectModal';

export default function ImageUploaderMulti({
	images = [],
	onUpload,
	onRemoveImage,
	onRemoveAll,
	onMoveImage,
	uploaded = false,
	disabled = false,
	noLibrary = false,
}) {
	const { uploadingFiles, uploadFiles } = useUploadQueue(onUpload);
	const { dragIndex, hoverIndex, onDragStart, onDragOver, onDrop, onDragEnd } =
		useImageDragSort(disabled, onMoveImage);
	const mediaPicker = useMediaPicker(images, (newImages) => {
		const toUpload = newImages.map((img) => (img.id ? img : img));
		onUpload(toUpload);
	});

	return (
		<div className='space-y-2'>
			{images.length === 0 && uploadingFiles.length === 0 && (
				<AddImageCard
					isEmpty
					onDrop={uploadFiles}
					onUpload={uploadFiles}
					disabled={disabled}
				/>
			)}

			{(images.length > 0 || uploadingFiles.length > 0) && (
				<div className='grid grid-cols-2 sm:flex sm:flex-wrap gap-2'>
					{images.map((img, i) => (
						<GalleryImageCard
							key={img.id}
							image={img}
							uploaded={uploaded}
							draggable
							disabled={disabled}
							isDragging={dragIndex === i}
							isHover={
								hoverIndex === i && dragIndex !== null && dragIndex !== i
							}
							onDragStart={() => onDragStart(i)}
							onDragOver={(e) => onDragOver(e, i)}
							onDrop={() => onDrop(i)}
							onDragEnd={onDragEnd}
							onRemoveImage={() => onRemoveImage(i)}
						/>
					))}

					{uploadingFiles.map((file) => (
						<div
							key={file.id}
							className='relative h-32 w-full sm:w-32 rounded overflow-hidden bg-gray-200 animate-pulse'
						/>
					))}
					{images.length > 0 && uploadingFiles.length === 0 && (
						<RemoveAllButton
							onClick={onRemoveAll}
							disabled={disabled}
						/>
					)}

					<AddImageCard
						isEmpty={false}
						onClick={() => filePickerRef.current?.click()}
						onDrop={uploadFiles}
						disabled={disabled}
					/>
				</div>
			)}
			{!noLibrary && (
				<div className='flex gap-2'>
					<button
						type='button'
						onClick={mediaPicker.openPicker}
						className='inline-flex items-center gap-1 text-sm text-blue-600 hover:underline disabled:opacity-50'
						disabled={disabled}>
						<ImagePlus className='w-4 h-4' /> Επιλογή από Media Library
					</button>
				</div>
			)}

			<MediaSelectModal
				open={mediaPicker.isOpen}
				onClose={mediaPicker.closePicker}
				onSelect={mediaPicker.handleSelect}
				closeOnSelect={false}
				selectedIds={mediaPicker.selectedIds}
			/>
		</div>
	);
}
