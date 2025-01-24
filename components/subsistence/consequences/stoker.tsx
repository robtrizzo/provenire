import { TypographyUnorderedList } from "@/components/ui/typography";

export default function Stoker() {
  return (
    <TypographyUnorderedList>
      <li>
        The furnace room&apos;s smoke is poisoning you. Add a temporary{" "}
        <strong>level 1 harm</strong>: &quot;black lung&quot;.
      </li>
      <li>
        The furnace is missing a crucial part that no one knows how to fix.
        Advance the <span className="italic">Detonation clock</span> by 1.
      </li>
    </TypographyUnorderedList>
  );
}
