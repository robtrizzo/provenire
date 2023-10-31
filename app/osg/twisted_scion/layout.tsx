'use client';
import { useContext, ReactNode } from 'react';
import { ThemeContext } from '@/app/theme-provider';

export default function Layout({ children }: { children: ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-8 max-w-none prose prose-lead:mt-0 lg:prose-xl prose-p:ml-4 prose-p:my-1 prose-p:font-serif ${
        theme === 'light'
          ? 'prose-stone bg-slate-50 prose-h1:text-red-950 prose-h2:text-red-950 prose-h3:text-red-950 prose-h4:text-red-950'
          : 'prose-h1:text-indigo-400 bg-black prose-h2:text-indigo-400 prose-invert prose-h3:text-indigo-400 prose-h4:text-indigo-400'
      }`}
    >
      {children}
    </div>
  );
}
