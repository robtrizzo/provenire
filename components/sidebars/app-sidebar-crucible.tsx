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
import Link from "next/link";
import { ShieldUser } from "lucide-react";

const data = {
  navMain: [
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
