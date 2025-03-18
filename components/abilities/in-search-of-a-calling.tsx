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
        <li>Children working the boiler&apos;s valves</li>
        <li>Lungsick stokers</li>
        <li>Smelter workers on the nightmare shift</li>
        <li>Detainees hanging from crow&apos;s cages</li>
      </TypographyUnorderedList>
      <TypographyP>
        While in direct pursuit of helping your community, take <b>-1 stress</b>{" "}
        to push yourself or assist a teammate. If you betray your community,
        mark a <b>condition.</b> When you complete your community&apos;s goal,
        mark <b>1 xp</b> and choose a new community.
      </TypographyP>
    </div>
  );
}
