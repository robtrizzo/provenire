import { TypographyP } from "@/components/ui/typography";
export default function FerociousProtector() {
  return (
    <>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        When protecting children, you may <b>push yourself</b> for free and no
        amount of <b>harms</b> can take you out of the fight.
      </TypographyP>
      <TypographyP>
        You gain an <b>xp trigger:</b>{" "}
        <i>Did you save children from monsters?</i>
      </TypographyP>
    </>
  );
}
