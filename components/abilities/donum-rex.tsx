import { TypographyP, TypographyBlockquote } from "@/components/ui/typography";
export default function DonumRex() {
  return (
    <>
      <TypographyP>
        Your body has stilled its entropic warping: your transformation is
        complete. Spend <b className="text-red-500">1 Blood</b> to shift
        partially or fully into your wolf form for up to one day.
      </TypographyP>
      <TypographyBlockquote>
        You gain <b className="text-red-500">+1 max Blood</b>. Any time your
        belly is empty (no blood), take a{" "}
        <b>level 1 permanent harm: blood-starved</b>.
      </TypographyBlockquote>
      <TypographyP>
        As natural as the beast&apos;s body feels to you, the transition is
        still sloppy and painful. It can take several minutes, but once complete
        it comes with all of the power of <b>Kingwulf&apos;s</b> prized
        bloodline.
      </TypographyP>
      <TypographyP>
        While in wolf form, your sense of smell, strength, and natural healing
        are enhanced. For the duration of your transformation, gain{" "}
        <b className="text-red-500">+1d</b> to rolls which your form is suited
        to. At the end of your transformation, tick your <b>healing clock</b> by{" "}
        <b>2</b>.
      </TypographyP>
    </>
  );
}
