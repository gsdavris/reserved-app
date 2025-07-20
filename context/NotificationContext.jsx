'use client';

import {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircle, Info, AlertTriangle, XCircle, X } from 'lucide-react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
	const [notification, setNotification] = useState(null);

	const showNotification = useCallback((message, type = 'info') => {
		setNotification({ message, type });
	}, []);

	const hideNotification = () => setNotification(null);

	const getIcon = (type) => {
		switch (type) {
			case 'success':
				return <CheckCircle className='text-white w-6 h-6' />;
			case 'error':
				return <XCircle className='text-white w-6 h-6' />;
			case 'warning':
				return <AlertTriangle className='text-white w-6 h-6' />;
			default:
				return <Info className='text-white w-6 h-6' />;
		}
	};

	const getTitle = (type) => {
		switch (type) {
			case 'success':
				return 'Επιτυχία';
			case 'error':
				return 'Σφάλμα';
			case 'warning':
				return 'Προειδοποίηση';
			default:
				return 'Πληροφορία';
		}
	};

	const getBg = (type) => {
		switch (type) {
			case 'success':
				return 'bg-green-600';
			case 'error':
				return 'bg-red-600';
			case 'warning':
				return 'bg-yellow-500';
			default:
				return 'bg-blue-600';
		}
	};

	useEffect(() => {
		if (!notification) return;
		const timeout = setTimeout(hideNotification, 4000);
		return () => clearTimeout(timeout); // καθαρισμός όταν αλλάζει ή unmount
	}, [notification]);

	return (
		<NotificationContext.Provider value={{ showNotification }}>
			{children}

			<div className='fixed top-4 left-1/2 z-[9999] w-full max-w-sm -translate-x-1/2 px-4'>
				<Transition
					show={!!notification}
					as='div'
					enter='transition duration-300 ease-out'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition duration-200 ease-in'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'>
					{notification && (
						<div
							className={`flex items-start gap-3 rounded-lg px-4 py-3 shadow-lg text-white relative ${getBg(
								notification.type
							)}`}>
							{/* Icon */}
							<div className='pt-1'>{getIcon(notification.type)}</div>

							{/* Divider */}
							<div className='w-px h-auto bg-white/30' />

							{/* Message */}
							<div className='flex-1'>
								<p className='font-semibold'>{getTitle(notification.type)}</p>
								<p className='text-sm'>{notification.message}</p>
							</div>

							{/* Close button */}
							<button
								onClick={hideNotification}
								className='absolute top-2 right-2 p-1 hover:bg-white/10 rounded'
								aria-label='Κλείσιμο'>
								<X size={16} />
							</button>
						</div>
					)}
				</Transition>
			</div>
		</NotificationContext.Provider>
	);
}

export function useNotification() {
	return useContext(NotificationContext);
}
