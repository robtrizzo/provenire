import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>Bwarhei</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/rath">
          <Button variant="outline">Rath in the First Age</Button>
        </Link>
      </div>
      <TypographyH2>The Monster Hordes</TypographyH2>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            <strong>Bwarhei</strong> has no government or structure to it. The
            only thing defining its borders is the dangerous man-monster hybrids
            which will defend them. In other places in the world, it is uncommon
            for a child to develop powers strong enough to be called a{' '}
            <em>Donum</em>, maybe a third do. In <strong>Bwarhei</strong>, every
            child is a powerful <em>Wielder</em> of{' '}
            <Donum>Donum Portentum</Donum>, the Gift of the Monster. Even more
            significantly, the nature of <Donum>Donum Portentum</Donum>{' '}
            challenges the beliefs of many scholars about how people come about
            their power. The children of <strong>Bwarhei</strong> never drink
            from a <strong>duct</strong>. The subsist solely on the blood of the
            animals they kill.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>Vengeance</TypographyH4>
          <TypographyP>
            Long have the inheritors of <Donum>Donum Portentum</Donum> suffered
            under the genocide of the <strong>Rathi</strong>, and now{' '}
            <strong>Fenrir</strong>. From the ferocity of their forefathers, now
            the monsters have home, a sanctuary from the jaws of the wolf. And
            soon will be the day to show them the suffering of a hundred
            generations.
          </TypographyP>
        </div>
      </div>
      <TypographyP>
        There are many working theories as to why this may be, but the scholars
        need more information, to study the phenomenon more closely. But{' '}
        <strong>Bwarhei</strong> is not for scholars and academics. Only the
        savage and the ruthless can survive in its monster-infested jungles.
      </TypographyP>
      <TypographyH2>Blood War</TypographyH2>
      <TypographyP>
        <strong>Bwarhei</strong> has been at war with both{' '}
        <strong>Fenrir</strong> and <strong>Cumeria</strong> for the last four
        hundred years. The <strong>Bwarhein</strong> were able tos ecure their
        current borders in a mad scramble after the{' '}
        <strong>New Gods&apos;</strong> departure, and the scramble has never
        ended. Without a structured military, the <strong>Bwarhein</strong>{' '}
        warriors rely on the sheer berserk strength of their bretheren to defend
        the border. They are birthed in blood, survive by blood, and die by
        blood. They will not have their land taken from them. Every last{' '}
        <strong>Bwarhein</strong> will be dead before they give in.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/argos">
          <Button variant="outline">
            <ChevronLeft /> Argos
          </Button>
        </Link>
        <Link href="/setting/second-age/cumeria">
          <Button variant="outline">
            Cumeria <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
