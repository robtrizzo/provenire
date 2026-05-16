import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function Fathom() {
  return (
    <div className="flex flex-col gap-3">
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to perceive the
        true nature of a thing - its causes, its contradictions, the shape
        beneath the surface.
      </TypographyP>
      <TypographyP>
        Using this ability always <i>poses a question</i>, which captures the
        rational mind&apos;s interest until puzzled out or until you{" "}
        <b>take a breather</b> to let the question go.
      </TypographyP>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          0 Stamina
        </span>
        <TypographyP>
          The art empowers you with a flash of superhuman ration. You glean the
          logical root of a conflict, an argument&apos;s logical flaw, or the
          instinct under the surface of an expression.
        </TypographyP>
        <TypographyP>
          <i>Posed Questions</i> reduce your <b>max stress</b> by <b>1</b>.
        </TypographyP>
      </div>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          8 Stamina
        </span>
        <TypographyP>
          The art empowers your mind with superhuman ration for 1 minute. During
          this time you cannot be deceived by surface appearances or
          misdirection.
        </TypographyP>
        <TypographyP>
          <i>Posed Questions</i> cause you to mark <b>2 stress</b> whenever{" "}
          <b>time passes</b>.
        </TypographyP>
      </div>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          20 Stamina
        </span>
        <TypographyP>
          The art empowers your mind with superhuman ration for the duration of
          a scene. Cause and effect become transparent to you. If you use this
          during <b>downtime</b> you may:
        </TypographyP>
        <TypographyUnorderedList>
          <li>
            ask the GM:{" "}
            <i>How can I acquire the critical fact I&apos;m missing?</i>
          </li>
          <li>
            solve a <i>posed question</i> and clear <b>2 stress</b>
          </li>
        </TypographyUnorderedList>
      </div>
    </div>
  );
}
