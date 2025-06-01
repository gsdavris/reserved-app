export default function AssistantPrompt({ message }) {
	return (
		<div className='mb-4 flex items-center gap-2'>
			<div className='bg-blue-100 text-blue-800 rounded-full px-4 py-2 w-fit shadow animate-fadeIn'>
				{message}
			</div>
		</div>
	);
}
