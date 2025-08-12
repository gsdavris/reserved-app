import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getExperiences } from '@/lib/handlers/experienceHandlers';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import PartnerExperienceList from '@/components/dashboard/partner/PartnerExperienceList';

export default async function PartnerDashboardExperiencesPage() {
	const session = await getServerSession(authOptions);

	if (!session || session.user.role !== 'partner') {
		return redirect('/login');
	}

	const experiences = await getExperiences(session.user.id);

	return (
		<div>
			<div className='flex items-center justify-between mb-6'>
				<h1 className='text-2xl font-semibold'>Οι Εμπειρίες μου</h1>
				<Link
					href='/dashboard/partner/experiences/create'
					className='cursor-pointer inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
					<Plus size={18} />
					Προσθήκη Εμπειρίας
				</Link>
			</div>
			<PartnerExperienceList initialExperiences={experiences} />
		</div>
	);
}
