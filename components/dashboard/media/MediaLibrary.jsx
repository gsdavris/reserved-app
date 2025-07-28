'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import LoadingState from '@/components/ui/LoadingState';
import ImageEditModal from '@/components/dashboard/media/ImageEditModal';
import MediaLibraryFilters from './MediaLibraryFilters';
import ImageGrid from './ImageGrid';
import { useNotification } from '@/context/NotificationContext';

export default function MediaLibrary({
	mode = 'manage', // 'select' | 'manage'
	onSelect,
	selectedIds = [],
	initialImages = [],
	initialCursor = null,
	totalCount = 0,
	availableMonths = [],
	refreshToken = 0,
}) {
	const [images, setImages] = useState(initialImages);
	const [cursor, setCursor] = useState(initialCursor);
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(!!initialCursor);

	const [search, setSearch] = useState('');
	const [month, setMonth] = useState('');
	const [sortBy, setSortBy] = useState('createdAt');
	const [order, setOrder] = useState('desc');

	const [selectedImage, setSelectedImage] = useState(null);
	const [alt, setAlt] = useState('');
	const [caption, setCaption] = useState('');

	const { showNotification } = useNotification();
	const observer = useRef();

	const createQueryString = () => {
		const params = new URLSearchParams();
		if (search) params.set('search', search);
		if (month) params.set('month', month);
		if (sortBy) params.set('sortBy', sortBy);
		if (order) params.set('order', order);
		return params.toString();
	};

	const initialQueryRef = useRef(createQueryString());

	const fetchImages = useCallback(
		async ({ refresh = false, cursor = null, query = '' }) => {
			if (loading || (!hasMore && !refresh)) return;

			setLoading(true);
			try {
				const url = `/api/media?limit=20${
					cursor ? `&cursor=${cursor}` : ''
				}&${query}`;
				const res = await fetch(url);
				if (!res.ok) {
					const data = await res.json().catch(() => ({}));
					showNotification(data.error || 'Αποτυχία φόρτωσης εικόνων', 'error');
					return;
				}

				const { images: newImages, nextCursor } = await res.json();

				if (refresh) {
					setImages(newImages);
				} else {
					setImages((prev) => {
						const existingIds = new Set(prev.map((img) => img.id));
						const filtered = newImages.filter(
							(img) => !existingIds.has(img.id)
						);
						return [...prev, ...filtered];
					});
				}

				setCursor(nextCursor);
				setHasMore(!!nextCursor);
			} catch (err) {
				console.error('⛔ Failed to fetch images:', err);
				showNotification(err.message || 'Σφάλμα δικτύου', 'error');
			} finally {
				setLoading(false);
			}
		},
		[loading, hasMore, showNotification]
	);

	// 1️⃣ Αρχική φόρτωση (μόνο αν δεν έχουμε SSR images)
	useEffect(() => {
		if (images.length > 0) return;
		if (mode === 'select') {
			fetchImages({ refresh: true, query: createQueryString() });
		}
	}, [mode, images.length]);

	// 2️⃣ Refetch όταν αλλάζει το refreshToken (π.χ. μετά από upload)
	useEffect(() => {
		if (mode === 'manage' && refreshToken > 0) {
			fetchImages({ refresh: true, query: createQueryString() });
		}
	}, [mode, refreshToken]);

	// 3️⃣ Refetch με debounce όταν αλλάζει κάποιο φίλτρο
	useEffect(() => {
		const currentQuery = createQueryString();
		if (currentQuery === initialQueryRef.current) return;

		const timeout = setTimeout(() => {
			fetchImages({ refresh: true, query: currentQuery });
		}, 300);

		return () => clearTimeout(timeout);
	}, [search, month, sortBy, order]);

	const lastImageRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					fetchImages({ cursor, query: createQueryString() });
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore, cursor, fetchImages]
	);

	const handleEdit = (img) => {
		setSelectedImage(img);
		setAlt(img.alt || '');
		setCaption(img.caption || '');
	};

	const handleSave = async () => {
		if (!selectedImage) return;
		try {
			const res = await fetch(`/api/media/${selectedImage.id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ alt, caption }),
			});
			if (!res.ok) {
				const data = await res.json();
				showNotification(data.error || 'Αποτυχία αποθήκευσης', 'error');
				return;
			}
			setImages((prev) =>
				prev.map((img) =>
					img.id === selectedImage.id ? { ...img, alt, caption } : img
				)
			);
			showNotification('Οι αλλαγές αποθηκεύτηκαν.', 'success');
			setSelectedImage(null);
		} catch (err) {
			console.error('⛔ Failed to save image:', err);
			showNotification(err.message, 'error');
		}
	};

	const deleteImageById = async (id) => {
		try {
			const res = await fetch(`/api/media/${id}`, { method: 'DELETE' });
			if (!res.ok) {
				const data = await res.json();
				showNotification(data.error || 'Αποτυχία διαγραφής', 'error');
				return false;
			}
			setImages((prev) => prev.filter((img) => img.id !== id));
			showNotification('Η εικόνα διαγράφηκε.', 'success');
			return true;
		} catch (err) {
			console.error('⛔ Failed to delete image:', err);
			showNotification(err.message, 'error');
			return false;
		}
	};

	const handleDelete = async () => {
		if (!selectedImage) return;
		const success = await deleteImageById(selectedImage.id);
		if (success) setSelectedImage(null);
	};

	const handleCardDelete = async (img) => {
		await deleteImageById(img.id);
	};

	return (
		<div>
			<MediaLibraryFilters
				search={search}
				setSearch={setSearch}
				month={month}
				setMonth={setMonth}
				sortBy={sortBy}
				setSortBy={setSortBy}
				order={order}
				setOrder={setOrder}
				availableMonths={availableMonths}
			/>
			<ImageGrid
				images={images}
				mode={mode}
				onSelect={onSelect}
				selectedIds={selectedIds}
				onEdit={handleEdit}
				onDelete={handleCardDelete}
				lastImageRef={lastImageRef}
			/>

			<LoadingState
				loading={loading}
				hasMore={hasMore}
				totalCount={totalCount}
				shownCount={images.length}
			/>

			{mode === 'manage' && (
				<ImageEditModal
					open={selectedImage !== null}
					onClose={() => setSelectedImage(null)}
					image={selectedImage}
					alt={alt}
					setAlt={setAlt}
					caption={caption}
					setCaption={setCaption}
					onSave={handleSave}
					onDelete={handleDelete}
					loading={loading}
				/>
			)}
		</div>
	);
}
