'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { X, Save, Trash } from 'lucide-react';
import IconButton from '@/components/ui/IconButton';
import { useSession } from 'next-auth/react';
import dayjs from 'dayjs';

export default function ImageEditModal({
	open,
	onClose,
	image,
	alt,
	setAlt,
	caption,
	setCaption,
	onSave,
	onDelete,
	loading = false,
}) {
	const { data: session } = useSession();
	const isAdmin = session?.user?.role === 'admin';

	return (
		<Dialog
			open={open}
			onClose={onClose}
			className='relative z-50'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black/40 backdrop-blur-sm' />

			{/* Centered content */}
			<div className='fixed inset-0 z-50 overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center p-4 text-center'>
					<DialogPanel
						transition
						className='w-full max-w-3xl transform rounded-lg bg-white p-6 text-left align-middle shadow-xl duration-300 ease-out data-[state=closed]:scale-95 data-[state=closed]:opacity-0'>
						<DialogTitle
							as='h3'
							className='text-lg font-semibold mb-4 flex justify-between items-center'>
							Επεξεργασία Εικόνας
							<IconButton
								onClick={onClose}
								icon={X}
								ariaLabel='Κλείσιμο'
								className='text-gray-400 hover:text-red-500'
							/>
						</DialogTitle>

						{/* Image + form */}
						<div className='flex flex-col lg:flex-row gap-6'>
							<img
								src={image?.url}
								alt={alt || 'Preview'}
								className='w-full max-h-96 object-contain rounded bg-gray-100'
							/>

							<div className='flex flex-col gap-4 w-full lg:w-1/2'>
								{/* Info */}
								<div className='text-sm text-gray-700 space-y-1'>
									<p>
										<span className='font-medium'>Μεταφορτώθηκε την:</span>{' '}
										{dayjs(image?.createdAt).format('D MMMM YYYY')}
									</p>
									{isAdmin && image?.uploadedBy?.name && (
										<p>
											<span className='font-medium'>Μεταφορτώθηκε από:</span>{' '}
											{image.uploadedBy.name}
										</p>
									)}
									<p>
										<span className='font-medium'>Όνομα αρχείου:</span>{' '}
										{image?.fileName}
									</p>
									<p>
										<span className='font-medium'>Τύπος αρχείου:</span>{' '}
										{image?.mimeType}
									</p>
									<p>
										<span className='font-medium'>Μέγεθος αρχείου:</span>{' '}
										{image?.fileSizeKb} KB
									</p>
									<p>
										<span className='font-medium'>Διαστάσεις:</span>{' '}
										{image?.width} × {image?.height} pixels
									</p>
								</div>

								{/* Inputs */}
								<div>
									<label className='text-sm font-medium text-gray-700'>
										Alt Text
									</label>
									<input
										type='text'
										value={alt}
										onChange={(e) => setAlt(e.target.value)}
										className='mt-1 w-full border rounded px-3 py-2 text-sm'
									/>
								</div>
								<div>
									<label className='text-sm font-medium text-gray-700'>
										Λεζάντα
									</label>
									<textarea
										value={caption}
										onChange={(e) => setCaption(e.target.value)}
										rows={3}
										className='mt-1 w-full border rounded px-3 py-2 text-sm resize-none'
									/>
								</div>
							</div>
						</div>

						{/* Buttons */}
						<div className='mt-6 flex justify-end gap-3'>
							<IconButton
								onClick={onDelete}
								icon={Trash}
								label='Διαγραφή'
								ariaLabel='Διαγραφή εικόνας'
								className='text-red-600 hover:bg-red-50'
							/>
							<IconButton
								onClick={onSave}
								icon={Save}
								label='Αποθήκευση'
								ariaLabel='Αποθήκευση αλλαγών'
								className='bg-blue-600 text-white hover:bg-blue-700'
								disabled={loading}
							/>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
