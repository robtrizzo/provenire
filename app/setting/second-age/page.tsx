import {
  TypographyH1,
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>New Beginning</TypographyH1>
      <TypographyBlockquote>
        An age ago, the world was shattered and remade, or so the legends go.
      </TypographyBlockquote>
      <TypographyP>
        The Gods themselves walked upon our soil. Our greatest warriors had
        fallen, or had joined the enemy. The world was ending. Humanity was at
        its bitter end.
      </TypographyP>
      <TypographyP>
        What happened next, no one can remember. Not the scholars, the
        historians, the world travellers, no records, no memory remains of the
        time between the <strong>Old Gods</strong> and the <strong>New</strong>.
      </TypographyP>
      <TypographyP>
        All that&apos;s left of that time is legend, myth, and heresay.
        Centuries have come and gone since those fateful years, but much has
        changed from how it once was.
      </TypographyP>
      <TypographyP>
        There was a period between ages when the <strong>New Gods</strong>{' '}
        worked their labors and miracles. They introduced the written word,
        unveiled the celestial bodies in the sky, created the four seasons, and
        taught us how to harness the power within the{' '}
        <strong>Life Ducts</strong>.
      </TypographyP>
      <TypographyP>
        The beginning of the <strong>Second Age</strong> is the{' '}
        <strong>Great Dream</strong>. A dream that all of humanity shared. The
        seven <strong>New Gods</strong> appeared before us, declaring that they
        were renouncing their power, taking their leave. But they said not to
        despair, for the power will not truly be gone - it will be here for
        those worthy enough to take it.
      </TypographyP>
      <TypographyBlockquote>
        <TypographyH3>Final Words of the Great Dream</TypographyH3>
        <TypographyP>
          The greatest trials for humanity are yet to come. And when they do, we
          eagerly await the new heroes who will overcome them.
        </TypographyP>
      </TypographyBlockquote>
      <TypographyH2>Aftermath of their Departure</TypographyH2>
      <TypographyP>
        The <strong>New Gods</strong> taught the people of the world how to open
        the <strong>Life Ducts</strong>. And from that water, many new{' '}
        <em>Donums</em> were born. Thousands of families with no history of
        power began to have children with incredible new abilities that shook
        the structure of societies. By the time the <strong>New Gods</strong>{' '}
        had faded into myth, it was more common to have a <em>Donum</em> than
        not.
      </TypographyP>
      <TypographyP>
        And as it always seems to go, the people with power began to take power.
        Migrations, treaties, wars, nations did everything within their power to
        seize as many <strong>ducts</strong> as possible.
      </TypographyP>
      <TypographyP>
        However, the power of all <em>Donums</em> were not what they used to be.
        The legendary abilities of the heroes of the past slowly rose out of
        reach, leaving those withour power to sieze a larger role than they ever
        had a chance to. But without that great power of the past, surviving in
        the wild became even harder than it had ever been.
      </TypographyP>
      <TypographyH2>
        <em>Ascending</em>
      </TypographyH2>
      <TypographyP>
        Rather than helping their peoples, many of the greatest warriors and
        hunters of all cultures instead became one of the <em>Ascending</em>:
        one who preoccupies their time with the{' '}
        <strong>Trials of Godhood</strong>, a series of great feats, challenges,
        and combats fabled to earn that power the <strong>New Gods</strong> had
        referenced in the <strong>Great Dream</strong>.
      </TypographyP>
      <TypographyP>
        Because of this, tribes, caravans, nations had to offer opulent rewards
        to attract the attention of <em>Ascending</em>, and not necessarily ones
        from their own cultures. Nations now competed for the attention of the{' '}
        <em>Ascending</em>, and the <em>Ascending</em> competed for the rewards
        of the nations.
      </TypographyP>
      <TypographyP>
        Nowadays, being an <em>Ascended</em> means less of an obsession with
        godhood and more about attracting wealthy employers.{' '}
        <strong>The Trials of Godhood</strong> are now just a way to vie for
        higher rank and pay.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/first-age/shian-tor">
          <Button variant="outline">
            <ChevronLeft /> Shian Tor
          </Button>
        </Link>
        <Link href="/setting/second-age/anidine">
          <Button variant="outline">
            Anidine <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
