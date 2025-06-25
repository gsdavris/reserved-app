'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Pencil, Trash2, Plus } from 'lucide-react';

export default function PartnerDashboard() {
	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		// Φέρε εμπειρίες για τον partner
		const fetchData = async () => {
			const res = await fetch('/api/partner/experiences');
			const data = await res.json();
			setExperiences(data);
		};

		fetchData();
	}, []);

	const handleDelete = async (id) => {
		if (!confirm('Θες σίγουρα να διαγράψεις αυτή την εμπειρία;')) return;
		await fetch(`/api/partner/experiences/${id}`, { method: 'DELETE' });
		setExperiences(experiences.filter((exp) => exp.id !== id));
	};

	return (
		<div>
			<div className='flex items-center justify-between mb-6'>
				<h1 className='text-2xl font-semibold'>Οι Εμπειρίες μου</h1>
				<Link
					href='/dashboard/partner/new'
					className='inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
					<Plus size={18} />
					Προσθήκη Εμπειρίας
				</Link>
			</div>

			<div className='grid gap-4'>
				{experiences.map((exp) => (
					<div
						key={exp.id}
						className='bg-white border p-4 rounded shadow flex justify-between items-center'>
						<div>
							<h2 className='font-semibold'>{exp.title}</h2>
							<p className='text-sm text-gray-500'>{exp.location}</p>
						</div>
						<div className='flex gap-2'>
							<Link
								href={`/dashboard/partner/${exp.id}/edit`}
								className='text-blue-600 hover:underline'>
								<Pencil size={18} />
							</Link>
							<button
								onClick={() => handleDelete(exp.id)}
								className='text-red-500 hover:underline'>
								<Trash2 size={18} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
