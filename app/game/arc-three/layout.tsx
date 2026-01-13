import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";

const navigationData = [
  {
    title: "Introduction",
    url: "/game/arc-three",
  },
  {
    title: "Setting",
    url: "#",
  },
  {
    title: "Rules",
    url: "#",
  },
  {
    title: "Cycle of Play",
    url: "#",
  },
  {
    title: "Character Options",
    url: "#",
    items: [
      {
        title: "Remembrances",
        url: "/game/arc-three/character-options/remembrances",
      },
      {
        title: "Roles",
        url: "/game/arc-three/character-options/roles",
      },
    ],
  },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <Toaster />
      <AppSidebar data={navigationData}>
        <Button variant="secondary" className="w-full text-lg py-6" disabled>
          Play
        </Button>
      </AppSidebar>
      <SidebarInset>
        <div className="relative p-4 box-border max-w-full">
          <p className="absolute top-2 right-2 text-sm text-muted-foreground">
            Search with{" "}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </p>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
