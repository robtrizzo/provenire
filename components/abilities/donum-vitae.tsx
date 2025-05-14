import { TypographyP } from "@/components/ui/typography";
export default function DonumVitae() {
  return (
    <>
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
    </>
  );
}
