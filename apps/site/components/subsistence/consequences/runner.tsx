import { TypographyUnorderedList } from "@/components/ui/typography";

export default function Runner() {
  return (
    <TypographyUnorderedList>
      <li>
        You get cornered by an overseer and forced to talk. The crew loses{" "}
        <strong>1 intel</strong>.
      </li>
      <li>
        You deliver another shipment to a seemingly secret project. Advance the{" "}
        <span className="italic">Dreadful Cargo clock</span> by 1.
      </li>
    </TypographyUnorderedList>
  );
}
