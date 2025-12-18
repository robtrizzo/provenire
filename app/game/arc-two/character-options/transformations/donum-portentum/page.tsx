import {
  TypographyH1,
  TypographyP,
  TypographyBlockquote,
  TypographyH4,
  TypographyH2,
} from "@/components/ui/typography";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { checkAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const { error } = await checkAuth("user", ["donum-portentum"]);
  if (error) redirect("/game/arc-two/character-options/transformations");

  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="mb-2">
        Donum Portentum{" "}
        <span className="text-muted-foreground">(Gift of the Monster)</span>
      </TypographyH1>
      <TypographyBlockquote>
        <i>Donum Portentum</i> isn&apos;t a Donum in the way that others are; it
        covers a broad range of transformations which aren&apos;t adopted by
        Kingwulf into his empire. Because of this, <i>Donum Portentum</i>{" "}
        doesn&apos;t have a unified set of abilities. Instead, each character
        will have their own unique set.
      </TypographyBlockquote>
      <Lars />
    </>
  );
}

async function Lars() {
  const { error } = await checkAuth("user", ["donum-portentum-lars"]);
  if (error) return null;
  return (
    <>
      <TypographyH2>Lars</TypographyH2>
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
      <TypographyBlockquote>
        To gain <b>Donum Portentum</b> abilities, spend <b>3 xp clocks</b>{" "}
        during the <b>Train</b> activity.
      </TypographyBlockquote>
      <TypographyH4>Keen Scent</TypographyH4>
      <TypographyP>
        Catching the scent of prey and predator is thrilling and chilling.
        Smells are like overhearing conversations in a crowded hall: obvious,
        though their direction and details are muddy. You always know if someone
        vulnerable to you is about to flee and you always know when someone
        you&apos;re vulnerable to is about to pounce.
      </TypographyP>
      <TypographyH4>Flame&apos;s Pulse</TypographyH4>
      <TypographyP>
        The second heart in your chest is growing, restoring your body at an
        accellerated pace. Proximity to fire seems to quicken its pulse. When
        you end or extend your transformation, tick your <b>healing clock</b> by{" "}
        <b>4</b>. You may spend <b className="text-red-500">1 Blood</b> or rest
        by a roaring fire to tick your <b>healing clock</b> by <b>2</b>.
      </TypographyP>
      <TypographyH4>Weapons of the Boar</TypographyH4>
      <TypographyP>
        Your external ivory is cold and still, perfect to sink the heat of
        burning blood into. Spend <b className="text-red-500">1 Blood</b> to
        make your tusks and hooves as sharp and hard as steel. If you don&apos;t
        have <i>Flame&apos;s Pulse</i>, mark a{" "}
        <b>level 1 harm: painful overgrowth</b>.
      </TypographyP>
      <TypographyH4>Sturdy Hide</TypographyH4>
      <TypographyP>
        Cornered prey and desperate predator alike can lash out in one last
        gambit to hurt their foe. You are immune to injury from small or weakly
        swung weapons. When you transform or extend your transformation, treat
        yourself as wearing <b>Armor</b>, though it does not cost any slots to
        carry.
      </TypographyP>
      <TypographyH4>Urgent Shifting</TypographyH4>
      <TypographyP>
        When your life is in danger you can complete your shifting in a
        heartbeat if needbe, and it&apos;s not painful or messy. When you do
        this you gain a burst of strength and speed.
      </TypographyP>
      <TypographyH4>Demi Ijeta</TypographyH4>
      <TypographyP>
        After your first transformation, it&apos;s laid dormant. Whatever it is,
        it stirs now; an ever-present line of heat from the metal to your core.
        You can let it draw from you in return for strength; you may take a{" "}
        <b>level 2 harm: drained</b> to gain{" "}
        <b className="text-red-500">1 Blood</b>. You may not <b>resist</b> this
        harm.
      </TypographyP>
    </>
  );
}
