import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function Vaporwave() {
  return (
    <>
      <TypographyP>
        The <span className="font-cyber">&quot;Vaporwave&quot;</span> is strange
        and powerful technology, even in the cyber age. Rather than a mental
        trigger, it employs an old fashioned panel of buttons and dials which
        controls the chrome. Even weirder for this kind of tech, it&apos;s
        fueled by a bloodwell in the chrome itself. There&apos;s only enough
        blood in the well for one activation. After that, it&apos;s on{" "}
        <span className="font-cyber">Hush</span> to give it more - from
        themselves or others.
      </TypographyP>
      <TypographyP>
        When activated, a wave of cool, inky vapor flows from{" "}
        <span className="font-cyber">Hush&apos;s</span> sleeve. This isn&apos;t
        like a fog which blocks or refracts the light; the vapor creates an
        absence of light in its wake.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        Root provides Hush with a specialty device to refuel the Vaporwave: a
        slim razorknife which can act as a syringe.
      </TypographyBlockquote>
    </>
  );
}
