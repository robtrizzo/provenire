import { TypographyH2 } from "@/components/ui/typography";
import BaggageInfo from "./baggage-info";
import Clock from "@/components/clock";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { Skeleton } from "@/components/ui/skeleton";
import BaggageWidget from "./baggage-widget";

export default function BaggageSection() {
  const { memory, setMemory, unlockedBaggage, setChanges, isFetching } =
    useCharacterSheet();

  const unlockedBaggageEntries = unlockedBaggage.reduce(
    (acc, ulb) =>
      acc + ulb.unlocks.reduce((acc, ul) => (ul.unlocked ? acc + 1 : acc), 0),
    0
  );

  const maxMemory = unlockedBaggageEntries >= 4 ? 2 : 4;

  return (
    <div className="flex flex-col gap-2 mt-4">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Baggage <BaggageInfo />
      </TypographyH2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-cyber text-xs">memory</span>
          {isFetching ? (
            <MemorySkeleton />
          ) : (
            <Clock
              width={35}
              height={35}
              max={maxMemory}
              current={memory}
              setVal={(n) => {
                if (n > maxMemory) {
                  setMemory(0);
                } else {
                  setMemory(n);
                }
                setChanges(true);
              }}
            />
          )}
        </div>
        <BaggageWidget />
      </div>
    </div>
  );
}

function MemorySkeleton() {
  return <Skeleton className="h-[35px] w-[35px] rounded-full" />;
}
