import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { sofia } from '@/utils/fonts/fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Byteex',
  description: 'Byteex Landing Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sofia.className} text-byteex-text-gray`}>
        {children}
      </body>
    </html>
  );
}
