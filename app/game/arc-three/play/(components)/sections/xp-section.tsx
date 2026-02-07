import XPClocks from "@/components/character-sheet/xp-clocks";
import LoadingWrapper from "@/components/loading-wrapper";
import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";

export default function XPSection() {
  const { xpSpent, xp, setXp } = useCharacterSheet();
  const handleSetXP = (n: number) => {
    setXp(n);
    // setChanges(true);
  };
  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Experience {/*<XPInfo />*/}
      </TypographyH2>
      <XPClocks key={`xpclocks-${new Date().getTime()}`}>
        {/* TODO update to isLoading={isFetching} */}
        <LoadingWrapper
          isLoading={false}
          fallback={<XPClocks.Clocks.Skeleton />}
        >
          <XPClocks.Clocks initial={xp} setVal={handleSetXP} />
        </LoadingWrapper>
        <LoadingWrapper
          isLoading={false}
          fallback={<XPClocks.Controls.Skeleton />}
        >
          <XPClocks.Controls initial={xp} setVal={handleSetXP} />
        </LoadingWrapper>
      </XPClocks>
      <TypographyH2 className="text-md uppercase text-muted-foreground">
        XP Clocks Spent: <code className="text-xl text-primary">{xpSpent}</code>
      </TypographyH2>
    </>
  );
}
