import { TypographyUnorderedList } from "@/components/ui/typography";

export default function Machinist() {
  return (
    <TypographyUnorderedList>
      <li>
        The shifting innards nearly trap you. Take <strong>2 stress</strong>.
      </li>
      <li>
        The machine&apos;s issues require you to squirm deeper and deeper.
        Advance the <span className="italic">Belly of the Beast clock</span> by
        1.
      </li>
    </TypographyUnorderedList>
  );
}
