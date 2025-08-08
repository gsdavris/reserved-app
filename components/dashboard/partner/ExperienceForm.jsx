'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import CategorySelect from '@/components/ui/CategorySelect';
import { useNotification } from '@/context/NotificationContext';
import ImageUploaderSingle from '@/components/ui/ImageUploaderSingle';
import ImageUploaderMulti from '@/components/ui/ImageUploaderMulti';
import PricingBuilderSection from '../pricing/PricingBuilderSection';
import { validatePricingOption } from '@/lib/validators/pricing';
import LocationSection from '../location/LocationSection';

export default function ExperienceForm({
	initialData = {},
	categories,
	submitLabel = 'Αποθήκευση',
}) {
	const defaultPricing = {
		currency: 'EUR',
		options: [],
	};

	const [formData, setFormData] = useState({
		title: initialData.title || '',
		description: initialData.description || '',
		location: initialData.location || {
			name: '',
			type: '',
			coordinates: null,
			boundingBox: null,
		},
		categoryId: initialData.category?.id || '',
		available: initialData.available ?? true,
		pricing: {
			...defaultPricing,
			...(initialData.pricing || {}),
			options: initialData.pricing?.options || [],
		},
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

	const handleRemoveGalleryImage = (index) => {
		setGalleryImages((prev) => prev.filter((_, i) => i !== index));
	};

	const handleRemoveAllGallery = () => {
		setGalleryImages([]);
	};

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

			// ✅ Validation for pricing options
			const allErrors =
				formData.pricing.options?.flatMap((option, idx) =>
					validatePricingOption(option).map((msg) => `#${idx + 1}: ${msg}`)
				) || [];

			if (allErrors.length > 0) {
				showNotification(allErrors.join('\n'), 'error');
				setLoading(false);
				return;
			}

			// API call
			const method = initialData.id ? 'PUT' : 'POST';
			const url = initialData.id
				? `/api/experiences/${initialData.id}`
				: '/api/experiences';

			const res = await fetch(url, {
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					title: formData.title,
					description: formData.description,
					location: formData.location,
					categoryId: formData.categoryId
						? Number(formData.categoryId)
						: DEFAULT_CATEGORY_ID,
					available: formData.available,
					featuredImageId: featuredImage.id,
					imageIds: galleryImages.map((img) => img.id),
					pricing: {
						currency: formData.pricing.currency,
						options: formData.pricing.options.map(
							({
								id,
								label,
								basePrice,
								durationUnit,
								perPerson,
								isActive,
								availableFrom,
								availableTo,
							}) => ({
								id,
								label,
								basePrice,
								durationUnit,
								perPerson,
								isActive,
								availableFrom,
								availableTo,
							})
						),
					},
				}),
			});

			if (!res.ok) {
				let errorMessage = 'Αποτυχία αποθήκευσης.';
				try {
					const errorData = await res.json();
					errorMessage = errorData.message || errorMessage;
				} catch {}
				showNotification(errorMessage, 'error');
				return;
			}

			showNotification('Η εμπειρία αποθηκεύτηκε!', 'success');
			if (!initialData?.id) {
				router.push('/dashboard/partner/experiences');
			}
		} catch (err) {
			showNotification(
				err.message || 'Προέκυψε σφάλμα. Παρακαλώ δοκιμάστε ξανά.',
				'error'
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-4'>
			<div>
				<label className='block font-medium mb-1'>Εικόνα</label>
				<ImageUploaderSingle
					imageUrl={featuredImage.url}
					onUpload={handleUploadFeatured}
					onRemove={handleRemoveFeatured}
					uploaded={!!featuredImage.id}
					disabled={loading}
				/>
			</div>

			<div>
				<label className='block font-medium mb-1'>Τίτλος</label>
				<input
					type='text'
					name='title'
					value={formData.title}
					onChange={handleChange}
					className='w-full border rounded px-3 py-2'
					required
				/>
			</div>

			<div>
				<label className='block font-medium mb-1'>Περιγραφή</label>
				<textarea
					name='description'
					rows='4'
					value={formData.description}
					onChange={handleChange}
					className='w-full border rounded px-3 py-2'
				/>
			</div>

			<div>
				<label className='block font-medium mb-1'>Κατηγορία</label>
				<CategorySelect
					categories={categories}
					value={formData.categoryId}
					onChange={(val) =>
						setFormData((prev) => ({ ...prev, categoryId: val }))
					}
					className='w-full'
				/>
			</div>

			<div>
				<label className='block font-medium mb-1'>
					Image Gallery (2–10 εικόνες)
				</label>
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

			<PricingBuilderSection
				pricing={formData.pricing}
				setPricing={(newPricing) =>
					setFormData((prev) => ({
						...prev,
						pricing: newPricing,
					}))
				}
			/>

			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				<LocationSection
					location={formData.location}
					setLocation={(loc) =>
						setFormData((prev) => ({ ...prev, location: loc }))
					}
				/>
			</div>

			<div>
				<label className='block font-medium mb-1'>Διαθεσιμότητα</label>
				<ToggleSwitch
					checked={formData.available}
					onChange={(val) =>
						setFormData((prev) => ({ ...prev, available: val }))
					}
					label='Διαθέσιμο'
					enabledLabel='Ναι'
					disabledLabel='Όχι'
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
