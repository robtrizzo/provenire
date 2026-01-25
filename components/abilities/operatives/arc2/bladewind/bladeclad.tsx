import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function Bladeclad() {
  return (
    <>
      <TypographyP>
        <span className="font-cyber">&quot;Deathknell&quot;</span> isn&apos;t
        recognizable tech to any of{" "}
        <span className="font-cyber">Feasting&apos;s</span> corps because it
        isn&apos;t technology in the way they understand it. It&apos;s employs a
        fusion of traditional neural interface connections alongside an ancient
        power: <b>Donum Ferro</b>. A series of adamantine-tipped spikes are
        inserted into the wearer&apos;s body. These spikes pull blood and
        circulate it throughout the metal plates that clad their body. What this
        ends up looking like is a suit of armor made up of metal blades that are
        slowly bleeding through the surface.
      </TypographyP>
      <TypographyBlockquote>
        <span className="font-cyber">&quot;Deathknell&quot;</span> pulls a
        substantial amount of blood fromt he wearer. For as long as you wear{" "}
        <span className="font-cyber">&quot;Deathknell&quot;</span>, mark a{" "}
        <b>level 2 harm: drained</b>.
      </TypographyBlockquote>
      <TypographyP>
        <span className="font-cyber">&quot;Deathknell&quot;</span> is both a
        suit of armor and a weapon. The entire apparatus is made up of hundreds
        of <b className="text-rose-500">Blades</b>; represented by a{" "}
        <b>Blade Pool</b>. <b className="font-cyber">Bladewind</b> starts with{" "}
        <b className="text-rose-500">3 max Blades</b>. They may spend{" "}
        <b className="text-rose-500">1 Blade</b> to reinforce themselves and
        reduce an incoming <b>harm</b> by <b>2 steps</b>{" "}
        <span className="text-muted-foreground">OR</span> to use that{" "}
        <b className="text-rose-500">Blade</b> as a close-to-medium ranged
        weapon.
      </TypographyP>
    </>
  );
}
