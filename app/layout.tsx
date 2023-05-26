import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import { Providers } from './Providers';
import Navbar from './Navbar';
import { Session } from 'next-auth';
import { headers } from 'next/headers';
import AuthContext from './AuthContext';

const josefin_sans = Josefin_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'PBTA + Disco',
  description: 'An unlikely mashup',
};

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get('cookie') ?? '');
  return (
    <html lang="en">
      <body className={`${josefin_sans.className} flex-col`}>
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
