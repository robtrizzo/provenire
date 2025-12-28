import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const navigationData = [
  {
    title: "Introduction",
    url: "/game/crucible",
  },
  {
    title: "Legends",
    url: "#",
    items: [
      {
        title: "Dunstan",
        url: "/game/crucible/legends/dunstan",
      },
      {
        title: "Engel",
        url: "/game/crucible/legends/engel",
      },
      {
        title: "Issa",
        url: "/game/crucible/legends/issa",
      },
      {
        title: "Luciana",
        url: "/game/crucible/legends/luciana",
      },
      {
        title: "Makino",
        url: "/game/crucible/legends/makino",
      },
      {
        title: "Matteo",
        url: "/game/crucible/legends/matteo",
      },
      {
        title: "Takota",
        url: "/game/crucible/legends/takota",
      },
      {
        title: "Velda",
        url: "/game/crucible/legends/velda",
      },
      {
        title: "Ygg",
        url: "/game/crucible/legends/ygg",
      },
      {
        title: "Zephyr",
        url: "/game/crucible/legends/zephyr",
      },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar data={navigationData} />
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
