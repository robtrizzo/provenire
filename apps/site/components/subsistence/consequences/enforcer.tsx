import { TypographyUnorderedList } from "@/components/ui/typography";

export default function Enforcer() {
  return (
    <TypographyUnorderedList>
      <li>
        You&apos;re forced to give an ally a beating. The crew loses{" "}
        <strong>1 goodwill</strong>.
      </li>
      <li>
        You don&apos;t do the job the way the overseers want. Advance the{" "}
        <span className="italic">Threat to your family clock</span> by 1.
      </li>
    </TypographyUnorderedList>
  );
}
