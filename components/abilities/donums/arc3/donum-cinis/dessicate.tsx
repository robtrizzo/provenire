import { TypographyP } from "@/components/ui/typography";
export default function Dessicate() {
  return (
    <>
      <TypographyP>
        Whatever this power is, even if it&apos;s fueled by{" "}
        <b className="text-blue-500">Water</b>, it <i>hates</i>{" "}
        <b className="text-blue-500">Water</b>. Even brief contact with a foe
        with <b className="text-blue-500">Water</b> in their body causes them to
        lose <b className="text-blue-500">1 Water</b>.
      </TypographyP>
      <TypographyP>
        If you spend <b className="text-blue-500">1 Water</b>, you can exert
        your power on a piece of a foe&apos;s body you touch; it withers and
        begins flaking away.
      </TypographyP>
    </>
  );
}
