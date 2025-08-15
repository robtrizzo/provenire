import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { TypographyH4 } from "@/components/ui/typography";
import type { Baggage, BaggageUnlock } from "@/types/game";
import { cva } from "class-variance-authority";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
export default function BaggageWidget() {
  const [open, setOpen] = useState(false);
  const { selectedBackground, unlockedBaggage } = useCharacterSheet();

  const bgBaggage = selectedBackground?.baggage || [];
  const lockedBgBaggage = bgBaggage.filter(
    (bgb) => !unlockedBaggage.find((ulb) => ulb.name === bgb.name)
  );

  const unlockedBaggageEntries = unlockedBaggage.reduce(
    (acc, ulb) =>
      acc + ulb.unlocks.reduce((acc, ul) => (ul.unlocked ? acc + 1 : acc), 0),
    0
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline">
          baggage ({unlockedBaggageEntries})
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[600px] relative h-[500px] overflow-auto">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH4 className="font-cyber">Unlocked</TypographyH4>
        <Separator className="mb-1" />
        <div className="flex flex-col gap-2">
          {unlockedBaggage.map((b, i) => (
            <BaggageEntry key={b.name + i} baggage={b} />
          ))}
        </div>
        {selectedBackground && (
          <>
            <TypographyH4 className="font-cyber text-red-500">
              {selectedBackground.name}
            </TypographyH4>
            <Separator className="mb-1" />
            <div className="flex flex-col gap-2">
              {lockedBgBaggage.map((b, i) => (
                <BaggageEntry key={b.name + i} baggage={b} />
              ))}
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}

function BaggageEntry({ baggage }: { baggage: Baggage }) {
  const { unlockedBaggage, setUnlockedBaggage, setChanges } =
    useCharacterSheet();
  const handleUnlock = (baggage: Baggage) => {
    const foundBaggageIdx = unlockedBaggage.findIndex(
      (ub) => ub.name === baggage.name
    );
    if (foundBaggageIdx === -1) {
      setUnlockedBaggage([...unlockedBaggage, baggage]);
    } else {
      const unlockedBaggageCopy = [...unlockedBaggage];
      unlockedBaggageCopy[foundBaggageIdx] = baggage;
      setUnlockedBaggage(unlockedBaggageCopy);
    }
    setChanges(true);
  };
  const handleShelve = (baggage: Baggage) => {
    const foundBaggageIdx = unlockedBaggage.findIndex(
      (ub) => ub.name === baggage.name
    );
    if (foundBaggageIdx === -1) {
      return;
    }
    if (baggage.unlocks.every((u) => !u.unlocked)) {
      setUnlockedBaggage(
        unlockedBaggage.filter((ulb) => ulb.name !== baggage.name)
      );
    } else {
      const unlockedBaggageCopy = [...unlockedBaggage];
      unlockedBaggageCopy[foundBaggageIdx] = baggage;
      setUnlockedBaggage(unlockedBaggageCopy);
    }
    setChanges(true);
  };
  return (
    <div>
      <b className="font-cyber">{baggage.name}</b> [{" "}
      {baggage.unlocks.map((bu, i) => (
        <>
          <BaggageUnlock
            key={bu.name + i}
            bgUnlock={bu}
            disabled={!bu.unlocked && i > 0 && !baggage.unlocks[i - 1].unlocked}
            onClick={() => {
              const unlocksCopy = [...baggage.unlocks];
              unlocksCopy[i] = { ...unlocksCopy[i], unlocked: !bu.unlocked };
              const newBaggage = {
                ...baggage,
                unlocks: unlocksCopy,
              };
              if (bu.unlocked) {
                handleShelve(newBaggage);
              } else {
                handleUnlock(newBaggage);
              }
            }}
          />
          {i < baggage.unlocks.length - 1 && " -> "}
        </>
      ))}{" "}
      ]{" "}
      <span className="font-light text-sm text-muted-foreground">
        {baggage.description}
      </span>
    </div>
  );
}

const baggageVariants = cva("font-cyber font-bold", {
  variants: {
    type: {
      cyberware: "text-fuchsia-500",
      action: "text-red-500",
      transformation: "text-orange-500",
      drive: "text-lime-500",
      fightingStyle: "text-emerald-500",
      bond: "text-sky-500",
      rival: "text-stone-500",
    },
  },
});

function BaggageUnlock({
  bgUnlock,
  disabled,
  onClick,
}: {
  bgUnlock: BaggageUnlock;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          disabled={disabled}
          onClick={onClick}
          className={cn(
            bgUnlock.unlocked &&
              "dark:hover:bg-red-500/20 hover:bg-red-500/20 dark:border-sky-700"
          )}
        >
          <span className={baggageVariants({ type: bgUnlock.type })}>
            {bgUnlock.name}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{bgUnlock.unlocked ? "Shelve" : "Unlock"}</TooltipContent>
    </Tooltip>
  );
}
