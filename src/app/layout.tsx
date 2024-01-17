import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Food Mentor',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/logo_icon.png',
    },
  ],
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <NextUIProvider>
      <html lang="en">
      <body className={inter.className}>{children}</body>
      </html>
    </NextUIProvider>
  );
}
