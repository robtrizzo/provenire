import { TypographyP } from "@/components/ui/typography";
export default function Freeze() {
  return (
    <>
      <TypographyP>
        In the Toran grasses every motion triggers a cascade of swaying strands.
        Hunter and hunted alike can&apos;t afford rustles to give them away. You
        may spend <b className="text-red-500">1 Blood</b> to lock your joints
        and freeze in place. You may exist comfortably in this position for as
        long as you wish, but it can be painful to move again after too long.
        After 1 hour, 1 day, and 1 week, mark a{" "}
        <b>level 1 harm: fused joints</b>.
      </TypographyP>
      <TypographyP>
        If you also know <i>Persist</i>, you don&apos;t require food for as long
        as you remain still.
      </TypographyP>
    </>
  );
}
