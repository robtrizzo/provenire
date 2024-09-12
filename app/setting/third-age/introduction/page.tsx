import Blood from '@/components/stats/blood';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyBlockquote,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Page() {
  return (
    <>
      <TypographyH1>Campaign Introduction</TypographyH1>
      {/* <TypographyBlockquote>
        It begins with a factory full of workers pushed to their breaking point.
      </TypographyBlockquote>
      <TypographyP>
        The factory, unlovingly named <strong>The Steel Trap</strong> by its
        workers, produces munitions for the <strong>Royal Rathi Army</strong>.
      </TypographyP>
      <TypographyP>
        Its workers labor among a dangerous matrix of twisted, screeching
        machinery; breathe in foulness that leaves them dizzy for days; and must
        withstand horrible abuses from their higher-ups. Towering above the
        workforce is <strong>Lawler</strong>, their fearsome foreman, and the
        Royal Guards and hired beasts he&apos;s got watching the place.
      </TypographyP>
      <TypographyP>
        Punishing and brutal work only punctuated by the sleeping hours.
        Something has changed, though. An <strong>Imperial Legate</strong> met
        with <strong>Lawler</strong> last week, and some whisper about a secret
        shipment brought into <strong>The Steel Trap</strong> in the dead of
        night. Shifts are longer, the equipment different, and{' '}
        <strong>Lawler</strong> more ruthless.
      </TypographyP>
      <TypographyP>
        <strong>Sten</strong>, an eight-year-old steel scrapper, was recently
        killed by one of the new machines. His older sister{' '}
        <strong>Quill</strong>, also a worker at the factory, could recover no
        more than his severed head after the accident. In compensation for the
        death of her brother, <strong>Lawler</strong> has given her a single day
        off for the burial.
      </TypographyP>
      <TypographyP>
        There is quiet, simmering outrage among the workers. This isn&apos;t the
        first time something horrible has happened, many hope it&apos;s the
        last, but no one is sure what to do. If anything.{' '}
        <em>&ldquo;If Anything&rdquo;</em> is the thought stuck in your
        crew&apos;s head. You endure the indignities at{' '}
        <strong>The Steel Trap</strong> day in and day out.{' '}
        <em>If Anything, something must be done.</em>
      </TypographyP>
      <TypographyBlockquote>
        Small acts of rebellion matter.
      </TypographyBlockquote>
      <TypographyH2>Themes</TypographyH2>
      <TypographyP>
        <strong>Campaign: Era 3</strong> takes place in the same world as the
        other eras, but an unknown time in the future. Where this campaign will
        be narrative Dark Fantasy // Drama // Intrigue, the main focus will
        always be on the characters and their experiences.
      </TypographyP>
      <TypographyH2>Rath</TypographyH2>
      <TypographyP>
        The world of bygone eras, its lands, peoples, history: it&apos;s all
        gone. Cycle after cycle, slowly devoured by the ever-ravenous Rathi
        Empire and its God King. Rath is all that is left, save for a desperate
        few who struggle for survival in the world&apos;s fringes...{' '}
        <em>or so they say within the King&apos;s reaches</em>.
      </TypographyP>
      <TypographyH3>Kingwulf</TypographyH3>
      <TypographyP>
        Immortal God-King of the <strong>Rathi Empire</strong>. They{' '}
        <em>say</em> he has been King since the day the world came to be: born
        into the role. They <em>say</em> he gifted the sun, the wind, the soil,
        fire, and most importantly, <Blood /> to all. They <em>say</em> he takes
        the form of a massive wolf, the like of which causes earth to tremble
        and his bloodline to fall in worship. They <em>say</em> that it is by
        his eternal love that the world strives on day after day. They{' '}
        <em>say</em> that one day, he will bless the world one final time by
        devouring it.
      </TypographyP>
      <TypographyP>
        But no one has seen him in nearly fifty years. Since the day he sealed
        himself in his audience hall, not a sound can be heard from within. What
        has become of him? What will become of <em>us</em> in his absence?
      </TypographyP>
      <TypographyH3>The Steel Trap</TypographyH3>
      <TypographyP>
        Our story begins in <strong>Vizgod</strong>, a territory of the{' '}
        <strong>Rathi Empire</strong> characterized by a forest of massive pines
        stretching a mile high or more. Oversized and deadly predators roam
        these wildlands. In <strong>Vizgod</strong> are a few cities, but our
        story takes place in <strong>Liberty City</strong>, a sprawling
        industrial affair. Some compare it to a prison more than a city, since
        fleeing into the <strong>Titan Pines</strong> is almost certain death.
      </TypographyP>
      <TypographyP>
        Within <strong>Liberty City</strong> there are those <em>with</em> and
        those <em>without</em>. Our protagonists are the unlucky ones. They live
        in <strong>The Kennels</strong>: half shanty town half factory district.
        Thick smoke chokes the streets, King&apos;s Guards prowl and devour
        anyone out of line, and the Overseers maintain their vice grip on the
        food supply.
      </TypographyP>
      <TypographyP>
        Everyday life goes on though. The people of <strong>The Kennels</strong>{' '}
        toil and push on, families, friends, communities come together to make
        life more bearable for each other.
      </TypographyP>
      <TypographyP>
        One of those communities is the workers of the{' '}
        <strong>Steel Trap</strong>: a munitions factory for the{' '}
        <strong>Royal Rathi Army</strong>. A truly miserable and hopeless place.
        Still, the workers quietly, obediently, dream of a better future.
        That&apos;s where our protagonists come in.
      </TypographyP> */}
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/third-age">
          <Button variant="outline">
            <ChevronLeft /> Era of Lost Gods
          </Button>
        </Link>
        <Link href="/setting/donums">
          <Button variant="outline">
            Donum <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
