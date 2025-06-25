import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getExperiences } from '@/lib/handlers/experienceHandlers';
import Link from 'next/link';

export default async function PartnerOverviewPage() {
	const session = await getServerSession(authOptions);

	if (!session || session.user.role !== 'partner') {
		return redirect('/login');
	}

	const experiences = await getExperiences(session.user.id);

	return (
		<div className='space-y-6'>
			<h1 className='text-2xl font-bold'>
				👋 Καλώς ήρθες, {session.user.name || 'Partner'}!
			</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				<div className='bg-white rounded-lg shadow p-6'>
					<h2 className='text-lg font-semibold mb-2'>📦 Εμπειρίες</h2>
					<p className='text-3xl font-bold'>{experiences.length}</p>
					<Link
						href='/dashboard/partner/experiences'
						className='text-blue-600 text-sm mt-2 inline-block hover:underline'>
						Δες όλες τις εμπειρίες →
					</Link>
				</div>

				{/* Έτοιμο για προσθήκη μελλοντικών stats */}
				<div className='bg-white rounded-lg shadow p-6 text-gray-400 text-center italic'>
					Coming soon: Κρατήσεις, Reviews...
				</div>
			</div>
		</div>
	);
}
