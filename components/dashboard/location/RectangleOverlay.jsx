'use client';
import { Rectangle } from 'react-leaflet';

export default function RectangleOverlay({ bounds }) {
	if (!bounds?.sw || !bounds?.ne) return null;

	return (
		<Rectangle
			bounds={[
				[bounds.sw.lat, bounds.sw.lng],
				[bounds.ne.lat, bounds.ne.lng],
			]}
			pathOptions={{ color: 'blue', dashArray: '4' }}
		/>
	);
}
