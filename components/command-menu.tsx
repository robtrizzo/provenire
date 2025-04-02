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
              router.push("/game/play#character");
              setOpen(false);
            }}
          >
            Character Sheet
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/play#crew");
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
              router.push("/game/heritages");
              setOpen(false);
            }}
          >
            Heritages
          </CommandItem>
          {heritages.map((heritage) => (
            <CommandItem
              key={heritage.name}
              onSelect={() => {
                router.push(`/game/heritages#${heritage.name}`);
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
              router.push("/game/backgrounds");
              setOpen(false);
            }}
          >
            Backgrounds
          </CommandItem>
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
          <CommandItem
            onSelect={() => {
              router.push("/game/skillsets");
              setOpen(false);
            }}
          >
            Skillsets
          </CommandItem>
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
          <CommandItem
            onSelect={() => {
              router.push("/game/archetypes");
              setOpen(false);
            }}
          >
            Archetypes
          </CommandItem>
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
        <CommandGroup heading="Fighting Styles">
          <CommandItem
            onSelect={() => {
              router.push("/game/fighting-styles#crowdbreaking");
              setOpen(false);
            }}
          >
            Crowdbreaking
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/fighting-styles#pipedancing");
              setOpen(false);
            }}
          >
            Pipedancing
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/fighting-styles#backsnap");
              setOpen(false);
            }}
          >
            Backsnap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/fighting-styles#bleedout");
              setOpen(false);
            }}
          >
            Bleedout
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/fighting-styles#throatgore");
              setOpen(false);
            }}
          >
            Throatgore
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Aldam">
          <CommandItem
            onSelect={() => {
              router.push("/game/aldam#gredoran");
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
              router.push("/game/setting");
              setOpen(false);
            }}
          >
            Setting
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/setting/culture");
              setOpen(false);
            }}
          >
            Culture
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/setting/steel-trap");
              setOpen(false);
            }}
          >
            The Steel Trap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/setting/strange-forces");
              setOpen(false);
            }}
          >
            Strange Forces of the Steel Trap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/core-system");
              setOpen(false);
            }}
          >
            Core System
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/actions-and-rolls");
              setOpen(false);
            }}
          >
            Actions, Bonds, & Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/prelude");
              setOpen(false);
            }}
          >
            Prelude
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/mission");
              setOpen(false);
            }}
          >
            The Mission
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn");
              setOpen(false);
            }}
          >
            The Churn
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/appendix");
              setOpen(false);
            }}
          >
            Appendix
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/character-creation");
              setOpen(false);
            }}
          >
            Character Creation
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/fighting-styles");
              setOpen(false);
            }}
          >
            Fighting Styles
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/aldam");
              setOpen(false);
            }}
          >
            Aldam
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Rules (Terms)">
          <CommandItem
            onSelect={() => {
              router.push("/game/core-system#bonus-dice");
              setOpen(false);
            }}
          >
            Bonus Dice
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/core-system#resistance-roll");
              setOpen(false);
            }}
          >
            Resistance Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/core-system#experience-and-advancement");
              setOpen(false);
            }}
          >
            Experience & Advancement
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/actions-and-rolls#bonds");
              setOpen(false);
            }}
          >
            Bonds
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/actions-and-rolls#action-roll");
              setOpen(false);
            }}
          >
            Action Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/actions-and-rolls#resistance-roll");
              setOpen(false);
            }}
          >
            Resistance Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/actions-and-rolls#project-rolls");
              setOpen(false);
            }}
          >
            Project Rolls
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/prelude#downtime");
              setOpen(false);
            }}
          >
            Downtime
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/prelude#engagement-roll");
              setOpen(false);
            }}
          >
            Engagement Roll
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/prelude#approach");
              setOpen(false);
            }}
          >
            Approach
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/prelude#loadout");
              setOpen(false);
            }}
          >
            Loadout
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/mission#flashbacks");
              setOpen(false);
            }}
          >
            Flashbacks
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/mission#combat");
              setOpen(false);
            }}
          >
            Combat
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/mission#stress");
              setOpen(false);
            }}
          >
            Stress
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/mission#conditions");
              setOpen(false);
            }}
          >
            Conditions
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/mission#harm");
              setOpen(false);
            }}
          >
            Harm
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/mission#armor");
              setOpen(false);
            }}
          >
            Armor
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn#aftermath");
              setOpen(false);
            }}
          >
            Aftermath
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn#rep");
              setOpen(false);
            }}
          >
            Rep
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn#mission-xp");
              setOpen(false);
            }}
          >
            Mission XP
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn#heat");
              setOpen(false);
            }}
          >
            Heat
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn#crackdowns");
              setOpen(false);
            }}
          >
            Crackdowns
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn#subsistence");
              setOpen(false);
            }}
          >
            Subsistence
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn#agendas");
              setOpen(false);
            }}
          >
            Agendas
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/the-churn#entanglements");
              setOpen(false);
            }}
          >
            Entanglements
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/setting/strange-forces#kings-spell");
              setOpen(false);
            }}
          >
            The King&apos;s Spell
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/fighting-styles#strain");
              setOpen(false);
            }}
          >
            Strain
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/skillsets#schematics");
              setOpen(false);
            }}
          >
            Equipment & Schematics
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/appendix#equipment-traits");
              setOpen(false);
            }}
          >
            Equipment Traits
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/skillsets#formulae");
              setOpen(false);
            }}
          >
            Alchemical Formulae
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/appendix#alchemical-traits");
              setOpen(false);
            }}
          >
            Alchemical Traits
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/appendix#gang-traits");
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
              router.push("/game/setting#kingwulf");
              setOpen(false);
            }}
          >
            Kingwulf
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/setting#liberty-city");
              setOpen(false);
            }}
          >
            Liberty City
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/setting#the-steel-trap");
              setOpen(false);
            }}
          >
            The Steel Trap
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/setting#fabrication");
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
              router.push("/game/character-creation#heritage");
              setOpen(false);
            }}
          >
            Heritage
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/character-creation#background");
              setOpen(false);
            }}
          >
            Background
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/character-creation#skillset");
              setOpen(false);
            }}
          >
            Skillset
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/game/character-creation#archetype");
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
