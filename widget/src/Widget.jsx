'use client';
import React, { useState, useEffect } from 'react';
import FloatingButton from './components/FloatingButton';
import OverlayModal from './components/OverlayModal';

export default function Widget({ businessId }) {
	const [open, setOpen] = useState(false);
	const [experiences, setExperiences] = useState([]);
	const [loading, setLoading] = useState(false);

	const baseUrl =
		window.location.hostname === 'localhost'
			? 'http://localhost:3000'
			: 'https://reserved.gr';

	useEffect(() => {
		if (!open) return;

		const fetchExperiences = async () => {
			setLoading(true);
			try {
				const res = await fetch(
					`${baseUrl}/api/experiences?businessId=${businessId}`
				);
				const data = await res.json();
				setExperiences(data);
			} catch (err) {
				console.error('Failed to fetch experiences:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchExperiences();
	}, [open, businessId]);

	return (
		<>
			<OverlayModal
				open={open}
				setOpen={setOpen}
				loading={loading}
				experiences={experiences}
			/>
			{!open && <FloatingButton setOpen={setOpen} />}
		</>
	);

	// return (
	// 	<div className='tw-bg-red-500 tw-text-white tw-p-4 tw-rounded-lg tw-shadow-lg'>
	// 		<h1 className='tw-text-xl tw-font-bold'>TEST WIDGET</h1>
	// 		<p>Business ID: {businessId}</p>
	// 	</div>
	// );
}
