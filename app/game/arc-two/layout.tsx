import CommandMenu from "@/components/command-menu";
import { Toaster } from "@/components/ui/toaster";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";

const navigationData = [
  {
    title: "Introduction",
    url: "/game/arc-two/introduction",
  },
  {
    title: "Setting",
    url: "#",
    items: [
      {
        title: "Feasting",
        url: "/game/arc-two/setting/feasting",
      },
      {
        title: "Culture",
        url: "/game/arc-two/setting/culture",
      },
      {
        title: "Power Players",
        url: "/game/arc-two/setting/power-players",
      },
      {
        title: "Root Org Chart",
        url: "/game/arc-two/setting/org-chart",
      },
    ],
  },
  {
    title: "Rules",
    url: "#",
    items: [
      {
        title: "Actions and Rolls",
        url: "/game/arc-two/rules/actions-and-rolls",
      },
    ],
  },
  {
    title: "Cycle of Play",
    url: "#",
    items: [
      {
        title: "Prelude",
        url: "/game/arc-two/cycle-of-play/prelude",
      },
      {
        title: "Mission",
        url: "/game/arc-two/cycle-of-play/mission",
      },
      {
        title: "Churn",
        url: "/game/arc-two/cycle-of-play/churn",
      },
    ],
  },
  {
    title: "Character Options",
    url: "#",
    items: [
      {
        title: "Character Creation",
        url: "/game/arc-two/character-options/character-creation",
      },
      {
        title: "Backgrounds",
        url: "/game/arc-two/character-options/backgrounds",
      },
      {
        title: "Archetypes",
        url: "/game/arc-two/character-options/archetypes",
      },
      {
        title: "Operatives",
        url: "/game/arc-two/character-options/operatives",
      },
      {
        title: "Fighting Styles",
        url: "/game/arc-two/character-options/fighting-styles",
      },
      {
        title: "Cyberware",
        url: "/game/arc-two/character-options/cyberware",
      },
      {
        title: "Sleeves",
        url: "/game/arc-two/character-options/sleeves",
      },
      {
        title: "Transformations",
        url: "/game/arc-two/character-options/transformations",
      },
      {
        title: "Actions",
        url: "/game/arc-two/character-options/actions",
      },
      {
        title: "Advancement",
        url: "/game/arc-two/character-options/advancement",
      },
    ],
  },
  {
    title: "Surveys",
    url: "#",
    items: [
      {
        title: "Arc Two State of the Game",
        url: "/game/arc-two/surveys/state-of-the-game",
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
      <Toaster />
      <CommandMenu />
      <AppSidebar data={navigationData}>
        <Link href="/game/arc-two/play">
          <Button
            variant="secondary"
            className="w-full text-lg py-6 relative bg-black group text-white hover:font-white hover:bg-black"
          >
            Play
            <div className="invisible group-hover:visible">
              <BorderBeam duration={12} size={12} />
              <BorderBeam duration={12} delay={4} size={12} />
              <BorderBeam duration={12} delay={8} size={12} />
            </div>
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
