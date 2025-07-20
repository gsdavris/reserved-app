import { MapPin } from 'lucide-react';

export default function ExperienceCard({ experience }) {
	return (
		<div className='tw:bg-white tw:rounded-lg tw:shadow tw:hover:shadow-lg tw:transition-transform tw:duration-200 tw:hover:scale-105 tw:overflow-hidden'>
			{experience.featuredImage ? (
				<img
					src={experience.featuredImage.url}
					alt={experience.featuredImage.alt || experience.title}
					className='tw:w-full tw:h-40 tw:object-cover tw:rounded-md'
				/>
			) : (
				<div className='tw:bg-gray-200 tw:w-full tw:h-40 tw:flex tw:items-center tw:justify-center tw:text-gray-400 tw:text-sm tw:font-medium'>
					No Image
				</div>
			)}
			<div className='tw:p-4'>
				<h3 className='tw:text-lg tw:font-bold'>{experience.title}</h3>
				<p className='tw:text-sm tw:text-gray-600 tw:line-clamp-2'>
					{experience.description}
				</p>
				<div className='tw:mt-2 tw:text-xs tw:text-gray-400 tw:flex tw:items-center tw:gap-1'>
					<MapPin className='tw:w-3 tw:h-3 tw:text-blue-600' />
					<span>{experience.location}</span>
				</div>
			</div>
		</div>
	);
}
