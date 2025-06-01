import { TypographyP } from "@/components/ui/typography";
export default function WrathfulHands() {
  return (
    <>
      <TypographyP>
        Releasing rage through your limbs causes the heat to enter your hands.
        You may spend <b className="text-blue-500">1 Water</b> to cause your
        hands to become hot enough to burn with a touch. Given enough time, they
        can even cause metal to glow.
      </TypographyP>
      <TypographyP>
        <i>Enraged:</i> You cannot be made to lose your grip on something you
        take hold of.
      </TypographyP>
    </>
  );
}
