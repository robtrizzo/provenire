'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
        pathname === href ? 'bg-muted' : 'text-muted-foreground'
      } transition-all hover:text-primary`}
    >
      {children}
    </Link>
  );
}
