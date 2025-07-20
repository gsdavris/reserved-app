'use client';

import { navItemsByRole } from '@/lib/navItems';
import NavItemButton from '@/components/ui/NavItemButton';

export default function Sidebar({ isOpen, toggleSidebar, userRole }) {
	const navItems = navItemsByRole[userRole] || [];

	return (
		<>
			{isOpen && (
				<div
					className='fixed inset-0 bg-black/30 z-30 md:hidden'
					onClick={toggleSidebar}
				/>
			)}

			<aside
				className={`fixed md:!relative top-0 left-0 h-full bg-white border-r border-gray-300 shadow-md z-40 transform transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} w-64`}>
				<div className='flex flex-col h-full'>
					<div className='flex items-center justify-between h-16 px-4'>
						<span className='text-2xl font-bold text-gray-800'>Reserved</span>
						<button
							onClick={toggleSidebar}
							className='md:hidden text-gray-500 hover:text-gray-800 text-2xl font-bold'>
							&times;
						</button>
					</div>

					<nav className='flex flex-col gap-1 p-2'>
						{navItems.map((item) => (
							<NavItemButton
								key={item.name}
								href={item.href}
								icon={item.icon}
								label={item.name}
							/>
						))}
					</nav>
				</div>
			</aside>
		</>
	);
}
