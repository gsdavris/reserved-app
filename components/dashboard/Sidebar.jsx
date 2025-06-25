import { Home, LayoutDashboard, LogOut } from 'lucide-react';
import NavItemButton from '@/components/ui/NavItemButton';

const navItems = [
	{ name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
	{ name: 'Experiences', icon: Home, href: '/dashboard/experiences' },
	{ name: 'Logout', icon: LogOut, href: '/logout' },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
	return (
		<>
			{/* Overlay for mobile */}
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
					{/* Header */}
					<div className='flex items-center justify-between h-16 px-4'>
						<span className='text-2xl font-bold text-gray-800'>Reserved</span>
						<button
							onClick={toggleSidebar}
							className='md:hidden text-gray-500 hover:text-gray-800 text-2xl font-bold'>
							&times;
						</button>
					</div>

					{/* Navigation */}
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
