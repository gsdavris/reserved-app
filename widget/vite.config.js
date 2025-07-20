import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    },
    plugins: [
        react(),
        tailwindcss(),
        cssInjectedByJsPlugin(),
    ],
    build: {
        lib: {
            entry: 'src/main.jsx',
            name: 'Widget',
            formats: ['es'],
            fileName: () => `widget.js`,
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
            },
        },
    },
});