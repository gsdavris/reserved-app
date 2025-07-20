import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default async function MediaLayout({ children }) {
	const session = await getServerSession(authOptions);
	if (!session) return redirect('/login');

	return (
		<DashboardLayout userRole={session.user.role}>{children}</DashboardLayout>
	);
}
