'use client';

import Image from 'next/image';
import { CheckCircle2, Trash2 } from 'lucide-react';

export default function GalleryImageCard({
	image,
	uploaded = false,
	draggable = false,
	disabled = false,
	isDragging = false,
	isHover = false,
	onDragStart,
	onDragOver,
	onDrop,
	onDragEnd,
	onRemoveImage,
}) {
	return (
		<div
			className={
				`relative h-32 w-full sm:w-32 rounded overflow-hidden border ` +
				(isDragging
					? 'cursor-grabbing ring-2 ring-blue-500 opacity-70'
					: draggable && !disabled
					? 'cursor-grab'
					: '') +
				(!isDragging && isHover
					? ' ring-2 ring-blue-300 transform translate-x-2 transition-transform'
					: '')
			}
			draggable={draggable && !disabled}
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDrop={onDrop}
			onDragEnd={onDragEnd}>
			<Image
				src={image.url}
				alt='Preview'
				fill
				sizes='128px'
				className='object-cover'
				unoptimized
			/>
			{uploaded && (
				<div className='absolute top-1 left-1 bg-green-600 text-white p-1 rounded-full shadow-md'>
					<CheckCircle2 className='w-4 h-4' />
				</div>
			)}
			{onRemoveImage && (
				<button
					type='button'
					onClick={onRemoveImage}
					className='cursor-pointer absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full'
					title='Αφαίρεση εικόνας'
					disabled={disabled}>
					<Trash2 className='w-4 h-4' />
				</button>
			)}
		</div>
	);
}
