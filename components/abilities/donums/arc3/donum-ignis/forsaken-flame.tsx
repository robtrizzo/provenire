import { TypographyP } from "@/components/ui/typography";
export default function ForsakenFlame() {
  return (
    <>
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to twist{" "}
        <b>Kingwulf&apos;s</b> flame into a reflection of your own hate. For a
        short duration, your flames can only harm those you hold the deepest
        animosity towards.
      </TypographyP>
      <TypographyP>
        <i>Blazing</i>: despite your great strength, His flame exerts its own
        agency; it cannot be extinguished by those who love no one, or those who
        are loved by no one.
      </TypographyP>
    </>
  );
}
