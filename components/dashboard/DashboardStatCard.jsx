import Link from 'next/link';

export default function DashboardStatCard({ icon, title, count, href, label }) {
	return (
		<div className='group bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 p-6 border border-gray-100 hover:border-gray-300 transform hover:-translate-y-1'>
			<div className='flex items-center gap-3 mb-4'>
				{icon}
				<h2 className=' text-xl font-semibold text-gray-700'>{title}</h2>
			</div>
			<p className='text-4xl font-bold text-gray-900'>{count}</p>

			{href && (
				<Link
					href={href}
					className='inline-flex items-center gap-1 text-sm text-blue-600 mt-4 font-medium hover:underline'>
					{label || 'Περισσότερα'}{' '}
					<span className='transition-transform group-hover:translate-x-1'>
						→
					</span>
				</Link>
			)}
		</div>
	);
}
