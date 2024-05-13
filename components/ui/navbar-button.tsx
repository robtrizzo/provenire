'use client';
import { Button } from '@/components/ui/Button';
import { usePathname } from 'next/navigation';

export default function NavbarButton({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const pathname = usePathname();
  return (
    <Button variant={pathname === path ? 'outline' : 'ghost'}>
      {children}
    </Button>
  );
}
