"use client";
import WealthTrackerSkeleton from "@/components/character-sheet/skeletons/wealth-trackter";
import WealthTracker from "@/components/character-sheet/wealth-tracker";
import { Separator } from "@/components/ui/separator";
import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";

export default function WealthSection() {
  const {
    wealthP,
    pelts,
    wealthF,
    favors,
    setWealthP,
    setPelts,
    setWealthF,
    setFavors,
    setChanges,
    isFetching,
  } = useCharacterSheet();
  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Wealth
      </TypographyH2>
      <div className="p-2">
        {isFetching ? (
          <WealthTrackerSkeleton />
        ) : (
          <div className="flex flex-col gap-1">
            <WealthTracker
              title="¤P"
              initialWealth={wealthP}
              currency={pelts}
              maxWealth={4}
              maxCurrency={8}
              onChangeCurrency={(n) => {
                setPelts(n);
              }}
              onChangeWealth={(n) => {
                setWealthP(n);
              }}
              onChange={() => setChanges(true)}
            />
            <Separator className="my-2" />
            <WealthTracker
              title="¤F"
              initialWealth={wealthF}
              currency={favors}
              maxWealth={4}
              maxCurrency={4}
              onChangeCurrency={(n) => {
                setFavors(n);
              }}
              onChangeWealth={(n) => {
                setWealthF(n);
              }}
              onChange={() => setChanges(true)}
            />
            <Separator className="my-2" />
          </div>
        )}
      </div>
    </>
  );
}
