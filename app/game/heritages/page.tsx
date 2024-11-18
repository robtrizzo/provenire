import {
  TypographyH1,
  TypographyH3,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heritages from '@/public/heritages.json';
import { Heritage } from '@/types/game';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default async function Page() {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { name: 'Character Creation', href: '/game/character-creation' },
          { name: 'Heritages', href: '#' },
        ]}
      />
      <TypographyH1 className="mb-12">Heritages</TypographyH1>
      <HeritageSummary heritage={heritages[0]} />
      <TypographyP>
        A divine empire united by love. Where kings were feared for their might
        yet still ruled with respect and dignity. Protectors of the world.
        Champions of justice.{' '}
        <i>
          &quot;Hold your head up high, young one. You hail from the greatest
          kingdom the world has ever known.&quot;
        </i>
      </TypographyP>
      <TypographyP>
        Anidinians in the Steel Trap carry their pride for all to see. They
        nurture it and pass it from generation to generation. They tell the
        stories of the founder-gods and the heroes in the War of All. They
        remember the bountiful harvests and marriage feasts. They remember the
        peace and safety of the common man guarded by knights in shining armor.
        They remember that love is the most powerful force in the world.
      </TypographyP>
      <TypographyP>
        Fenrir children are told the tale of <i>Dalrik</i>, a wolf pup scorned
        for his weakness, though with a fierce heart. As the story goes,{' '}
        <i>Dalrik</i> was starving alone in the wilderness when he was caught
        between by almighty <b>Kingwulf</b> and his prey. But <i>Dalrik</i>{' '}
        howled and bared his teeth, showed that even the smallest and weakest
        wolf can have courage.
      </TypographyP>
      <TypographyP>
        And so <b>Kingwulf</b> blessed <i>Dalrik</i>: invited him to eat from
        the same kill as he. Little <i>Dalrik</i> grew up big and strong. So
        strong that he returned home. The people in his hometown laughed:{' '}
        <i>
          &quot;Certainly you must be a different Dalrik, not the one we cast
          out for being small and weak.&quot;
        </i>{' '}
        Ever-eager <i>Dalrik</i> kept his head high. He joined the holy war in
        the North. He served his King well in that war, and when the army
        breeched the enemy&apos;s walls, <i>Dalrik</i> came face to face with
        the evil queen&apos;s bodyguards: the <i>Six Swordsmen</i> and the{' '}
        <i>immortal she-crow</i>.
      </TypographyP>
      <TypographyP>
        They did battle. <i>Dalrik</i> once again felt small and weak against
        the <i>Six Swordsmen</i>, who had sold their souls to the wicked{' '}
        <i>she-crow</i> for power. But <i>Dalrik</i> killed one and ate him - he
        gained the strength of the kill just like <b>Kingwulf</b> had taught
        him. And with that, <i>Dalrik</i> got bigger and stronger and even ate
        the evil queen.
      </TypographyP>
      <TypographyP className="italic">
        So remember, children, eat your meat and drink your blood. That way you
        can grow up big and strong like <i>Dalrik</i>.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[1]} />
      <TypographyP>
        Argos lives on. The bloodline is preserved: and one day it will return
        to the three gates on the rolling hills. A place of infinite bounty,
        compassion, and civilized pursuits.
      </TypographyP>
      <TypographyP>
        Argosi in the Steel Trap meticulously track their family trees, holding
        especially dear any ties to one of Argos&apos;s four great families of
        yore. To some, this is a point of comfort and pride. For others, they
        talk of Fenrir&apos;s fear of their power. They gesture at their lack of
        Great House linneage and conclude that <b>Kingwulf</b> uses his
        oppressive system of marriage to thin the bloodline that could fight
        back against him.
      </TypographyP>
      <TypographyP>
        Argosi especially revere water, going through great lengths to collect,
        purify, and drink as much as they can. They do this in secret to avoid
        the viscious mockery of the Rathi.{' '}
        <i>
          &quot;Only the thinnest-blooded weaklings would prefer water to
          blood.&quot;
        </i>
      </TypographyP>
      <Separator className="my-3" />
      <div className="w-full flex justify-between">
        <Link href="/game/character-creation">
          <Button variant="outline">
            <ChevronLeft /> Character Creation
          </Button>
        </Link>
        <Link href="/game/backgrounds">
          <Button variant="outline">
            Backgrounds <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function HeritageSummary({ heritage }: { heritage: Heritage }) {
  return (
    <div className="mt-6">
      <TypographyH3 id={heritage.name} className="text-sky-500">
        {heritage.name}
      </TypographyH3>
      <span className="text-lg text-muted-foreground">
        {heritage.shortDescription}
      </span>
      <TypographyP className="text-md italic text-sky-800 dark:text-sky-200 font-semibold">
        {heritage.remembrance}
      </TypographyP>
    </div>
  );
}
