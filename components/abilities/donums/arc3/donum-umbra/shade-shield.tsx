import { TypographyP } from "@/components/ui/typography";
export default function ShadeShield() {
  return (
    <>
      <TypographyP>
        Though not made of anything you can see or comprehend, the darkness is
        made of <i>something</i>. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to shape that shadowstuff into
        a field which briefly catches and slows motion. This reduces a{" "}
        <b>harm</b> caused by blunt force or swung weaponry by <b>4 steps</b>;
        by <b>2 steps</b> if caused by a piercing motion or weapon. When not in
        substantial darkness, this is <b>2 steps</b> less effective.
      </TypographyP>
    </>
  );
}
