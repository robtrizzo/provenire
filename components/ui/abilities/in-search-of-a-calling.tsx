import {
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
export default function InSearchOfACalling() {
  return (
    <div>
      <TypographyP>
        The Idealist is connected with a sense of purpose to uplift others. They
        feel other people's suffering as if it was their own. At the start of
        the game, pick a community from:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Children working the boiler's valves</li>
        <li>Lungsick stokers</li>
        <li>Smelter workers on the nightmare shift</li>
        <li>Detainees hanging from crow's cages</li>
      </TypographyUnorderedList>
      <TypographyP>
        While in direct pursuit of helping your community, take{' '}
        <strong>-1 stress</strong> to push yourself or assist a teammate. If you
        betray your community, mark a<strong>condition.</strong> When you
        complete your community's goal, mark <strong>1 xp</strong> and choose a
        new community.
      </TypographyP>
    </div>
  );
}
