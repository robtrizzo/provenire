import {
  TypographyBlockquote,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function Potential() {
  return (
    <>
      <TypographyP>
        It starts slowly. A flick of the wrist, a missed shot. Ten more,
        contact. Ten more, bullseye. One thousand bullseyes. Your body brims
        with potential, waiting for you to feed it the stimuli to continue the
        eternal journey forward.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Quill</span> has a second <b>xp tracker</b>{" "}
        for action-exclusive <b>xp</b>, filled when marking <b>potential</b>.{" "}
        <span className="font-cyber">Quill</span> marks <b>potential</b> when
        they:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          make a <b>physical action roll</b>
        </li>
        <li>
          make a <b>physical action roll</b> they have not used yet this mission
        </li>
        <li>
          <b>push themselves</b> on a <b>physical action roll</b>
        </li>
        <li>
          crit on a <b>physical action roll</b>
        </li>
      </TypographyUnorderedList>
      <TypographyBlockquote>
        A <b>physical action roll</b> is any action roll which is judged to
        involve <span className="font-cyber">Quill&apos;s</span> sleeve
        interacting with the world around them
      </TypographyBlockquote>
      <TypographyP>
        As part of any <b>physical action roll</b>,{" "}
        <span className="font-cyber">Quill</span> may spend{" "}
        <b>potential clocks</b> to advance that <b>action</b>.
      </TypographyP>
    </>
  );
}
