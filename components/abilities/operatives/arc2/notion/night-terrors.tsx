import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function NightTerrors() {
  return (
    <>
      <TypographyP>
        You begin experiencing terrible nightmares. Vivid scenes of you and your
        loved ones suffering at the hands of wretched fiends. But your memories
        are shelved - did this happen? Is this why you joined{" "}
        <span className="font-cyber">Root</span>?
      </TypographyP>
      <TypographyP>
        <b>Vakr</b> has some answers:
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        Don&apos;t worry, that&apos;s not your real family. In fact,
        they&apos;re not real at all. These are signals I use to prime the beast
        persona for its vengeful aspects. This is good news! It means
        you&apos;re synchronizing with{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span>.
      </TypographyBlockquote>
      <TypographyP>
        Real or not, the impression the dreams leave on{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span> is very real.
        When <span className="font-cyber">Notion</span> encounters the subject
        of their night terrors (the player ultimately decides when this
        happens), <span className="font-cyber">&quot;Ravager&quot;</span> will
        attempt a multi-manefestation to kill them.{" "}
        <span className="font-cyber">Notion</span> can choose to resist this,
        but if they don&apos;t, <b>+2 heat</b>.
      </TypographyP>
    </>
  );
}
