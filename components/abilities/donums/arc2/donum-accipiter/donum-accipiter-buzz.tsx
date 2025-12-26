import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function DonumAccipiterBuzz() {
  return (
    <>
      <TypographyP>
        Your body has stilled its entropic warping: your transformation is
        complete. Spend <b className="text-red-500">1 Blood</b> to shift
        partially or fully into your raptor form for up to one day.
      </TypographyP>
      <TypographyP>
        As natural as the raptor&apos;s body feels to you, the transition is
        still sloppy and painful. It can take several minutes, but once complete
        it comes with all of the power of <b>Kingwulf&apos;s</b> newest
        bloodline.
      </TypographyP>
      <TypographyP>
        While in bird form, your speed, sight, and natural healing are enhanced.
        While transformed, gain <b className="text-red-500">+1d</b> to rolls
        which your form is suited to. At the end of your transformation, tick
        your <b>healing clock</b> by <b>2</b>.
      </TypographyP>
      <TypographyBlockquote>
        To gain <b>Donum Accipiter</b> abilities, spend <b>3 xp clocks</b>{" "}
        during the <b>Train</b> activity.
      </TypographyBlockquote>
    </>
  );
}
