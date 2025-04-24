import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
  return (
    <>
      <TypographyH1>Aldams</TypographyH1>
      <TypographyP>
        <b>Aldam</b> is an ancient <i>Gredoran</i> word. The original meaning is
        long lost to history, but now it can be described as a cluster of
        meanings. <b>Made from earth&apos;s mud</b>, a{" "}
        <b>phantom of the self</b>, the <b>intensity of blackness</b>, a moment
        of <b>wishful thinking</b>, and most commonly, the{" "}
        <b>art of burning blood</b>.
      </TypographyP>
      <TypographyP>
        In bygone ages, many cultures had unique practices of <b>Aldam</b>. But
        the workers of the <b>Steel Trap</b> are ignorant to this history. To
        the <i>Rathi</i>, <b>Aldam</b> is synonymous with the power of a well
        fed beast.
      </TypographyP>
      <TypographyH2>Learning Aldam</TypographyH2>
      <TypographyP>
        <b>Aldam</b>, the <b>art of burning blood</b> revolves around just that,{" "}
        <b>blood</b>. For any child growing up eating animals, <b>Aldam</b>{" "}
        comes naturally to them. Moments of strength, sharp wits, or keen
        hearing are common while they&apos;re developing into young adults. Even
        so, <b>Aldam</b> is dangerous. Mishaps are common. Severe injuries can
        be avoided with years of slow growth and careful parenting.
      </TypographyP>
      <TypographyP>
        <b>The Crew</b> has no such allowances. Learning <b>Aldam</b> will be a
        treacherous matter.
      </TypographyP>
      <TypographyP>
        First, one must activate the <i>Maeonic Gut</i>, which is shriveled and
        atrophied with disuse. Raw meat will do in a pinch, but it is best to do
        so with a drought of warm <b>blood</b>. Be warned: once activated, the{" "}
        <i>Maeonic Gut</i> will hunger.
      </TypographyP>
      <TypographyBlockquote>
        Resuscitate the <i>Maeonic Gut</i> by consuming{" "}
        <b className="text-red-500">1 Blood</b>. Any time your{" "}
        <i>Maeonic Gut</i> becomes empty, take a{" "}
        <b>level 1 permanent harm: blood-starved</b>.
      </TypographyBlockquote>
      <TypographyP>
        Next one must learn to ignite the <b>blood</b>. This can require months
        or years of work. This is time <b>The Crew</b> does not have. There are
        ways to accellerate the process... <i>Rathi</i> scholars have theorized
        instinctual ignition falls into the categories of prey and predator
        responses.
      </TypographyP>
      <TypographyBlockquote>
        Achieve initial ignition by: taking a <i>level 3 harm</i> while being
        hunted, <b className="text-muted-foreground">OR</b> by hunting another
        living thing for food.
      </TypographyBlockquote>
      <TypographyP>
        Once ignited, the <b>blood</b> in the <i>Maeonic Gut</i> will burn away
        into nothing. To use it, one must learn to circulate the <b>blood</b>{" "}
        where it needs to go. This is the art and essence of <b>Aldam</b>, and
        where each culture&apos;s practices diverge.
      </TypographyP>
      <TypographyBlockquote>
        Generations of <b>Lanorella&apos;s</b> forebears have passed down the
        art of ancient <i>Gredoran Aldam</i> in secret. This is what she will
        teach you. Each ability can be acquired with <b>3 xp clocks</b> and the{" "}
        <b>Train</b> action with <b>Lanorella</b> as your tutor.
      </TypographyBlockquote>
      <TypographyH2 id="gredoran">Gredoran Aldam</TypographyH2>
      <TypographyP>
        In <i>Gredoran Aldam</i>, there are three points of the body&apos;s
        divine triangle: the limbs, the heart, and the eyes. Each point of the
        divine triangle requires a lifetime to master, yet each are essential
        unto one another. The arts are named from the holy <i>Gredoran</i>{" "}
        metals. Adorning onesself with these metals is taught to enhance these
        aspects.
      </TypographyP>
      <TypographyH3>Limbs</TypographyH3>
      <TypographyP>
        Limbs are the tools with which the body creates and destroys.
      </TypographyP>
      <TypographyH4 id="bronze-bones">Bronze Bones</TypographyH4>
      <TypographyP>
        Ignited blood tempers a region of your body to near-metal durability.
        Spend <b className="text-red-500">1 Blood</b> to reduce an incoming{" "}
        <b>harm</b> by 2 steps. Inexperienced practitioners run the risk of
        fusing their joints.
      </TypographyP>
      <TypographyH4 id="brass-coils">Brass Coils</TypographyH4>
      <TypographyP>
        Ignited blood flushes your muscles with fire and audacity. Spend{" "}
        <b className="text-red-500">1 Blood</b> to accomplish a feat of
        superhuman strength <b className="text-muted-foreground">OR</b> speed.
        Unless also activating <i>Bronze Bones</i>, the stress on your body is
        substantial: mark a <b>level 2 harm</b>.
      </TypographyP>
      <TypographyH3>Heart</TypographyH3>
      <TypographyP>Heart is the core, center, the self.</TypographyP>
      <TypographyH4 id="zinc-pulse">Zinc Pulse</TypographyH4>
      <TypographyP>
        Ignited blood blossoms from the heart to the skin, restoring the inner
        self. Spend <b className="text-red-500">1 Blood</b> to heal a{" "}
        <b>harm</b> by 2 steps. This is a rapid and imprecise process prone to
        misalignment and excess scar tissue. If this does not clear the{" "}
        <b>harm</b>, it becomes a <b>permanent level 1 harm: scar-tissue</b>.
      </TypographyP>
      <TypographyH4 id="nickel-vessel">Nickel Vessel</TypographyH4>
      <TypographyP>
        The self is amorphous and expansive, though self discovery requires hard
        work. Gorge on <b className="text-red-500">3 Blood</b> at once to grow
        your <i>Maeonic Gut</i> permanently. You may now hold up to{" "}
        <b className="text-red-500">2 Blood</b> in reserve.
      </TypographyP>
      <TypographyH3>Eyes</TypographyH3>
      <TypographyP>
        Eyes are the mind and the external world brought into the self.
      </TypographyP>
      <TypographyH4 id="silver-sight">Silver Sight</TypographyH4>
      <TypographyP>
        Ignited blood opens your senses and allows the external world to pour
        in. Spend <b className="text-red-500">1 Blood</b> to briefly enhance
        your raw perception. Unless also activating <i>Mercurial Skull</i>, the
        stimuli is overwhelming: mark a <b>2 stress</b>.
      </TypographyP>
      <TypographyH4 id="mercurial-skull">Mercurial Skull</TypographyH4>
      <TypographyP>
        Ignited blood cools your mind and crystalizes thought. Spend{" "}
        <b className="text-red-500">1 Blood</b> to accomplish a task of
        superhuman reflexes <b className="text-muted-foreground">OR</b>{" "}
        quick-wittedness. The interior molten mind works as quickly as the
        exterior crystaline mind. Act on one of your <b>conditions</b> or{" "}
        <b>mark 2 stress</b>.
      </TypographyP>
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/sources-of-power">
          <Button variant="outline">
            <ChevronLeft /> Sources of Power
          </Button>
        </Link>
        <Link href="/game/sources-of-power/transformations">
          <Button variant="outline">
            Transformations <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
