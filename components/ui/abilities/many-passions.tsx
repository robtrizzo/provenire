import { TypographyP } from '@/components/ui/typography';
export default function ManyPassions() {
  return (
    <div>
      <TypographyP>
        For each attribute, the Artist gains <strong>+1d</strong> on the first
        roll they make with that attribute each mission. On the third or later
        rolls they make with a particular attribute, they take{' '}
        <strong>-1d</strong>. At the end of the mission, if they've made four or
        more rolls with unique action combinations, they mark{' '}
        <strong>1 xp</strong>.
      </TypographyP>
    </div>
  );
}
