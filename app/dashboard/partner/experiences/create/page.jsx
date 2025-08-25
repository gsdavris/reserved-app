import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getCategoryOptions } from '@/lib/handlers/categoryHandlers';
import {
	getTags,
	getRecommendedTagsForCategory,
} from '@/lib/handlers/tagHandlers';
import ExperienceForm from '@/components/dashboard/partner/ExperienceForm';

export default async function CreateExperiencePage() {
	const session = await getServerSession(authOptions);

	if (!session || session.user.role !== 'partner') {
		redirect('/login');
	}

	const categories = await getCategoryOptions();
	const allTags = await getTags();
	const recommendedTagIds = [];

	return (
		<div>
			<ExperienceForm
				categories={categories}
				allTags={allTags}
				recommendedTagIds={recommendedTagIds}
				submitLabel='Δημιουργία'
				mode='create'
			/>
		</div>
	);
}
