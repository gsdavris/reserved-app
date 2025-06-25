import ExperienceCard from './ExperienceCard';
import SkeletonCard from './SkeletonCard';

export default function ExperienceCardsList({ experiences, loading }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
			{loading
				? Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)
				: experiences?.map((exp) => (
						<ExperienceCard
							key={exp.id}
							experience={exp}
						/>
				  ))}
		</div>
	);
}
