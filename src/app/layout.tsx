import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Favicon from '/public/logo_icon.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Food Mentor',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: Favicon.src,
    },
  ],
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
