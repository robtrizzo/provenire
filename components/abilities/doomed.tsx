import { TypographyP, TypographyBlockquote } from "@/components/ui/typography";

export default function Doomed() {
  return (
    <>
      <TypographyP>
        The curse&apos;s worst impacts can be mitigated by careful
        compartmentalization and isolation. Though, embracing the curse grants
        certain abilities. At the cost of <b>stress</b>. Your character gains a
        new <b>condition: Doomed</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>Doomed</b>: A flood of unwanted memories and the inevitability of the{" "}
        <b>Curse of Outer Sight</b> takes an emotional toll. You cannot{" "}
        <b>comfort</b> or <b>shift blame</b>. Clear by ticking your{" "}
        <b>Doom clock</b>.
      </TypographyBlockquote>
      <TypographyP>
        <b>Curse of Outer Sight</b> has a <b>Doom clock</b>. Each time your
        character marks another tick on the clock, they unlock a new ability
        granted by the curse. When the clock fills, your doom arrives.
      </TypographyP>
    </>
  );
}
