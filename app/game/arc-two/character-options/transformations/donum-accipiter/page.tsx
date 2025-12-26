import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { checkAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const { error } = await checkAuth("user", ["donum-rex"]);
  if (error) redirect("/game/arc-two/character-options/transformations");

  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Donum Accipiter</TypographyH1>
      <TypographyBlockquote>
        <i>
          Donum Accipiter isn&apos;t a Donum in the way that others are; it
          covers a broad range of avian transformations which have been adopted
          by <b>Kingwulf</b> into his empire. Because of this,{" "}
          <i>Donum Accipiter</i> doesn&apos;t have a unified set of abilities.
          Instead, each character will have their own unique set.
        </i>
      </TypographyBlockquote>
      <Olobos />
    </>
  );
}

async function Olobos() {
  const { error } = await checkAuth("user", ["donum-accipiter-buzz"]);
  if (error) return null;
  return (
    <>
      <TypographyH2>Olobos</TypographyH2>
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
      <TypographyH4>Glimpse of Prey</TypographyH4>
      <TypographyP>
        Catching sight of something running in the underbrush is thrilling.
        It&apos;s like catching a whiff of warm bread on an empty stomach. You
        can identify and track targets in near-total darkness as well as
        near-blinding light as easily as you could trail someone having a
        conversation. But if you wish to stop stalking your quarry, you must{" "}
        <b>resist</b> your instincts.
      </TypographyP>
      <TypographyH4>Raptor&apos;s Rest</TypographyH4>
      <TypographyP>
        The second heart in your chest is growing, restoring your body at an
        accelerated pace. When you end your transformation, tick your{" "}
        <b>healing clock</b> by <b>4</b>. You may coast on air currents for a
        few hours or spend <b className="text-red-500">1 Blood</b> to tick your{" "}
        <b>healing clock</b> by <b>2</b>.
      </TypographyP>
      <TypographyH4>Weapons of the Hawk</TypographyH4>
      <TypographyP>
        Your external ivory is cold and still, perfect to sink the heat of
        burning blood into. Spend <b className="text-red-500">1 Blood</b> to
        make your talons and beak as sharp and hard as steel. If you don&apos;t
        have <i>Raptor&apos;s Rest</i>, mark a{" "}
        <b>level 1 harm: painful overgrowth</b>.
      </TypographyP>
      <TypographyH4>Sturdy Quills</TypographyH4>
      <TypographyP>
        Hardened quills leave a buzzard&apos;s body still vulnerable to piercing
        talons and fangs. But unlike the wolf&apos;s ability to thicken its
        hide, steeled quills armor avians against large weapons. You are immune
        to injury from large slashing attacks unless the force of impact is
        substantial. Spend <b className="text-red-500">1 Blood</b> to reduce an
        incoming <b>harm</b> by 2 steps.
      </TypographyP>
      <TypographyH4>Sudden Shifting</TypographyH4>
      <TypographyP>
        Instinct unlocks potential. When you&apos;re in a freefall or in pursuit
        of prey you can complete your shifting in a heartbeat. When you do,
        it&apos;s not painful or messy.
      </TypographyP>
      <TypographyH4>Grand Appetite</TypographyH4>
      <TypographyP>
        A well fed buzzard grows. Gorge on{" "}
        <b className="text-red-500">3 Blood</b> at once to increase the physical
        size of your transformation and gain{" "}
        <b className="text-red-500">+1 max Blood</b>. You gain an additional{" "}
        <b>condition</b>: <i>Insatiable</i>.
      </TypographyP>
    </>
  );
}
