import { TypographyP } from "@/components/ui/typography";
export default function DonumLeo() {
  return (
    <>
      <TypographyP>
        Your body has stilled its entropic warping: your transformation is
        complete. Spend <b className="text-red-500">1 Blood</b> to shift
        partially or fully into your lion form for up to eight hours. You may
        extend this duration by 8 hours by eating a fresh kill or by sleeping.
      </TypographyP>
      <TypographyP>
        As natural as the beast&apos;s body feels to you, the transition is
        sloppy and painful. It can take several minutes, but once complete it
        comes with all of the power of an apex predator.
      </TypographyP>
      <TypographyP>
        While in lion form, your sight, strength, and nnatural healing are
        enhanced. For the duration of your transformation, gain{" "}
        <b className="text-red-500">+1d</b> to rolls which your form is suited
        to. At the end of your transformation, tick your <b>healing clock</b> by{" "}
        <b>2</b>.
      </TypographyP>
    </>
  );
}
