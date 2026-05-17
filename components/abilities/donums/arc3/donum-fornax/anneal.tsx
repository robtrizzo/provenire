import { TypographyP } from "@/components/ui/typography";
export default function Anneal() {
  return (
    <>
      <TypographyP>
        Much like the materials you sculpt, your body is unfinished. You only
        have to possess. the bravery to undergo the elevation ritual. Drape
        yourself in cloth of metal fractals and step into the furnace. The
        fabric burns away, your flesh becomes porous. The molten material sinks
        through your skin and wraps your bones. Mark a{" "}
        <b>level 5 harm: immolated</b>.
      </TypographyP>
      <TypographyP>
        Over the many hours it will take your body to cool, you shape the metal
        fractal into new pathways for <b className="text-red-500">Blood</b> to
        flow. When it is complete, increase your{" "}
        <b className="text-red-500">max Blood</b> by <b>3</b>.
      </TypographyP>
    </>
  );
}
