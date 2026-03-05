import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function ByTheBookIsPractical() {
  return (
    <div>
      <TypographyP>
        You may <b>assist</b> your allies at <b>-1 stress cost</b> until one of
        them complicates the mission. If one does, it now costs{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        in addition to normal <b>stress costs</b> for the Logistician to{" "}
        <b>assist</b>.
      </TypographyP>
    </div>
  );
}
