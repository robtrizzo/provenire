import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

interface LayoutProps {
  children: ReactNode;
}

const layout = async ({ children }: LayoutProps) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    notFound();
  }
  return (
    <div className="w-full flex h-screen">
      <div className="flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
          <Icons.Logo className="h-8 w-auto-text-indigo-600" />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
