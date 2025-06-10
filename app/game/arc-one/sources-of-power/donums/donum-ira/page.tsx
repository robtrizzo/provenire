import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { checkAuth } from "@/lib/auth";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { redirect } from "next/navigation";
export default async function Page() {
  const { error } = await checkAuth("user", ["donum-ira"]);
  if (error) redirect("/game/arc-one/sources-of-power/donums");
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Sources of Power", href: "/game/arc-one/sources-of-power" },
          { name: "Donums", href: "/game/arc-one/sources-of-power/donums" },
          { name: "Donum Ira", href: "#" },
        ]}
      />
      <TypographyH1 className="mb-2">
        Donum Ira <span className="text-muted-foreground">(Gift of Rage)</span>
      </TypographyH1>
      <TypographyP>
        When the <b className="text-blue-500">Water</b> hollowed you out, it
        made space for a flood of powerful emotions. They course through you
        like hot currents in a cool basin: stirring you to action. Pushing you
        to anger. When you are, wielding it comes easy, like opening your hand
        to release steam. When you&apos;re centered though, it&apos;s like
        forcing a smile on your worst of days.
      </TypographyP>
      <TypographyP>
        Gain <b>+1 max Stress</b> and the <b>Enraged Condition</b>. When
        you&apos;re <b>Enraged</b>, <b>Donum Ira</b> is empowered. When
        you&apos;re not <b>Enraged</b>, abilities cost an additional{" "}
        <b>1 Stress</b> to use.
      </TypographyP>
      <TypographyBlockquote>
        <b>Enraged:</b> This goes beyond momentary anger, this is a
        generational, primal emotion. You cannot participate in group actions to
        avoid danger. Clear by draining your body of{" "}
        <b className="text-blue-500">Water</b>.
      </TypographyBlockquote>
      <TypographyP>
        Developing <b>Donum Ira</b> further is a deeply personal task, requiring
        the wielder to reckon with their own emotions as well as the new ones
        introduced to their psyche. And do a substantial degree, it requires
        understanding others&apos; emotions as well.
      </TypographyP>
      <TypographyBlockquote>
        To gain <b>Donum Ira</b> abilities, spend <b>3 xp clocks</b> during the{" "}
        <b>Train</b> activity
      </TypographyBlockquote>
      <TypographyH4>Ira Sympath</TypographyH4>
      <TypographyP>
        You gain a sixth sense which detects others&apos;s anger as easily as
        you could feel warmth from a nearby flame. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to intuit the source of their
        anger.
      </TypographyP>
      <TypographyP>
        <i>Enraged</i>: You may spend <b className="text-blue-500">1 Water</b>{" "}
        to intuit how to enrage someone who isn&apos;t already angry.
      </TypographyP>
      <TypographyH4>Heat Sink</TypographyH4>
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
      <TypographyH4>Flare</TypographyH4>
      <TypographyP>
        In <i>Gredoran Aldam</i>, they teach of the three organs: heart, limbs,
        and eyes. These are the places you feel <i>Donum Ira&apos;s</i> heat
        building the most. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to release the pressure from
        your heart. You let loose a wave of anger onto those around you, driving
        them to act on the sudden emotion.
      </TypographyP>
      <TypographyP>
        <i>Enraged:</i> nearby allies may convert one of their conditions to{" "}
        <i>Angry</i>.
      </TypographyP>
      <TypographyH4>Wrathful Hands</TypographyH4>
      <TypographyP>
        Releasing rage through your limbs causes the heat to enter your hands.
        You may spend <b className="text-blue-500">1 Water</b> to cause your
        hands to become hot enough to burn with a touch. Given enough time, they
        can even cause metal to glow.
      </TypographyP>
      <TypographyP>
        <i>Enraged:</i> You cannot be made to lose your grip on something you
        take hold of.
      </TypographyP>
      <TypographyH4>Ira Foci</TypographyH4>
      <TypographyP>
        Releasing rage through your eyes frees your molten inner mind from the
        confines of your outer crystaline mind. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to thwart a source of mental
        distraction, deception, or coersion.
      </TypographyP>
      <TypographyP>
        <i>Enraged:</i> remain immune to this mental effect for up to the
        duration of the scene - as long as a source of your rage is in view.
      </TypographyP>
      <TypographyH4>Surpress and Release</TypographyH4>
      <TypographyP>
        Despite the body-wracking rage you already hold, you invite more into
        yourself. When it builds to its crescendo, it becomes physically
        harmful; though the release becomes all the sweeter. Gain{" "}
        <b className="text-blue-500">+1 max Water</b>.
      </TypographyP>
      <TypographyP>
        When you are at <b className="text-blue-500">max Water</b> and you are{" "}
        <i>Enraged</i>, mark a <b>level 1 harm: pressure</b>.
      </TypographyP>
      <TypographyP>
        When you empty your last <b className="text-blue-500">Water</b>, gain a
        burst of a superhuman strength and tick your <b>healing clock</b> by{" "}
        <b>3</b>.
      </TypographyP>
      <div className="mb-4" />
    </>
  );
}
