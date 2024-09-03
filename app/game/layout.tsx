import { Sidebar } from '@/components/blocks/game-sidebar';
import CommandMenu from '@/components/ui/command-menu';
import { Toaster } from '@/components/ui/toaster';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      {children}
      <Toaster />
      <CommandMenu />
    </Sidebar>
  );
}
