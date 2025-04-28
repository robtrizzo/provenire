import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographyBlockquote,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { distortedStyle } from "@/lib/styles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { checkAuth } from "@/lib/auth";
export default async function Page() {
  return (
    <>
      <TypographyH1>Transformations</TypographyH1>
      <TypographyH2>Bestial Transformations</TypographyH2>
      <TypographyP>
        They range from minor bodily changes to full bestial shapeshifting. For{" "}
        <i>thinbloods,</i> this process wracks them with pain and can leave them
        partially warped in a way which they can&apos;t reverse. As for the{" "}
        <i>thickblooded</i> beasts, the mastery of their form is limited only by
        the purity of their bloodline and the volume of their appetite.
      </TypographyP>
      <TypographyP>
        Most children, even the <i>thinblooded</i> ones, begin manifesting signs
        before their teenage years. Many will be wracked with{" "}
        <i>surge sickness</i>: uncontrollable and sudden transformations which
        can leave the child severely wounded. Overcoming this is part of coming
        of age in Rathi society.
      </TypographyP>
      <TypographyP>
        For some though, (especially for those with particularly thin Rathi
        heritage), they may not see signs of transformation until well into
        their adulthood. Moments of extreme duress can coax the transformation
        out. Rathi scholars speculate that this is a defense mechanism of the{" "}
        <i>thinblooded</i>: a last ditch effort to become predator even as they
        are the prey.
      </TypographyP>
      <TypographyBlockquote>
        In the Steel Trap, anyone could have traces of Rathi blood. If you
        choose, you may select a <b>bestial transformation</b> as your
        character&apos;s <b>Donum</b>. This does not lock you to <i>only</i>{" "}
        this <b>Donum</b> permanently, but this is a permanent choice and will
        affect character options throughout the game.
      </TypographyBlockquote>
      <TypographyP>
        Bestial transformations have an <b>Emergence clock</b>. Each time your
        character marks a condition or a level 3 harm, they mark the{" "}
        <i>Emergence clock</i>. Once full, your character unlocks their{" "}
        <i>Donum Provenire</i>: a moment of your choosing where the
        transformation fully manifests and provides your character with dramatic
        power in that scene.
      </TypographyP>
      <TypographyP>
        After the <i>Donum Provenire</i>, the transformation enters a new phase:{" "}
        <i>Donum Nascence</i>. Your character&apos;s <i>Maeonic Gut</i> grows,
        storing more blood than prey could.
      </TypographyP>
      <TypographyBlockquote>
        You gain <b className="text-red-500">+1 max Blood</b>. Any time your
        belly is empty (no blood), take a{" "}
        <b>level 1 permanent harm: blood-starved</b>.
      </TypographyBlockquote>
      <TypographyP>
        Nascent beasts can control elements of their transformations, though
        they still have a lifetime to grow into the art.
      </TypographyP>
      <TypographyBlockquote>
        Your character may advance their <i>Donum&apos;s Nascence</i> skill tree
        by spending <b>3 xp clocks</b> during the <b>Train</b> activity.
      </TypographyBlockquote>
      <TypographyP>
        Anytime you are transformed and roll a <b>1-3</b>, you experience a{" "}
        <i>mishap</i>. A <i>mishap</i> is a danger or complication spawned from
        your unfamiliarity with your own power. When <i>mishaps</i> occur,{" "}
        <b>mark 1 xp</b>; they may be resisted as normal.
      </TypographyP>
      <TypographyP>
        <i>Nascent</i> beasts have a <b>Nascence clock</b>. Each time your
        character spends <b>blood</b> or experiences a <i>mishap</i>, they mark
        the <b>Nascence clock</b>. Once full, your character unlocks their{" "}
        <i>Donum Metamorphosis</i>: a moment of your choosing where the
        transformation permanently evolves and provides your character with
        dangerous power in that scene.
      </TypographyP>
      <TypographyP>
        After the <i>Donum Metamorphosis</i>, the transformation enters a new
        phase: <i>Donum Versance</i>.
      </TypographyP>
      <p style={distortedStyle} className="select-none mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ut
        explicabo autem in provident deserunt ipsa pariatur excepturi maxime,
        omnis, id officia blanditiis minima repellendus esse necessitatibus,
        obcaecati qui! Itaque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vero quia error voluptatem aperiam, architecto
        reiciendis aliquam? Dolorum, odio voluptas dolores ab esse veniam autem,
        reiciendis, incidunt nemo ad perspiciatis voluptatem?
      </p>
      <DonumRex />
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/sources-of-power/aldams">
          <Button variant="outline">
            <ChevronLeft /> Aldams
          </Button>
        </Link>
        <Link href="/game/sources-of-power/donums">
          <Button variant="outline">
            Donums <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}

async function DonumRex() {
  const { error } = await checkAuth("user", ["donum-rex"]);
  if (error) {
    return (
      <>
        <TypographyH3 className="mb-2">
          Donum Rex{" "}
          <span className="text-muted-foreground">(Gift of the King)</span>
        </TypographyH3>
        <p style={distortedStyle} className="select-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non quia
          obcaecati itaque eum aperiam quisquam molestias sequi temporibus
          atque, dolores odit, magni, impedit distinctio dolor? Quos, totam
          minima. Nostrum!
        </p>
        <p style={distortedStyle} className="select-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          doloremque, nihil modi iure consequuntur officiis error rem debitis
          natus minima aspernatur maiores nulla ab quod. Asperiores tenetur
          suscipit odit dolorem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident at iure obcaecati, voluptatem nihil velit
          veniam ratione rem placeat officiis a, dignissimos ex vero ut sed esse
          incidunt, voluptatibus est!
        </p>
      </>
    );
  }
  return (
    <>
      <TypographyH3 className="mb-2">
        Donum Rex{" "}
        <span className="text-muted-foreground">(Gift of the King)</span>
      </TypographyH3>
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
