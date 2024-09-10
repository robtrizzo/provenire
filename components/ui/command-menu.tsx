'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '@/components/ui/command';
import backcgrounds from '@/public/backgrounds.json';
import skillsets from '@/public/skillsets.json';
import archetypes from '@/public/archetypes.json';

export default function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandItem
          onSelect={() => {
            router.push('/game/fitd-char-sheet');
            setOpen(false);
          }}
        >
          Character Sheet
        </CommandItem>
        <CommandGroup heading="Backgrounds">
          {backcgrounds.map((background) => (
            <CommandItem
              key={background.name}
              onSelect={() => {
                router.push(`/game/backgrounds#${background.name}`);
                setOpen(false);
              }}
            >
              {background.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Skillsets">
          {skillsets.map((skillset) => (
            <CommandItem
              key={skillset.name}
              onSelect={() => {
                router.push(`/game/skillsets#${skillset.name}`);
                setOpen(false);
              }}
            >
              {skillset.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Archetypes">
          {archetypes.map((archetype) => (
            <CommandItem
              key={archetype.name}
              onSelect={() => {
                router.push(`/game/archetypes#${archetype.name}`);
                setOpen(false);
              }}
            >
              {archetype.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Rules">
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn');
              setOpen(false);
            }}
          >
            The Churn
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Commands">
          <CommandItem
            onSelect={() => {
              setTheme('light');
              setOpen(false);
            }}
            className="flex items-center space-x-4"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" />
            <span>Light Mode</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setTheme('dark');
              setOpen(false);
            }}
            className="flex items-center space-x-4"
          >
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" />
            <span>Dark Mode</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
