import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    },
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {
        lib: {
            entry: 'src/main.jsx',
            name: 'Widget',
            fileName: 'widget',
            formats: ['iife'],
        },
    },
});