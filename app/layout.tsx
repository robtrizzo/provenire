import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import Navbar from './Navbar';
import { Providers } from './Providers';

const josefin_sans = Josefin_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'PTBA + Disco',
  description: 'An unlikely mashup',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.className} flex-col`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
