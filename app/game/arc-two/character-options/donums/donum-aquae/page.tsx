import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { checkAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const { error } = await checkAuth("user", ["donum-aquae"]);
  if (error) redirect("/game/arc-two/character-options/donums");

  return (
    <>
      <Breadcrumbs />
      <TypographyH1>
        Donum Aquae{" "}
        <span className="text-muted-foreground">(Gift of Water)</span>
      </TypographyH1>
      <TypographyBlockquote>
        &quot;<b>Donum Aquae</b>, the linchpin of power. The doorway to
        divinity. The key to my ascension!&quot; - Vantro
      </TypographyBlockquote>
      <TypographyP>
        You can feel it. The power spiderwebbing through your interior. Pressing
        into every extremity. Clawing against the edges of your body like hound
        trapped in too small a cage. The power&apos;s desperate potential fuels
        you, animates your body, and activates your senses.
      </TypographyP>
      <TypographyBlockquote>
        &quot;It was quite precious to them. The Argosi. They built their lives,
        their city, their very culture around it. And if I&apos;m allowed to
        speculate, I would guess it was their god, too.&quot; - Doctor Kantor
      </TypographyBlockquote>
      <TypographyP>
        As your senses expand, you become aware of Feasting City&apos;s rain.
        Every single drop. It&apos;s not a noise or a smell. It&apos;s the
        feeling of someone staring at the back of your head, but kaleidoscoped
        in a million directions. The power draws you and the rain closer
        together. It feels as if it wants to funnel the contents of the very sky
        through you.
      </TypographyP>
      <TypographyBlockquote>
        &quot;We thought all the Argosi Donums were lost to war. Even a single
        one could change the course of the rebellion.&quot; - Handler Glory
      </TypographyBlockquote>
      <TypographyP>
        You know what others want from <b>Donum Aquae</b>. You have a vague
        impression of what the power wants with you. But what can you actually
        wield this power to do?
      </TypographyP>
      <TypographyBlockquote>
        You begin with <b className="text-blue-500">2 max Water</b>. To gain{" "}
        <b>Donum Aquae</b> abilities, spend <b>3 xp clocks</b> during the{" "}
        <b>Train</b> activity.
      </TypographyBlockquote>
      <TypographyH4>Flow</TypographyH4>
      <TypographyP>
        You relax the edges of your form and allow the power&apos;s interior
        fractal to extend outside of you. The fractal naturally reaches for
        sources of water - instinctually even. Moving the fractal on your own
        accord is a mighty task at first, but soon it&apos;s as natural as
        drawing breath. You may slowly move water around the size of a hand. You
        may spend <b className="text-blue-500">1 Water</b> to be capable of
        moving up to the rough volume of an adult human{" "}
        <span className="text-muted-foreground">OR</span> to move the water
        forcefully.
      </TypographyP>
      <TypographyH4>Form</TypographyH4>
      <TypographyP>
        Left untouched by <b>Donum Aquae</b>, ice and mist slowly return to
        water. Time spent feeling the delicate rearangement of tiny particles
        has taught you how to do this yourself. You may condense mist or melt
        ice into water; you may spend <b className="text-blue-500">1 Water</b>{" "}
        to disperse water into mist or crystalize it into ice.
      </TypographyP>
      <TypographyH4>Finesse</TypographyH4>
      <TypographyP>
        As your control over the fractal improves, so too does your ability to
        mold water into the shape you desire. You may slowly create simple
        shapes with water you control, but if you wish to create complex forms
        or do so quickly, you must spend{" "}
        <b className="text-blue-500">1 Water</b>.
      </TypographyP>
      <TypographyH4>Fabricate</TypographyH4>
      <TypographyP>
        The interior fractal&apos;s cravings can be molded into a self
        sustaining cycle of consumption and creation. At the beginning of{" "}
        <b>Donwtime</b> and whenever <b>Time Passes</b>, you gain{" "}
        <b className="text-blue-500">1 Water</b>. If this would cause you to
        overflow, you take a <b>level 2 harm: ruptures</b>.
      </TypographyP>
      <TypographyP>
        You can speed this process along, though wasting huge amounts of energy
        in the process. Spend <b className="text-blue-500">1 Water</b> to
        immediately create water around the volume of a hand.
      </TypographyP>
      <TypographyH4>Force</TypographyH4>
      <TypographyP>
        Once the interior fractal has been released, it has an incredibly larger
        space to expand into. At first, this was frightening and you felt
        yourself hold it back. You let go of that now. It will return to you.
      </TypographyP>
      <TypographyP>
        When you use another <b>Donum Aquae</b> ability, you may spend an
        additional <b className="text-blue-500">1 Water</b> to affect ten times
        the amount of water. Make a <b>1d fortune roll</b>; on a <b>1-5</b>,
        your use of the ability is your choice of <i>slow</i>{" "}
        <span className="text-muted-foreground">OR</span> <i>catastrophic</i>.
      </TypographyP>
      <TypographyH4>Fill</TypographyH4>
      <TypographyP>
        The line between interior water and exterior water is thin. Only
        separated by the border of your self, which you&apos;ve already learned
        to extend the fractal out of. You now learn to allow external water to
        flow in, replenishing <b className="text-blue-500">1 Water</b>{" "}
        immediately; you take a <b>level 1 harm: permeated</b>.
      </TypographyP>
    </>
  );
}
