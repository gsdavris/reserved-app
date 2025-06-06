import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reserved App",
  description: "For Every Experience Commerce App",
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/widget.css" />
        <script
          src="widget.iife.js"
          defer
        ></script>
      </head>
      <body
        className={ `${geistSans.variable} ${geistMono.variable} antialiased` }
      >
        { children }
      </body>
    </html>
  );
}
