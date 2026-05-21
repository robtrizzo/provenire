import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function TrickstersGrin() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Dead Weight
      </span>
      <TypographyP>
        It&apos;s like you said, you&apos;re not a warrior; you&apos;re an
        artisan... of lies. Your posture carries no killer intent; your
        movements don&apos;t telegraph your strikes. While you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        your foes can&apos;t anticipate your aggressions: they can only react.
      </TypographyP>
    </>
  );
}
