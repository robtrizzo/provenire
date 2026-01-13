import CommandMenu from "@/components/command-menu";
import { Toaster } from "@/components/ui/toaster";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navigationData = [
  {
    title: "Introduction",
    url: "/game/arc-one",
  },
  {
    title: "Setting",
    url: "#",
    items: [
      {
        title: "Era 3",
        url: "/game/arc-one/setting",
      },
      {
        title: "Culture",
        url: "/game/arc-one/setting/culture",
      },
      {
        title: "The Steel Trap",
        url: "/game/arc-one/setting/steel-trap",
      },
      {
        title: "Strange Forces",
        url: "/game/arc-one/setting/strange-forces",
      },
    ],
  },
  {
    title: "Rules",
    url: "#",
    items: [
      {
        title: "Core System",
        url: "/game/arc-one/core-system",
      },
      {
        title: "Actions, Bonds, & Rolls",
        url: "/game/arc-one/actions-and-rolls",
      },
      {
        title: "Prelude",
        url: "/game/arc-one/prelude",
      },
      {
        title: "Mission",
        url: "/game/arc-one/mission",
      },
      {
        title: "Churn",
        url: "/game/arc-one/the-churn",
      },
      {
        title: "Appendix",
        url: "/game/arc-one/appendix",
      },
    ],
  },
  {
    title: "Character Creation",
    url: "#",
    items: [
      {
        title: "Overview",
        url: "/game/arc-one/character-creation",
      },
      {
        title: "Heritages",
        url: "/game/arc-one/heritages",
      },
      {
        title: "Backgrounds",
        url: "/game/arc-one/backgrounds",
      },
      {
        title: "Skillsets",
        url: "/game/arc-one/skillsets",
      },
      {
        title: "Archetypes",
        url: "/game/arc-one/archetypes",
      },
      {
        title: "Fighting Styles",
        url: "/game/arc-one/fighting-styles",
      },
    ],
  },
  {
    title: "Sources of Power",
    url: "/game/arc-one/sources-of-power",
    items: [
      { title: "Aldams", url: "/game/arc-one/sources-of-power/aldams" },
      {
        title: "Transformations",
        url: "/game/arc-one/sources-of-power/transformations",
      },
      { title: "Donums", url: "/game/arc-one/sources-of-power/donums" },
      { title: "Curses", url: "/game/arc-one/sources-of-power/curses" },
    ],
  },
  {
    title: "Playtests",
    url: "#",
    items: [
      { title: "Playtest One", url: "/game/arc-one/playtest-one" },
      { title: "Playtest Two", url: "/game/arc-one/playtest-two" },
      { title: "Playtest Three", url: "/game/arc-one/playtest-three" },
      { title: "Playtest Four", url: "/game/arc-one/playtest-four" },
      { title: "Playtest Five", url: "/game/arc-one/playtest-five" },
    ],
  },
  {
    title: "Crucible",
    url: "/game/crucible",
  },
  {
    title: "Stats",
    url: "#",
    items: [{ title: "Arc One", url: "/game/arc-one/stats" }],
  },
  {
    title: "Surveys",
    url: "#",
    items: [{ title: "Arc One", url: "/game/arc-one/surveys" }],
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
      <Toaster />
      <CommandMenu />
      <AppSidebar data={navigationData}>
        <Link href="/game/arc-one/play">
          <Button variant="secondary" className="w-full text-lg py-6">
            Play
          </Button>
        </Link>
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
