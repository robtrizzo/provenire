import { Sidebar } from '@/components/blocks/sidebar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Sidebar>{children}</Sidebar>;
}
