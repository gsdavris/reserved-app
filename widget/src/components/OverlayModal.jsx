import React from 'react';
import AssistantPrompt from './AssistantPrompt';
import UserInputArea from './UserInputArea';
import ExperienceCardsList from './ExperienceCardsList';

const quickChoices = [
	'Sunbeds & Umbrellas',
	'Water Sports',
	'Romantic Sunset',
	'Family Day',
	'Snorkeling',
];

export default function OverlayModal({ open, setOpen, loading, experiences }) {
	return (
		<div
			className={`fixed inset-0 bg-black/30 flex items-center justify-center p-4 transition-opacity duration-500 ${
				open
					? 'opacity-100 pointer-events-auto'
					: 'opacity-0 pointer-events-none'
			}`}>
			<div
				className='relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 md:p-6 transition-all duration-500 transform'
				style={{
					transform: open ? 'scale(1)' : 'scale(0.95)',
				}}>
				<button
					onClick={() => setOpen(false)}
					className='absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold'>
					&times;
				</button>
				<AssistantPrompt message='👋 Book now – tell us what you want!' />
				<UserInputArea
					quickChoices={quickChoices}
					onInputChange={(value) => console.log('User typed:', value)}
					onQuickSelect={(choice) =>
						console.log('User clicked choice:', choice)
					}
				/>
				<ExperienceCardsList
					experiences={experiences}
					loading={loading}
				/>
			</div>
		</div>
	);
}
