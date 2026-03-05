import { TypographyP } from "@/components/ui/typography";
export default function ThePathLessTraveled() {
  return (
    <TypographyP>
      If the Adventurer chooses not to participate in a group activity during{" "}
      <b>downtime</b>, they gain{" "}
      <code>
        <b className="text-emerald-500">+1 push</b>
      </code>{" "}
      to rolls made on their <b>downtime</b> activities.
    </TypographyP>
  );
}
