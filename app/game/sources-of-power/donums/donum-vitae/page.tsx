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
  const { error } = await checkAuth("user", ["donum-vitae"]);
  if (error) redirect("/game/sources-of-power/donums");
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Sources of Power", href: "/game/sources-of-power" },
          { name: "Donums", href: "/game/sources-of-power/donums" },
          { name: "Donum Vitae", href: "#" },
        ]}
      />
      <TypographyH1 className="mb-2">
        Donum Vitae{" "}
        <span className="text-muted-foreground">(Gift of Vitality)</span>
      </TypographyH1>
      <TypographyP>
        Your body buzzes, but you can hardly feel it. Your eyes are bright and
        your limbs are light. Aches and pains melt away into a pleasant warmth,
        like a gentle hand on your cheek.
      </TypographyP>
      <TypographyP>
        As incredible of a feeling this is, it comes at the cost of{" "}
        <b className="text-blue-500">Water</b>. <b>Donum Vitae</b> slowly drains
        the coolness from your veins, consuming{" "}
        <b className="text-blue-500">1 Water</b> each day. When it does, it
        ticks your <b>healing clock</b> by <b>2</b>. If there is no{" "}
        <b className="text-blue-500">Water</b> left, mark a{" "}
        <b>permanent level 1 harm: parched</b>.
      </TypographyP>
      <TypographyP>
        Harnessing this power can be difficult though. The{" "}
        <b className="text-blue-500">Water</b> is heavy and clings to your inner
        extremities. It requires concentration and time to draw it, then expel
        it for your purposes. While you do this, you are vulnerable to foes
        seeking to exploit weakness.
      </TypographyP>
      <TypographyP>
        Developing <b>Donum Vitae</b> further is a very personal and often
        intimate journey. Not only does it requires introspection into
        one&apos;s own body, it requires learning others&apos; vitality as well.
      </TypographyP>
      <TypographyBlockquote>
        To gain <b>Donum Vitae</b> abilities, spend <b>3 xp clocks</b> during
        the <b>Train</b> activity.
      </TypographyBlockquote>
      <TypographyH4>Euphoria</TypographyH4>
      <TypographyP>
        You may spend <b className="text-blue-500">1 Water</b> to amplify the
        healthful sense of vitality which <b>Donum Vitae</b> ambiently cradles
        you with - or you may bless another with it. For one day, the
        beneficiary may ignore any minor discomforts like being <i>hungry</i>,{" "}
        <i>tired</i>, or <i>sore</i>. When the euphoria ends, the beneficiary
        ticks their <b>healing clock</b> by <b>2</b> and marks <b>1 stress</b>.
      </TypographyP>
      <TypographyH4>Reckless Strength</TypographyH4>
      <TypographyP>
        The mind places psychic limits on the body to prevent accidental
        over-strain causing harm. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to flood the body with
        adrenaline and bypass these safeguards. If you do, the beneficiary may
        perform a feat of near superhuman strength or endurance. Afterwards,
        they mark a <b>level 2 harm: pulled muscles</b>.
      </TypographyP>
      <TypographyH4>Endless Energy</TypographyH4>
      <TypographyP>
        <b>Donum Vitae</b> clarifies the mind and energizes the body, allowing
        for days of activity without needing to rest. Spend{" "}
        <b className="text-blue-500">1 Water</b> to grant{" "}
        <b className="text-blue-500">+1d</b> to an <b>agenda</b> or to two{" "}
        <b>downtime</b> actions.
      </TypographyP>
      <TypographyH4>Inner Sensation</TypographyH4>
      <TypographyP>
        You develop a means of inherently percieving the shape, texture, and
        motion of the many interior parts of the body. Spend{" "}
        <b className="text-blue-500">1 Water</b> to identify interior maladies
        and detect foreign objects in bodies. If used as part of someone&apos;s{" "}
        <b>Recover</b> action during <b>downtime</b>, you may cure them of a
        single non-permanent instance of <b>harm</b>.
      </TypographyP>
      <TypographyH4>Rapid Vitality</TypographyH4>
      <TypographyP>
        You&apos;ve become practiced at wielding <b>Donum Vitae</b> in the thick
        of the action. You can use its abilities within seconds instead of
        minutes and are no longer vulnerable while doing so.
      </TypographyP>
      <TypographyH4>Grow Reserve</TypographyH4>
      <TypographyP>
        <b>Donum Vitae</b> puts greater and greater demands for{" "}
        <b className="text-blue-500">Water</b> on your body, pushing you to
        drink more and more to compensate. Consume{" "}
        <b className="text-blue-500">3 Water</b> at once to dilate the cooling
        pathways in your body and gain{" "}
        <b className="text-blue-500">+1 max Water</b>. When <b>Donum Vitae</b>{" "}
        naturally drains <b className="text-blue-500">Water</b> from your body,
        it ticks your <b>healing clock</b> by <b>3</b>.
      </TypographyP>
    </>
  );
}
