import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function SeekingPurpose() {
  return (
    <div>
      <TypographyP>
        The Advocate is always seeking their purpose. Once they&apos;ve found
        it, they strive to do it justice. At the start of the game, pick a
        purpose from:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Protect _ from _ at all costs</li>
        <li>Exact vengeance on _ for _</li>
        <li>Overcome your personal failing to _</li>
        <li>Form a deep connection with _</li>
      </TypographyUnorderedList>
      <TypographyP>
        While in direct pursuit of your purpose, take <b>-1 stress</b> to push
        yourself or assist a teammate. If you betray your purpose, mark a{" "}
        <b>condition</b>. When you complete your purpose, mark <b>1 xp</b> and
        choose a new purpose.
      </TypographyP>
    </div>
  );
}
