import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
export default function Page() {
  return (
    <>
      <TypographyH1>Before anyone can remember</TypographyH1>
      <TypographyP>
        {' '}
        <strong>Jolana Arbor</strong> woke up.
      </TypographyP>
      <TypographyP>
        She wandered fields resting thousands of slumberers.
      </TypographyP>
      <TypographyP>
        Until she saw <strong>it</strong>. A bright monolith, suspended above
        her kin.
      </TypographyP>
      <TypographyP>
        She reached out to <strong>it</strong>, frightened, but awed by{' '}
        <strong>it&apos;s</strong> beauty and warmth.
      </TypographyP>
      <TypographyP>
        <strong>It</strong> filled her outstretched hand with{' '}
        <strong>water</strong>.
      </TypographyP>
      <TypographyP>
        <strong>Jolana</strong> had never known thirst, but a new instinct
        compelled her to drink.
      </TypographyP>
      <TypographyP>
        <strong>Jolana</strong> had never known danger, but new senses awoke her
        to impending calamity.
      </TypographyP>
      <TypographyP>
        <strong>Jolana</strong> had never known war, but new power she used to
        hide away the slumberers.
      </TypographyP>
      <TypographyP>
        <strong>She</strong> scattered them to the winds, trees, and sands in
        the corners of the world.
      </TypographyP>
      <TypographyP>
        They somehow survived the battle <strong>she</strong> fought for them.
      </TypographyP>
      <TypographyP>And eventually one woke up.</TypographyP>
      <TypographyP>
        Her first sight was of <strong>Jolana</strong>, who was embracing her
        and laughing with joy. <strong>Jolana</strong> tearfully named her{' '}
        <strong>Anya</strong>, and daughter.
      </TypographyP>
      <TypographyP>
        As more awoke, <strong>Jolana</strong> begged their forgivness before
        whispering into <strong>Anya&apos;s</strong> ear and kissing her one
        last time.
      </TypographyP>
      <TypographyP>
        Before <strong>Anya</strong> could speak a word to her mother,{' '}
        <strong>Jolana</strong> was swallowed by the heavens, never to be seen
        again.
      </TypographyP>
      <TypographyH2>Awakening</TypographyH2>
      <TypographyP>
        Those who awoke found themselves in a harsh and unforgiving world.
      </TypographyP>
      <TypographyP>
        Each person boldly spoke a language that only they could understand.
      </TypographyP>
      <TypographyP>
        <strong>Water</strong> was nowhere to be found, people instead
        subsisting off of animal <strong>blood</strong>.
      </TypographyP>
      <TypographyP>
        Strange monoliths dot the varied lanscapes of the world, gigantic and
        enigmatic.
      </TypographyP>
      <TypographyH2>The First Donum</TypographyH2>
      <TypographyP>
        No one knows what <strong>Jolana</strong> said to <strong>Anya</strong>{' '}
        that morning, but in the aftermath of the <strong>Awakening</strong>,
        young <strong>Anya</strong> performed a miracle.
      </TypographyP>
      <TypographyP>
        High on the hills above her former resting place stood three of the
        strange monoliths. <strong>Anya</strong> stood between them, and
        commanded them to give her <strong>water</strong>.
      </TypographyP>
      <TypographyP>
        The monoliths obeyed, and <strong>Anya</strong> drank. She then
        commanded them to give <strong>water</strong> to the world.
      </TypographyP>
      <TypographyP>
        The monoliths obeyed. <strong>Anya</strong> watched as water flowed from
        the monoliths, and into the rolling hills below.
      </TypographyP>
      <TypographyP>
        In <strong>Anya&apos;s</strong> language, she named her miracle{' '}
        <em>Donum Aquae</em> - the Gift of Water.
      </TypographyP>
      <Separator />
      <div className="w-full flex">
        <Link href="/setting/first-age" className="ml-auto">
          <Button variant="outline">
            The First Age <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
