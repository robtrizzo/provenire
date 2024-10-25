import CommandMenu from '@/components/ui/command-menu';
import { Toaster } from '@/components/ui/toaster';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '19rem',
        } as React.CSSProperties
      }
    >
      <Toaster />
      <CommandMenu />
      <AppSidebar />
      <SidebarInset>
        <div className="p-4 box-border max-w-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
