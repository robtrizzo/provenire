"use client";
import * as React from "react";
import { usePathname } from "next/navigation";

import AuthButton from "@/components/ui/AuthButton.client";
import { useSession } from "next-auth/react";

import { ModeToggle } from "@/components/ui/mode-toggle";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";
import { ShieldUser } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Introduction",
      url: "/game",
    },
    {
      title: "Setting",
      url: "#",
      items: [
        {
          title: "Era 3",
          url: "/game/setting",
        },
        {
          title: "Culture",
          url: "/game/setting/culture",
        },
        {
          title: "The Steel Trap",
          url: "/game/setting/steel-trap",
        },
        {
          title: "Strange Forces",
          url: "/game/setting/strange-forces",
        },
      ],
    },
    {
      title: "Rules",
      url: "#",
      items: [
        {
          title: "Core System",
          url: "/game/core-system",
        },
        {
          title: "Actions, Bonds, & Rolls",
          url: "/game/actions-and-rolls",
        },
        {
          title: "Prelude",
          url: "/game/prelude",
        },
        {
          title: "Mission",
          url: "/game/mission",
        },
        {
          title: "Churn",
          url: "/game/the-churn",
        },
        {
          title: "Appendix",
          url: "/game/appendix",
        },
      ],
    },
    {
      title: "Character Creation",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/game/character-creation",
        },
        {
          title: "Heritages",
          url: "/game/heritages",
        },
        {
          title: "Backgrounds",
          url: "/game/backgrounds",
        },
        {
          title: "Skillsets",
          url: "/game/skillsets",
        },
        {
          title: "Archetypes",
          url: "/game/archetypes",
        },
        {
          title: "Fighting Styles",
          url: "/game/fighting-styles",
        },
      ],
    },
    {
      title: "Sources of Power",
      url: "/game/sources-of-power",
      items: [
        { title: "Aldams", url: "/game/sources-of-power/aldams" },
        {
          title: "Transformations",
          url: "/game/sources-of-power/transformations",
        },
        { title: "Donums", url: "/game/sources-of-power/donums" },
        { title: "Curses", url: "/game/sources-of-power/curses" },
      ],
    },
    {
      title: "Playtests",
      url: "#",
      items: [
        { title: "Playtest One", url: "/game/playtest-one" },
        { title: "Playtest Two", url: "/game/playtest-two" },
        { title: "Playtest Three", url: "/game/playtest-three" },
        { title: "Playtest Four", url: "/game/playtest-four" },
        { title: "Playtest Five", url: "/game/playtest-five" },
      ],
    },
    {
      title: "Crucible",
      url: "/game/crucible",
    },
    {
      title: "Blog",
      url: "/game/blog",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const session = useSession();
  const isAdmin = session?.data?.user.role === "admin";
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader className="relative">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex justify-center w-full">
              <AuthButton />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
        {isAdmin && (
          <Link href="/admin" className="absolute top-2 right-2">
            <ShieldUser />
          </Link>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-3">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.url === "#" ? (
                  <span className="ml-2">{item.title}</span>
                ) : (
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <Link href={item.url}>
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                )}
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={item.url === pathname}
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/game/play">
                <Button variant="secondary" className="w-full text-lg py-6">
                  Play
                </Button>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="relative flex justify-end">
                <p className="absolute top-2 left-2 text-sm text-muted-foreground">
                  Toggle sidebar with{" "}
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>B
                  </kbd>
                </p>
                <ModeToggle />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
