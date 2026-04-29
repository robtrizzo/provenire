import { TypographyP } from "@/components/ui/typography";
export default function IraSympath() {
  return (
    <>
      <TypographyP>
        You gain a sixth sense which detects others&apos;s anger as easily as
        you could feel warmth from a nearby flame. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to intuit the source of their
        anger.
      </TypographyP>
      <TypographyP>
        <i>Enraged</i>: You may spend <b className="text-blue-500">1 Water</b>{" "}
        to intuit how to enrage someone who isn&apos;t already angry.
      </TypographyP>
    </>
  );
}
