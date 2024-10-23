import type { Metadata } from 'next';
import Head from 'next/head';
import {
  Josefin_Sans as FontSans,
  Caudex as FontSerif,
} from 'next/font/google';
import Providers from '@/providers/providers';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const fontSerif = FontSerif({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

// Kotta One would be good for script

export const metadata: Metadata = {
  title: 'Provenire',
  description: 'Dark mystery fantasy setting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
