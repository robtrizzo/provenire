import { TypographyP } from "@/components/ui/typography";
export default function Reshape() {
  return (
    <>
      <TypographyP>
        You can mold and twist bone into any shape you wish, though natural laws
        affect their own vision on the new form as well. Twists and curves will
        become joints; ends and intersections will be knobby; points will be
        curved like fangs or tusks. You can affect material up to the size of an
        adult human. Paradoxically, once bone becomes ivory it is immune to your
        power.
      </TypographyP>
      <TypographyP>
        If you also have <b>Rupture</b>, you can use this power to repair broken
        bones within the body. If a <b>harm</b> has a bone related injury
        associated with it, you may spend{" "}
        <b className="text-blue-500">1 Water</b> to shift it down by{" "}
        <b>2 tiers</b>.
      </TypographyP>
    </>
  );
}
