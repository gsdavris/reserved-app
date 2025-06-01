'use client';
import React, { useState, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import SkeletonCard from './SkeletonCard';
import { MessageCircle } from 'lucide-react';

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
		<div className='reserved-widget fixed bottom-4 right-4 z-50'>
			{/* Overlay modal */}
			<div
				className={`fixed inset-0 bg-black/30 flex items-center justify-center p-4 transition-opacity duration-300 ${
					open
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}>
				<div
					className='relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 md:p-6 transition-transform duration-300 transform'
					style={{
						transform: open ? 'scale(1)' : 'scale(0.95)',
					}}>
					<button
						onClick={() => setOpen(false)}
						className='absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold'>
						&times;
					</button>

					{/* Chat prompt */}
					<div className='mb-4 bg-blue-100 text-blue-800 rounded-full px-4 py-2 w-fit shadow'>
						👋 Book now – tell us what you want!
					</div>

					{/* Content */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{loading
							? Array.from({ length: 4 }).map((_, idx) => (
									<SkeletonCard key={idx} />
							  ))
							: experiences.map((exp) => (
									<ExperienceCard
										key={exp.id}
										experience={exp}
									/>
							  ))}
					</div>
				</div>
			</div>

			{/* Floating button */}
			{!open && (
				<button
					onClick={() => setOpen(true)}
					className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all transform flex items-center gap-2 hover:scale-110 hover:bg-blue-700 active:scale-95 group pulse-glow'>
					<MessageCircle className='w-5 h-5' />
					<span className='transition-all duration-300 group-hover:text-base group-hover:font-bold'>
						Book now
					</span>
					<span className='hidden group-hover:inline-block transition-all duration-300 text-xs font-light ml-2'>
						– Explore your experience!
					</span>
				</button>
			)}
		</div>
	);
}
