import { TypographyP } from "@/components/ui/typography";
import { Link } from "lucide-react";
export default function ReapersSurge() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Reckless Mindset
      </span>
      <TypographyP>
        You may <b>push yourself</b> to perform a feat of terrible strength on
        an opponent vulnerable to you.
      </TypographyP>
    </>
  );
}
