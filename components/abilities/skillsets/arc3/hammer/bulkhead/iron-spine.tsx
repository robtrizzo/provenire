import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function IronSpine() {
  return (
    <>
      <TypographyP>
        You gain a space to record <b>level 4 harm</b>. When you mark a{" "}
        <b>harm</b> in this space, also mark <b>2 xp</b> and the <b>Scarred</b>{" "}
        condition.
      </TypographyP>
      <TypographyBlockquote>
        <b>Scarred</b>: you are in constant pain. Clear by having no harms.
      </TypographyBlockquote>
    </>
  );
}
