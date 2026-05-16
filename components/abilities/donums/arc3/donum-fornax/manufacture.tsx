import { TypographyP } from "@/components/ui/typography";
export default function Manufacture() {
  return (
    <>
      <TypographyP>
        Given all of the necessary material components, you may assemble them
        into any form your mind can articulate. This does not account for the
        quality or practicality of your creations; this is up to the skill of
        the creator.
      </TypographyP>
      <TypographyP>
        With even a gram of <b className="text-mauve-500">Adamantine</b>, you
        can create marvels. Metal that is compatible with flesh, tools with
        power rivaling <b>Donums</b>, devices which push the precedent of what
        is possible. The mightier the implement, the greater its cost in{" "}
        <b>heat</b>, <b className="text-mauve-500">Adamantine</b>,{" "}
        <b className="text-red-500">Blood</b>, and{" "}
        <b className="text-blue-500">Water</b>.
      </TypographyP>
    </>
  );
}
