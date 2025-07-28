'use client';

import { useState } from 'react';
import ExperienceCard from './ExperienceCard';

export default function PartnerExperienceList({ initialExperiences }) {
	const [experiences, setExperiences] = useState(initialExperiences);

	const handleDelete = (id) => {
		setExperiences((prev) => prev.filter((exp) => exp.id !== id));
	};

	return (
		<div className='grid gap-4'>
			{experiences.map((exp, i) => (
				<ExperienceCard
					key={exp.id}
					index={i}
					experience={exp}
					onDelete={handleDelete}
				/>
			))}
		</div>
	);
}
