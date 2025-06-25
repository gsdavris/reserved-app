'use client';

import { useState } from 'react';
import Notification from '@/components/ui/Notification';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Image from 'next/image';

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
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const [imagePreview, setImagePreview] = useState(
		initialData.featuredImage?.url || null
	);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append('file', file);

		try {
			setLoading(true);
			const res = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			});

			if (!res.ok) throw new Error('Αποτυχία ανεβάσματος εικόνας');

			const data = await res.json();
			setFormData((prev) => ({
				...prev,
				featuredImageId: data.imageId,
			}));
			setImagePreview(data.imageUrl);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const method = initialData.id ? 'PUT' : 'POST';
			const url = initialData.id
				? `/api/partner/experiences/${initialData.id}`
				: '/api/partner/experiences';

			const res = await fetch(url, {
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (!res.ok) throw new Error('Αποτυχία αποθήκευσης.');

			setSuccess(true);
			onSuccess?.();
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-4'>
			{success && (
				<Notification
					type='success'
					message='Η εμπειρία αποθηκεύτηκε!'
				/>
			)}
			{error && (
				<Notification
					type='error'
					message={error}
				/>
			)}

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

			<div className='flex items-center gap-2'>
				<input
					type='checkbox'
					name='available'
					id='available'
					checked={formData.available}
					onChange={handleChange}
				/>
				<label htmlFor='available'>Διαθέσιμη</label>
			</div>

			<div>
				<label
					className='block font-medium mb-1'
					htmlFor='image'>
					Εικόνα
				</label>
				<input
					type='file'
					id='image'
					name='image'
					accept='image/*'
					onChange={handleImageUpload}
					className='w-full border rounded px-3 py-2'
				/>
				<p
					id='image-help'
					className='text-sm text-gray-500'>
					Υποστηριζόμενες μορφές: JPG, PNG, WEBP
				</p>

				{imagePreview && (
					<div className='mt-2 relative h-32 w-32'>
						<Image
							src={imagePreview}
							alt='Προεπισκόπηση'
							fill
							priority
							sizes='128px'
							className='object-cover rounded border'
						/>
					</div>
				)}
			</div>

			<button
				type='submit'
				disabled={loading}
				className='inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
				{loading && <LoadingSpinner className='h-4 w-4 border-white' />}{' '}
				{submitLabel}
			</button>
		</form>
	);
}
