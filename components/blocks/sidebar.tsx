'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AuthButton from '@/components/ui/AuthButton.client';
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { usePathname } from 'next/navigation';

export function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex  items-center border-b px-4 lg:h-[60px]">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/setting"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/setting' ? 'bg-muted' : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                Before Memory
              </Link>
              <Collapsible className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <CollapsibleTrigger>First Age</CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col">
                  <Link
                    href="/setting/first-age"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/first-age'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    History
                  </Link>
                  <Link
                    href="/setting/first-age/arboria"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/first-age/arboria'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Arboria
                  </Link>
                  <Link
                    href="/setting/first-age/cumeria"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/first-age/cumeria'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Cumeria
                  </Link>
                  <Link
                    href="/setting/first-age/gredora"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/first-age/gredora'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Gredora
                  </Link>
                  <Link
                    href="/setting/first-age/kilder"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/first-age/kilder'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Kilder
                  </Link>
                  <Link
                    href="/setting/first-age/narscillia"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/first-age/narscillia'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Narscillia
                  </Link>
                  <Link
                    href="/setting/first-age/rath"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/first-age/rath'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Rath
                  </Link>
                  <Link
                    href="/setting/first-age/shian-tor"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/first-age/shian-tor'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Shian Tor
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <CollapsibleTrigger>Second Age</CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col">
                  <Link
                    href="/setting/second-age"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    New Beginning
                  </Link>
                  <Link
                    href="/setting/second-age/anidine"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/anidine'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Anidine
                  </Link>
                  <Link
                    href="/setting/second-age/argos"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/argos'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Argos
                  </Link>
                  <Link
                    href="/setting/second-age/bwarhei"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/bwarhei'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Bwarhei
                  </Link>
                  <Link
                    href="/setting/second-age/cumeria"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/cumeria'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Cumeria
                  </Link>
                  <Link
                    href="/setting/second-age/fenrir"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/fenrir'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Fenrir
                  </Link>
                  <Link
                    href="/setting/second-age/gredora"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/gredora'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Gredora
                  </Link>
                  <Link
                    href="/setting/second-age/heia"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/heia'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Heia
                  </Link>
                  <Link
                    href="/setting/second-age/kilder"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/kilder'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Kilder
                  </Link>
                  <Link
                    href="/setting/second-age/kipos"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/kipos'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Kipos
                  </Link>
                  <Link
                    href="/setting/second-age/narscillia"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/narscillia'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Narscillia
                  </Link>
                  <Link
                    href="/setting/second-age/yama"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/second-age/yama'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Yama
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <CollapsibleTrigger>Third Age</CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col">
                  <Link
                    href="/setting/third-age"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/third-age'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Era of Lost Gods
                  </Link>
                  <Link
                    href="/setting/third-age/introduction"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === '/setting/third-age/introduction'
                        ? 'bg-muted'
                        : 'text-muted-foreground'
                    } transition-all hover:text-primary`}
                  >
                    Introduction
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Link
                href="/setting/donums"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/' && 'bg-muted'
                } text-muted-foreground transition-all hover:text-primary`}
              >
                Donums
              </Link>
            </nav>
          </div>
        </div>
      </div>
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
                    pathname === '/home' ? 'bg-muted' : 'text-muted-foreground'
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
                  Before Memory
                </Link>
                <Collapsible className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <CollapsibleTrigger>First Age</CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col">
                    <Link
                      href="/setting/first-age"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/first-age'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      History
                    </Link>
                    <Link
                      href="/setting/first-age/arboria"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/first-age/arboria'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Arboria
                    </Link>
                    <Link
                      href="/setting/first-age/cumeria"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/first-age/cumeria'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Cumeria
                    </Link>
                    <Link
                      href="/setting/first-age/gredora"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/first-age/gredora'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Gredora
                    </Link>
                    <Link
                      href="/setting/first-age/kilder"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/first-age/kilder'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Kilder
                    </Link>
                    <Link
                      href="/setting/first-age/narscillia"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/first-age/narscillia'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Narscillia
                    </Link>
                    <Link
                      href="/setting/first-age/rath"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/first-age/rath'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Rath
                    </Link>
                    <Link
                      href="/setting/first-age/shian-tor"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/first-age/shian-tor'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Shian Tor
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <CollapsibleTrigger>Second Age</CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col">
                    <Link
                      href="/setting/second-age"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      New Beginning
                    </Link>
                    <Link
                      href="/setting/second-age/anidine"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/anidine'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Anidine
                    </Link>
                    <Link
                      href="/setting/second-age/argos"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/argos'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Argos
                    </Link>
                    <Link
                      href="/setting/second-age/bwarhei"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/bwarhei'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Bwarhei
                    </Link>
                    <Link
                      href="/setting/second-age/cumeria"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/cumeria'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Cumeria
                    </Link>
                    <Link
                      href="/setting/second-age/fenrir"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/fenrir'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Fenrir
                    </Link>
                    <Link
                      href="/setting/second-age/gredora"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/gredora'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Gredora
                    </Link>
                    <Link
                      href="/setting/second-age/heia"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/heia'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Heia
                    </Link>
                    <Link
                      href="/setting/second-age/kilder"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/kilder'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Kilder
                    </Link>
                    <Link
                      href="/setting/second-age/kipos"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/kipos'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Kipos
                    </Link>
                    <Link
                      href="/setting/second-age/narscillia"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/narscillia'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Narscillia
                    </Link>
                    <Link
                      href="/setting/second-age/yama"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/second-age/yama'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Yama
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <CollapsibleTrigger>Third Age</CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col">
                    <Link
                      href="/setting/third-age"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/third-age'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Era of Lost Gods
                    </Link>
                    <Link
                      href="/setting/third-age/introduction"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === '/setting/third-age/introduction'
                          ? 'bg-muted'
                          : 'text-muted-foreground'
                      } transition-all hover:text-primary`}
                    >
                      Introduction
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Link
                  href="/setting/donums"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/' && 'bg-muted'
                  } text-muted-foreground transition-all hover:text-primary`}
                >
                  Donums
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1 flex justify-end">
            <AuthButton />
            <ModeToggle />
          </div>
        </header>
        <main className="flex-1 p-4 lg:gap-6 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
