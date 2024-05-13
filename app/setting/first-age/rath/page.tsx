import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyBlockquote,
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
      <TypographyH1>Rath</TypographyH1>
      <TypographyBlockquote>
        GORGE ON MEAT AND BLOOD AND KILL AND TEAR AND HUNT AND HOWL
      </TypographyBlockquote>
      <TypographyH2>Harmony and Savagery</TypographyH2>
      <TypographyP>
        Almost all of the <strong>Rathi</strong> can be found in one great clan,{' '}
        <strong>Clan des Wolfes</strong>. The clan moves slowly through their
        dense jungle home, gathering no more than is necessary to survive,
        leaving be anything they don&apos;t require. They strive not to make a
        permanet mark on the land so that when they reuturn, resources will be
        just as bountiful.
      </TypographyP>
      <TypographyP>
        This contrasts strongly with the <strong>Rathi</strong> hunt. Packs of{' '}
        <Donum>Donum Rex</Donum> surge through the trees, murdering everything
        in their path, consuming their fill before bringing the scraps back to
        the clan.
      </TypographyP>
      <TypographyH2>Immortal God King</TypographyH2>
      <TypographyP>
        To the <strong>Rath</strong>, their king, <strong>Kingwulf</strong>, is
        older than history itself. A hulking beast: monstrous in ferocity,
        appetite, and size. He is the originator of <Donum>Donum Rex</Donum>,
        the bloodline of almost guaranteed <em>Donums</em>. His will is law, and
        his word is truth. <strong>Rath</strong> culture is built around his
        whims and desires.
      </TypographyP>
      <TypographyP>
        A few reckless <strong>Rathi</strong> have dared to challenge him, none
        surviving. Countless assassination attempts have been made on him across
        his multi century lifetime, each as fruitless as the last. It seems to
        many that <strong>Kingwulf</strong> is as he claims: immortal, and that
        he will rule <strong>Rath</strong> forever.
      </TypographyP>
      <TypographyBlockquote>
        How <strong>Hamdi Ghodbane</strong> conquered{' '}
        <strong>Clan des Wolfes</strong> with <strong>Kingwulf</strong> in power
        is one of many secrets tragically lost to time.
      </TypographyBlockquote>
      <TypographyH2>Of Beasts and Men</TypographyH2>
      <TypographyP>
        <strong>Rathi</strong> are different from any other nation in that only
        one in twenty <strong>Rathi</strong> children are borth <em>without</em>{' '}
        a <em>Donum</em>. The <strong>Rathi</strong> attribute this superiority
        to their flesh along with the careful nurturing of{' '}
        <strong>Kingwulf&apos;s</strong> bloodline.
      </TypographyP>
      <TypographyP>
        In <strong>Rath</strong>, whenever a male <em>Weilder</em> proves
        themself or accomplishes a notable feat, he is allowed to pick a wife
        from among the women of the clan. The stronger the <em>Weilder</em>, the
        more feats he accomplishes, the more wives <strong>Kingwulf</strong>{' '}
        allows them. Until then, <strong>Kingwulf</strong> owns the right to
        mate with any women he sees fit.
      </TypographyP>
      <TypographyP>
        People of other cultures recoil at the <strong>Rathi&apos;s</strong>{' '}
        customs, but the <strong>Rathi</strong> claim it to be necessary to cull
        the weak bloodlines and proliferate the strongest ones.
      </TypographyP>
      <TypographyP>
        This however, leads to swaths of wifeless <strong>Rathi</strong> men,
        the <em>Unwurdig</em>. The <em>Unwurdig&apos;s</em> lot in life is
        ravenously pursuing any battle, any challenge they possibly can: in the
        hopes that they will be noticed and awarded a wife.
      </TypographyP>

      <TypographyH2>Of Men and Monsters</TypographyH2>
      <TypographyP>
        There is an anomaly, a blight in the <strong>Rathi</strong> bloodline,
        or so they consider it. Roughly three in a thousand{' '}
        <strong>Rathi</strong> children aren&apos;t born with{' '}
        <Donum>Donum Rex</Donum>, but instead with{' '}
        <Donum>Exsecratus Portentum</Donum>.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            Instead of the ability to shapeshift into a wolf with{' '}
            <Donum>Donum Rex</Donum>, <Donum>Exsecratus Portentum</Donum> can
            shapeshift into all sorts of different beasts. For some, it goes
            even beyond recognizable beasts and into the realm of monsters:
            tentacles, extra eyes, mandibles, an unnatural mix of traits from
            all creatures.
          </TypographyP>
          <TypographyP>
            The <strong>Rathi</strong> abhor this <em>Donum</em>, instead naming
            it dirty, an unholy curse even. <strong>Rathi</strong> children
            develop their <em>Donums</em> very early, around the age of two, and
            without needing to drink water. If a mother discovers her child is{' '}
            <Donum>Exsecratus Portentum</Donum>, she will often abandon the
            child in the jungle to die.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 text-white div-2 box-border border-t-2 border-b-2">
          <TypographyH4>Gifts of Transformation</TypographyH4>
          <TypographyP>
            There once were dozens, maybe hundreds of <strong>Rathi</strong>{' '}
            <em>Donums</em> named by <strong>Anya Arbor</strong>, but now there
            are only two. One is celebrated while the other is shunned and
            culled:
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Rex</Donum>: Gift of the King
            </li>
            <li>
              <Donum>Exsecratus Portentum</Donum>: Accursed Monster
            </li>
          </ul>
        </div>
      </div>
      <TypographyP>
        Deep in the jungle far past where <strong>Clan des Wolfes</strong> is
        willing to go, there is a second clan. <strong>Clan Verlassene</strong>,
        a tribe of the outcasts from the great clan. They do their best to save
        abandoned children and those to be killed for their possession of{' '}
        <Donum>Exsecratus Portentum</Donum>, but their numbers are never large.
        They live in exile, only occasionally venturing out into the world for
        trade or to escape <strong>Clan des Wolfes</strong> hunting parties.
      </TypographyP>
      <TypographyBlockquote>
        One day, we will drive <em>them</em> from the jungle. We will run{' '}
        <em>them</em> down, cursing their name. We will take their wives and
        make <em>our</em> blood the inheritance of <strong>Rathi</strong>{' '}
        generations to come!
      </TypographyBlockquote>
      <TypographyH2>Quenched with Blood</TypographyH2>
      <TypographyP>
        The <strong>Rathi</strong> have long forgotten how to activate{' '}
        <strong>Life Ducts</strong>, making no attempts to do so for many
        generations. Instead, the <strong>Rathi</strong> drink solely the blood
        of their hunts.
      </TypographyP>
      <TypographyP>
        Where it began from necessity, now the <strong>Rathi</strong> view water
        as an unfinished substance. That all water is destined to become blood,
        and that blood is the only liquid that can truly sate thirst. While they
        spend time in other lands, <strong>Rathi</strong> begrudgingly drink
        &ldquo;raw&rdquo; water so as not to thirst, but hey make no attempt to
        hide their disdain for those who choose water over blood.
      </TypographyP>
      <TypographyP>
        Despite their beliefs about water, <strong>Kingwulf&apos;s</strong>{' '}
        children are always sent to <strong>Helix</strong> for{' '}
        <strong>Drinking Day</strong> each year. Theis both serves as an
        opportunity to trade, diplomacy, and to show off the strength of{' '}
        <strong>Kingwulf&apos;s</strong> bloodline.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/first-age/narscillia">
          <Button variant="outline">
            <ChevronLeft /> Narscillia
          </Button>
        </Link>
        <Link href="/setting/first-age/shian-tor">
          <Button variant="outline">
            Shian Tor <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
