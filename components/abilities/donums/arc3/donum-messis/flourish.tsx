import { TypographyP } from "@/components/ui/typography";
export default function Flourish() {
  return (
    <>
      <TypographyP>
        You can feel growth itself. It feels like ticklish glimmers of potential
        made manifest in things that live and survive. You may spend{" "}
        <b className="text-blue-500">1 Water</b> and walk among the growing
        things. Run your hands through them and feel the electric tickling of
        their growth. Their <b>yield</b> increases by <b>1</b>; by <b>2</b> if
        during the <b className="text-emerald-500">Season of Growth</b>. This
        can be done once per season cycle for a space.
      </TypographyP>
      <TypographyP>
        During the <b className="text-emerald-500">Season of Growth</b>, when
        characters take the <b>Train downtime action</b> near a space you've
        flourished, they gain <b>1 xp</b>.
      </TypographyP>
    </>
  );
}
