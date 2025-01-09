import Breadcrumbs from '@/components/ui/breadcrumbs';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  VenetianMask,
  Flame,
  Activity,
} from 'lucide-react';

export default async function Page() {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { name: 'Character Creation', href: '/game/character-creation' },
          { name: 'Fighting Styles', href: '#' },
        ]}
      />
      <TypographyH1>Fighting Styles</TypographyH1>
      <TypographyP>
        Most folk in the Steel Trap have been in a scrap at least once: the kind
        of frantic flailing, scratching, and biting of someone backed into a
        corner. Enforcers often have some proficiency with the weaponry they
        carry. But not many have been trained in a martial art.
      </TypographyP>
      <TypographyP>
        Each <b>fighting style</b> grants an action as well as a series of
        abilities to unlock. To become trained in a <b>fighting style</b>, you
        need tutilage from someone already trained in that style. This allows
        you to spend <b>xp clocks</b> during the <b>train downtime activity</b>{' '}
        to unlock abilities from that style. Many abilities require
        prerequisites to unlock. This is indicated by the ability tree in each
        style.
      </TypographyP>
      <TypographyH2 className="mt-8">Factory Styles</TypographyH2>
      <TypographyP>
        The Steel Trap has its own culture and terrain unique from the outside
        world. Over the centuries, some have developed fighting styles suited
        for it. These people are your oppressors, though you can turn their own
        tactics against them.
      </TypographyP>
      <TypographyH3 className="mt-8 flex gap-2">
        Crowdbreaking <Flame />
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Maximize damage to groups of surrounding foes
      </TypographyP>
      <CrowdbreakingSkillTree />
      <TypographyH4 className="mt-6">Basic Weapons Training</TypographyH4>
      <TypographyP>
        Crowdbreakers utilize large hafted weapons like axes and greatclubs as
        well as flexible sweeping weapons like chains and whips. The basic
        motions of crowdbreaking are slow, methodical, powerful, and
        intimidating.
      </TypographyP>
      <TypographyH4 className="mt-6">Cascade</TypographyH4>
      <TypographyP>
        When you shove, knock aside, or otherwise unwillingly reposition an
        opponent, you may affect a second foe. A third on a crit.
      </TypographyP>
      <TypographyH4 className="mt-6">Follow Through</TypographyH4>
      <TypographyP>
        Your attacks with crowdbreaking weapons naturally knock opponents back
        or over.
      </TypographyP>
      <TypographyH4 className="mt-6">Clear a Path</TypographyH4>
      <TypographyP>
        You sweep your weapon in a particularly slow, obvious, and intimidating
        fashion. Weak willed foes will be frightened and want to move out of the
        way. Quick foes may gain a chance to strike. Foes you do strike with
        these motions are hit with significant force.
      </TypographyP>
      <TypographyH4 className="mt-6">Muscular Surge</TypographyH4>
      <TypographyP>
        You may{' '}
        <Link href="#">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{' '}
        yourself to fight a gang of surrounding foes on equal footing.
      </TypographyP>
      <TypographyH3 className="mt-6 flex gap-2">
        Pipedancing <VenetianMask />
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Maneuver through the machinery and use it to your advantage
      </TypographyP>
      <PipedancingSkillTree />
      <TypographyH4 className="mt-6">Basic Movements</TypographyH4>
      <TypographyP>
        Pipedancers dart and tumble through the twisted machinery. They evade
        attacks and stay one step ahead of their pursuers. When they bring the
        attack to their foes, it&apos;s with quick thinking and whatever they
        can find at hand.
      </TypographyP>
      <TypographyH4 className="mt-6">Improvised Weaponry</TypographyH4>
      <TypographyP>
        When you scrounge for weapons, it will have a random trait from{' '}
        <i>
          blocking, brace, deadly, disarm, distracting, nonlethal, reach, trip
        </i>
        . Two traits on a crit.
      </TypographyP>
      <TypographyH4 className="mt-6">Opportunist</TypographyH4>
      <TypographyP>
        If you search for a way to use the factory as a weapon, you find a
        deadly trap on a <b>4+</b>. On a crit, you&apos;re not in danger from
        your own trap.
      </TypographyP>
      <TypographyH4 className="mt-6">The Dance</TypographyH4>
      <TypographyP>
        For as long as you choose to evade attacks instead of attacking a foe,
        you cannot be caught by someone without special training (
        <i>machinist, flywheel, pipedancer</i>) or a special ability (
        <i>bestial transformation</i>).
      </TypographyP>
      <TypographyH4 className="mt-6">Acrobatic Surge</TypographyH4>
      <TypographyP>
        You may{' '}
        <Link href="#">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{' '}
        yourself to perform an incredible feat of repositioning.
      </TypographyP>
      <TypographyH2 className="mt-8">Beastial Styles</TypographyH2>
      <TypographyP>
        Generations of fighters have come and gone in the fighting pits. Their
        styles have been shaped by the dominance of beasts and their animalistic
        tactics. Some styles have adopted elements of these tactics into styles
        used by fighters who can&apos;t shapeshift.
      </TypographyP>
      <TypographyH3 className="mt-8">Backsnap</TypographyH3>
      <TypographyP>asdf</TypographyP>
      <TypographyH3 className="mt-8">Bleedout</TypographyH3>
      <TypographyP>asdf</TypographyP>
      <TypographyH3 className="mt-8">Throatgore</TypographyH3>
      <TypographyP>asdf</TypographyP>
      <Separator className="my-3" />
      <div className="w-full flex justify-between">
        <Link href="/game/archetypes">
          <Button variant="outline">
            <ChevronLeft /> Archetypes
          </Button>
        </Link>
        <Link href="/game/character-sheet">
          <Button variant="outline">
            Character Sheet <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

async function CrowdbreakingSkillTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center max-w-[340px] md:max-w-none overflow-auto">
      <div className="flex flex-col">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Basic Weapons Training
          </TypographyP>
        </div>
      </div>
      <div className="w-8 h-24 flex items-center justify-center">
        <div className="w-8 h-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="w-1 h-[180px] bg-muted-foreground" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Cascade
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Clear a Path
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Follow Through
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Muscular Surge
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            ???
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            ???
          </TypographyP>
        </div>
      </div>
    </div>
  );
}

async function PipedancingSkillTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center max-w-[340px] md:max-w-none overflow-auto">
      <div className="flex flex-col">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Basic Movements
          </TypographyP>
        </div>
      </div>
      <div className="w-8 h-24 flex items-center justify-center">
        <div className="w-8 h-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="w-1 h-[180px] bg-muted-foreground" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Improvised Weaponry
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            The Dance
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Opportunist
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Acrobatic Surge
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            ???
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            ???
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
