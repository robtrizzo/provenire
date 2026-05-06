import { TypographyP } from "@/components/ui/typography";
export default function HaltedBlood() {
  return (
    <>
      <TypographyP>
        Bloodflow is vital to life. It moves as certainly as the sun rises. When
        held still, blood crystalizes. You may spend{" "}
        <b className="text-red-500">1 Blood</b> to reinforce this crystalization
        and solidify all of the blood in your body. This reduces an incoming{" "}
        <b>harm</b> by <b>3 steps</b>, though briefly paralyzes you.
      </TypographyP>
      <TypographyP>
        Using <i>Excited Blood</i> instantly melts the crystals and removes the
        paralysis.
      </TypographyP>
    </>
  );
}
