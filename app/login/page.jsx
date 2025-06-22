'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Notification from '@/components/ui/Notification';

export default function LoginPage() {
	const router = useRouter();
	const [form, setForm] = useState({ email: '', password: '' });
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [toast, setToast] = useState(null);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		const res = await signIn('credentials', {
			redirect: false,
			email: form.email,
			password: form.password,
		});
		setLoading(false);
		if (res.error)
			return setToast({ message: 'Invalid credentials', type: 'error' });
		setToast({ message: 'Login successful', type: 'success' });
		router.push('/dashboard');
	};

	return (
		<div className='max-w-md mx-auto mt-48 p-6 bg-white shadow rounded'>
			<h1 className='text-xl font-bold mb-4'>Login</h1>
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
					<a
						href='/forgot-password'
						className='text-blue-600 hover:underline'>
						Forgot password?
					</a>
				</div>
				{toast && (
					<Notification
						message={toast.message}
						type={toast.type}
					/>
				)}
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 rounded flex justify-center'>
					{loading ? <LoadingSpinner size={12} /> : 'Login'}
				</button>
			</form>
			<p className='text-sm mt-4 text-center'>
				Don’t have an account?{' '}
				<a
					href='/signup'
					className='text-blue-600 hover:underline'>
					Sign up
				</a>
			</p>
		</div>
	);
}
