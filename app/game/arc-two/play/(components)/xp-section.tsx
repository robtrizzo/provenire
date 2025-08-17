"use client";
import { TypographyH2 } from "@/components/ui/typography";
import XPClocks from "@/components/character-sheet/xp-clocks";
import XPInfo from "@/app/game/arc-two/play/(components)/xp-info";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import XPClocksSkeleton from "@/components/character-sheet/skeletons/xp-clocks";
export default function XPSection() {
  const { xp, setXp, setChanges, isFetching } = useCharacterSheet();
  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Experience <XPInfo />
      </TypographyH2>
      {isFetching ? (
        <XPClocksSkeleton />
      ) : (
        <XPClocks
          initial={xp}
          setVal={(n) => {
            setXp(n);
            setChanges(true);
          }}
        />
      )}
    </>
  );
}
