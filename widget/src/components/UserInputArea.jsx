import { BotIcon } from 'lucide-react';

export default function UserInputArea({
	quickChoices = [],
	onInputChange,
	onQuickSelect,
}) {
	return (
		<div className='tw:my-4 tw:space-y-3'>
			{/* Quick choices */}
			<div className='tw:flex tw:flex-wrap tw:gap-2'>
				{quickChoices.map((choice, idx) => (
					<button
						key={idx}
						onClick={() => onQuickSelect(choice)}
						className='tw:bg-gray-200 tw:hover:bg-blue-200 tw:text-gray-800 tw:text-xs tw:px-3 tw:py-1 tw:rounded-full tw:transition-colors tw:duration-200'>
						{choice}
					</button>
				))}
			</div>

			<textarea
				onChange={(e) => onInputChange(e.target.value)}
				placeholder='Type your request...'
				rows={2}
				className='tw:flex-1 tw:w-full tw:rounded-2xl tw:border tw:border-gray-300 tw:p-2 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400 tw:transition-shadow tw:duration-200 tw:shadow'
			/>
		</div>
	);
}
