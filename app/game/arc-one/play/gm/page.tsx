import Breadcrumbs from "@/components/ui/breadcrumbs";
import DiceSheet from "@/app/game/arc-one/play/(components)/dice-history/sheet";
import FilterCharacters from "@/components/gm/filter-characters";
import CharacterFiltersProvider from "@/providers/character-filters-provider";

export default function Page() {
  return (
    <>
      <div className="flex justify-between">
        <Breadcrumbs />
        <div className="flex gap-2 mt-5">
          <DiceSheet />
        </div>
      </div>
      <CharacterFiltersProvider>
        <FilterCharacters />
        {/* <Characters /> */}
      </CharacterFiltersProvider>
    </>
  );
}
