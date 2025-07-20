import { forwardRef, useState } from 'react';
import dayjs from 'dayjs';
import { Pencil, Trash2, Loader2 } from 'lucide-react';

const ImageCard = forwardRef(
	({ image, onEdit, onDelete, onClick, hoverClass = '' }, ref) => {
		const [isDeleting, setIsDeleting] = useState(false);

		const handleDelete = async (e) => {
			e.stopPropagation();
			if (isDeleting) return;
			setIsDeleting(true);
			try {
				await onDelete(image);
			} finally {
				setIsDeleting(false);
			}
		};

		return (
			<div
				ref={ref}
				onClick={onClick}
				className={`relative group rounded-lg overflow-hidden shadow-sm transition ${hoverClass}`}>
				<img
					src={image.url}
					alt={image.alt || 'Image'}
					className='w-full h-48 object-cover'
				/>

				{/* Overlay Actions on Hover */}
				{(onEdit || onDelete) && (
					<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-start justify-end gap-2 p-2 transition'>
						{onEdit && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									onEdit(image);
								}}
								className='cursor-pointer bg-white text-gray-700 hover:bg-gray-100 p-1.5 rounded shadow'>
								<Pencil size={16} />
							</button>
						)}

						{onDelete && (
							<button
								onClick={handleDelete}
								disabled={isDeleting}
								className={`cursor-pointer bg-white text-red-600 hover:bg-gray-100 p-1.5 rounded shadow flex items-center justify-center ${
									isDeleting ? 'opacity-50 cursor-not-allowed' : ''
								}`}>
								{isDeleting ? (
									<Loader2
										size={16}
										className='animate-spin'
									/>
								) : (
									<Trash2 size={16} />
								)}
							</button>
						)}
					</div>
				)}

				{/* Info */}
				<div className='p-2 text-sm text-gray-600'>
					<p className='truncate'>{image.caption || 'No caption'}</p>
					<p className='text-xs text-gray-400'>
						{dayjs(image.createdAt).format('YYYY-MM-DD HH:mm')}
					</p>
				</div>
			</div>
		);
	}
);

ImageCard.displayName = 'ImageCard';
export default ImageCard;
