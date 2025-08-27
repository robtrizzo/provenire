import {
  TypographyH1,
  TypographyP,
  TypographyBlockquote,
  TypographyH4,
} from "@/components/ui/typography";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { checkAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const { error } = await checkAuth("user", ["donum-rex"]);
  if (error) redirect("/game/arc-one/sources-of-power/transformations");

  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="mb-2">
        Donum Rex{" "}
        <span className="text-muted-foreground">(Gift of the King)</span>
      </TypographyH1>
      <TypographyP>
        Your body has stilled its entropic warping: your transformation is
        complete. Spend <b className="text-red-500">1 Blood</b> to shift
        partially or fully into your wolf form for up to one day.
      </TypographyP>
      <TypographyP>
        As natural as the beast&apos;s body feels to you, the transition is
        still sloppy and painful. It can take several minutes, but once complete
        it comes with all of the power of <b>Kingwulf&apos;s</b> prized
        bloodline.
      </TypographyP>
      <TypographyP>
        While in wolf form, your sense of smell, strength, and natural healing
        are enhanced. For the duration of your transformation, gain{" "}
        <b className="text-red-500">+1d</b> to rolls which your form is suited
        to. At the end of your transformation, tick your <b>healing clock</b> by{" "}
        <b>2</b>.
      </TypographyP>
      <TypographyP>
        Developing <b>Donum Rex</b> further is a very personal journey which no
        one can lead you on. Everyone&apos;s body is different, and every wolf
        must learn to embrace the aspects of themselves that gain strength as
        they come.
      </TypographyP>
      <TypographyBlockquote>
        To gain <b>Donum Rex</b> abilities, spend <b>3 xp clocks</b> during the{" "}
        <b>Train</b> activity.
      </TypographyBlockquote>
      <TypographyH4>Scent of Prey</TypographyH4>
      <TypographyP>
        Catching the smell of someone you&apos;re looking for is thrilling.
        It&apos;s like seeing a distant light in a dark passage. You can follow
        scents as naturally as you could trail someone having a conversation.
        But if you wish to stop following the scent, you must <b>resist</b> your
        instincts.
      </TypographyP>
      <TypographyH4>Predator&apos;s Pulse</TypographyH4>
      <TypographyP>
        The second heart in your chest is growing, restoring your body at an
        accelerated pace. When you end your transformation, tick your{" "}
        <b>healing clock</b> by <b>4</b>. At any time, you may spend{" "}
        <b className="text-red-500">1 Blood</b> to tick your{" "}
        <b>healing clock</b> by <b>2</b>.
      </TypographyP>
      <TypographyH4>Weapons of the Wolf</TypographyH4>
      <TypographyP>
        Your external ivory is cold and still, perfect to sink the heat of
        burning blood into. Spend <b className="text-red-500">1 Blood</b> to
        make your claws and teeth as sharp and hard as steel. If you don&apos;t
        have <i>Predator&apos;s Pulse</i>, mark a{" "}
        <b>level 1 harm: painful overgrowth</b>.
      </TypographyP>
      <TypographyH4>Sturdy Skin</TypographyH4>
      <TypographyP>
        Cornered prey can last out in a desperate gambit to hurt their predator.
        You are immune to injury from small or weakly swung weapons. Spend{" "}
        <b className="text-red-500">1 Blood</b> to reduce an incoming{" "}
        <b>harm</b> by 2 steps.
      </TypographyP>
      <TypographyH4>Skillful Shifting</TypographyH4>
      <TypographyP>
        You can complete your shifting in a heartbeat if needbe, and it&apos;s
        no longer painful or messy.
      </TypographyP>
      <TypographyH4>Grand Appetite</TypographyH4>
      <TypographyP>
        A well fed wolf grows. Gorge on <b className="text-red-500">3 Blood</b>{" "}
        at once to increase the physical size of your transformation and gain{" "}
        <b className="text-red-500">+1 max Blood</b>. You gain an additional{" "}
        <b>condition</b>: <i>Insatiable</i>.
      </TypographyP>
      <TypographyBlockquote>
        <b>Insatiable</b>: you cannot <b>recover</b> or pursue a{" "}
        <b>long term project</b>. Clear by indulging your appetite (
        <b>-2 blood</b> or <b>food</b>)
      </TypographyBlockquote>
    </>
  );
}
