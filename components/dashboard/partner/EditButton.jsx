'use client';
import Link from 'next/link';
import { Pencil } from 'lucide-react';

export default function EditButton({ experienceId }) {
	return (
		<Link
			href={`/dashboard/partner/experiences/${experienceId}/edit`}
			className='text-blue-600 hover:underline'
			title='Επεξεργασία'>
			<Pencil size={18} />
		</Link>
	);
}
