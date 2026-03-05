import { TypographyP } from "@/components/ui/typography";
export default function Prototypes() {
  return (
    <TypographyP>
      You may <b>push yourself</b> to:{" "}
      <i>perform a feat of acrobatics that verges on the superhuman</i>{" "}
      <span className="text-muted-foreground">OR</span>{" "}
      <i>
        maneuver in a manner which confuses your enemies into mistakenly
        attacking each other
      </i>
      .
    </TypographyP>
  );
}
