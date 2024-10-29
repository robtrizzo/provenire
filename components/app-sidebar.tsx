'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';

import AuthButton from '@/components/ui/AuthButton.client';

import { ModeToggle } from '@/components/ui/mode-toggle';

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
} from '@/components/ui/sidebar';

const data = {
  navMain: [
    {
      title: 'Introduction',
      url: '/game',
    },
    {
      title: 'Setting',
      url: '#',
      items: [
        {
          title: 'Era 3',
          url: '/game/setting',
        },
      ],
    },
    {
      title: 'Rules',
      url: '#',
      items: [
        {
          title: 'Core System',
          url: '/game/core-system',
        },
        {
          title: 'Actions & Attributes',
          url: '/game/actions-and-attributes',
        },
        {
          title: 'The Cycle of Play',
          url: '/game/cycle-of-play',
        },
        {
          title: 'Prelude',
          url: '/game/prelude',
        },
        {
          title: 'Mission',
          url: '/game/mission',
        },
        {
          title: 'Churn',
          url: '/game/the-churn',
        },
      ],
    },
    {
      title: 'Character Creation',
      url: '#',
      items: [
        {
          title: 'Overview',
          url: '/game/character-creation',
        },
        {
          title: 'Heritages',
          url: '/game/heritages',
        },
        {
          title: 'Backgrounds',
          url: '/game/backgrounds',
        },
        {
          title: 'Skillsets',
          url: '/game/skillsets',
        },
        {
          title: 'Archetypes',
          url: '/game/archetypes',
        },
        {
          title: 'Character Sheet',
          url: '/game/character-sheet',
        },
      ],
    },
    {
      title: 'Playtests',
      url: '#',
      items: [
        { title: 'Playtest One', url: '/game/playtest-one' },
        { title: 'Playtest Two', url: '/game/playtest-two' },
        { title: 'Playtest Three', url: '/game/playtest-three' },
      ],
    },
    {
      title: 'OSG: Twisted Scion',
      url: '/game/osg',
    },
    {
      title: 'Blog',
      url: '/game/blog',
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex justify-center w-full">
              <AuthButton />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-3">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.url === '#' ? (
                  <span className="ml-2">{item.title}</span>
                ) : (
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <a href={item.url} className="font-medium">
                      {item.title}
                    </a>
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
                          <a href={item.url}>{item.title}</a>
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
              <div className="flex justify-end">
                <ModeToggle />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
