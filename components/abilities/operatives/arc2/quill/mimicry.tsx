import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function Mimicry() {
  return (
    <>
      <TypographyP>
        By following along with experts&apos; movements in high-adrenaline
        moments, skilled <span className="font-cyber">Quills</span> can learn
        from the best and begin to follow in their footsteps.
      </TypographyP>
      <TypographyP>
        When a teammate makes a <b>physical action roll</b> in which their
        rating is higher than <span className="font-cyber">Quill&apos;s</span>,{" "}
        <span className="font-cyber">Quill</span> can <b>assist</b> them for
        free.
      </TypographyP>
      <TypographyP>
        Add the following triggers to marking <b>potential</b>:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <span className="font-cyber">Quill</span> <b>assists</b> a teammate on
          a <b>physical action roll</b>
        </li>
        <li>
          participate in a group <b>physical action roll</b>
        </li>
      </TypographyUnorderedList>
    </>
  );
}
