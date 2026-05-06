import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function Seek() {
  return (
    <>
      <TypographyP>
        Both predators and prey rely on stillness and camoflage to hide, though
        often while watching you in plain sight. Spend{" "}
        <b className="text-red-500">1 Blood</b> to ask the <b>Narrator</b> two
        of the following questions. They must answer honestly.
      </TypographyP>
      <TypographyUnorderedList>
        <li>How many are watching?</li>
        <li>Where is the most dangerous one?</li>
        <li>Are they about to attack?</li>
      </TypographyUnorderedList>
    </>
  );
}
