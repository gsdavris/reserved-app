'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import {
	CheckCircle2,
	ImageIcon,
	Trash2,
	Upload,
	ImagePlus,
	ArrowUp,
	ArrowDown,
} from 'lucide-react';
import MediaSelectModal from '@/components/dashboard/media/MediaSelectModal';

export default function ImageUploaderMulti({
	images = [], // [{ id, url }, ...]
	onUpload, // (filesOrImages: (File | {id, url})[]) => void
	onRemoveImage, // (index: number) => void
	onRemoveAll, // () => void
	onMoveImage, // (from: number, to: number) => void
	uploaded = false,
	disabled = false,
	noLibrary = false,
}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [uploadingImages, setUploadingImages] = useState([]); // placeholders
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef();

	// χειρισμός επιλογής πολλών αρχείων
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

		// αφήνουμε τον γονέα να χειριστεί το upload (ώστε να ενημερώσει το state του)
		await onUpload(files);
		setUploadingImages([]);
	};

	// drag & drop
	const handleDrop = async (e) => {
		e.preventDefault();
		setIsDragging(false);
		const files = Array.from(e.dataTransfer.files || []).filter((file) =>
			file.type.startsWith('image/')
		);
		if (files.length) {
			await handleUploadFiles(files);
		}
	};

	// επιλογή από media library
	const handleImageSelect = async (image) => {
		setIsModalOpen(false);
		if (image?.id && image?.url) {
			setUploadingImages([{ id: 'selected', name: image.filename || 'image' }]);
			await onUpload([image]);
			setUploadingImages([]);
		}
	};

	// placeholder όταν δεν υπάρχουν εικόνες
	const dashedPlaceholder = () => {
		const show = uploadingImages.length === 0 && images.length === 0;
		if (!show) return null;

		return (
			<div
				className={`h-36 w-full border-2 border-dashed rounded flex flex-col items-center justify-center mb-4 px-4 text-center transition
          ${
						isDragging
							? 'border-blue-500 bg-blue-50 text-blue-500'
							: 'text-gray-400'
					}`}
				onDragEnter={(e) => {
					e.preventDefault();
					setIsDragging(true);
				}}
				onDragLeave={(e) => {
					e.preventDefault();
					setIsDragging(false);
				}}
				onDragOver={(e) => e.preventDefault()}
				onDrop={handleDrop}>
				<ImageIcon className='w-6 h-6 mb-1' />
				<p className='text-sm flex items-center gap-2'>
					Σύρε εικόνες εδώ ή
					<button
						type='button'
						onClick={() => fileInputRef.current?.click()}
						className='cursor-pointer inline-flex items-center gap-1 text-blue-600 hover:underline disabled:opacity-50'
						disabled={disabled}>
						<Upload className='w-4 h-4' /> Ανέβασμα
					</button>
				</p>
			</div>
		);
	};

	// αποτύπωση των previews: διαγραφή, μετακίνηση, uploaded icon κλπ.
	const renderPreviews = () => {
		return (
			<div className='flex flex-wrap gap-2'>
				{images.map((img, i) => (
					<div
						key={`preview-${img.id}-${i}`}
						className='relative h-32 w-32 rounded overflow-hidden'>
						<Image
							src={img.url}
							alt={`Preview ${i}`}
							fill
							sizes='128px'
							className='object-cover'
							priority
						/>
						{uploaded && (
							<div className='absolute top-1 left-1 bg-green-600 text-white p-1 rounded-full shadow-md'>
								<CheckCircle2 className='w-4 h-4' />
							</div>
						)}
						{/* κουμπί διαγραφής κάθε εικόνας */}
						<button
							type='button'
							onClick={() => onRemoveImage(i)}
							className='cursor-pointer absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full'
							title='Αφαίρεση εικόνας'
							disabled={disabled}>
							<Trash2 className='w-4 h-4' />
						</button>

						{/* κουμπιά ταξινόμησης (πάνω / κάτω) */}
						<div className='absolute bottom-1 right-1 flex gap-1'>
							{i > 0 && (
								<button
									type='button'
									onClick={() => onMoveImage(i, i - 1)}
									className='bg-gray-100 text-gray-700 p-1 rounded-full'
									disabled={disabled}>
									<ArrowUp className='w-3 h-3' />
								</button>
							)}
							{i < images.length - 1 && (
								<button
									type='button'
									onClick={() => onMoveImage(i, i + 1)}
									className='bg-gray-100 text-gray-700 p-1 rounded-full'
									disabled={disabled}>
									<ArrowDown className='w-3 h-3' />
								</button>
							)}
						</div>
					</div>
				))}

				{/* placeholders για τα αρχεία που ανεβαίνουν */}
				{uploadingImages.map((img) => (
					<div
						key={img.id}
						className='relative h-32 w-32 rounded overflow-hidden bg-gray-200 animate-pulse'
					/>
				))}

				{/* κουμπί αφαίρεσης όλων όταν υπάρχουν εικόνες */}
				{images.length > 0 && uploadingImages.length === 0 && (
					<button
						type='button'
						onClick={onRemoveAll}
						className='h-32 w-32 flex items-center justify-center border rounded bg-red-50 text-red-600 hover:bg-red-100'
						title='Αφαίρεση όλων'
						disabled={disabled}>
						<Trash2 className='w-6 h-6' />
					</button>
				)}
			</div>
		);
	};

	return (
		<div className='space-y-2'>
			{dashedPlaceholder()}
			{renderPreviews()}
			{/* modal για επιλογή από media library */}
			<MediaSelectModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSelect={handleImageSelect}
			/>
			{/* κρυφό input για πολλαπλά αρχεία */}
			<input
				ref={fileInputRef}
				type='file'
				accept='image/*'
				onChange={handleFileChange}
				className='hidden'
				multiple
				disabled={disabled}
			/>
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
