'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import CategorySelect from '@/components/ui/CategorySelect';
import { useNotification } from '@/context/NotificationContext';
import FormSection from '@/components/ui/FormSection';
import ImageUploaderSingle from '@/components/ui/ImageUploaderSingle';
import ImageUploaderMulti from '@/components/ui/ImageUploaderMulti';
import PricingBuilderSection from '../pricing/PricingBuilderSection';
import { validatePricingOption } from '@/lib/validators/pricing';
import AddonsBuilderSection from '../addons/AddonsBuilderSection';
import { validateAddonOption } from '@/lib/validators/addons';
import LocationSection from '../location/LocationSection';
import { Save } from 'lucide-react';
import TagsSelect from '@/components/dashboard/partner/TagsSelect';

export default function ExperienceForm({
	initialData = {},
	categories,
	submitLabel = 'Αποθήκευση',
	mode = 'edit', // 'create' or 'edit'
	allTags = [],
	recommendedTagIds: initialRecommendedTagIds = [],
}) {
	const defaultPricing = { currency: 'EUR', options: [] };
	const defaultAddons = { options: [] };

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
		addons: {
			...defaultAddons,
			...(initialData.addons || {}),
			options: initialData.addons?.options || [],
		},
		tagIds: Array.isArray(initialData.tags)
			? initialData.tags.map((t) => t.id)
			: [],
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

	const [recommendedTagIds, setRecommendedTagIds] = useState(
		Array.isArray(initialRecommendedTagIds) ? initialRecommendedTagIds : []
	);

	useEffect(() => {
		const cid = Number(formData.categoryId);
		if (!cid) {
			setRecommendedTagIds([]);
			return;
		}
		let cancelled = false;
		(async () => {
			try {
				const res = await fetch(`/api/categories/${cid}/recommended-tags`);
				if (!res.ok) {
					if (!cancelled) setRecommendedTagIds([]);
					return;
				}
				const data = await res.json();
				if (!cancelled) {
					const ids = Array.isArray(data) ? data.map((t) => t.id ?? t) : [];
					setRecommendedTagIds(ids);
				}
			} catch {
				if (!cancelled) setRecommendedTagIds([]);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [formData.categoryId]);

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

	const handleRemoveFeatured = () => setFeaturedImage({ id: null, url: null });

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
		if (uploaded.length) setGalleryImages((prev) => [...prev, ...uploaded]);
	};

	const handleRemoveGalleryImage = (index) => {
		setGalleryImages((prev) => prev.filter((_, i) => i !== index));
	};

	const handleRemoveAllGallery = () => setGalleryImages([]);

	const handleMoveGalleryImage = (fromIndex, toIndex) => {
		setGalleryImages((prev) => {
			const arr = [...prev];
			const [moved] = arr.splice(fromIndex, 1);
			arr.splice(toIndex, 0, moved);
			return arr;
		});
	};

	const handleSetLocation = useCallback((loc) => {
		setFormData((prev) => {
			// avoid pointless updates
			const same =
				prev.location?.name === loc?.name &&
				prev.location?.type === loc?.type &&
				JSON.stringify(prev.location?.coordinates) ===
					JSON.stringify(loc?.coordinates) &&
				JSON.stringify(prev.location?.boundingBox) ===
					JSON.stringify(loc?.boundingBox);

			return same ? prev : { ...prev, location: loc };
		});
	}, []);

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

			//  Addons + Pricing validation
			const addonErrors =
				formData.addons?.options?.flatMap((option, idx) =>
					validateAddonOption(option).map((msg) => `Add‑on #${idx + 1}: ${msg}`)
				) || [];
			const pricingErrors =
				formData.pricing.options?.flatMap((option, idx) =>
					validatePricingOption(option).map((msg) => `Τιμή #${idx + 1}: ${msg}`)
				) || [];

			const allErrors = [...addonErrors, ...pricingErrors];

			if (allErrors.length > 0) {
				showNotification(allErrors.join('\n'), 'error');
				setLoading(false);
				return;
			}

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
					tagIds: formData.tagIds,
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
					addons: {
						options: formData.addons.options || [],
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
			if (!initialData?.id) router.push('/dashboard/partner/experiences');
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
			className='mx-auto space-y-4'>
			{/* Page title */}
			<div className='flex items-center justify-between'>
				<h2 className='text-xl sm:text-2xl font-semibold'>
					{mode === 'edit'
						? 'Επεξεργασία Εμπειρίας'
						: 'Δημιουργία Νέας Εμπειρίας'}
				</h2>
				<button
					type='submit'
					disabled={loading}
					className='cursor-pointer inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-60'>
					{loading ? (
						<LoadingSpinner
							size={16}
							color='border-white'
							topColor='border-t-blue-600'
							borderWidth={2}
						/>
					) : (
						<Save size={18} />
					)}
					{submitLabel}
				</button>
			</div>

			{/* Grid: main + sidebar */}
			<div className='grid grid-cols-12 gap-4'>
				{/* MAIN COLUMN */}
				<div className='col-span-12 lg:col-span-8 space-y-4'>
					<FormSection
						variant='simple'
						title='Τίτλος'>
						<input
							type='text'
							name='title'
							value={formData.title}
							onChange={handleChange}
							className='w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
							required
						/>
					</FormSection>

					<FormSection
						variant='simple'
						title='Περιγραφή'
						description='Σύντομη και περιεκτική περιγραφή της εμπειρίας.'>
						<textarea
							name='description'
							rows='6'
							value={formData.description}
							onChange={handleChange}
							className='w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
						/>
					</FormSection>

					<FormSection
						variant='collapsible'
						title='Τοποθεσία'
						description='Επίλεξε σημείο ή περιοχή στο χάρτη.'>
						<LocationSection
							location={formData.location}
							setLocation={handleSetLocation}
						/>
					</FormSection>

					<FormSection
						variant='collapsible'
						title='Τιμολόγηση'
						description='Διαχειρίσου πολλαπλές επιλογές τιμής, διάρκειας και διαθεσιμότητας, drag & drop για αλλαγή σειράς επιλογών.'>
						<PricingBuilderSection
							pricing={formData.pricing}
							setPricing={(newPricing) =>
								setFormData((prev) => ({ ...prev, pricing: newPricing }))
							}
						/>
					</FormSection>

					<FormSection
						variant='collapsible'
						title='Add‑ons'
						description='Προαιρετικές ή υποχρεωτικές έξτρα επιλογές ανά κράτηση/άτομο/χρόνο, με απόθεμα & παράθυρα διαθεσιμότητας.'>
						<AddonsBuilderSection
							addons={formData.addons}
							setAddons={(newAddons) =>
								setFormData((prev) => ({ ...prev, addons: newAddons }))
							}
						/>
					</FormSection>

					<FormSection
						variant='collapsible'
						title='Image Gallery'
						description='Από 2–10 εικόνες, drag & drop για αλλαγή σειράς εμφάνισης.'>
						<ImageUploaderMulti
							images={galleryImages}
							onUpload={handleUploadGallery}
							onRemoveImage={handleRemoveGalleryImage}
							onRemoveAll={handleRemoveAllGallery}
							onMoveImage={handleMoveGalleryImage}
							uploaded
							disabled={loading}
						/>
					</FormSection>
				</div>

				{/* SIDEBAR */}
				<aside className='col-span-12 lg:col-span-4 space-y-4  self-start'>
					<FormSection
						variant='simple'
						title='Εικόνα'>
						<ImageUploaderSingle
							imageUrl={featuredImage.url}
							onUpload={handleUploadFeatured}
							onRemove={handleRemoveFeatured}
							uploaded={!!featuredImage.id}
							disabled={loading}
						/>
					</FormSection>

					<FormSection
						variant='simple'
						title='Κατηγορία'>
						<CategorySelect
							categories={categories}
							value={formData.categoryId}
							onChange={(val) =>
								setFormData((prev) => ({ ...prev, categoryId: val }))
							}
							className='w-full'
						/>
					</FormSection>

					<FormSection
						variant='simple'
						title='Tags'>
						<TagsSelect
							tags={allTags}
							recommendedTagIds={recommendedTagIds}
							value={formData.tagIds}
							onChange={(ids) =>
								setFormData((prev) => ({ ...prev, tagIds: ids }))
							}
							className='w-full'
						/>
					</FormSection>

					<FormSection
						variant='simple'
						title='Διαθεσιμότητα'>
						<ToggleSwitch
							checked={formData.available}
							onChange={(val) =>
								setFormData((prev) => ({ ...prev, available: val }))
							}
							label='Διαθέσιμο'
							enabledLabel='Ναι'
							disabledLabel='Όχι'
						/>
					</FormSection>
				</aside>
			</div>

			{/* Bottom action (mobile friendly) */}
			<div className='lg:hidden flex'>
				<button
					type='submit'
					disabled={loading}
					className='cursor-pointer inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-60'>
					{loading ? (
						<LoadingSpinner
							size={16}
							color='border-white'
							topColor='border-t-blue-600'
							borderWidth={2}
						/>
					) : (
						<Save size={18} />
					)}
					{submitLabel}
				</button>
			</div>
		</form>
	);
}
