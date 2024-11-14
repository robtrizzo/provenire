import { TypographyP } from '@/components/ui/typography';
export default function Mediciner() {
  return (
    <>
      <TypographyP>
        You can <b>cobble</b> with people&apos;s blood, bones, and bodily
        humors. You may spend <b>2 material</b> and a downtime activity to act
        as a <b>mediciner</b> for your crew.{' '}
        <i>What else do you notice about them during treatment?</i>
      </TypographyP>
      <TypographyP>
        When you <b>gather information</b> about maladies or corpses, take{' '}
        <b>+1d</b>.
      </TypographyP>
    </>
  );
}
