import { BotIcon } from 'lucide-react';

export default function AssistantPrompt({ message }) {
	return (
		<div className='tw:mb-4 tw:flex tw:items-center tw:gap-2'>
			<div className='tw:flex-shrink-0 tw:bg-blue-100 tw:text-blue-600 tw:p-2 tw:rounded-full tw:shadow'>
				<BotIcon className='tw:w-4 tw:h-4' />
			</div>
			<div className='tw:bg-blue-100 tw:text-blue-800 tw:rounded-full tw:px-4 tw:py-2 tw:w-fit tw:shadow animate-fadeIn'>
				{message}
			</div>
		</div>
	);
}
