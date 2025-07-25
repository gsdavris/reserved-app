'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useNotification } from '@/context/NotificationContext';

export default function SignupPage() {
	const router = useRouter();
	const [form, setForm] = useState({
		email: '',
		password: '',
		repeatPassword: '',
		name: '',
		accepted: false,
	});
	const [loading, setLoading] = useState(false);
	const { showNotification } = useNotification();

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (form.password !== form.repeatPassword) {
			showNotification('Passwords do not match', 'error');
			return;
		}

		if (!form.accepted) {
			showNotification('You must accept the privacy policy', 'error');
			return;
		}

		setLoading(true);

		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: form.email,
					password: form.password,
					name: form.name,
				}),
			});

			if (!res.ok) {
				const data = await res.json();
				showNotification(data.error || 'Signup failed', 'error');
			} else {
				showNotification('Signup successful! Redirecting...', 'success');
				setTimeout(() => router.push('/login'), 1500);
			}
		} catch (err) {
			showNotification('Something went wrong. Please try again.', 'error');
		}

		setLoading(false);
	};

	return (
		<div className='max-w-md mx-auto mt-48 p-6 bg-white shadow rounded'>
			<h1 className='text-xl font-bold mb-4'>Sign Up</h1>

			<form
				onSubmit={handleSubmit}
				className='space-y-4'>
				<input
					type='text'
					name='name'
					placeholder='Name'
					value={form.name}
					onChange={handleChange}
					className='w-full p-2 border rounded'
					required
				/>
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
					placeholder='Password'
					value={form.password}
					onChange={handleChange}
					className='w-full p-2 border rounded'
					required
				/>
				<input
					type='password'
					name='repeatPassword'
					placeholder='Repeat Password'
					value={form.repeatPassword}
					onChange={handleChange}
					className='w-full p-2 border rounded'
					required
				/>

				<label className='flex items-center gap-2 text-sm'>
					<input
						type='checkbox'
						name='accepted'
						checked={form.accepted}
						onChange={handleChange}
						className='accent-blue-600'
						required
					/>
					I accept the{' '}
					<a
						href='/privacy'
						className='text-blue-600 underline'>
						Privacy Policy
					</a>
				</label>

				<button
					type='submit'
					className='cursor-pointer w-full bg-blue-600 text-white py-2 rounded flex justify-center items-center'
					disabled={loading}>
					{loading ? (
						<LoadingSpinner
							size='sm'
							color='white'
						/>
					) : (
						'Sign Up'
					)}
				</button>
			</form>

			<p className='text-sm mt-4 text-center'>
				Already have an account?{' '}
				<a
					href='/login'
					className='text-blue-600 hover:underline'>
					Login
				</a>
			</p>
		</div>
	);
}
