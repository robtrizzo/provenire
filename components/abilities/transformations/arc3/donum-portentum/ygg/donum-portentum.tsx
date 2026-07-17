import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function DonumPortentumYgg() {
  return (
    <>
      <TypographyP>
        Your body is entropy with no stationary definition or shape. A gnarled
        mass of furry limbs, jaws, claws, and horns writhing with power and with
        a <i>bottomless</i> hunger. Spend{" "}
        <b className="text-red-500">2 Blood</b> to shift partially or fully into
        your monstrous form for up to one hour.
      </TypographyP>
      <TypographyBlockquote>
        You gain <b className="text-red-500">+1 max Blood</b>. any time your
        belly is empty (no blood), take a <b>level 1 harm: blood-starved.</b>
      </TypographyBlockquote>
      <TypographyP>
        The process of transformation is (choose two of) <i>sloppy</i>,{" "}
        <i>painful</i>, and <i>destructive</i>. It can take several minutes, but
        once complete it comes with all the power of this ravenous flesh. Your
        sense of smell, strength, and natural healing are enhanced. For the
        duration of your transformation, gain{" "}
        <code>
          <b className="text-orange-500">+1 transformation</b>
        </code>{" "}
        to rolls which your form is suited to.
      </TypographyP>
      <TypographyP>
        The way you sense living things fundamentally changes. You cannot
        distinguish individuals; you only know them as <i>prey</i> or{" "}
        <i>predator</i>.
      </TypographyP>
    </>
  );
}
