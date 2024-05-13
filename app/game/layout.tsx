import { Sidebar } from '@/components/blocks/game-sidebar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Sidebar>{children}</Sidebar>;
}
