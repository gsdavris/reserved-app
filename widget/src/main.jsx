import React from 'react';
import { createRoot } from 'react-dom/client';
import Widget from './Widget';
import './index.css';

function initWidget() {
	const scriptTag = document.currentScript;
	const businessId = scriptTag?.dataset?.businessId || 'demo';

	const mount = document.createElement('div');
	mount.className = 'reserved-widget';
	document.body.appendChild(mount);

	const root = createRoot(mount);
	root.render(<Widget businessId={businessId} />);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initWidget);
} else {
	initWidget();
}
