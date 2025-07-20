'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import IconButton from '@/components/ui/IconButton';
import { X } from 'lucide-react';
import MediaLibrary from '@/components/dashboard/media/MediaLibrary';

export default function MediaSelectModal({ open, onClose, onSelect }) {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			className='relative z-50'>
			<div className='fixed inset-0 bg-black/40 backdrop-blur-sm' />
			<div className='fixed inset-0 z-50 overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center p-4 text-center'>
					<DialogPanel className='w-full max-w-5xl transform rounded-lg bg-white p-6 text-left align-middle shadow-xl'>
						<DialogTitle className='text-lg font-semibold mb-4 flex justify-between items-center'>
							Επιλογή Εικόνας
							<IconButton
								onClick={onClose}
								icon={X}
								ariaLabel='Κλείσιμο'
								className='text-gray-400 hover:text-red-500'
							/>
						</DialogTitle>

						{/* 📦 Reuse MediaLibrary with Select Mode */}
						<MediaLibrary
							mode='select'
							onSelect={onSelect}
						/>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
