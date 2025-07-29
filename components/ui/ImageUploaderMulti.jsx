'use client';

import { useRef, useState } from 'react';
import { ImageIcon, Upload, ImagePlus } from 'lucide-react';
import MediaSelectModal from '@/components/dashboard/media/MediaSelectModal';
import { useNotification } from '@/context/NotificationContext';
import GalleryImageCard from '@/components/ui/GalleryImageCard';
import AddImageCard from '@/components/ui/AddImageCard';
import RemoveAllButton from '@/components/ui/RemoveAllButton';

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
	const { showNotification } = useNotification();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [uploadingImages, setUploadingImages] = useState([]);
	const [dragIndex, setDragIndex] = useState(null);
	const [hoverIndex, setHoverIndex] = useState(null);
	const fileInputRef = useRef();

	// επιλογή πολλών αρχείων από δίσκο
	const handleFileChange = async (e) => {
		const files = Array.from(e.target.files || []).filter((file) =>
			file.type.startsWith('image/')
		);
		if (!files.length) return;
		await handleUploadFiles(files);
	};

	// ανεβάζει τα αρχεία και δείχνει placeholders μέχρι να τελειώσει
	const handleUploadFiles = async (files) => {
		const temp = files.map((file, i) => ({
			id: `${file.name}-${Date.now()}-${i}`,
			name: file.name,
		}));
		setUploadingImages((prev) => [...prev, ...temp]);
		await onUpload(files);
		setUploadingImages([]);
	};

	// επιλογή από media library
	const handleImageSelect = async (image) => {
		if (image?.id && image?.url) {
			if (images.some((img) => img.id === image.id)) {
				showNotification('Αυτή η εικόνα είναι ήδη στη gallery.', 'error');
				return;
			}
			setUploadingImages([{ id: 'selected', name: image.filename || 'image' }]);
			await onUpload([image]);
			setUploadingImages([]);
		}
	};

	// drag handlers
	const handleDragStart = (index) => {
		if (disabled) return;
		setDragIndex(index);
		setHoverIndex(null);
	};
	const handleDragOver = (e, index) => {
		e.preventDefault();
		if (index !== dragIndex && hoverIndex !== index) {
			setHoverIndex(index);
		}
	};
	const handleDropOn = (targetIndex) => {
		if (disabled || dragIndex === null) return;
		if (dragIndex !== targetIndex) {
			onMoveImage(dragIndex, targetIndex);
		}
		setDragIndex(null);
		setHoverIndex(null);
	};
	const handleDragEnd = () => {
		setDragIndex(null);
		setHoverIndex(null);
	};

	// dashedPlaceholder για κενή gallery
	const dashedPlaceholder = () => {
		const show = uploadingImages.length === 0 && images.length === 0;
		if (!show) return null;
		return (
			<div
				className='h-36 w-full border-2 border-dashed rounded flex flex-col items-center justify-center mb-4 px-4 text-center text-gray-400'
				onClick={() => fileInputRef.current?.click()}>
				<ImageIcon className='w-6 h-6 mb-1' />
				<button
					type='button'
					className='inline-flex items-center gap-1 text-blue-600 hover:underline'>
					<Upload className='w-4 h-4' /> Ανέβασμα
				</button>
			</div>
		);
	};

	return (
		<div className='space-y-2'>
			{dashedPlaceholder()}
			{/* Gallery grid */}
			<div className='grid grid-cols-2 sm:flex sm:flex-wrap gap-2'>
				{images.map((img, i) => (
					<GalleryImageCard
						key={img.id}
						image={img}
						uploaded={uploaded}
						draggable
						disabled={disabled}
						isDragging={dragIndex === i}
						isHover={hoverIndex === i && dragIndex !== null && dragIndex !== i}
						onDragStart={() => handleDragStart(i)}
						onDragOver={(e) => handleDragOver(e, i)}
						onDrop={() => handleDropOn(i)}
						onDragEnd={handleDragEnd}
						onRemoveImage={() => onRemoveImage(i)}
					/>
				))}
				{/* placeholders για αρχεία που ανεβαίνουν */}
				{uploadingImages.map((img) => (
					<div
						key={img.id}
						className='relative h-32 w-full sm:w-32 rounded overflow-hidden bg-gray-200 animate-pulse'
					/>
				))}
				{/* Κάρτα προσθήκης */}
				{images.length > 0 && (
					<AddImageCard
						onClick={() => fileInputRef.current?.click()}
						disabled={disabled}
					/>
				)}
				{/* Κουμπί αφαίρεσης όλων */}
				{images.length > 0 && uploadingImages.length === 0 && (
					<RemoveAllButton
						onClick={onRemoveAll}
						disabled={disabled}
					/>
				)}
			</div>
			{/* Modal επιλογής εικόνας από βιβλιοθήκη */}
			<MediaSelectModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSelect={handleImageSelect}
				closeOnSelect={false}
				selectedIds={images.map((img) => img.id)}
			/>
			{/* Κρυφό input για επιλογή αρχείων */}
			<input
				ref={fileInputRef}
				type='file'
				accept='image/*'
				onChange={handleFileChange}
				className='hidden'
				multiple
				disabled={disabled}
			/>
			{/* Κουμπί για άνοιγμα Media Library */}
			{!noLibrary && (
				<div className='flex gap-2'>
					<button
						type='button'
						onClick={() => setIsModalOpen(true)}
						className='inline-flex items-center gap-1 text-sm text-blue-600 hover:underline disabled:opacity-50'
						disabled={disabled}>
						<ImagePlus className='w-4 h-4' />
						Επιλογή από Media Library
					</button>
				</div>
			)}
		</div>
	);
}
