'use client';
import React, { ReactNode, useContext, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../theme-provider';

interface SidebarProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Introduction', href: '/game' },
  { name: 'Basic Rules', href: '/game/basic_rules' },
  { name: 'Basic Moves', href: '/game/basic_moves' },
  { name: 'Downtime', href: '/game/downtime' },
  { name: 'Playbooks', href: '/game/playbooks' },
];

export default function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex min-h-full flex-grow">
      <aside
        id="default-sidebar"
        className="z-40 w-64 min-h-full transition-transform translate-x-full sm:translate-x-0 shrink-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    pathname === item.href ? 'bg-gray-900' : ''
                  }`}
                >
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div
        className={`p-4 flex-grow min-h-full ${
          theme === 'light'
            ? 'bg-gradient-to-tr from-orange-50 from-60% to-orange-800 text-black'
            : 'bg-gradient-to-bl from-stone-950 from-30% text-white'
        }`}
      >
        <div
          className={`p-2 prose max-w-none lg:prose-xl prose-p:ml-4 prose-p:my-1 prose-p:font-serif ${
            theme === 'light'
              ? 'prose-stone prose-h1:text-red-950 prose-h2:text-red-950 prose-h3:text-red-950 prose-h4:text-red-950'
              : 'prose-h1:text-indigo-400 prose-h2:text-indigo-400 prose-invert prose-h3:text-indigo-400 prose-h4:text-indigo-400'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
