import { TypographyP } from "@/components/ui/typography";
export default function Sow() {
  return (
    <>
      <TypographyP>
        Life is so delicate; the conditions for survival so fragile. The Steel
        Trap seems designed to cut off all paths towards flourishing for new
        life. You may spend <b className="text-blue-500">1 Water</b> to walk a
        space up to the size of a modest garden. You brush your hand on its
        surfaces and seed it with the potential for growth. This improves the
        space's <b>yield</b> by <b>1</b>; by <b>2</b> if during the{" "}
        <b className="text-mauve-500">Season of Rest</b>. This can only be done
        once per season cycle for a space.
      </TypographyP>
      <TypographyP>
        During the <b className="text-mauve-500">Season of Rest</b>, when
        characters take the <b>Heal downtime action</b> near a space you've
        sown, they tick their <b>healing clock</b> by an additional <b>1</b>.
      </TypographyP>
    </>
  );
}
