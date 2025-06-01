import { TypographyP, TypographyBlockquote } from "@/components/ui/typography";
export default function HeatSink() {
  return (
    <>
      <TypographyP>
        The longer you sit in your rage, the more you observe how it begets more
        rage. It accumulates, gravitates towards the greatest source of heat. If
        you aren&apos;t <i>Enraged</i>, you may spend{" "}
        <b className="text-blue-500">1 Water</b> to pull the <i>Angry</i>{" "}
        condition from an ally into yourself, marking the <i>Enraged</i>{" "}
        condition.
      </TypographyP>
      <TypographyP>
        <i>Enraged</i>: you may spend <b className="text-blue-500">1 Water</b>{" "}
        to siphon the fury of everyone around you, removing it from them. For
        each nearby <i>Angry</i> ally or infuriated foe, you hold{" "}
        <b className="text-orange-700">1 Rage</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b className="text-orange-700">Rage</b> may be spent in place of{" "}
        <b className="text-blue-500">Water</b>. For each point not spent by the
        end of the scene, mark <b>6 stress</b>{" "}
        <span className="text-muted-foreground">OR</span> a{" "}
        <b>level two harm: fury burns</b>.
      </TypographyBlockquote>
    </>
  );
}
