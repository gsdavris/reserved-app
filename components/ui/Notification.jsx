'use client';

import { useEffect, useState } from 'react';

export default function Notification({
	message,
	type = 'info',
	duration = 6000,
}) {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), duration);
		return () => clearTimeout(timer);
	}, [duration]);

	if (!visible) return null;

	const typeStyles = {
		success: 'bg-green-100 text-green-800 border-green-300',
		error: 'bg-red-100 text-red-800 border-red-300',
		info: 'bg-blue-100 text-blue-800 border-blue-300',
	};

	return (
		<div
			className={`relative w-full my-4 px-4 py-2 border rounded shadow text-sm transition-opacity duration-300 ${typeStyles[type]}`}
			role='alert'>
			{message}
		</div>
	);
}
