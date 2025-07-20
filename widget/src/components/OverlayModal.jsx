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
			className={`tw:fixed tw:inset-0 tw:bg-black/30 tw:flex tw:items-center tw:justify-center tw:p-4 tw:transition-opacity tw:duration-500 ${
				open
					? 'tw:opacity-100 tw:pointer-events-auto'
					: 'tw:opacity-0 tw:pointer-events-none'
			}`}>
			<div
				className='tw:relative tw:bg-white tw:rounded-lg tw:shadow-xl tw:w-full tw:max-w-3xl tw:max-h-[90vh] tw:overflow-y-auto tw:p-4 tw:md:p-6 tw:transition-all tw:duration-500 tw:transform'
				style={{
					transform: open ? 'scale(1)' : 'scale(0.95)',
				}}>
				<button
					onClick={() => setOpen(false)}
					className='tw:absolute tw:top-4 tw:right-4 tw:text-gray-600 tw:hover:text-black tw:text-2xl tw:font-bold'>
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
