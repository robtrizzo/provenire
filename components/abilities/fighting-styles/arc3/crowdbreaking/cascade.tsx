import { TypographyP } from "@/components/ui/typography";
export default function Cascade() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Basic Weapons Training
      </span>
      <TypographyP>
        Your attacks with crowdbreaking weapons are your choice of{" "}
        <i>painful</i> or <i>frightening</i>. You may choose for your attacks to
        be less lethal in order to make them affect all nearby foes in front of
        you.
      </TypographyP>
    </>
  );
}
