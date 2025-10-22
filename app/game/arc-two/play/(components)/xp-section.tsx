"use client";
import { TypographyH2 } from "@/components/ui/typography";
import XPClocks from "@/components/character-sheet/xp-clocks";
import XPInfo from "@/app/game/arc-two/play/(components)/xp-info";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import LoadingWrapper from "@/components/loading-wrapper";
export default function XPSection() {
  const { xp, setXp, setChanges, isFetching } = useCharacterSheet();
  const handleSetXP = (n: number) => {
    setXp(n);
    setChanges(true);
  };
  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Experience <XPInfo />
      </TypographyH2>

      <XPClocks key={`xpclocks-${new Date().getTime()}`}>
        <LoadingWrapper
          isLoading={isFetching}
          fallback={<XPClocks.Clocks.Skeleton />}
        >
          <XPClocks.Clocks initial={xp} setVal={handleSetXP} />
        </LoadingWrapper>
        <LoadingWrapper
          isLoading={isFetching}
          fallback={<XPClocks.Controls.Skeleton />}
        >
          <XPClocks.Controls initial={xp} setVal={handleSetXP} />
        </LoadingWrapper>
      </XPClocks>
    </>
  );
}
