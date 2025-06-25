'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

export default function PartnerLayout({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsSidebarOpen(true);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<Sidebar
				isOpen={isSidebarOpen}
				toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
			/>
			<div
				className={`flex flex-col flex-1 transition-all duration-300 ${
					isSidebarOpen ? 'md:ml-0' : 'md:-ml-64'
				}`}>
				<Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
				<main className='flex-1 overflow-y-auto p-4 bg-gray-50'>
					{children}
				</main>
			</div>
		</>
	);
}
