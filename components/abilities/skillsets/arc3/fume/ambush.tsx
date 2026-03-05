import { TypographyP } from "@/components/ui/typography";
export default function Ambush() {
  return (
    <TypographyP>
      When you attack from hiding or spring a trap, gain{" "}
      <code>
        <b className="text-emerald-500">+1 push</b>
      </code>
      .
    </TypographyP>
  );
}
