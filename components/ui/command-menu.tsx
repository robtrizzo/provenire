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
import backgrounds from '@/public/backgrounds.json';
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
        <CommandGroup heading="Character Sheet">
          <CommandItem
            onSelect={() => {
              router.push('/game/fitd-char-sheet#mission');
              setOpen(false);
            }}
          >
            Character Sheet (Mission)
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/fitd-char-sheet#profile');
              setOpen(false);
            }}
          >
            Character Sheet (Profile)
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/fitd-char-sheet#churn');
              setOpen(false);
            }}
          >
            Character Sheet (Churn)
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Backgrounds">
          {backgrounds.map((background) => (
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
        <CommandSeparator />
        <CommandGroup heading="Rules (Pages)">
          <CommandItem
            onSelect={() => {
              router.push('/game');
              setOpen(false);
            }}
          >
            Introduction
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/setting');
              setOpen(false);
            }}
          >
            Setting
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/core-system');
              setOpen(false);
            }}
          >
            Core System
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/actions-and-attributes');
              setOpen(false);
            }}
          >
            Actions & Attributes
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/cycle-of-play');
              setOpen(false);
            }}
          >
            The Cycle of Play
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/prelude');
              setOpen(false);
            }}
          >
            Prelude
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/mission');
              setOpen(false);
            }}
          >
            The Mission
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn');
              setOpen(false);
            }}
          >
            The Churn
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/character-creation');
              setOpen(false);
            }}
          >
            Character Creation
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Rules (Terms)">
          <CommandItem
            onSelect={() => {
              router.push('/game/core-system#bonus-dice');
              setOpen(false);
            }}
          >
            Bonus Dice
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/core-system#resistance-roll');
              setOpen(false);
            }}
          >
            Resistance Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/prelude#gather-information');
              setOpen(false);
            }}
          >
            Gather Information
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/prelude#engagement-roll');
              setOpen(false);
            }}
          >
            Engagement Roll
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/prelude#approach');
              setOpen(false);
            }}
          >
            Approach
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/prelude#loadout');
              setOpen(false);
            }}
          >
            Loadout
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/mission#flashbacks');
              setOpen(false);
            }}
          >
            Flashbacks
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/mission#combat');
              setOpen(false);
            }}
          >
            Combat
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/mission#stress');
              setOpen(false);
            }}
          >
            Stress
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/mission#conditions');
              setOpen(false);
            }}
          >
            Conditions
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/mission#harm');
              setOpen(false);
            }}
          >
            Harm
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/mission#armor');
              setOpen(false);
            }}
          >
            Armor
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#payoff');
              setOpen(false);
            }}
          >
            Payoff
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#rep');
              setOpen(false);
            }}
          >
            Rep
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#mission-xp');
              setOpen(false);
            }}
          >
            Mission XP
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#heat');
              setOpen(false);
            }}
          >
            Heat
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#crackdowns');
              setOpen(false);
            }}
          >
            Crackdowns
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#subsistence');
              setOpen(false);
            }}
          >
            Subsistence
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#agendas');
              setOpen(false);
            }}
          >
            Agendas
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#entanglements');
              setOpen(false);
            }}
          >
            Entanglements
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#downtime');
              setOpen(false);
            }}
          >
            Downtime
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/the-churn#project-rolls');
              setOpen(false);
            }}
          >
            Project Rolls
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Setting">
          <CommandItem
            onSelect={() => {
              router.push('/game/setting#kingwulf');
              setOpen(false);
            }}
          >
            Kingwulf
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/setting#liberty-city');
              setOpen(false);
            }}
          >
            Liberty City
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/setting#the-steel-trap');
              setOpen(false);
            }}
          >
            The Steel Trap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/game/setting#fabrication');
              setOpen(false);
            }}
          >
            Fabrication
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
