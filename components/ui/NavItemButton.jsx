'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItemButton({
	href,
	icon: Icon,
	label,
	className = '',
}) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors 
				${
					isActive
						? ' bg-gray-100 text-blue-600'
						: 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
				}	${className}`}>
			<Icon className='w-5 h-5 shrink-0' />
			<span>{label}</span>
		</Link>
	);
}
