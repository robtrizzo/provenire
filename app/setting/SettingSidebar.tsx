'use client';
import React, { ReactNode, useContext, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../theme-provider';

interface SidebarProps {
  children: ReactNode;
}

const navigation = [{ name: 'Before Memory', href: '/setting' }];

const first_age_navigation = [
  { name: 'History', href: '/setting/first_age' },
  { name: 'Arboria', href: '/setting/first_age/arboria' },
  {
    name: 'Cumeria',
    href: '/setting/first_age/cumeria',
  },
  { name: 'Gredora', href: '/setting/first_age/gredora' },
  {
    name: 'Kilder',
    href: '/setting/first_age/kilder',
  },
  {
    name: 'Narscillia',
    href: '/setting/first_age/narscillia',
  },
  {
    name: 'Rath',
    href: '/setting/first_age/rath',
  },
  {
    name: 'Shian Tor',
    href: '/setting/first_age/shian_tor',
  },
];

const second_age_navigation = [
  { name: 'New Beginning', href: '/setting/second_age' },
  { name: 'Anidinie', href: '/setting/second_age/anidine' },
  { name: 'Argos', href: '/setting/second_age/argos' },
  { name: 'Bwarhei', href: '/setting/second_age/bwarhei' },
  { name: 'Cumeria', href: '/setting/second_age/cumeria' },
  { name: 'Fenrir', href: '/setting/second_age/fenrir' },
  { name: 'Gredora', href: '/setting/second_age/gredora' },
  { name: 'Heia', href: '/setting/second_age/heia' },
  { name: 'Kilder', href: '/setting/second_age/kilder' },
  { name: 'Kipos', href: '/setting/second_age/kipos' },
  { name: 'Narscillia', href: '/setting/second_age/narscillia' },
  { name: 'Yama', href: '/setting/second_age/yama' },
];

export default function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);

  const [eraOneExpanded, setEraOneExpanded] = useState(true);
  const [eraTwoExpanded, setEraTwoExpanded] = useState(false);

  return (
    <div className="flex min-h-full flex-grow">
      <aside
        id="default-sidebar"
        className=" z-40 w-64 min-h-full transition-transform -translate-x-full sm:translate-x-0 shrink-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => (
              <li key="Before Memory">
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
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setEraOneExpanded(!eraOneExpanded)}
              >
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item="true"
                >
                  First Age
                </span>
                {eraOneExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <ul
                id="dropdown-example"
                className={`${eraOneExpanded ? '' : 'hidden'} py-2 space-y-2`}
              >
                {first_age_navigation.map((item) => (
                  <li className="pl-2" key={item.name}>
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
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setEraTwoExpanded(!eraTwoExpanded)}
              >
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item="true"
                >
                  Second Age
                </span>
                {eraTwoExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <ul
                id="dropdown-example"
                className={`${eraTwoExpanded ? '' : 'hidden'} py-2 space-y-2`}
              >
                {second_age_navigation.map((item) => (
                  <li className="pl-2" key={item.name}>
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
            </li>
          </ul>
        </div>
      </aside>

      <div
        className={`p-4 flex-grow min-h-full ${
          theme === 'light'
            ? 'bg-gradient-to-tr from-orange-50 from-60% to-orange-800 text-black'
            : 'bg-gradient-to-bl from-slate-950 from-30% text-white'
        }`}
      >
        <div
          className={`p-2 prose max-w-none lg:prose-xl prose-p:ml-4 prose-p:my-1 prose-p:font-serif ${
            theme === 'light'
              ? 'prose-stone prose-h1:text-slate-950 prose-h2:text-slate-950 prose-h3:text-slate-950 prose-h4:text-slate-950'
              : 'prose-h1:text-indigo-400 prose-h2:text-indigo-400 prose-invert prose-h3:text-indigo-400 prose-h4:text-indigo-400'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
