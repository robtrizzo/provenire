'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AuthButton from '@/components/ui/AuthButton.client';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

export default function Navbar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <div className={cn('grid min-h-screen w-full', className)}>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium mt-6">
                <Link
                  href="/"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/' ? 'bg-muted' : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Home
                </Link>
                <Link
                  href="/setting"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/setting'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Setting
                </Link>
                <Link
                  href="/game"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game' ? 'bg-muted' : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Game
                </Link>
                <Link
                  href="/osg"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/osg' ? 'bg-muted' : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  OSG: Twisted Scion
                </Link>
                <Link
                  href="/chat"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/osg' ? 'bg-muted' : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Chat
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1 flex gap-2">
            <Link href="/" className="hidden md:block">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/setting" className="hidden md:block">
              <Button variant="ghost">Setting</Button>
            </Link>
            <Link href="/game" className="hidden md:block">
              <Button variant="ghost">Game</Button>
            </Link>
            <Link href="/osg" className="hidden md:block">
              <Button variant="ghost">OSG: Twisted Scion</Button>
            </Link>
            <Link href="/chat" className="hidden md:block">
              <Button variant="ghost">
                Chat{' '}
                <Badge className="ml-2" variant="destructive">
                  Closed Alpha
                </Badge>
              </Button>
            </Link>
            <div className="ml-auto">
              <AuthButton />
            </div>
            <ModeToggle />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 lg:gap-6">{children}</main>
      </div>
    </div>
  );
}
