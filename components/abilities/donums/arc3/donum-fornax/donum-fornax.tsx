import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function DonumFornax() {
  return (
    <>
      <TypographyP>
        When the power hollowed you out, it left you with the giddy sensation of
        potential. Because before anything great can be created, its components
        must first be pulled apart. Much like your future works, the power is
        not finished with you yet. But you aren&apos;t just a tool for reality
        to shape at its whim; you can shape reality back.
      </TypographyP>
      <TypographyP>
        As a Gredoran <b>Donum</b>, rather than{" "}
        <b className="text-blue-500">Water</b>, <b>Donum Fornax</b> is fueled by{" "}
        <b className="text-red-500">Blood</b>. Increase your{" "}
        <b className="text-red-500">max Blood</b> by <b>1</b>. If you had a{" "}
        <i>Demi Ijeta</i>, the process of bleeding for the power would be
        easier. Without one, you must do the bloodletting yourself: as an extra
        cost to using a <b>Donum Fornax</b> ability, you must mark a{" "}
        <b>level 1 harm: bloodlet</b>.
      </TypographyP>
      <TypographyBlockquote>
        A <b>Demi Ijeta</b> is an heirloom pauldron wich pierces the wearer with
        an <b className="text-mauve-500">Adamantine</b> spike. The spike serves
        two purposes. It connects your blood to the blood of all who have worn
        it before you, establishing a continuity from your predesesors to you.
        If you would ever awaken a <b>Donum</b>, this is when it happens. The
        spike also draws <b className="text-red-500">Blood</b> to fuel Gredoran{" "}
        <b>Donums</b>.
      </TypographyBlockquote>
    </>
  );
}
