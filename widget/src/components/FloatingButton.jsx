import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingButton({ setOpen }) {
	return (
		<button
			onClick={() => setOpen(true)}
			className='tw:cursor-pointer tw:bg-blue-600 tw:text-white tw:font-semibold tw:px-4 tw:py-3 tw:rounded-full tw:shadow-lg tw:transition-all tw:duration-700 tw:ease-out tw:transform tw:flex tw:items-center tw:gap-2 tw:hover:bg-blue-700 tw:active:scale-95 pulse-glow tw:group'>
			<MessageCircle className='tw:w-5 tw:h-5' />
			<span className='tw:transition-all tw:duration-500 tw:ease-out tw:group-hover:text-base tw:group-hover:font-bold'>
				Book Now
			</span>
			<span className='tw:hidden tw:group-hover:inline-block tw:transition-all tw:duration-500 tw:ease-out tw:text-xs tw:font-light tw:ml-2'>
				Explore experiences!
			</span>
		</button>
	);
}
