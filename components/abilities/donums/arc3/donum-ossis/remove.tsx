import { TypographyP } from "@/components/ui/typography";
export default function Remove() {
  return (
    <>
      <TypographyP>
        You may spend <b className="text-blue-500">1 Water</b> to extract a bone
        from the body. If paired with <b>Rupture</b>, it can be done relatively
        harmlessly. Extracting from someone else is far outside of your skill
        unless the bone has first been ruptured from their body.
      </TypographyP>
    </>
  );
}
