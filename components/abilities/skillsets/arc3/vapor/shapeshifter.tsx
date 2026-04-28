import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function Shapeshifter() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> infiltrate the leadership structure of a hostile
        faction
      </span>
      <TypographyP>
        You can artfully embed yourself deep into the core of a faction while
        they&apos;re none the wiser. When you do this, mark the{" "}
        <b>Spread Thin</b> condition. While embedded, grant the crew{" "}
        <b>+2 engagement</b> when acting against this faction.
      </TypographyP>
      <TypographyBlockquote>
        <b>Spread Thin:</b> Clear by revealing your true identity to the ones
        you&apos;ve deceived. <b>+1 spite</b>.
      </TypographyBlockquote>
    </>
  );
}
