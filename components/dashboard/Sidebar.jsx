import { Home, LayoutDashboard, LogOut } from 'lucide-react';
import NavItemButton from '@/components/ui/NavItemButton';

const navItems = [
	{ name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
	{ name: 'Experiences', icon: Home, href: '/dashboard/experiences' },
	{ name: 'Logout', icon: LogOut, href: '/logout' },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
	return (
		<aside
			className={`${
				isOpen ? 'w-64' : 'w-0'
			} bg-white  border-r border-gray-300 transition-all duration-300 overflow-hidden shadow-md h-full z-10`}>
			<div className='flex flex-col h-full'>
				{/* Header */}
				<div className='flex items-center justify-between h-16 px-4'>
					<span className='text-3xl font-semibold text-gray-800 tracking-tight'>
						Reserved
					</span>
					<button
						onClick={toggleSidebar}
						className='md:hidden text-gray-500 hover:text-gray-800 text-xl font-bold'>
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
	);
}
