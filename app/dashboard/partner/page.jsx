import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getExperiences } from '@/lib/handlers/experienceHandlers';
import { countImagesByUser } from '@/lib/handlers/mediaHandlers';
import DashboardStatCard from '@/components/dashboard/DashboardStatCard';
import { Package, Image as ImageIcon, Clock } from 'lucide-react';

export default async function PartnerOverviewPage() {
	const session = await getServerSession(authOptions);

	if (!session || session.user.role !== 'partner') {
		return redirect('/login');
	}

	const [experiences, images] = await Promise.all([
		getExperiences(session.user.id),
		countImagesByUser(session.user.id),
	]);

	return (
		<div className='space-y-6'>
			<h1 className='text-2xl font-bold'>
				👋 Καλώς ήρθες, {session.user.name || 'Partner'}!
			</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6'>
				<DashboardStatCard
					icon={
						<Package
							size={28}
							className='text-blue-600'
						/>
					}
					title='Εμπειρίες'
					count={experiences.length}
					href='/dashboard/partner/experiences'
					label='Δες όλες τις εμπειρίες'
				/>
				<DashboardStatCard
					icon={
						<ImageIcon
							size={28}
							className='text-blue-600'
						/>
					}
					title='Εικόνες'
					count={images}
					href='/dashboard/media'
					label='Δες όλες τις εικόνες'
				/>

				<DashboardStatCard
					icon={
						<Clock
							size={28}
							className='text-blue-600'
						/>
					}
					title='Κρατήσεις'
					count='...'
					href='/'
					label='Coming soon'
				/>

				<DashboardStatCard
					icon={
						<Clock
							size={28}
							className='text-blue-600'
						/>
					}
					title='Reviews'
					count='...'
					href='/'
					label='Coming soon'
				/>
			</div>
		</div>
	);
}
