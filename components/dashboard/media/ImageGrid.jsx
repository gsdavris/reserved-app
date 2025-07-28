import ImageCard from './ImageCard';

export default function ImageGrid({
	images,
	mode,
	onSelect,
	selectedIds = [],
	onEdit,
	onDelete,
	lastImageRef,
}) {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
			{images.map((img, i) => (
				<ImageCard
					key={img.id}
					image={img}
					ref={i === images.length - 1 ? lastImageRef : null}
					onClick={mode === 'select' ? () => onSelect?.(img) : undefined}
					selected={selectedIds.includes(img.id)}
					onEdit={mode === 'manage' ? onEdit : undefined}
					onDelete={mode === 'manage' ? onDelete : undefined}
					hoverClass={
						mode === 'select'
							? 'hover:ring-2 hover:ring-blue-500 cursor-pointer'
							: ''
					}
				/>
			))}
		</div>
	);
}
