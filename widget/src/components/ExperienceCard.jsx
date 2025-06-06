import { MapPin } from 'lucide-react';

export default function ExperienceCard({ experience }) {
	return (
		<div className='bg-white rounded-lg shadow hover:shadow-lg transition-transform duration-200 hover:scale-105 overflow-hidden'>
			{experience.featuredImage ? (
				<img
					src={experience.featuredImage.url}
					alt={experience.featuredImage.alt || experience.title}
					className='w-full h-40 object-cover rounded-md'
				/>
			) : (
				<div className='bg-gray-200 w-full h-40 flex items-center justify-center text-gray-400 text-sm font-medium'>
					No Image
				</div>
			)}
			<div className='p-4'>
				<h3 className='text-lg font-bold'>{experience.title}</h3>
				<p className='text-sm text-gray-600 line-clamp-2'>
					{experience.description}
				</p>
				<div className='mt-2 text-xs text-gray-400 flex items-center gap-1'>
					<MapPin className='w-3 h-3 text-blue-600' />
					<span>{experience.location}</span>
				</div>
			</div>
		</div>
	);
}
