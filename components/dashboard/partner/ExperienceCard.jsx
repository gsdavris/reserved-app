import Image from 'next/image';
import EditButton from './EditButton';
import ClientDeleteButton from './ClientDeleteButton';

export default function ExperienceCard({ experience, onDelete, index }) {
	const image = experience.featuredImage;

	return (
		<div className='bg-white p-2 rounded shadow flex items-center justify-between gap-4'>
			{/* Thumbnail */}
			{image?.url && (
				<div className='relative h-32 w-32 flex-shrink-0 rounded overflow-hidden'>
					<Image
						fill
						src={image.url}
						alt={experience.title}
						className='object-cover rounded'
						priority={index === 0}
						unoptimized
					/>
				</div>
			)}
			{/* Content */}
			<div className='flex-1'>
				<h2 className='font-semibold'>{experience.title}</h2>
				<p className='text-sm text-gray-500'>{experience.location}</p>
			</div>

			{/* Actions */}
			<div className='flex gap-4'>
				<EditButton experienceId={experience.id} />
				<ClientDeleteButton
					experienceId={experience.id}
					onDelete={onDelete}
				/>
			</div>
		</div>
	);
}
