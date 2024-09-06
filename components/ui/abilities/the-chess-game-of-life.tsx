import { TypographyP } from '@/components/ui/typography';
export default function TheChessGameOfLife() {
  return (
    <div>
      <TypographyP>
        You have significant people in your life. It&apos;s important to you
        that you have the relationship you want with them.
      </TypographyP>
      <TypographyP>
        <strong>Friends</strong>: best friend, intellectual match, wise mentor,
        crush.
      </TypographyP>
      <TypographyP>
        <strong>Foes</strong>: overseer, abuser, rival, doubter.
      </TypographyP>
      <TypographyP>
        At the start of each mission, pick one friend or foe.
        <strong>+1d</strong> to any action that helps shift their view of you in
        the direction you want.
      </TypographyP>
    </div>
  );
}
