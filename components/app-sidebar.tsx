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

type NavItem = {
  title: string;
  url: string;
  items?: { title: string; url: string }[];
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  data?: NavItem[];
  children?: React.ReactNode;
};

export function AppSidebar({ data, children, ...props }: AppSidebarProps) {
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
            {data?.map((item) => (
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
            <SidebarMenuItem>{children}</SidebarMenuItem>
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
