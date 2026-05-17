import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function Billow() {
  return (
    <>
      <TypographyBlockquote>
        &quot;Here&apos;s where it gets fun.&quot;
        <br /> - Makino
      </TypographyBlockquote>
      <TypographyP>
        If ash, soot, or dust is being carried by the wind you may spend{" "}
        <b className="text-blue-500">1 Water</b> to dissolve your body into ash
        and fly through the air with it. While in this form you can feel your
        surroundings via whatever the particles touch. Despite being ash, you
        still need to breathe and for your heart to beat, so you must
        rematerialize quickly or pass out and remateralize anyway.
      </TypographyP>
    </>
  );
}
