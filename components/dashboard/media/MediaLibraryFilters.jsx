'use client';
import dayjs from 'dayjs';
import DropdownSelect from '@/components/ui/DropdownSelect';

export default function MediaLibraryFilters({
	search,
	setSearch,
	month,
	setMonth,
	sortBy,
	setSortBy,
	order,
	setOrder,
	availableMonths = [],
}) {
	return (
		<div className='mb-6 flex flex-col gap-4'>
			<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
				<div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:flex-1'>
					<DropdownSelect
						label='Όλοι οι Μήνες'
						options={[
							{ value: '', label: 'Όλοι οι Μήνες' },
							...availableMonths.map((m) => ({
								value: m,
								label: dayjs(m).format('MMMM YYYY'),
							})),
						]}
						value={month}
						onChange={setMonth}
						className='border rounded w-full sm:w-auto sm:max-w-[200px] h-10 px-3'
					/>
					<input
						type='text'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Αναζήτηση κατά όνομα ή λεζάντα...'
						className='border rounded w-full sm:max-w-[300px] h-10 px-3'
					/>
				</div>

				<div className='flex gap-4'>
					<DropdownSelect
						label='Ταξινόμηση'
						options={[
							{ value: 'createdAt', label: 'Ημερομηνία' },
							{ value: 'caption', label: 'Λεζάντα' },
							{ value: 'alt', label: 'Alt Text' },
						]}
						value={sortBy}
						onChange={setSortBy}
						className='border rounded w-full min-w-[150px] h-10 px-3'
					/>
					<button
						type='button'
						onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
						className='border rounded w-full min-w-[150px] h-10 px-3 flex items-center gap-1'>
						{order === 'asc' ? '⬆️ Αύξουσα' : '⬇️ Φθίνουσα'}
					</button>
				</div>
			</div>
		</div>
	);
}
