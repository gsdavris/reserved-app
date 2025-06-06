'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, LogOut, LogIn, User, SquarePen } from 'lucide-react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function UserMenu() {
	const { data: session } = useSession();
	const user = session?.user;

	const [open, setOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div
			className='relative'
			ref={menuRef}>
			<button
				onClick={() => setOpen(!open)}
				className='flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 transition'>
				{/* Εμφάνιση avatar ή εικονιδίου */}
				{user?.image ? (
					<img
						src={user.image}
						alt={user.name || 'User'}
						className='w-10 h-10 rounded-full object-cover'
					/>
				) : (
					<div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
						<User className='w-5 h-5 text-gray-500' />
					</div>
				)}
				<ChevronDown className='w-4 h-4 text-gray-500' />
			</button>

			{open && (
				<div className='absolute right-0 mt-3 w-48 divide-y divide-gray-100 bg-white shadow-md rounded-md py-1 z-20'>
					{user ? (
						<>
							<div>
								<div className='px-4 py-2 text-lg text-center text-gray-700'>
									{user.name || 'partner'}
								</div>
								<div className='px-4 pb-1 text-xs text-center text-gray-400'>
									{user.role || 'partner'}
								</div>
							</div>

							<Link
								href='/profile'
								className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
								<User className='w-4 h-4' />
								My Profile
							</Link>
							<button
								onClick={() => signOut({ callbackUrl: '/login' })}
								className='w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
								<LogOut className='w-4 h-4' />
								Logout
							</button>
						</>
					) : (
						<>
							<Link
								href='/login'
								className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
								<LogIn className='w-4 h-4' />
								Login
							</Link>
							<Link
								href='/login'
								className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
								<SquarePen className='w-4 h-4' />
								Signin
							</Link>
						</>
					)}
				</div>
			)}
		</div>
	);
}
