import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function InSearchOfACalling() {
  return (
    <div>
      <TypographyP>
        The Idealist is connected with a sense of purpose to uplift others. They
        feel other people&apos;s suffering as if it was their own. At the start
        of the game, pick a community from:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Children working the Big Grid</li>
        <li>Impoverished sleeve-leasers</li>
        <li>Favorless marked as prey</li>
        <li>Prisoners converted to cyber-assistants</li>
      </TypographyUnorderedList>
      <TypographyP>
        While in direct pursuit of helping your community, take <b>-1 stress</b>{" "}
        to push yourself or assist a teammate. If you betray your community,
        mark a <b>condition.</b> When you complete your community&apos;s goal,
        mark <b>6 xp</b> and choose a new community.
      </TypographyP>
    </div>
  );
}
