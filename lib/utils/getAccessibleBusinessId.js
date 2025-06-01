import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getAccessibleBusinessId (req) {
    const { searchParams } = new URL(req.url);
    const businessId = searchParams.get('businessId');
    const session = await getServerSession(authOptions);

    if (session?.user.role === 'admin') {
        // Superadmin βλέπει όλα (αν δεν έχει businessId)
        return businessId || undefined;
    }

    if (session?.user.role === 'partner') {
        // Partner βλέπει μόνο τα δικά του
        return session.user.id;
    }

    // Αν είναι τρίτος (widget), χρειάζεται businessId
    if (!businessId) {
        throw new Error('Missing businessId');
    }

    return businessId;
}
