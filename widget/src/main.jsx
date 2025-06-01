import React from 'react';
import { createRoot } from 'react-dom/client';
import Widget from './Widget';
import './index.css';

function initWidget() {
	const scriptTag = document.querySelector('script[data-business-id]');
	const businessId = scriptTag?.dataset?.businessId || 'defaultId';

	const div = document.createElement('div');
	document.body.appendChild(div);

	const root = createRoot(div);
	root.render(<Widget businessId={businessId} />);
}

initWidget();
