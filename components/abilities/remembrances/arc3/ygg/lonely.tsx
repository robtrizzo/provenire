import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function Lonely() {
  return (
    <>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Solitude is survival. Others are threats. Especially close ones.
        They&apos;re just clever predators waiting for their chance to pounce.
        Replace the <b>Afraid</b> condition with <b>Lonely</b>. As a{" "}
        <b>downtime activity</b> you may drive others away from you. If you do,
        mark <b>Lonely</b> to clear two other conditions.
      </TypographyP>
      <TypographyBlockquote>
        <b>Lonely:</b> clear by advancing a <b>bond</b>.
      </TypographyBlockquote>
    </>
  );
}
