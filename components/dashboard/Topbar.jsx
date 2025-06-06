import { Menu, X } from 'lucide-react';
import IconButton from '@/components/ui/IconButton';
import UserMenu from './UserMenu';

export default function Topbar({ toggleSidebar }) {
	const user = {
		name: 'George',
		role: 'Partner',
		image:
			'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
	}; // later from auth context
	return (
		<header className='flex z-10 items-center justify-between h-16 px-4 bg-white shadow transition-all duration-300'>
			<IconButton
				onClick={toggleSidebar}
				icon={Menu}
				ariaLabel='Toggle sidebar'
				label={''}
			/>
			<UserMenu user={user} />
		</header>
	);
}
