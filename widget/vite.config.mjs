import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    },
    plugins: [react()],
    build: {
        lib: {
            entry: 'src/main.jsx',
            name: 'Widget',
            fileName: 'widget',
            formats: ['iife'],
        },
    },
});