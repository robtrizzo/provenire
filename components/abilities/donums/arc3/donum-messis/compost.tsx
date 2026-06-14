import { TypographyP } from "@/components/ui/typography";
export default function Compost() {
  return (
    <>
      <TypographyP>
        The cycle of life doesn't end with death, it just begins again. The ten
        fingered fists cradling your organs can reach out with you and prepare
        death for future life. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to liquefy a corpse which has
        not been butchered for meat or drained of blood. This liquid can be used
        to improve a crop's <b>yield</b> by <b>1</b>.
      </TypographyP>
      <TypographyP>
        During the <b className="text-mauve-500">Season of Rest</b>, you may
        spend <b className="text-blue-500">1 Water</b> to affect living things,
        turning flesh your palm touches to become porous and soft.
      </TypographyP>
    </>
  );
}
