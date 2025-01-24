import {
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
export default function CallThemOut() {
  return (
    <div>
      <TypographyP>
        When the Adventurer notices someone acting differently, they can draw
        attention to it and ask:
      </TypographyP>
      <TypographyUnorderedList>
        <li>What are your true feelings toward _?</li>
        <li>How long have you been hiding your part in _ scheme?</li>
      </TypographyUnorderedList>
      <TypographyP>
        If they answer, they mark <strong>1 xp</strong>. If they refuse, they
        mark <strong>2 stress</strong>.
      </TypographyP>
    </div>
  );
}
