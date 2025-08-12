'use client';

import ExperienceForm from './ExperienceForm';

export default function EditExperienceClient({ initialData, categories }) {
	return (
		<ExperienceForm
			initialData={initialData}
			categories={categories}
			mode='edit'
		/>
	);
}
