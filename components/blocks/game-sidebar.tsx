'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AuthButton from '@/components/ui/AuthButton.client';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

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
                href="/game"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game' ? 'bg-muted' : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                Introduction
              </Link>
              <Link
                href="/game/setting"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/setting'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                }  transition-all hover:text-primary`}
              >
                Setting
              </Link>
              <Link
                href="/game/core-system"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/core-system'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                }  transition-all hover:text-primary`}
              >
                Core System
              </Link>
              <Link
                href="/game/actions-and-attributes"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/actions-and-attributes'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                Actions & Attributes
              </Link>
              <Link
                href="/game/cycle-of-play"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/cycle-of-play'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                }  transition-all hover:text-primary`}
              >
                The Cycle of Play
              </Link>
              <Link
                href="/game/prelude"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/prelude'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                }  transition-all hover:text-primary`}
              >
                Prelude
              </Link>
              <Link
                href="/game/mission"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/mission'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                }  transition-all hover:text-primary`}
              >
                The Mission
              </Link>
              <Link
                href="/game/the-churn"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/the-churn'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                }  transition-all hover:text-primary`}
              >
                The Churn
              </Link>
              <Link
                href="/game/character-creation"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/character-creation'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                }  transition-all hover:text-primary`}
              >
                Character Creation
              </Link>
              <Link
                href="/game/backgrounds"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/backgrounds'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                Backgrounds
              </Link>
              <Link
                href="/game/skillsets"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/skillsets'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                Skillsets
              </Link>
              <Link
                href="/game/archetypes"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/archetypes'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                Archetypes
              </Link>
              <Link
                href="/game/fitd-char-sheet"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/fitd-char-sheet'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                Character Sheet
              </Link>
              <Separator />
              <Link
                href="/game/osg"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/osg'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                OSG: Twisted Scion
              </Link>
              <Link
                href="/game/blog"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname === '/game/blog'
                    ? 'bg-muted'
                    : 'text-muted-foreground'
                } transition-all hover:text-primary`}
              >
                Blog
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
              <nav className="flex flex-col gap-2 text-lg font-medium mt-6">
                <Link
                  href="/"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/' ? 'bg-muted' : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Home
                </Link>
                <Link
                  href="/game"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game' ? 'bg-muted' : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Introduction
                </Link>
                <Link
                  href="/game/setting"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/setting'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  Setting
                </Link>
                <Link
                  href="/game/core-system"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/core-system'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Core System
                </Link>
                <Link
                  href="/game/actions-and-attributes"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/actions-and-attributes'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Actions & Attributes
                </Link>
                <Link
                  href="/game/cycle-of-play"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/cycle-of-play'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  The Cycle of Play
                </Link>
                <Link
                  href="/game/prelude"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/prelude'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  Prelude
                </Link>
                <Link
                  href="/game/mission"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/mission'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  The Mission
                </Link>
                <Link
                  href="/game/the-churn"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/the-churn'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  The Churn
                </Link>
                <Link
                  href="/game/character-creation"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/character-creation'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  Character Creation
                </Link>
                <Link
                  href="/game/backgrounds"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/backgrounds'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  Backgrounds
                </Link>
                <Link
                  href="/game/skillsets"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/skillsets'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  Skillsets
                </Link>
                <Link
                  href="/game/archetypes"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/archetypes'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  }  transition-all hover:text-primary`}
                >
                  Archetypes
                </Link>
                <Link
                  href="/game/fitd-char-sheet"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/fitd-char-sheet'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Character Sheet
                </Link>
                <Separator />
                <Link
                  href="/game/osg"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/osg'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  OSG: Twisted Scion
                </Link>
                <Link
                  href="/game/blog"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === '/game/blog'
                      ? 'bg-muted'
                      : 'text-muted-foreground'
                  } transition-all hover:text-primary`}
                >
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1 flex justify-end">
            <AuthButton />
            <ModeToggle />
          </div>
        </header>
        <main className="relative flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <p className="absolute top-2 right-2 text-sm text-muted-foreground">
            Search with{' '}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </p>
          {children}
        </main>
      </div>
    </div>
  );
}
