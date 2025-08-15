"use client";
import { useState } from "react";
import WealthTrackerSkeleton from "@/components/character-sheet/skeletons/wealth-trackter";
import WealthTracker from "@/components/character-sheet/wealth-tracker";
import { Separator } from "@/components/ui/separator";
import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import Subscriptions from "./subscriptions";
import IncreaseLifestyleAlertDialog from "./increase-lifestyle-alert-dialog";

export default function WealthSection() {
  const {
    wealthP,
    maxWealthPReached,
    pelts,
    wealthF,
    favors,
    setWealthP,
    setMaxWealthPReached,
    setPelts,
    setWealthF,
    setFavors,
    setChanges,
    isFetching,
  } = useCharacterSheet();

  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [pendingWealthChange, setPendingWealthChange] = useState<
    number | undefined
  >();

  const handleChangePeltsWealth = (n: number) => {
    if (n > maxWealthPReached) {
      setPendingWealthChange(n);
      setAlertOpen(true);
      return;
    }
    setWealthP(n);
  };

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Wealth <Subscriptions />
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
              onChangeWealth={handleChangePeltsWealth}
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
      <IncreaseLifestyleAlertDialog
        open={alertOpen}
        onCancel={() => {
          setPendingWealthChange(undefined);
          setAlertOpen(false);
        }}
        onContinue={() => {
          if (pendingWealthChange) {
            setMaxWealthPReached(pendingWealthChange);
            setWealthP(pendingWealthChange);
          }
          setPendingWealthChange(undefined);
          setAlertOpen(false);
        }}
      />
    </>
  );
}
