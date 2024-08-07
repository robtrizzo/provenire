import type { Metadata } from 'next';
import { Josefin_Sans as FontSans, Cardo as FontSerif } from 'next/font/google';
import Providers from '@/providers/providers';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontSerif = FontSerif({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

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
