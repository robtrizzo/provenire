import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function InconelCore() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> <i>Takota&apos;s Remembrance</i>,{" "}
        <i>Bronze Bones</i>, <i>Brass Coils</i>, <i>Zinc Pulse</i>,{" "}
        <i>Nickel Vessel</i>, <i>Silver Sight</i>, <i>Mercurial Skull</i>
      </span>
      <TypographyP>
        The body can adapt amazingly to harsh conditions, undergoing
        transformations to survive. Pushing the body to its brink for Aldams can
        trigger a similar metamorphosis. Gorge on{" "}
        <b className="text-red-500">5 Blood</b> and activate every Greodran
        Aldam to burst your <i>Maeonic Gut</i>. Mark a{" "}
        <b>level 5 harm: hemorrhage</b>.
      </TypographyP>
      <TypographyP>
        If you survive, your body becomes the new vessel for blood. Your may now
        hold up to <b className="text-red-500">5 Blood</b> in reserve. Whenever
        you embibe blood, tick your <b>healing clock</b> by <b>2</b>. For as
        long as you have <b className="text-red-500">1 or more Blood</b>, you
        are slightly stronger, tougher, quicker, and more perceptive than the
        typical human. If you ever deplete your blood, mark the{" "}
        <b>Blood-starved</b> condition.
      </TypographyP>
      <TypographyBlockquote>
        <b>Blood-starved</b>: you feel feeble, slow, and dim. Clear by gorging
        on <b className="text-red-500">3 Blood</b>.
      </TypographyBlockquote>
    </>
  );
}
