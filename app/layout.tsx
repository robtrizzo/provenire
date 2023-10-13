import './globals.css';
import { Josefin_Sans, Cardo } from 'next/font/google';
import Providers from '../components/Providers';
import Navbar from './Navbar';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import AuthContext from './AuthContext';
import React from 'react';

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
});
const cardo = Cardo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cardo',
});

export const metadata = {
  title: 'Provenire',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await getServerSession(authOptions)) as Session;
  return (
    <html lang="en">
      <body
        className={`${josefin_sans.variable} ${cardo.variable} font-sans flex-col`}
      >
        <AuthContext session={session}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
