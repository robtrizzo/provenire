"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash, X } from "lucide-react";
import { useRef } from "react";
import type { CharacterFilter } from "@/types/ui";
import { useCharacterFilters } from "../../../../providers/character-filters-provider";

export default function CharacterGroups() {
  const { filters, updateFilters } = useCharacterFilters();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newFilterName = formData.get("new-filter") as string;
      if (!newFilterName) {
        console.error("must provide filter name");
        return;
      }
      const newFilters = [
        ...filters,
        { name: newFilterName, characters: [], enabled: false },
      ];
      updateFilters(newFilters);
      formRef.current.reset();
    }
  };

  const handleRemoveFilter = (filterName: string) => {
    const newFilters = filters.filter((f) => f.name !== filterName);
    updateFilters(newFilters);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="mt-2 flex gap-2">
        <Input name="new-filter" placeholder="new filter" />
        <Button type="submit">
          <Plus /> Add Filter
        </Button>
      </form>
      <Separator className="my-2" />
      <div className="flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <CharacterFilter
            filter={f}
            handleRemove={handleRemoveFilter}
            key={f.name + i}
          />
        ))}
      </div>
    </>
  );
}

function CharacterFilter({
  filter,
  handleRemove,
}: {
  filter: CharacterFilter;
  handleRemove: (filterName: string) => void;
}) {
  const { filters, updateFilters } = useCharacterFilters();

  const handleRemoveCharacterFromFilter = (characterName: string) => {
    const newFilters = filters.map((f) => {
      if (f.name === filter.name) {
        return {
          ...f,
          characters: f.characters.filter((c) => c !== characterName),
        };
      }
      return f;
    });
    updateFilters(newFilters);
  };
  return (
    <Card>
      <CardHeader>{filter.name}</CardHeader>
      <CardContent>
        {filter.characters.map((c, i) => (
          <CharacterFilterEntry
            key={c + i}
            characterName={c}
            handleRemove={handleRemoveCharacterFromFilter}
          />
        ))}
      </CardContent>
      <CardFooter>
        <Button
          variant="destructive"
          onClick={() => {
            handleRemove(filter.name);
          }}
        >
          <Trash /> delete
        </Button>
      </CardFooter>
    </Card>
  );
}

function CharacterFilterEntry({
  characterName,
  handleRemove,
}: {
  characterName: string;
  handleRemove: (characterName: string) => void;
}) {
  return (
    <div className="min-w-48 flex items-center justify-between">
      <span>{characterName}</span>
      <Button
        onClick={() => {
          handleRemove(characterName);
        }}
        variant="ghost"
        size="icon"
      >
        <X className="text-red-400" />
      </Button>
    </div>
  );
}
