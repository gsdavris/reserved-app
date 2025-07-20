'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import {
	CheckCircle2,
	ImageIcon,
	Trash2,
	Upload,
	ImagePlus,
} from 'lucide-react';
import MediaSelectModal from '@/components/dashboard/media/MediaSelectModal';

export default function ImageUploaderMulti({
	imageUrls = [],
	onUpload,
	onRemoveAll,
	uploaded = false,
	disabled = false,
	noLibrary = false,
}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [uploadingImages, setUploadingImages] = useState([]);
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef();

	const handleFileChange = async (e) => {
		const files = Array.from(e.target.files || []).filter((file) =>
			file.type.startsWith('image/')
		);
		if (!files.length) return;
		await handleUploadFiles(files);
	};

	const handleUploadFiles = async (files) => {
		const temp = files.map((file, i) => ({
			id: `${file.name}-${Date.now()}-${i}`,
			name: file.name,
		}));
		setUploadingImages((prev) => [...prev, ...temp]);

		await onUpload(files);
		setUploadingImages([]);
	};

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

	const handleImageSelect = async (image) => {
		setIsModalOpen(false);
		if (image?.url) {
			setUploadingImages([{ id: 'selected', name: image.filename || 'image' }]);
			await onUpload([image]);
			setUploadingImages([]);
		}
	};

	const dashedPlaceholder = () => {
		const show = uploadingImages.length === 0 && imageUrls.length === 0;
		if (!show) return null;

		return (
			<div
				className={`h-36 w-full border-2 border-dashed rounded flex flex-col items-center justify-center mb-4 px-4 text-center transition
					${isDragging ? 'border-blue-500 bg-blue-50 text-blue-500' : 'text-gray-400'}`}
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

	const renderPreviews = () => {
		return (
			<div className='flex flex-wrap gap-2'>
				{imageUrls.map((url, i) => (
					<div
						key={`preview-${i}`}
						className='relative h-32 w-32 rounded overflow-hidden'>
						<Image
							src={url}
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
					</div>
				))}

				{uploadingImages.map((img) => (
					<div
						key={img.id}
						className='relative h-32 w-32 rounded overflow-hidden bg-gray-200 animate-pulse'
					/>
				))}

				{(imageUrls.length > 0 || uploadingImages.length > 0) && (
					<button
						type='button'
						onClick={onRemoveAll}
						className='h-32 w-32 flex items-center justify-center border rounded bg-red-50 text-red-600 hover:bg-red-100'
						title='Αφαίρεση εικόνων'
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

			<MediaSelectModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSelect={handleImageSelect}
			/>

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
