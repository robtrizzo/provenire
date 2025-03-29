import { TypographyP } from "@/components/ui/typography";
import { distortedStyle } from "@/lib/styles";

export default function CombatAwareness() {
  return (
    <TypographyP>
      Mirado is the hand to hand martial art which compliments soldiers equipped
      with{" "}
      <span style={distortedStyle}>redacted redacted red actedredacted</span>.
      Mirado is about centering yourself in the eye of the storm and reacting to
      the situation as it changes.
    </TypographyP>
  );
}
