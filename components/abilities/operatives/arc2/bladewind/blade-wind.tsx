import { TypographyP } from "@/components/ui/typography";
export default function BladeWind() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Blade Art
      </span>
      <TypographyP>
        The namesake <b>&quot;Bladewind&quot;</b> is an ancient Gredoran weapon
        infamous for mass casualties and tenuous control. The thought behind the
        suit is to fully incorporate a psyche into a far smaller{" "}
        <b>Bladewind</b> than the weapons of yore. That way, it shouldn&apos;t
        get out of hand.
      </TypographyP>
      <TypographyP>
        It was a nice thought. Despite being connected via neural interface and
        a hundredth ths size of a traditional version, this weapon/machine/
        <i>thing</i> remains inherently bloodthrirsty. With every breath it begs
        to be unleashed. Spend <b className="text-rose-500">3 Blades</b> to do
        just that.
      </TypographyP>
      <TypographyP>
        Once unleashed, the weapon chitters with delight; its blades fracture
        apart into thousands of tiny razorblades and seek targets to blend into
        a bloody soup. If the target had blood, the <b>Bladewind</b> drinks and
        replenishes <b className="text-rose-500">2 Blades</b>. Then it will
        gleefully seek its next victim, friend or foe.
      </TypographyP>
      <TypographyP>
        While unleashed, the weapon will forcibly draw blood from the
        suit&apos;s wearer to perpetuate itself if needbe.{" "}
        <span className="font-cyber">Bladewind</span> must <b>push themself</b>{" "}
        if they want the weapon to cease. When they do, it screeches with
        displeasure but does as it&apos;s told.
      </TypographyP>
    </>
  );
}
