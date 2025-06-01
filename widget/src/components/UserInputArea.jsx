export default function UserInputArea({
	quickChoices = [],
	onInputChange,
	onQuickSelect,
}) {
	return (
		<div className='mt-4 mb-2 space-y-2'>
			{/* Quick choices */}
			<div className='flex flex-wrap gap-2'>
				{quickChoices.map((choice, idx) => (
					<button
						key={idx}
						onClick={() => onQuickSelect(choice)}
						className='cursor-pointer bg-gray-100 hover:bg-blue-100 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors duration-200 shadow-sm border border-gray-200'>
						{choice}
					</button>
				))}
			</div>

			{/* User input */}
			<textarea
				onChange={(e) => onInputChange(e.target.value)}
				placeholder='Type your request...'
				rows={2}
				className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 shadow-sm'
			/>
		</div>
	);
}
