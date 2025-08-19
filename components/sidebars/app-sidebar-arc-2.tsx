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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldUser } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const data = {
  navMain: [
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
          title: "Actions",
          url: "/game/arc-two/character-options/actions",
        },
        {
          title: "Advancement",
          url: "/game/arc-two/character-options/advancement",
        },
      ],
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
