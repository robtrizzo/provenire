import { TypographyP } from "@/components/ui/typography";
export default function DonumPortentum() {
  return (
    <>
      <TypographyP>
        Gredora&apos;s holy metal struck your marrow and released something
        which Rath had tried to seal away. Spend{" "}
        <b className="text-red-500">1 Blood</b> to shift partially or fully into
        your boar form for up to eight hours. You may extend the duration by 8
        hours by gorging on a fresh kill.
      </TypographyP>
      <TypographyP>
        As natural as the beast&apos;s body feels to you, the transition is
        sloppy and painful. It can take several minutes, but once complete it
        flushes you with power.
      </TypographyP>
      <TypographyP>
        While in boar form, your durability, smell, and natural healing are
        enhanced. While transformed, gain <b className="text-red-500">+1d</b> to
        rolls which your form is suited to. At the end of your transformation,
        tick your <b>healing clock</b> by <b>2</b>.
      </TypographyP>
    </>
  );
}
