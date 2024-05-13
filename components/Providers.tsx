import { ThemeProvider } from '@/components/theme-provider';
import { SessionProvider } from 'next-auth/react';
import { BASE_PATH, auth } from '@/auth';

export default async function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider basePath={BASE_PATH} session={session}>
        {children}
      </SessionProvider>
    </ThemeProvider>
  );
}
