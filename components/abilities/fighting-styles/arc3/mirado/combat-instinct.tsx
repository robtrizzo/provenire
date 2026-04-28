import { TypographyP } from "@/components/ui/typography";
export default function CombatInstinct() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Combat Awareness
      </span>
      <TypographyP>
        You cannot be surprise attacked by anything which is possible to
        perceive with ordinary senses. This is best complimented with cyberware
        granting sensory input beyond normal human ranges.
      </TypographyP>
    </>
  );
}
