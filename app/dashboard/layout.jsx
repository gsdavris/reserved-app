'use client';
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';

export default function Layout({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<SessionProviderWrapper>
			<div className='flex h-screen overflow-hidden'>
				<Sidebar
					isOpen={isSidebarOpen}
					toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
				/>
				<div className='flex flex-col flex-1 transition-all duration-300'>
					<Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
					<main className='flex-1 overflow-y-auto p-4 bg-gray-50'>
						{children}
					</main>
				</div>
			</div>
		</SessionProviderWrapper>
	);
}
