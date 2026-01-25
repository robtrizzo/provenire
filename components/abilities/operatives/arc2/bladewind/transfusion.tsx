import { TypographyP } from "@/components/ui/typography";
export default function Transfusion() {
  return (
    <>
      <TypographyP>
        Sometimes when the noise of the city dies down,{" "}
        <span className="font-cyber">Bladewind</span> can hear an unsettling
        clicking echoing from whithin the recesses of the suit.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Deathknell</span> already requires a
        sickening amount of the wearer&apos;s blood to function. But this is
        only the minimum. <span className="font-cyber">Bladewind</span> can
        allow it to fully slake its thirst, marking a{" "}
        <b>level 1 harm: drained</b>. This increases your{" "}
        <b className="text-rose-500">Blade Pool</b> to{" "}
        <b className="text-rose-500">5 max Blades</b>.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Deathknell</span> is always happy to drink
        more though. If <span className="font-cyber">Bladewind</span> indulges
        it with a <b>level 1 harm: drained</b>, they replenish{" "}
        <b className="text-rose-500">2 Blades</b>.
      </TypographyP>
    </>
  );
}
