import { TypographyP } from "@/components/ui/typography";
export default function StructureAndOrder() {
  return (
    <TypographyP>
      Logisticians can spend a <b>downtime</b> activity to tick one of their{" "}
      <b>Faction&apos;s</b> clocks by <b>1</b> or to give themselves{" "}
      <code>
        <b className="text-emerald-500">+1 push</b>
      </code>{" "}
      on their next roll when <b>time passes</b>.
    </TypographyP>
  );
}
