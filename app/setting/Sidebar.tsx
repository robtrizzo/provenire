'use client';
import React, { ReactNode, useContext, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../theme-provider';

interface SidebarProps {
  children: ReactNode;
}

const navigation = [{ name: 'World', href: '/setting' }];

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
    href: '/setting/first_age/shianTor',
  },
];

const era_two_navigation = [
  { name: 'World', href: '/setting/era_two' },
  { name: 'Anidinie', href: '/setting/era_two/anidinie' },
  { name: 'Argos', href: '/setting/era_two/argos' },
  { name: 'Bwarhei', href: '/setting/era_two/bwarhei' },
  { name: 'Cumeria', href: '/setting/era_two/cumeria' },
  { name: 'Fenrir', href: '/setting/era_two/fenrir' },
  { name: 'Gredora', href: '/setting/era_two/gredora' },
  { name: 'Heia', href: '/setting/era_two/heia' },
  { name: 'Kilder', href: '/setting/era_two/kilder' },
  { name: 'Kipos', href: '/setting/era_two/kipos' },
  { name: 'Narscillia', href: '/setting/era_two/narscillia' },
  { name: 'Yama', href: '/setting/era_two/yama' },
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
        className=" z-40 w-64 min-h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => (
              <li>
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
                  sidebar-toggle-item
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
                  <li className="pl-2">
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
                  sidebar-toggle-item
                >
                  Era Two
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
                {era_two_navigation.map((item) => (
                  <li className="pl-2">
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
            ? 'bg-gradient-to-tr from-orange-50 from-60% text-black'
            : 'bg-gradient-to-bl from-stone-950 from-40% text-white'
        }`}
      >
        <div
          className={`p-2 prose lg:prose-xl prose-p:ml-4 prose-p:my-3 ${
            theme === 'light'
              ? 'prose-stone prose-h1:text-red-950 prose-h2:text-red-950 prose-h3:text-red-950'
              : 'prose-h1:text-red-900 prose-h2:text-red-900 prose-invert prose-h3:text-red-900'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
