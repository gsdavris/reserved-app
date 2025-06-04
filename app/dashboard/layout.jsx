'use client';
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

export default function DashboardLayout({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div className='flex h-screen bg-gray-100'>
			<Sidebar open={sidebarOpen} />
			<div
				className={`flex flex-col flex-1 transition-all ${
					sidebarOpen ? 'ml-64' : 'ml-0'
				}`}>
				<Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
				<main className='flex-1 p-4 overflow-auto'>{children}</main>
			</div>
		</div>
	);
}
