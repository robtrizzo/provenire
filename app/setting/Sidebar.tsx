"use client";
import React, { ReactNode, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeContext } from "../theme-provider";

interface SidebarProps {
  children: ReactNode;
}

const navigation = [
  { name: "World", href: "/setting" },
  { name: "Arboria", href: "/setting/Linkrboria" },
  {
    name: "Cumeria",
    href: "/setting/cumeria",
  },
  { name: "Gredora", href: "/setting/gredora" },
  {
    name: "Kilder",
    href: "/setting/kilder",
  },
  {
    name: "Narscillia",
    href: "/setting/narscillia",
  },
  {
    name: "Rath",
    href: "/setting/rath",
  },
  {
    name: "Shian Tor",
    href: "/setting/shianTor",
  },
];
export default function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => (
              <li>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    pathname === item.href ? "bg-gray-900" : ""
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
        className={`p-4 sm:ml-64 flex-grow h-full ${
          theme === "light"
            ? "bg-gradient-to-bl from-orange-50 from-60% text-black"
            : "bg-gradient-to-bl from-stone-950 from-40% text-white"
        }`}
        // className={`p-4 sm:ml-64 flex-grow h-full bg-parchment bg-cover bg-center bg-fixed bg-no-repeat bg-atta text-black`}
      >
        {children}
      </div>
    </>
  );
}
