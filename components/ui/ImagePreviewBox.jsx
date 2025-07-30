'use client';

import Image from 'next/image';
import { CheckCircle2, ImageIcon, Trash2 } from 'lucide-react';

export default function ImagePreviewBox({
	imageUrl,
	isUploading = false,
	uploaded = false,
	disabled = false,
	onRemove,
}) {
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
		<div className='relative h-32 w-32 rounded overflow-hidden'>
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
			{onRemove && (
				<button
					type='button'
					onClick={onRemove}
					className='cursor-pointer absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full'
					title='Αφαίρεση εικόνας'
					disabled={disabled}>
					<Trash2 className='w-4 h-4' />
				</button>
			)}
		</div>
	);
}
