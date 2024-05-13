import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyBlockquote,
  TypographyH2,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>Shian Tor</TypographyH1>
      <TypographyBlockquote>
        This land is beautiful, but eerie. You could spend weeks wandering the
        grass without one <strong>Toran</strong> in sight. And not for lack of
        their presence.
      </TypographyBlockquote>
      <TypographyH2>Ghosts in the Reeds</TypographyH2>
      <TypographyP>
        <strong>Shian Tor</strong> is a land rich with life. Great herds of
        buffalo, antelope, and elephants roam the open landscape, and predators
        trail behind. Territory bountiful enough that one might think it&apos;s
        perfect to settle and domesticate. The <strong>Torans</strong> made this
        mistake once, and of the last time. Because circling overhead in the
        quiet grasslands are one of the world&apos;s most dangerous predators:
        dragons.
      </TypographyP>
      <TypographyP>
        The fearsome creatures jealously guard the only permanently open{' '}
        <strong>Life Duct</strong> outside of <strong>Helix</strong>. No one
        knows why the dragons do this, but the same story is told by every{' '}
        <strong>Toran</strong> tribe:
      </TypographyP>
      <TypographyBlockquote>
        The dragons have made us spirits of the grasses, always there - never
        seen.
      </TypographyBlockquote>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            For generations, the <strong>Torans</strong> have tried to open
            other <strong>Life Ducts</strong> across the grasslands, but to no
            avail. The dragons are always there, and they always attack. So
            their ancestors turned to their only other option: to survive by
            stealing from dragons. All people of <strong>Shian Tor</strong> are
            well versed in stealth, but a brave few earn the title of{' '}
            <em>Specter</em>. They take what they can from the sharp-eyed
            drakes, and to this day, only three <em>Specters</em> have ever been
            discovered.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 text-white div-2 box-border border-t-2 border-b-2">
          <TypographyH4>Specter&apos;s Boon</TypographyH4>
          <TypographyP>
            The <strong>Torans</strong> were only ever blessed with one{' '}
            <em>Donum</em>, and fortunately for them it is the most feared{' '}
            <em>Donum</em> across all seven cultures.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Aevum</Donum>: The Gift of Eternity
            </li>
          </ul>
        </div>
      </div>
      <TypographyH2>Dictate</TypographyH2>
      <TypographyP>
        Ever since they can remember, <strong>Torans</strong> were never a
        unified people. They quarreled, bickered, and fought over access to the
        water, none trusting the other tribes to be discrete enough to not
        attract attention.
      </TypographyP>
      <TypographyP>
        Conflict over rights to the water became almost ceremonial in nature as
        the tribe with the finest warriors would have the most access, and the
        least worthy tribe would be left to ascend into the mountains in
        pursuitt of snow.
      </TypographyP>
      <TypographyP>
        A strong and unique code of conduct developed among the{' '}
        <strong>Torans</strong>, this dogma is referred to as <em>Dictate</em>.
        To warriors and civilians alike, <em>Dictate</em> is obligation and
        honor. Performing one&apos;s duty in life and advancing the cause of the
        tribe is honor. Failure and shame are labeled as obligation - a debt to
        be repaid. The two don&apos;t cancel each other out, they are both a
        part of life.
      </TypographyP>
      <TypographyP>
        <em>Dictate</em> governs the way the <strong>Torans</strong> fight as
        well. The least amount of honor one can gain is by slaying an opponent.
        The <strong>Torans</strong> view this as too easy and wasteful.
        Capturing an enemy without harming them or ending a dispute without
        resorting to violence is the most honorable way to fight.
      </TypographyP>
      <TypographyP>
        Opponents who act violently despite capture, or decieve their opponents
        into negotiations only to attack are considered the most dishonorable.
        The <strong>Torans</strong> consider these people irredeemable, their
        obligation so high that it can never be repaid - except for one way.
      </TypographyP>
      <TypographyP>
        Those who wish to redeem themselves of otherwise insurmountable
        obligation can do so by becoming a <em>Docile</em>. <em>Dociles</em> are
        respected servants of the tribe and are treated with honor. They are not
        slaves, but they are not free. They are given the opportunity to repay
        their obligation by serving the tribe, and when the tribe has deemed
        their debt repaid, they are free to leave.
      </TypographyP>
      <TypographyP>
        There are many more ways to accrue obligation. Being cruel to a{' '}
        <em>Docile</em> or ordering them to perform shameful acts is one of the
        most common. The <strong>Torans</strong> are a proud people, and they
        will not tolerate those who would abuse their power. Persistently
        reminding another of their obligation is also considered shameful, as is
        publicly asking someone about their obligations.
      </TypographyP>
      <TypographyH2>Mountains of Exile</TypographyH2>
      <TypographyBlockquote>
        Finer warriors than <strong>Arboria</strong> has ever known have been
        belittled and exiled to the barren cliffs of <strong>Shian Tor</strong>.
      </TypographyBlockquote>
      <TypographyP>
        To many <strong>Torans</strong>, it is preferable for the entire tribe
        to become <em>Docile</em> before resorting to a life scraping snow off
        the windy peaks of the mountains. Some leaders however, are too proud to
        submit to their rivals, and doom their people to strife.
      </TypographyP>
      <TypographyP>
        The mountains of <strong>Shian Tor</strong> are rich with water in the
        form of snow, but what the plains have in abundance, the mountains lack.
        Food is scarce, and the few creatures that can be hunted on the steep
        slopes are no easy prey. Many a tribe has ventured into the mountains to
        never be seen again. Some wonder if there is a source of food deep in
        the mountains which allow tribes to stay, but many muse that a harsh
        death is far more likely.
      </TypographyP>
      <TypographyP>
        The mountains serve one other purpose for the <strong>Torans</strong>.
        Any who manifest <Donum>Donum Aevum</Donum> or any who aspire to lead
        their tribe must trek to the highest peak visible from the plains to a
        site known as the <strong>Red Scion</strong>. There, they sleep at the
        foot of the tree. On their return, their journey is recounted to the
        tribe, and if they are deemed worthy, they are embraced as a tribal
        leader.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/first-age/rath">
          <Button variant="outline">
            <ChevronLeft /> Rath
          </Button>
        </Link>
        <Link href="/setting/second-age">
          <Button variant="outline">
            New Beginning <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
