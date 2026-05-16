import { TypographyP } from "@/components/ui/typography";
export default function Resolve() {
  return (
    <>
      <TypographyP>
        Manufactured objects are putty in your hands. You may completely
        disassemble something you hold into neat piles of its core components.
        If you wish to affect a larger object (up to the size of an adult human)
        or an object someone else holds, spend{" "}
        <b className="text-red-500">1 Blood</b>.
      </TypographyP>
      <TypographyP>
        Objects others hold which contain any amount of{" "}
        <b className="text-mauve-500">Adamantine</b> are immune to your power.
      </TypographyP>
    </>
  );
}
