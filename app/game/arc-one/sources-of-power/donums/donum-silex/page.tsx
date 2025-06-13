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
  const { error } = await checkAuth("user", ["donum-silex"]);
  if (error) redirect("/game/arc-one/sources-of-power/donums");
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Sources of Power", href: "/game/arc-one/sources-of-power" },
          { name: "Donums", href: "/game/arc-one/sources-of-power/donums" },
          { name: "Donum Silex", href: "#" },
        ]}
      />
      <TypographyH1 className="mb-2">
        Donum Silex{" "}
        <span className="text-muted-foreground">(Gift of Stone)</span>
      </TypographyH1>
      <TypographyP>
        When you imagined the ancient power of the Arborians, how did you think
        it would make you feel? Brimming with potential? Companionship with your
        forebears? Whatever your preconceptions or fantasies, there is nothing
        which could have prepared you for this.
      </TypographyP>
      <TypographyP>
        You sense something new outside of yourself. You are standing over it;
        and it is frighteningly large. So large, that you feel your head spin in
        the pursuit of comprehending its largeness. Your mind slackens and the
        scope of this perception accellerates; you quickly find your smallness
        has vanished within a fraction of the immensity.
      </TypographyP>
      <TypographyP>
        When you come back to yourself, you know with certainty that this
        immensity is yours to shape. In ages past perhaps you would have had
        instructors versed in nurturing this ability in you. But for you, this
        will be a personal journey.
      </TypographyP>
      <TypographyBlockquote>
        To gain <b>Donum Silex</b> abilities, spend <b>3 xp clocks</b> during
        the <b>Train</b> activity
      </TypographyBlockquote>
      <TypographyH4>
        Hidden by the <i>Largeness</i>
      </TypographyH4>
      <TypographyP>
        The <i>largeness</i> was overwhelming to behold at first, but now that
        you&apos;re more familiar with its presence, your senses are free to
        detect closer, smaller things. You always know which direction is down.
        You always know if something is made from stone or earth, in part or in
        full. You may spend <b className="text-blue-500">1 Water</b> to detect
        particularly strong and weak points in stone.
      </TypographyP>
      <TypographyH4>Fractal Growth</TypographyH4>
      <TypographyP>
        When <b>Donum Silex</b> is channeled in its raw form, a chalky, brittle
        rock formation begins to grow. It naturally spirals into a fractal
        helix. Spend <b className="text-blue-500">1 Water</b> to grow stone up
        to the rough size of an adult human.
      </TypographyP>
      <TypographyH4>Move Stone</TypographyH4>
      <TypographyP>
        In the scope of the <i>largeness</i>, even impossibly heavy stones are
        possible for you to lift. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to slowly move stone or earth
        up the rough volume of an adult human{" "}
        <i className="text-muted-foreground">OR</i> forcefully move stone or
        earth up to the size of a hand.
      </TypographyP>
      <TypographyH4>Santoris Art</TypographyH4>
      <TypographyP>
        Of all <b>Donum Silex&apos;s</b> aspects, the Santorises prized molding
        and sculpting above all else. Their gift is not a device for war; it is
        an art form. A gift to them, and from them to the world.
      </TypographyP>
      <TypographyP>
        You may spend <b className="text-blue-500">1 Water</b> to sculpt
        existing stone or earth into the shape you desire. All stone touched by{" "}
        <b>Donum Silex</b> desires a fractal helix shape. Guiding it into
        something else is a difficult task. Stronger and more brittle substances
        are more difficult to shape.
      </TypographyP>
      <TypographyH4>Latticework</TypographyH4>
      <TypographyP>
        The more you interact with stone, the more you learn the deeply
        intricate properties of each kind. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to change the properties of up
        to roughly an adult human&apos;s volume of stone.
      </TypographyP>
      <TypographyH4>Ancestral Right</TypographyH4>
      <TypographyP>
        You are held back from greater feats only by your lack of water. Oh,
        what things you could do with the unlimited access your ancestors had.
        Conume <b className="text-blue-500">3 Water</b> at once to dilate the
        cooling pathways in your body and gain{" "}
        <b className="text-blue-500">+1 max Water</b>.
      </TypographyP>
      <TypographyP>
        When you use another <b>Donum Silex</b> ability, you may spend an
        additional <b className="text-blue-500">1 Water</b> to affect ten times
        the amount of material. Make a <b>1d fortune roll</b>; on a <b>1-5</b>,
        your use of the ability is your choice of <i>slow</i>{" "}
        <i className="text-muted-foreground">OR</i> <i>catastrophic</i>.
      </TypographyP>
    </>
  );
}
