'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import CategorySelect from '@/components/ui/CategorySelect';
import { useNotification } from '@/context/NotificationContext';
import ImageUploaderSingle from '@/components/ui/ImageUploaderSingle';
import ImageUploaderMulti from '@/components/ui/ImageUploaderMulti';

export default function ExperienceForm({
	initialData = {},
	categories,
	submitLabel = 'Αποθήκευση',
}) {
	const [formData, setFormData] = useState({
		title: initialData.title || '',
		description: initialData.description || '',
		location: initialData.location || '',
		categoryId: initialData.category?.id || '',
		price: initialData.price || '',
		available: initialData.available ?? true,
	});

	const [featuredImage, setFeaturedImage] = useState({
		id: initialData.featuredImage?.id || null,
		url: initialData.featuredImage?.url || null,
	});

	const [galleryImages, setGalleryImages] = useState(
		initialData.images?.map((img) => ({ id: img.id, url: img.url })) || []
	);

	const DEFAULT_CATEGORY_ID = 1;
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { showNotification } = useNotification();
	const MAX_IMAGE_SIZE_MB = 5;

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	// upload featured
	const handleUploadFeatured = async (image) => {
		if (!image) return;
		if (image instanceof File) {
			if (image.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
				showNotification(
					`Η εικόνα πρέπει να είναι έως ${MAX_IMAGE_SIZE_MB}MB.`,
					'error'
				);
				return;
			}
			const fd = new FormData();
			fd.append('file', image);
			const res = await fetch('/api/media', { method: 'POST', body: fd });
			if (!res.ok) {
				showNotification('Αποτυχία ανεβάσματος εικόνας', 'error');
				return;
			}
			const data = await res.json();
			setFeaturedImage({ id: data.imageId, url: data.imageUrl });
		} else if (image.id && image.url) {
			setFeaturedImage({ id: image.id, url: image.url });
		}
	};

	const handleRemoveFeatured = () => {
		setFeaturedImage({ id: null, url: null });
	};

	// upload gallery
	const handleUploadGallery = async (images) => {
		const uploaded = [];
		for (const img of images) {
			if (img instanceof File) {
				if (img.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
					showNotification(
						`Η εικόνα πρέπει να είναι έως ${MAX_IMAGE_SIZE_MB}MB.`,
						'error'
					);
					continue;
				}
				const fd = new FormData();
				fd.append('file', img);
				const res = await fetch('/api/media', { method: 'POST', body: fd });
				if (res.ok) {
					const data = await res.json();
					uploaded.push({ id: data.imageId, url: data.imageUrl });
				} else {
					showNotification('Αποτυχία ανεβάσματος εικόνας', 'error');
				}
			} else if (img.id && img.url) {
				uploaded.push({ id: img.id, url: img.url });
			}
		}
		if (uploaded.length) {
			setGalleryImages((prev) => [...prev, ...uploaded]);
		}
	};

	// remove single gallery image
	const handleRemoveGalleryImage = (index) => {
		setGalleryImages((prev) => prev.filter((_, i) => i !== index));
	};

	// remove all gallery images
	const handleRemoveAllGallery = () => {
		setGalleryImages([]);
	};

	// move gallery image up or down
	const handleMoveGalleryImage = (fromIndex, toIndex) => {
		setGalleryImages((prev) => {
			const arr = [...prev];
			const [moved] = arr.splice(fromIndex, 1);
			arr.splice(toIndex, 0, moved);
			return arr;
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			if (!featuredImage.id) {
				showNotification('Παρακαλώ επίλεξε ή ανέβασε εικόνα.', 'error');
				setLoading(false);
				return;
			}
			const galleryCount = galleryImages.length;
			if (galleryCount === 1) {
				showNotification(
					'Η gallery πρέπει να έχει τουλάχιστον 2 εικόνες ή καμία.',
					'error'
				);
				setLoading(false);
				return;
			}
			if (galleryCount > 10) {
				showNotification('Μέγιστο πλήθος εικόνων: 10.', 'error');
				setLoading(false);
				return;
			}

			const method = initialData.id ? 'PUT' : 'POST';
			const url = initialData.id
				? `/api/experiences/${initialData.id}`
				: '/api/experiences';
			const { categoryId, ...rest } = formData;

			const res = await fetch(url, {
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...rest,
					categoryId: categoryId ? Number(categoryId) : DEFAULT_CATEGORY_ID,
					featuredImageId: featuredImage.id,
					imageIds: galleryImages.map((img) => img.id),
				}),
			});

			if (!res.ok) {
				showNotification('Αποτυχία αποθήκευσης.', 'error');
				setLoading(false);
				return;
			}

			showNotification('Η εμπειρία αποθηκεύτηκε!', 'success');
			if (!initialData?.id) {
				router.push('/dashboard/partner/experiences');
			}
		} catch (err) {
			showNotification(err.message, 'error');
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-4'>
			{/* Featured */}
			<div>
				<label
					className='block font-medium mb-1'
					htmlFor='image'>
					Εικόνα
				</label>
				<ImageUploaderSingle
					imageUrl={featuredImage.url}
					onUpload={handleUploadFeatured}
					onRemove={handleRemoveFeatured}
					uploaded={!!featuredImage.id}
					disabled={loading}
				/>
			</div>

			{/* Τίτλος, περιγραφή, τοποθεσία, τιμή, κατηγορία, διαθεσιμότητα */}
			<div>
				<label
					className='block font-medium mb-1'
					htmlFor='title'>
					Τίτλος
				</label>
				<input
					type='text'
					name='title'
					id='title'
					value={formData.title}
					onChange={handleChange}
					className='w-full border rounded px-3 py-2'
					required
				/>
			</div>

			<div>
				<label
					className='block font-medium mb-1'
					htmlFor='description'>
					Περιγραφή
				</label>
				<textarea
					name='description'
					id='description'
					rows='4'
					value={formData.description}
					onChange={handleChange}
					className='w-full border rounded px-3 py-2'
				/>
			</div>

			<div className='grid sm:grid-cols-2 gap-4'>
				<div>
					<label
						className='block font-medium mb-1'
						htmlFor='location'>
						Τοποθεσία
					</label>
					<input
						type='text'
						name='location'
						id='location'
						value={formData.location}
						onChange={handleChange}
						className='w-full border rounded px-3 py-2'
					/>
				</div>

				<div>
					<label
						className='block font-medium mb-1'
						htmlFor='price'>
						Τιμή
					</label>
					<input
						type='number'
						name='price'
						id='price'
						value={formData.price}
						onChange={handleChange}
						className='w-full border rounded px-3 py-2'
					/>
				</div>

				<div>
					<label
						className='block font-medium mb-1'
						htmlFor='category'>
						Κατηγορία
					</label>
					<CategorySelect
						categories={categories}
						value={formData.categoryId}
						onChange={(val) =>
							setFormData((prev) => ({ ...prev, categoryId: val }))
						}
						className='w-full border rounded px-3 py-2'
					/>
				</div>

				<div className='flex flex-col justify-end'>
					<ToggleSwitch
						checked={formData.available}
						onChange={(value) =>
							setFormData((prev) => ({ ...prev, available: value }))
						}
						label='Διαθεσιμότητα'
						enabledLabel='Ναι'
						disabledLabel='Όχι'
					/>
				</div>
			</div>

			{/* Gallery */}
			<div>
				<label className='block font-medium mb-1'>Gallery (2–10 εικόνες)</label>
				<ImageUploaderMulti
					images={galleryImages}
					onUpload={handleUploadGallery}
					onRemoveImage={handleRemoveGalleryImage}
					onRemoveAll={handleRemoveAllGallery}
					onMoveImage={handleMoveGalleryImage}
					uploaded
					disabled={loading}
				/>
			</div>

			<button
				type='submit'
				disabled={loading}
				className='cursor-pointer inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
				{loading && (
					<LoadingSpinner
						size={16}
						color='border-white'
						topColor='border-t-blue-600'
						borderWidth={2}
					/>
				)}
				{submitLabel}
			</button>
		</form>
	);
}
