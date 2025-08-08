import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css';

import AppProviders from '@/components/providers/AppProviders'; // 👈

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Reserved App',
  description: 'For Every Experience Commerce App',
};

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <script src='/widget.js' type='module' defer></script>
      </head>
      <body className={ `${geistSans.variable} ${geistMono.variable} antialiased` }>
        <AppProviders>{ children }</AppProviders>
      </body>
    </html>
  );
}
