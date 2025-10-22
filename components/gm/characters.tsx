"use client";
import { useCharacterFilters } from "@/providers/character-filters-provider";
import type { Character as CharacterType } from "@/types/game";

export default function Characters({
  characters,
  children,
}: {
  characters: CharacterType[];
  children: (character: CharacterType) => React.ReactNode;
}) {
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

  if (characters) {
    let charactersToDisplay = characters;
    if (enabledFilters.length > 0) {
      charactersToDisplay = getEnabledCharacters(characters);
    }
    return (
      <div className="mt-4 flex flex-col gap-4">
        {charactersToDisplay.map((character: CharacterType, index: number) => (
          <div key={character.name + index}>{children(character)}</div>
        ))}
      </div>
    );
  }
}
