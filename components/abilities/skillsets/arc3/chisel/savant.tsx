import { TypographyP } from "@/components/ui/typography";
export default function Savant() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> disassemble and study a piece of cyberware
      </span>
      <TypographyP>
        You don&apos;t need to know the underlying science of a device to
        understand how its pieces are supposed to work together. You may spend{" "}
        <b>1 material</b> to repair a piece of futuretech or cyberware; add two
        negative traits to it. You may cannibalize a piece of that tech to add
        two positive traits and a negative trait to an existing piece of
        equipment.
      </TypographyP>
    </>
  );
}
