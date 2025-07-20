'use client';

import { SessionProvider } from 'next-auth/react';
import { NotificationProvider } from '@/context/NotificationContext';

export default function AppProviders({ children }) {
	return (
		<SessionProvider>
			<NotificationProvider>{children}</NotificationProvider>
		</SessionProvider>
	);
}
