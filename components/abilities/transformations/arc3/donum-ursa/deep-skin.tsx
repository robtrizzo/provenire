import { TypographyP } from "@/components/ui/typography";
export default function DeepSkin() {
  return (
    <>
      <TypographyP>
        Prey often lash out in their final moments. You are immune to injury
        from small or weakly swung weapons. You may spend{" "}
        <b className="text-red-500">1 Blood</b> to further laminate your flesh
        and gain an additional slot to record a <b>level 2 harm</b>. This slot
        is removed when your transformation ends. If a <b>harm</b> was marked in
        that slot, it will fill a higher slot if necessary.
      </TypographyP>
    </>
  );
}
