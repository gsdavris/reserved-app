import Image from 'next/image';
import EditButton from './EditButton';
import ClientDeleteButton from './ClientDeleteButton';

export default function ExperienceCard({ experience, onDelete, index }) {
	const image = experience.featuredImage;
	const category = experience.category?.name;
	const parentCategory = experience.category?.parent?.name;

	const fullCategoryLabel = parentCategory
		? `${parentCategory} / ${category}`
		: category;

	const location = experience.location?.name;
	const options = experience.pricing?.options || [];

	const activeOptions = options.filter((opt) => opt?.isActive);

	const formatOption = (opt) => {
		const suffix = opt.perPerson ? ' / άτομο' : '';
		const unitMap = {
			day: 'ημέρα',
			hour: 'ώρα',
			half_day: 'μισή μέρα',
			event: 'εκδήλωση',
			custom: 'μονάδα',
		};
		return `από ${opt.basePrice}€ / ${
			unitMap[opt.durationUnit] ?? opt.durationUnit
		}${suffix}`;
	};

	return (
		<div className='bg-white p-2 rounded shadow flex items-center justify-between gap-4'>
			{/* Thumbnail */}
			{image?.url && (
				<div className='relative h-32 w-32 flex-shrink-0 rounded overflow-hidden'>
					<Image
						fill
						src={image.url}
						alt={experience.title}
						className='object-cover rounded'
						priority={index === 0}
						unoptimized
					/>
				</div>
			)}

			{/* Content */}
			<div className='flex-1 space-y-1'>
				<h2 className='font-semibold'>{experience.title}</h2>
				{location && <p className='text-sm text-gray-500'>{location}</p>}
				{fullCategoryLabel && (
					<p className='text-sm text-gray-400 italic'>{fullCategoryLabel}</p>
				)}

				{/* Pricing Preview */}
				{options.length > 0 ? (
					activeOptions.length > 0 ? (
						<ul className='text-sm text-gray-600 space-y-0.5 mt-1'>
							{activeOptions.slice(0, 2).map((opt) => (
								<li key={opt.id}>• {formatOption(opt)}</li>
							))}
							{activeOptions.length > 2 && (
								<li className='text-xs text-gray-400'>
									+{activeOptions.length - 2} ακόμα επιλογές
								</li>
							)}
						</ul>
					) : (
						<p className='text-sm text-gray-400 mt-1 italic'>
							Δεν υπάρχουν ενεργές τιμές
						</p>
					)
				) : (
					<p className='text-sm text-gray-300 mt-1 italic'>
						Δεν έχουν οριστεί τιμές
					</p>
				)}
			</div>

			{/* Actions */}
			<div className='flex gap-4'>
				<EditButton experienceId={experience.id} />
				<ClientDeleteButton
					experienceId={experience.id}
					onDelete={onDelete}
				/>
			</div>
		</div>
	);
}
