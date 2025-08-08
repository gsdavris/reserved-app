import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {
	getImages,
	getAvailableMediaMonths,
} from '@/lib/handlers/mediaHandlers';
import MediaLibraryPageContent from '@/components/dashboard/media/MediaLibraryPageContent';

export default async function MediaLibraryPage() {
	const session = await getServerSession(authOptions);
	if (!session || !session.user) return redirect('/login');

	const [imageData, months] = await Promise.all([
		getImages({ uploadedById: session.user.id, limit: 12 }),
		getAvailableMediaMonths(session.user.id),
	]);

	return (
		<MediaLibraryPageContent
			initialImages={imageData.images}
			initialCursor={imageData.nextCursor}
			totalCount={imageData.totalCount}
			availableMonths={months}
		/>
	);
}
