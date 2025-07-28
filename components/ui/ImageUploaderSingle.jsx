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

export default function ImageUploaderSingle({
	imageUrl,
	onUpload,
	onRemove,
	uploaded = false,
	disabled = false,
	noLibrary = false,
}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isUploading, setIsUploading] = useState(false);
	const fileInputRef = useRef();

	// χειρισμός επιλογής αρχείου
	const handleFileChange = async (e) => {
		const file = e.target.files?.[0];
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

	// χειρισμός επιλογής εικόνας από το media library
	const handleImageSelect = async (image) => {
		setIsModalOpen(false);
		if (image?.id && image?.url) {
			setIsUploading(true);
			await onUpload({ id: image.id, url: image.url });
			setIsUploading(false);
		}
	};

	// εμφάνιση preview ανάλογα με την κατάσταση
	const renderPreview = () => {
		if (isUploading) {
			return (
				<div className='relative h-32 w-32 rounded overflow-hidden bg-gray-200 animate-pulse' />
			);
		}
		if (!imageUrl) {
			return (
				<div className='h-32 w-32 border border-dashed rounded flex flex-col items-center justify-center hover:bg-gray-50 transition'>
					<ImageIcon className='w-6 h-6 text-gray-400' />
					<span className='text-xs text-gray-500 mt-1'>Επέλεξε εικόνα</span>
				</div>
			);
		}
		return (
			<div className='relative h-32 w-32 rounded overflow-hidden border'>
				<Image
					src={imageUrl}
					alt='Preview'
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
				<button
					type='button'
					onClick={onRemove}
					className='cursor-pointer absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full'
					title='Αφαίρεση εικόνας'
					disabled={disabled}>
					<Trash2 className='w-4 h-4' />
				</button>
			</div>
		);
	};

	return (
		<div className='space-y-2'>
			{renderPreview()}
			{/* Modal για media library */}
			<MediaSelectModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSelect={handleImageSelect}
			/>
			{/* Κρυφό input για ανέβασμα αρχείου */}
			<input
				ref={fileInputRef}
				type='file'
				accept='image/*'
				onChange={handleFileChange}
				className='hidden'
				disabled={disabled}
			/>
			{/* Κουμπιά ενεργειών */}
			<div className='flex gap-2'>
				{!noLibrary && (
					<button
						type='button'
						onClick={() => setIsModalOpen(true)}
						className='inline-flex items-center gap-1 text-sm text-blue-600 hover:underline disabled:opacity-50'
						disabled={disabled || isUploading}>
						<ImagePlus className='w-4 h-4' />
						Επιλογή από Media Library
					</button>
				)}
				<button
					type='button'
					onClick={() => fileInputRef.current?.click()}
					className='inline-flex items-center gap-1 text-sm text-blue-600 hover:underline disabled:opacity-50'
					disabled={disabled || isUploading}>
					<Upload className='w-4 h-4' />
					Ανέβασμα
				</button>
			</div>
		</div>
	);
}
