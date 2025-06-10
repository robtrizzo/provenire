"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import heritages from "@/public/heritages.json";
import backgrounds from "@/public/backgrounds.json";
import skillsets from "@/public/skillsets.json";
import archetypes from "@/public/archetypes.json";

export default function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Play">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/play#character");
              setOpen(false);
            }}
          >
            Character Sheet
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/play#crew");
              setOpen(false);
            }}
          >
            Crew Sheet
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Heritages">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/heritages");
              setOpen(false);
            }}
          >
            Heritages
          </CommandItem>
          {heritages.map((heritage) => (
            <CommandItem
              key={heritage.name}
              onSelect={() => {
                router.push(`/game/arc-one/heritages#${heritage.name}`);
                setOpen(false);
              }}
            >
              {heritage.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Backgrounds">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/backgrounds");
              setOpen(false);
            }}
          >
            Backgrounds
          </CommandItem>
          {backgrounds.map((background) => (
            <CommandItem
              key={background.name}
              onSelect={() => {
                router.push(`/game/arc-one/backgrounds#${background.name}`);
                setOpen(false);
              }}
            >
              {background.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Skillsets">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/skillsets");
              setOpen(false);
            }}
          >
            Skillsets
          </CommandItem>
          {skillsets.map((skillset) => (
            <CommandItem
              key={skillset.name}
              onSelect={() => {
                router.push(`/game/arc-one/skillsets#${skillset.name}`);
                setOpen(false);
              }}
            >
              {skillset.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Archetypes">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/archetypes");
              setOpen(false);
            }}
          >
            Archetypes
          </CommandItem>
          {archetypes.map((archetype) => (
            <CommandItem
              key={archetype.name}
              onSelect={() => {
                router.push(`/game/arc-one/archetypes#${archetype.name}`);
                setOpen(false);
              }}
            >
              {archetype.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Fighting Styles">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/fighting-styles#crowdbreaking");
              setOpen(false);
            }}
          >
            Crowdbreaking
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/fighting-styles#pipedancing");
              setOpen(false);
            }}
          >
            Pipedancing
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/fighting-styles#backsnap");
              setOpen(false);
            }}
          >
            Backsnap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/fighting-styles#bleedout");
              setOpen(false);
            }}
          >
            Bleedout
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/fighting-styles#throatgore");
              setOpen(false);
            }}
          >
            Throatgore
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Aldam">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/sources-of-power/aldams#gredoran");
              setOpen(false);
            }}
          >
            Gredoran Aldam
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Rules (Pages)">
          <CommandItem
            onSelect={() => {
              router.push("/game");
              setOpen(false);
            }}
          >
            Introduction
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting");
              setOpen(false);
            }}
          >
            Setting
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting/culture");
              setOpen(false);
            }}
          >
            Culture
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting/steel-trap");
              setOpen(false);
            }}
          >
            The Steel Trap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting/strange-forces");
              setOpen(false);
            }}
          >
            Strange Forces of the Steel Trap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/core-system");
              setOpen(false);
            }}
          >
            Core System
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/actions-and-rolls");
              setOpen(false);
            }}
          >
            Actions, Bonds, & Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/prelude");
              setOpen(false);
            }}
          >
            Prelude
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/mission");
              setOpen(false);
            }}
          >
            The Mission
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn");
              setOpen(false);
            }}
          >
            The Churn
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/appendix");
              setOpen(false);
            }}
          >
            Appendix
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/character-creation");
              setOpen(false);
            }}
          >
            Character Creation
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/fighting-styles");
              setOpen(false);
            }}
          >
            Fighting Styles
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Sources of Power">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/sources-of-power");
              setOpen(false);
            }}
          >
            Sources of Power
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/sources-of-power/aldams");
              setOpen(false);
            }}
          >
            Aldams
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/sources-of-power/transformations");
              setOpen(false);
            }}
          >
            Transformations
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/sources-of-power/donums");
              setOpen(false);
            }}
          >
            Donums
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/sources-of-power/curses");
              setOpen(false);
            }}
          >
            Curses
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Rules (Terms)">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/core-system#bonus-dice");
              setOpen(false);
            }}
          >
            Bonus Dice
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/core-system#resistance-roll");
              setOpen(false);
            }}
          >
            Resistance Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push(
                "/game/arc-one/core-system#experience-and-advancement"
              );
              setOpen(false);
            }}
          >
            Experience & Advancement
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/actions-and-rolls#bonds");
              setOpen(false);
            }}
          >
            Bonds
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/actions-and-rolls#action-roll");
              setOpen(false);
            }}
          >
            Action Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/actions-and-rolls#resistance-roll");
              setOpen(false);
            }}
          >
            Resistance Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/actions-and-rolls#project-rolls");
              setOpen(false);
            }}
          >
            Project Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/prelude#downtime");
              setOpen(false);
            }}
          >
            Downtime
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/prelude#engagement-roll");
              setOpen(false);
            }}
          >
            Engagement Roll
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/prelude#approach");
              setOpen(false);
            }}
          >
            Approach
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/prelude#loadout");
              setOpen(false);
            }}
          >
            Loadout
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/mission#flashbacks");
              setOpen(false);
            }}
          >
            Flashbacks
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/mission#combat");
              setOpen(false);
            }}
          >
            Combat
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/mission#stress");
              setOpen(false);
            }}
          >
            Stress
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/mission#conditions");
              setOpen(false);
            }}
          >
            Conditions
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/mission#harm");
              setOpen(false);
            }}
          >
            Harm
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/mission#armor");
              setOpen(false);
            }}
          >
            Armor
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn#aftermath");
              setOpen(false);
            }}
          >
            Aftermath
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn#rep");
              setOpen(false);
            }}
          >
            Rep
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn#mission-xp");
              setOpen(false);
            }}
          >
            Mission XP
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn#heat");
              setOpen(false);
            }}
          >
            Heat
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn#crackdowns");
              setOpen(false);
            }}
          >
            Crackdowns
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn#subsistence");
              setOpen(false);
            }}
          >
            Subsistence
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn#agendas");
              setOpen(false);
            }}
          >
            Agendas
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/the-churn#entanglements");
              setOpen(false);
            }}
          >
            Entanglements
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting/strange-forces#kings-spell");
              setOpen(false);
            }}
          >
            The King&apos;s Spell
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/fighting-styles#strain");
              setOpen(false);
            }}
          >
            Strain
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/skillsets#schematics");
              setOpen(false);
            }}
          >
            Equipment & Schematics
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/appendix#equipment-traits");
              setOpen(false);
            }}
          >
            Equipment Traits
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/skillsets#formulae");
              setOpen(false);
            }}
          >
            Alchemical Formulae
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/appendix#alchemical-traits");
              setOpen(false);
            }}
          >
            Alchemical Traits
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/appendix#gang-traits");
              setOpen(false);
            }}
          >
            Gang Traits
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Setting">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting#kingwulf");
              setOpen(false);
            }}
          >
            Kingwulf
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting#liberty-city");
              setOpen(false);
            }}
          >
            Liberty City
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting#the-steel-trap");
              setOpen(false);
            }}
          >
            The Steel Trap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/setting#fabrication");
              setOpen(false);
            }}
          >
            Fabrication
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Character Creation">
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/character-creation#heritage");
              setOpen(false);
            }}
          >
            Heritage
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/character-creation#background");
              setOpen(false);
            }}
          >
            Background
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/character-creation#skillset");
              setOpen(false);
            }}
          >
            Skillset
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/arc-one/character-creation#archetype");
              setOpen(false);
            }}
          >
            Archetype
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Commands">
          <CommandItem
            onSelect={() => {
              setTheme("light");
              setOpen(false);
            }}
            className="flex items-center space-x-4"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" />
            <span>Light Mode</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setTheme("dark");
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
