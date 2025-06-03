import { BotIcon } from 'lucide-react';

export default function UserInputArea({
	quickChoices = [],
	onInputChange,
	onQuickSelect,
}) {
	return (
		<div className='my-4 space-y-3'>
			{/* Quick choices */}
			<div className='flex flex-wrap gap-2'>
				{quickChoices.map((choice, idx) => (
					<button
						key={idx}
						onClick={() => onQuickSelect(choice)}
						className='bg-gray-200 hover:bg-blue-200 text-gray-800 text-xs px-3 py-1 rounded-full transition-colors duration-200'>
						{choice}
					</button>
				))}
			</div>

			<textarea
				onChange={(e) => onInputChange(e.target.value)}
				placeholder='Type your request...'
				rows={2}
				className='flex-1 w-full rounded-2xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-200 shadow'
			/>
		</div>
	);
}
