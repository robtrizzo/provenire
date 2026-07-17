import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function DonumUrsa() {
  return (
    <>
      <TypographyP>
        Your body has stilled its entropic warping: your transformation is
        complete. Spend <b className="text-red-500">1 Blood</b> to shift
        partially or fully into your bear form for up to one day.
      </TypographyP>
      <TypographyBlockquote>
        You gain <b className="text-red-500">+1 max Blood</b>. Any time your
        belly is empty (no blood), take a{" "}
        <b>level 1 permanent harm: blood-starved</b>.
      </TypographyBlockquote>
      <TypographyP>
        As natural as the beast's body feels to you, the transition is still
        sloppy and painful. It can take several minutes, but once complete it
        comes with all the power of Kingwulf's newest accepted bloodline.
      </TypographyP>
      <TypographyP>
        While in bear form, your sense of smell, strength, and natural healing
        are enhanced. For the duration of your transformation, gain{" "}
        <code>
          <b className="text-orange-500">+1 transformation</b>
        </code>{" "}
        to rolls which your form is suited to.
      </TypographyP>
    </>
  );
}
