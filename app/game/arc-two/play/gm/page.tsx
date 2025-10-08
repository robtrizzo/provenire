"use client";
import CharacterFiltersProvider from "@/providers/character-filters-provider";
import DiceSheet from "@/components/character-sheet/dice-history/dice-sheet";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import { useRoll } from "@/contexts/arc2RollContext";
import FilterCharacters from "@/components/gm/filter-characters";
import Characters from "@/components/gm/characters";
import { useQuery } from "@tanstack/react-query";
import { Character as CharacterType, CharacterV2 } from "@/types/game";
import Character from "@/components/gm/chraracter";

export default function Page() {
  const {
    rolls,
    currentDiceFilter,
    handleCurrentDiceFilterChange,
    fetchNextPage,
    refetchRolls,
    hasNextPage,
    rollsArePending,
  } = useRoll();

  const { data, isPending } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await fetch("/api/characters?v=2", {
        cache: "no-cache",
      });
      const data = await response.json();
      return data.characters;
    },
  });

  return (
    <>
      <div className="flex justify-between">
        <Breadcrumbs />
        <div className="flex gap-2 mt-5">
          <DiceSheet
            rolls={rolls}
            currentDiceFilter={currentDiceFilter}
            handleCurrentDiceFilterChange={handleCurrentDiceFilterChange}
            fetchNextPage={fetchNextPage}
            refetchRolls={refetchRolls}
            hasNextPage={hasNextPage}
            rollsArePending={rollsArePending}
          />
        </div>
      </div>
      <TypographyH1>The Crew</TypographyH1>
      <CharacterFiltersProvider>
        <FilterCharacters />
        {!isPending && (
          <Characters characters={data}>
            {(character: CharacterType) => {
              const c = character as unknown as CharacterV2;
              return (
                <Character character={character}>
                  <Character.Baggage character={c} />
                  <Character.StressV2 character={c} />
                  <Character.HarmV2 character={c} />
                </Character>
              );
            }}
          </Characters>
        )}
      </CharacterFiltersProvider>
    </>
  );
}
