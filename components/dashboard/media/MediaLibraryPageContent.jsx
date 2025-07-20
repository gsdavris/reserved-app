'use client';

import { useState } from 'react';
import MediaLibrary from './MediaLibrary';
import { Plus } from 'lucide-react';
import { useNotification } from '@/context/NotificationContext';
import ImageUploaderMulti from '@/components/ui/ImageUploaderMulti';

export default function MediaLibraryPageContent({
	initialImages,
	initialCursor,
	totalCount,
	availableMonths,
}) {
	const [showUploader, setShowUploader] = useState(false);
	const [newImages, setNewImages] = useState([]);
	const [refreshToken, setRefreshToken] = useState(0);
	const [loading, setLoading] = useState(false);

	const { showNotification } = useNotification();

	const handleUpload = async (files) => {
		const uploaded = [];

		for (const file of files) {
			const formData = new FormData();
			formData.append('file', file);

			setLoading(true);
			try {
				const res = await fetch('/api/media', {
					method: 'POST',
					body: formData,
				});
				if (!res.ok) {
					const error = await res.json().catch(() => ({}));
					showNotification(error?.message || 'Αποτυχία ανεβάσματος', 'error');
					continue;
				}
				const data = await res.json();
				uploaded.push(data);
			} catch (err) {
				console.error('⛔ Upload failed:', err);
				showNotification('Σφάλμα δικτύου κατά το ανέβασμα', 'error');
			}
			setLoading(false);
		}

		if (uploaded.length) {
			setNewImages((prev) => [...prev, ...uploaded]);
			setRefreshToken((prev) => prev + 1);
			// setShowUploader(false);
			showNotification('Οι εικόνες ανέβηκαν επιτυχώς!', 'success');
		}
	};

	return (
		<div>
			{/* Header + CTA */}
			<div className='flex items-center justify-between mb-6'>
				<h1 className='text-2xl font-semibold'>Media Library</h1>
				<button
					type='button'
					onClick={() => setShowUploader((prev) => !prev)}
					className='inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
					{showUploader ? (
						'Ακύρωση'
					) : (
						<>
							<Plus size={18} />
							Προσθήκη Εικόνας
						</>
					)}
				</button>
			</div>

			{/* Uploader */}
			{showUploader && (
				<div className='mb-6 border rounded p-4 bg-gray-50'>
					<ImageUploaderMulti
						onUpload={handleUpload}
						onRemoveAll={() => setNewImages([])}
						uploaded={!!newImages.length}
						disabled={loading}
						imageUrls={newImages.map((img) => img.url)}
						noLibrary
					/>
				</div>
			)}

			{/* Media Library */}
			<MediaLibrary
				initialImages={initialImages}
				initialCursor={initialCursor}
				totalCount={totalCount}
				availableMonths={availableMonths}
				refreshToken={refreshToken} // 🌀 refetch trigger
			/>
		</div>
	);
}
