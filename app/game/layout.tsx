import { Sidebar } from '@/components/blocks/game-sidebar';
import { Toaster } from '@/components/ui/toaster';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      {children}
      <Toaster />
    </Sidebar>
  );
}
