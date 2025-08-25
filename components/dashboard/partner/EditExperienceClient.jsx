'use client';

import ExperienceForm from './ExperienceForm';

export default function EditExperienceClient(props) {
	return (
		<ExperienceForm
			{...props}
			mode={props.mode ?? 'edit'}
		/>
	);
}
