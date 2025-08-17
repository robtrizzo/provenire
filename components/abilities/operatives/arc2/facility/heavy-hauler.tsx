import { TypographyP } from "@/components/ui/typography";

export default function HeavyHauler() {
  return (
    <>
      <TypographyP>
        The <span className="font-cyber">&quot;Manhandler&quot;</span> can
        effortlessly support an enormous amount of weight, though it&apos;s
        quite heavy itself. It renders{" "}
        <span className="font-cyber">Facility&apos;s</span> sleeve quite
        sluggish in certain circumstances, but on the bright side they can bring
        an entire arsenal with them.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Facility</span> can never take a{" "}
        <i>discrete</i> loadout, but they can hold up to <b>8 item slots</b>{" "}
        with a <i>conspicuous</i> loadout and <b>12 item slots</b> with a{" "}
        <i>heavy</i> loadout.
      </TypographyP>
    </>
  );
}
