'use client';

import { useState } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import { useNotification } from '@/context/NotificationContext';
import ImageUploaderSingle from '@/components/ui/ImageUploaderSingle';

export default function ExperienceForm({
	initialData = {},
	onSuccess,
	submitLabel = 'Αποθήκευση',
}) {
	const [formData, setFormData] = useState({
		title: initialData.title || '',
		description: initialData.description || '',
		location: initialData.location || '',
		category: initialData.category || '',
		price: initialData.price || '',
		available: initialData.available ?? true,
		featuredImageId: initialData.featuredImageId || null,
	});

	const [loading, setLoading] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const [imagePreview, setImagePreview] = useState(
		initialData.featuredImage?.url || null
	);
	const [hasImageChanged, setHasImageChanged] = useState(false);
	const [uploadSuccess, setUploadSuccess] = useState(false);
	const { showNotification } = useNotification();

	const MAX_IMAGE_SIZE_MB = 5;

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setUploadSuccess(false);

		try {
			let uploadedImageId = formData.featuredImageId;

			// Αν έχει αλλάξει και είναι local File => ανεβάζεις
			if (hasImageChanged && selectedFile instanceof File) {
				if (selectedFile.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
					showNotification(
						`Η εικόνα πρέπει να είναι έως ${MAX_IMAGE_SIZE_MB}MB.`,
						'error'
					);
					setLoading(false);
					return;
				}

				const imageFormData = new FormData();
				imageFormData.append('file', selectedFile);

				const uploadRes = await fetch('/api/media', {
					method: 'POST',
					body: imageFormData,
				});

				if (!uploadRes.ok) {
					showNotification('Αποτυχία ανεβάσματος εικόνας', 'error');
					setLoading(false);
					return;
				}

				const uploadData = await uploadRes.json();
				uploadedImageId = uploadData.imageId;
				setUploadSuccess(true);
			}

			// Αν δεν υπάρχει ούτε εικόνα ανεβασμένη ούτε επιλεγμένη από Media Library
			if (!uploadedImageId) {
				showNotification('Παρακαλώ επίλεξε ή ανέβασε εικόνα.', 'error');
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
				body: JSON.stringify({ ...formData, featuredImageId: uploadedImageId }),
			});

			if (!res.ok) {
				showNotification('Αποτυχία αποθήκευσης.', 'error');
				setLoading(false);
				return;
			}

			showNotification('Η εμπειρία αποθηκεύτηκε!', 'success');
			onSuccess?.();
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
			{/* Εικόνα */}
			<div>
				<label
					className='block font-medium mb-1'
					htmlFor='image'>
					Εικόνα
				</label>
				<ImageUploaderSingle
					imageUrl={imagePreview}
					onUpload={(value) => {
						if (value instanceof File) {
							setSelectedFile(value);
							setImagePreview(URL.createObjectURL(value));
							setFormData((prev) => ({ ...prev, featuredImageId: null }));
							setHasImageChanged(true);
							setUploadSuccess(false);
						} else if (value?.url && value?.id) {
							setImagePreview(value.url);
							setFormData((prev) => ({
								...prev,
								featuredImageId: value.id,
							}));
							setSelectedFile(null); // clear any local file
							setHasImageChanged(false);
							setUploadSuccess(true); // θεωρούμε επιτυχές
						}
					}}
					onRemove={() => {
						setSelectedFile(null);
						setImagePreview(null);
						setFormData((prev) => ({ ...prev, featuredImageId: null }));
						setHasImageChanged(false);
						setUploadSuccess(false);
					}}
					disabled={loading}
					uploaded={uploadSuccess}
				/>
			</div>

			{/* Υπόλοιπα πεδία */}
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
				{/* Τοποθεσία */}
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

				{/* Τιμή */}
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

				{/* Κατηγορία */}
				<div>
					<label
						className='block font-medium mb-1'
						htmlFor='category'>
						Κατηγορία
					</label>
					<input
						type='text'
						name='category'
						id='category'
						value={formData.category}
						onChange={handleChange}
						className='w-full border rounded px-3 py-2'
					/>
				</div>

				{/* Διαθεσιμότητα */}
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

			<button
				type='submit'
				disabled={loading}
				className='inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
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
