import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getExperienceById } from '@/lib/handlers/experienceHandlers';
import { getCategoryOptions } from '@/lib/handlers/categoryHandlers';
import EditExperienceClient from '@/components/dashboard/partner/EditExperienceClient';

export default async function EditExperiencePage({ params }) {
	const session = await getServerSession(authOptions);

	if (!session || session.user.role !== 'partner') {
		redirect('/login');
	}

	const { id } = await params;
	const experienceId = Number(id);

	if (isNaN(experienceId)) {
		redirect('/dashboard/partner/experiences');
	}

	const experience = await getExperienceById(experienceId);

	if (!experience || experience.businessId !== session.user.id) {
		redirect('/dashboard/partner/experiences');
	}

	const categories = await getCategoryOptions();

	return (
		<div>
			<EditExperienceClient
				initialData={experience}
				categories={categories}
			/>
		</div>
	);
}
