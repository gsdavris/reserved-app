'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
	const router = useRouter();
	const [form, setForm] = useState({ email: '', password: '' });
	const [error, setError] = useState('');

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await signIn('credentials', {
			redirect: false,
			email: form.email,
			password: form.password,
		});
		if (res.error) return setError('Invalid credentials');
		router.push('/dashboard');
	};

	return (
		<div className='max-w-md mx-auto mt-20 p-6 bg-white shadow rounded'>
			<h1 className='text-xl font-bold mb-4'>Login</h1>
			{error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
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
					placeholder='Password'
					value={form.password}
					onChange={handleChange}
					className='w-full p-2 border rounded'
					required
				/>

				<div className='flex items-center justify-between text-sm'>
					<label className='flex items-center gap-2'>
						<input
							type='checkbox'
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
					<a
						href='/forgot-password'
						className='text-primary hover:underline'>
						Forgot password?
					</a>
				</div>

				<button
					type='submit'
					className='w-full bg-primary text-white py-2 rounded'>
					Login
				</button>
			</form>

			<p className='text-sm mt-4 text-center'>
				Don’t have an account?{' '}
				<a
					href='/signup'
					className='text-primary hover:underline'>
					Sign up
				</a>
			</p>
		</div>
	);
}
