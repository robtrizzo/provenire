import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber">Donum Leo</TypographyH1>
      <TypographyP>
        Your body has stilled its entropic warping: your transformation is
        complete. Spend <b className="text-red-500">1 Blood</b> to shift
        partially or fully into your lion form for up to eight hours. You may
        extend this duration by 8 hours by eating a fresh kill or by sleeping.
      </TypographyP>
      <TypographyP>
        As natural as the beast&apos;s body feels to you, the transition is
        sloppy and painful. It can take several minutes, but once complete it
        comes with all of the power of an apex predator.
      </TypographyP>
      <TypographyP>
        While in lion form, your sight, strength, and nnatural healing are
        enhanced. For the duration of your transformation, gain{" "}
        <b className="text-red-500">+1d</b> to rolls which your form is suited
        to. At the end of your transformation, tick your <b>healing clock</b> by{" "}
        <b>2</b>.
      </TypographyP>
      <TypographyBlockquote>
        To gain <b>Donum Leo</b> abilities, spend <b>3 xp clocks</b> during the{" "}
        <b>Train</b> activity.
      </TypographyBlockquote>
      <TypographyH4>Glimpse of Prey</TypographyH4>
      <TypographyP>
        Catching sight of something running in the dark is thrilling. It&apos;s
        like catching a whiff of warm bread on an empty stomach. You can follow
        quickly moving targets in near-total darkness as easily as you could
        trail someone having a conversation. But if you wish to stop stalking
        your quarry, you must <b>resist</b> your instincts.
      </TypographyP>
      <TypographyH4>Predator&apos;s Rest</TypographyH4>
      <TypographyP>
        The second heart in your chest is growing, restoring your body at an
        accellerated pace. When you end your transformation, tick your{" "}
        <b>healing clock</b> by <b>4</b>. You may sleep or spend{" "}
        <b className="text-red-500">1 Blood</b> to tick your{" "}
        <b>healing clock</b> by <b>2</b>.
      </TypographyP>
      <TypographyH4>Weapons of the Lion</TypographyH4>
      <TypographyP>
        Your external ivory is cold and still, perfect to sink the heat of
        burning blood into. Spend <b className="text-red-500">1 Blood</b> to
        make your claws and teeth as sharp and hard as steel. If you don&apos;t
        have <i>Predator&apos;s Rest</i>, mark a{" "}
        <b>level 1 harm: painful overgrowth</b>.
      </TypographyP>
      <TypographyH4>Sturdy Hide</TypographyH4>
      <TypographyH4>Skillful Shifting</TypographyH4>
      <TypographyH4>Grand Appetite</TypographyH4>
    </>
  );
}
