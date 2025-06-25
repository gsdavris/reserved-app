'use client';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';

export default function Layout({ children }) {
	return (
		<SessionProviderWrapper>
			<div className='flex h-screen overflow-hidden'>{children}</div>
		</SessionProviderWrapper>
	);
}
