"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Filter, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { useCharacterFilters } from "@/providers/character-filters-provider";
import { CharacterFilter } from "@/types/ui";
import Link from "next/link";

export default function FilterCharacters() {
  const [open, setOpen] = useState(false);
  const { filters } = useCharacterFilters();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button>
          <Filter /> Filter Characters
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <Separator />
          {filters.map((f, i) => (
            <ToggleFilterButton
              key={`filter-button-${i}-${f.name}`}
              filter={f}
            />
          ))}
          <Separator />
          <Link href="/admin/characters">
            <span className="text-red-500 underline font-bold text-xs flex">
              manage filters here <LinkIcon className="h-4" />
            </span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ToggleFilterButton({ filter }: { filter: CharacterFilter }) {
  const { filters, updateFilters } = useCharacterFilters();

  const handleToggleFilter = () => {
    const newFilters = filters.map((f) => {
      if (f.name === filter.name) {
        return { ...f, enabled: !f.enabled };
      }
      return f;
    });
    updateFilters(newFilters);
  };

  return (
    <Button
      variant={filter.enabled ? "default" : "ghost"}
      onClick={() => {
        handleToggleFilter();
      }}
    >
      {filter.name}
    </Button>
  );
}
