'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useNotification } from '@/context/NotificationContext';

export default function LoginPage() {
	const router = useRouter();
	const [form, setForm] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);
	const { showNotification } = useNotification();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const res = await signIn('credentials', {
			redirect: false,
			email: form.email,
			password: form.password,
		});

		setLoading(false);

		if (res.error) {
			showNotification('Λάθος στοιχεία σύνδεσης.', 'error');
			return;
		}

		showNotification('Σύνδεση επιτυχής!', 'success');
		router.push('/dashboard');
	};

	return (
		<div className='max-w-md mx-auto mt-48 p-6 bg-white shadow rounded'>
			<h1 className='text-xl font-bold mb-4'>Σύνδεση</h1>
			<form
				onSubmit={handleSubmit}
				className='space-y-4'>
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={form.email}
					onChange={handleChange}
					className='w-full p-2 border rounded'
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Κωδικός'
					value={form.password}
					onChange={handleChange}
					className='w-full p-2 border rounded'
					required
				/>
				<div className='flex items-center justify-between text-sm'>
					<label className='flex items-center gap-2'>
						<input
							type='checkbox'
							className='accent-blue-600'
							required
						/>
						Αποδέχομαι την{' '}
						<a
							href='/privacy'
							className='text-blue-600 underline'>
							Πολιτική Απορρήτου
						</a>
					</label>
					<a
						href='/forgot-password'
						className='text-blue-600 hover:underline'>
						Ξέχασες τον κωδικό;
					</a>
				</div>

				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 rounded flex justify-center'
					disabled={loading}>
					{loading ? <LoadingSpinner size={12} /> : 'Σύνδεση'}
				</button>
			</form>
			<p className='text-sm mt-4 text-center'>
				Δεν έχεις λογαριασμό;{' '}
				<a
					href='/signup'
					className='text-blue-600 hover:underline'>
					Εγγραφή
				</a>
			</p>
		</div>
	);
}
