"use client";
import { useCharacterFilters } from "@/app/admin/characters/(providers)/character-filters-provider";
import type { Character as CharacterType } from "@/types/game";
import { useQuery } from "@tanstack/react-query";
import Character from "./chraracter";

export default function Characters() {
  const { filters } = useCharacterFilters();
  const enabledFilters = filters.filter((f) => f.enabled);

  function getEnabledCharacters(allCharacters: CharacterType[]) {
    const enabledCharacters = new Set<string>();
    for (const filter of enabledFilters) {
      for (const character of filter.characters) {
        enabledCharacters.add(character);
      }
    }
    return allCharacters.filter((c) => enabledCharacters.has(c.name));
  }

  const { data, isPending } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await fetch("/api/characters/", { cache: "no-cache" });
      const data = await response.json();
      return data.characters;
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (data) {
    let charactersToDisplay = data;
    if (enabledFilters.length > 0) {
      charactersToDisplay = getEnabledCharacters(data);
    }
    return <DisplayCharacters characters={charactersToDisplay} />;
  }
}

function DisplayCharacters({ characters }: { characters: CharacterType[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {characters.map((c, i) => (
        <Character key={c.name + i} character={c} />
      ))}
    </div>
  );
}
