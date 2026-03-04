import { TypographyP } from "@/components/ui/typography";
export default function MyBodyIsMyMachine() {
  return (
    <div>
      <TypographyP>
        When someone tries to dominate or intimidate the Strategist, it costs{" "}
        <b>1 stress less</b> to <b>resist</b>.
      </TypographyP>
      <TypographyP>
        <i className="text-sm text-muted-foreground">
          If this makes the <b>stress</b> cost negative, instead recover that
          much <b>stress</b>.
        </i>
      </TypographyP>
    </div>
  );
}
