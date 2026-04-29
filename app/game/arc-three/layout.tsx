import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import { ReactNode } from "react";
import aldams from "@/public/arc3/aldams.json";
import archetypes from "@/public/arc3/archetypes.json";
import donums from "@/public/arc3/donums.json";
import skillsets from "@/public/arc3/skillsets.json";
import fightingStyles from "@/public/arc3/fighting_styles.json";
import integrations from "@/public/arc3/integrations.json";
import remembrances from "@/public/arc3/remembrances.json";
import transformations from "@/public/arc3/transformations.json";
import { slugify } from "@/lib/utils";

const navigationData = [
  {
    title: "Introduction",
    url: "/game/arc-three",
  },
  // {
  //   title: "Setting",
  //   url: "#",
  // },
  {
    title: "Rules",
    url: "#",
    items: [
      {
        title: "Downtime",
        url: "/game/arc-three/rules/downtime",
      },
    ],
  },
  // {
  //   title: "Cycle of Play",
  //   url: "#",
  // },
  {
    title: "Character Options",
    url: "#",
    items: [
      {
        title: "Archetypes",
        url: "/game/arc-three/character-options/archetypes",
        items: archetypes.map((a) => ({
          title: a.name,
          url: `/game/arc-three/character-options/archetypes#${a.name}`,
        })),
      },
      {
        title: "Aldams",
        url: "/game/arc-three/character-options/aldams",
        items: aldams.map((a) => ({
          title: a.name,
          url: `/game/arc-three/character-options/aldams/${slugify(a.name)}`,
          wip: a.wip,
        })),
      },
      {
        title: "Donums",
        url: "/game/arc-three/character-options/donums",
        items: donums.map((d) => ({
          title: d.name,
          url: `/game/arc-three/character-options/donums/${slugify(d.name)}`,
          wip: d.wip,
        })),
      },
      {
        title: "Fighting Styles",
        url: "/game/arc-three/character-options/fighting-styles",
        items: fightingStyles.map((f) => ({
          title: f.name,
          url: `/game/arc-three/character-options/fighting-styles#${f.name}`,
          wip: f.wip,
        })),
      },
      {
        title: "Integrations",
        url: "/game/arc-three/character-options/integrations",
        items: integrations.map((i) => ({
          title: i.name,
          url: `/game/arc-three/character-options/integrations#${i.name}`,
        })),
      },
      {
        title: "Remembrances",
        url: "/game/arc-three/character-options/remembrances",
        items: remembrances.map((r) => ({
          title: r.name,
          url: `/game/arc-three/character-options/remembrances/${slugify(r.name)}`,
        })),
      },
      {
        title: "Roles",
        url: "/game/arc-three/character-options/roles",
      },
      {
        title: "Skillsets",
        url: "/game/arc-three/character-options/skillsets",
        items: skillsets.map((s) => ({
          title: s.name,
          url: `/game/arc-three/character-options/skillsets#${s.name}`,
        })),
      },
      {
        title: "Transformations",
        url: "/game/arc-three/character-options/transformations",
        items: transformations.map((t) => ({
          title: t.name,
          url: `/game/arc-three/character-options/transformations/${slugify(t.name)}`,
          wip: t.wip,
        })),
      },
    ],
  },
  {
    title: "Neighborhoods",
    url: "#",
    items: [
      {
        title: "Lofts",
        url: "/game/arc-three/neighborhoods/lofts",
      },
      {
        title: "The Bends",
        url: "/game/arc-three/neighborhoods/the-bends",
      },
      {
        title: "Fab Floor",
        url: "/game/arc-three/neighborhoods/fab-floor",
      },
      {
        title: "Stairwell",
        url: "/game/arc-three/neighborhoods/stairwell",
      },
    ],
  },
  {
    title: "Demo",
    url: "#",
    items: [
      {
        title: "Test Dice",
        url: "/game/arc-three/test-dice",
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
        <Link href="/game/arc-three/play">
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
