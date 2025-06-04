import { Home, Users, Settings } from 'lucide-react';

export default function Sidebar({ open }) {
	return (
		<aside
			className={`bg-white border-r border-gray-200 p-4 shadow fixed top-0 left-0 h-full transition-transform duration-300 z-40 ${
				open ? 'translate-x-0' : '-translate-x-full'
			} w-64`}>
			<h2 className='font-bold text-xl mb-6'>Reserved</h2>
			<nav className='flex flex-col gap-4'>
				<a
					href='/dashboard'
					className='flex items-center gap-2 text-gray-700 hover:bg-gray-200 rounded p-2'>
					<Home className='w-5 h-5' /> Dashboard
				</a>
				<a
					href='/dashboard/partner'
					className='flex items-center gap-2 text-gray-700 hover:bg-gray-200 rounded p-2'>
					<Users className='w-5 h-5' /> Partner Panel
				</a>
				<a
					href='/dashboard/superadmin'
					className='flex items-center gap-2 text-gray-700 hover:bg-gray-200 rounded p-2'>
					<Settings className='w-5 h-5' /> Admin Panel
				</a>
			</nav>
		</aside>
	);
}
