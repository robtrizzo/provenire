import { Character } from "@/types/game";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import CharacterGroups from "./character-groups";
import { CharactersTable } from "./characters-table";
import CharacterFiltersProvider from "../(providers)/character-filters-provider";
export default function ManageCharacters({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <CharacterFiltersProvider>
      <TypographyH1>Manage Characters</TypographyH1>
      <TypographyH2>Groups</TypographyH2>
      <CharacterGroups />
      <TypographyH2>Characters</TypographyH2>
      <CharactersTable characters={characters} />
    </CharacterFiltersProvider>
  );
}
