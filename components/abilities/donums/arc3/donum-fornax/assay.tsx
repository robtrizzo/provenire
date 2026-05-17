import { TypographyP } from "@/components/ui/typography";
export default function Assay() {
  return (
    <>
      <TypographyP>
        When you hold something in your hands, you can feel the veins and
        chambers of materials which make it up. You know their proportions,
        locations, and basic material properties. You know if each material is,
        or was ever alive. This last sense is one your predecessors have spent
        their lives puzzling over. You can feel that the coal folded into the
        steel was at one point alive. You can feel the life in a tooth; and as
        that tooth is polished you can feel the moment it becomes ivory.
      </TypographyP>
      <TypographyP>
        If the object is larger than handheld or held by someone else, you must
        spend <b className="text-red-500">1 Blood</b> to sense its properties.
      </TypographyP>
      <TypographyP>
        If an object has even a gram of{" "}
        <b className="text-mauve-500">Adamantine</b> within it, you can sense it
        from across the room. Unless it is held by someone else; in which case
        it is impervious to your senses.
      </TypographyP>
    </>
  );
}
