import Image from 'next/image';
import EditButton from './EditButton';
import ClientDeleteButton from './ClientDeleteButton';

export default function ExperienceCard({ experience, onDelete, index }) {
	return (
		<div className='bg-white p-2 rounded shadow flex items-center justify-between gap-4'>
			{/* Thumbnail */}
			{experience.featuredImage?.url && (
				<div className='w-24 h-24 relative flex-shrink-0 rounded overflow-hidden'>
					<Image
						src={experience.featuredImage.url}
						alt={experience.title}
						fill
						priority={index === 0}
						sizes='96px'
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
