import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingButton({ setOpen }) {
	return (
		<button
			onClick={() => setOpen(true)}
			className='cursor-pointer bg-blue-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all duration-700 ease-out transform flex items-center gap-2 hover:bg-blue-700 active:scale-95 pulse-glow group'>
			<MessageCircle className='w-5 h-5' />
			<span className='transition-all duration-500  ease-out group-hover:text-base group-hover:font-bold'>
				Book Now
			</span>
			<span className='hidden group-hover:inline-block transition-all duration-500  ease-out text-xs font-light ml-2'>
				Explore experiences!
			</span>
		</button>
	);
}
