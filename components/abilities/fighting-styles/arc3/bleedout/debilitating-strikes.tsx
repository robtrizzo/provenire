import { TypographyP } from "@/components/ui/typography";
export default function DebilitatingStrikes() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Skirmish
      </span>
      <TypographyP>
        Your attacks naturally hamper your foes in some way (
        <i>slowing, fatiguing, clouding senses, weakening</i>), though your
        strikes are less lethal.
      </TypographyP>
    </>
  );
}
