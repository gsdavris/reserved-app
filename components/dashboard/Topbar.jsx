'use client';
import { Menu } from 'lucide-react';

export default function Topbar({ toggleSidebar }) {
	return (
		<header className='bg-white border-b border-gray-200 p-4 flex items-center shadow z-30 relative'>
			<button
				onClick={toggleSidebar}
				className='text-gray-700 hover:text-black transition'>
				<Menu className='w-6 h-6' />
			</button>
			<h1 className='ml-4 font-semibold text-lg'>Dashboard</h1>
		</header>
	);
}
