import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getAccessibleBusinessId (req) {
    const { searchParams, hostname } = new URL(req.url);
    const businessId = searchParams.get('businessId');
    const session = await getServerSession(authOptions);

    if (session?.user.role === 'admin') {
        return businessId || undefined;
    }

    if (session?.user.role === 'partner') {
        return session.user.id;
    }

    const isFromTrustedHost = hostname === 'localhost' || hostname === 'reserved.gr';
    if (!session && !businessId && isFromTrustedHost) {
        return undefined; // δες όλα
    }

    // Αν είναι τρίτος (widget), χρειάζεται businessId
    if (!businessId) {
        throw new Error('Missing businessId');
    }

    return businessId;
}
