import { TypographyP } from "@/components/ui/typography";
export default function Masterwork() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> improve a piece of equipment three times
      </span>
      <TypographyP>
        You may designate a single piece of equipment as your <b>masterwork</b>.
        Give it a name. You may have a <b>bond</b> with your chosen{" "}
        <b>masterwork</b> which you may spend <b>1 stress</b> to add to rolls
        which involve it.
      </TypographyP>
    </>
  );
}
