'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
	const router = useRouter();
	const [form, setForm] = useState({
		email: '',
		password: '',
		repeatPassword: '',
		name: '',
		accepted: false,
	});
	const [error, setError] = useState('');

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
			setError('Passwords do not match');
			return;
		}

		if (!form.accepted) {
			setError('You must accept the privacy policy');
			return;
		}

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
			setError('Signup failed');
			return;
		}

		router.push('/login');
	};

	return (
		<div className='max-w-md mx-auto mt-20 p-6 bg-white shadow rounded'>
			<h1 className='text-xl font-bold mb-4'>Sign Up</h1>
			{error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
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
						className='accent-primary'
						required
					/>
					I accept the{' '}
					<a
						href='/privacy'
						className='text-primary underline'>
						Privacy Policy
					</a>
				</label>

				<button
					type='submit'
					className='w-full bg-primary text-white py-2 rounded'>
					Sign Up
				</button>
			</form>

			<p className='text-sm mt-4 text-center'>
				Already have an account?{' '}
				<a
					href='/login'
					className='text-primary hover:underline'>
					Login
				</a>
			</p>
		</div>
	);
}
