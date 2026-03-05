import { TypographyP } from "@/components/ui/typography";
export default function Shadow() {
  return (
    <TypographyP>
      You may expend your <b className="text-yellow-500">special armor</b> to{" "}
      <b>resist</b> detection / security measures{" "}
      <span className="text-muted-foreground">OR</span> to perform a feat of
      athletics or stealth.
    </TypographyP>
  );
}
