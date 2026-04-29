import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
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
    </>
  );
}
