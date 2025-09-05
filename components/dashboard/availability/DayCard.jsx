'use client';

import { PlusCircle, Copy, ClipboardPaste } from 'lucide-react';
import IntervalRow from './IntervalRow';

export default function DayCard({
	label,
	day, // { enabled, intervals }
	errors = [],
	clickable,
	onToggle,
	onCopy,
	onPaste,
	onAddInterval,
	onUpdateInterval,
	onRemoveInterval,
}) {
	const safeDay = day || { enabled: false, intervals: [] };
	const hasError = errors.length > 0;
	const errorId = hasError ? `oh-error-${label}` : undefined;

	const cardProps = clickable
		? {
				onClick: onToggle,
				role: 'button',
				tabIndex: 0,
				onKeyDown: (e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						onToggle();
					}
				},
				title: 'πατήστε για ενεργοποίηση',
		  }
		: {};

	const hasFullDay = (safeDay?.intervals || []).some(
		(it) => it.start === '00:00' && it.end === '24:00'
	);

	return (
		<div
			className={`p-3 border border-gray-200 rounded ${
				clickable ? 'cursor-pointer hover:bg-gray-50' : ''
			}`}
			role='group'
			aria-labelledby={`oh-label-${label}`}
			aria-describedby={errorId}
			{...cardProps}>
			<div
				className={`flex items-center justify-between ${
					safeDay.enabled ? 'mb-2' : ''
				}`}>
				<div className='flex items-center gap-2'>
					<label
						id={`oh-label-${label}`}
						className='font-medium'>
						{label}
					</label>
					{hasError && (
						<span
							id={errorId}
							className='text-xs text-red-600'>
							{errors[0]}
						</span>
					)}
					{!safeDay.enabled && (
						<span className='text-xs text-gray-500'>
							— κλειστό (πατήστε για ενεργοποίηση)
						</span>
					)}
				</div>

				<div
					className='flex items-center gap-1'
					onClick={(e) => e.stopPropagation()}>
					<button
						type='button'
						onClick={onCopy}
						title='Αντιγραφή ωραρίου ημέρας'
						className='inline-flex items-center justify-center h-8 w-8 border rounded text-gray-700 hover:bg-gray-50'>
						<Copy className='w-4 h-4' />
					</button>

					<button
						type='button'
						onClick={onPaste}
						title='Επικόλληση ωραρίου'
						className='inline-flex items-center justify-center h-8 w-8 border rounded text-gray-700 hover:bg-gray-50'>
						<ClipboardPaste className='w-4 h-4' />
					</button>

					<button
						type='button'
						onClick={onToggle}
						aria-pressed={safeDay.enabled}
						className={`px-2 h-8 text-sm rounded border ${
							safeDay.enabled
								? 'bg-green-600 text-white border-green-600'
								: 'bg-white'
						}`}
						title={safeDay.enabled ? 'Απενεργοποίηση' : 'Ενεργοποίηση'}>
						{safeDay.enabled ? 'Ενεργό' : 'Κλειστό'}
					</button>
				</div>
			</div>

			{safeDay.enabled && (
				<div
					className='space-y-2'
					onClick={(e) => e.stopPropagation()}>
					{(safeDay.intervals || []).map((it, idx) => (
						<IntervalRow
							key={`${idx}-${it?.start ?? ''}-${it?.end ?? ''}`}
							value={it}
							onChange={(next) => onUpdateInterval(idx, next)}
							onRemove={() => onRemoveInterval(idx)}
						/>
					))}

					{!hasFullDay && (
						<button
							type='button'
							onClick={onAddInterval}
							className='inline-flex items-center gap-1 text-blue-600 text-sm hover:underline'>
							<PlusCircle className='w-4 h-4' /> Προσθήκη διαστήματος
						</button>
					)}
				</div>
			)}
		</div>
	);
}
