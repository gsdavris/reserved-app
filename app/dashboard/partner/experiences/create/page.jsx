import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getCategoryOptions } from '@/lib/handlers/categoryHandlers';
import ExperienceForm from '@/components/dashboard/partner/ExperienceForm';

export default async function CreateExperiencePage() {
	const session = await getServerSession(authOptions);

	if (!session || session.user.role !== 'partner') {
		redirect('/login');
	}

	const categories = await getCategoryOptions();

	return (
		<div>
			<h1 className='text-2xl font-semibold mb-4'>Νέα Εμπειρία</h1>
			<ExperienceForm
				categories={categories}
				submitLabel='Δημιουργία'
			/>
		</div>
	);
}
