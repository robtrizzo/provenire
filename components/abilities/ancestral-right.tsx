import { TypographyP } from "@/components/ui/typography";
export default function FractalGrowth() {
  return (
    <>
      <TypographyP>
        You are held back from greater feats only by your lack of water. Oh,
        what things you could do with the unlimited access your ancestors had.
        Conume <b className="text-blue-500">3 Water</b> at once to dilate the
        cooling pathways in your body and gain{" "}
        <b className="text-blue-500">+1 max Water</b>.
      </TypographyP>
      <TypographyP>
        When you use another <b>Donum Silex</b> ability, you may spend an
        additional <b className="text-blue-500">1 Water</b> to affect ten times
        the amount of material. Make a <b>1d fortune roll</b>; on a <b>1-5</b>,
        your use of the ability is your choice of <i>slow</i>{" "}
        <i className="text-muted-foreground">OR</i> <i>catastrophic</i>.
      </TypographyP>
    </>
  );
}
