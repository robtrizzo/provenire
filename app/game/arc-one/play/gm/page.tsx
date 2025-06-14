import Breadcrumbs from "@/components/ui/breadcrumbs";
import DiceSheet from "@/app/game/arc-one/play/(components)/dice-history/sheet";
import FilterCharacters from "./(components)/filter-characters";
import CharacterFiltersProvider from "@/app/admin/characters/(providers)/character-filters-provider";
import Characters from "./(components)/characters";

export default function Page() {
  return (
    <>
      <div className="flex justify-between">
        <Breadcrumbs
          crumbs={[
            { name: "Play", href: "/game/arc-one/play" },
            { name: "GM", href: "#" },
          ]}
        />
        <div className="flex gap-2 mt-5">
          <DiceSheet />
        </div>
      </div>
      <CharacterFiltersProvider>
        <FilterCharacters />
        <Characters />
      </CharacterFiltersProvider>
    </>
  );
}
