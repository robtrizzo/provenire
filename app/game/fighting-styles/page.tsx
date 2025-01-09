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
      <TypographyH3 id="crowdbreaking" className="mt-8 flex gap-2">
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
      <TypographyH3 id="pipedancing" className="mt-6 flex gap-2">
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
      <TypographyH3 id="backsnap" className="mt-8 flex gap-2">
        Backsnap <Activity />
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Overwhelming aggression
      </TypographyP>
      <BacksnapSkillTree />
      <TypographyH4 className="mt-6">Reckless Mindset</TypographyH4>
      <TypographyP>
        Backsnappers utilize such a frightening recklessness and savagery that
        most think their tactics thoughtless. Much to the contrary, it takes a
        special kind of resolve to risk the body as backsnappers do; and a
        practiced technique to crush foes&apos; bodies in the way they do.
      </TypographyP>
      <TypographyH4 className="mt-6">Immediate Brutality</TypographyH4>
      <TypographyP>
        When you charge an opponent before they can take stock of the situation,
        they become vulnerable to you.
      </TypographyP>
      <TypographyH4 className="mt-6">Bloody Counter</TypographyH4>
      <TypographyP>
        If you allow a foe&apos;s strike to hit you, you gain a guaranteed
        strike on them in return.
      </TypographyP>
      <TypographyH4 className="mt-6">Reaper&apos;s Surge</TypographyH4>
      <TypographyP>
        You may{' '}
        <Link href="#">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{' '}
        yourself to perform a feat of terrible strength on an opponent
        vulnerable to you.
      </TypographyP>
      <TypographyH4 className="mt-6">Unstoppable</TypographyH4>
      <TypographyP>
        For as long as you are fighting, your <b>Harms</b> cannot be used to
        prevent you from continuing to fight.
      </TypographyP>
      <TypographyH3 id="bleedout" className="mt-8 flex gap-2">
        Bleedout <VenetianMask />
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Small, precise strikes in vital regions
      </TypographyP>
      <BleedoutSkillTree />
      <TypographyH4 className="mt-6">Skirmish</TypographyH4>
      <TypographyP>
        Bleedouts lurk on the periphery of battle, waiting for their chance to
        strike and retreat once again. They train to watch their foes closely
        and to stab precisely with quick weapons.
      </TypographyP>
      <TypographyH4 className="mt-6">Debilitating Strikes</TypographyH4>
      <TypographyP>
        Your attacks naturally hamper your foes in some way (
        <i>slowing, fatiguing, clouding senses, weakening</i>), though your
        strikes are less lethal.
      </TypographyP>
      <TypographyH4 className="mt-6">Predatory Focus</TypographyH4>
      <TypographyP>
        If you choose to focus your attention on a single foe, you gain an
        opportunity to strike them unless they also devote their full attention
        to tracking your movements. While you do this, allies of your focused
        foe may gain opportunities to strike you.
      </TypographyP>
      <TypographyH4 className="mt-6">Combat Canny</TypographyH4>
      <TypographyP>
        After spending some time fighting a foe, you discover an exploitable
        vital spot of theirs.
      </TypographyP>
      <TypographyH4 className="mt-6">Deceiver&apos;s Surge</TypographyH4>
      <TypographyP>
        You may{' '}
        <Link href="#">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{' '}
        yourself to gain an opportunity to strike a foe and retreat, even if
        their full focus is on you.
      </TypographyP>
      <TypographyH3 id="throatgore" className="mt-8 flex gap-2">
        Throatgore <Activity />
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Pack tactics, go for the throat
      </TypographyP>
      <ThroatgoreSkillTree />
      <TypographyH4 className="mt-6">Pack Tactics</TypographyH4>
      <TypographyP>
        Throatgores train to fight as part of a small unit. They watch for
        opportunities their allies create, or create those opportunities
        themselves. And when the time is right, they pounce.
      </TypographyP>
      <TypographyH4 className="mt-6">Coordinated Assault</TypographyH4>
      <TypographyP>
        When you assist a teammate on an attack, on a <b>4+</b> the foe is also
        one of (<i>tripped, knocked back, disarmed</i>).
      </TypographyP>
      <TypographyH4 className="mt-6">Fatal Opening</TypographyH4>
      <TypographyP>
        When you rush your foes but then reposition at the last second, you give
        an ally an opportunity to strike. On a crit, the foe is vulnerable to
        your ally.
      </TypographyP>
      <TypographyH4 className="mt-6">Isolating Counter</TypographyH4>
      <TypographyP>
        If an isolated foe attacks an ally, you gain an opportunity to strike.
      </TypographyP>
      <TypographyH4 className="mt-6">Fatal Finisher</TypographyH4>
      <TypographyP>
        You may{' '}
        <Link href="#">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{' '}
        yourself to make a devastating blow against an overwhelmed, cornered, or
        prone foe.
      </TypographyP>
      <TypographyH2 id="strain" className="mt-8">
        Strain
      </TypographyH2>
      <TypographyP>
        Some abilities call for your character to <b>strain</b> themself. When
        they do this, they draw upon an inner reserve of energy to accomplish a
        normally impossible feat of strength, speed, or cunning. As the name
        suggests, afterwards the character feels a deep fatigue different from
        the norm. Mark a{' '}
        <b>
          permanent level one harm: <i>strained</i>.
        </b>
      </TypographyP>
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

async function BacksnapSkillTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center max-w-[340px] md:max-w-none overflow-auto">
      <div className="flex flex-col">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Reckless Mindset
          </TypographyP>
        </div>
      </div>
      <div className="w-8 h-24 flex items-center justify-center">
        <div className="w-8 h-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="w-1 h-[356px] bg-muted-foreground" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
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
            Immediate Brutality
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Bloody Counter
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Reaper&apos;s Surge
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
            Unstoppable
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

async function BleedoutSkillTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center max-w-[340px] md:max-w-none overflow-auto">
      <div className="flex flex-col">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Skirmish
          </TypographyP>
        </div>
      </div>
      <div className="w-8 h-24 flex items-center justify-center">
        <div className="w-8 h-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="w-1 h-[356px] bg-muted-foreground" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
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
            Debilitating Strikes
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Predatory Focus
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Combat Canny
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
            Deceiver&apos;s Surge
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

async function ThroatgoreSkillTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center max-w-[340px] md:max-w-none overflow-auto">
      <div className="flex flex-col">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Pack Tactics
          </TypographyP>
        </div>
      </div>
      <div className="w-8 h-24 flex items-center justify-center">
        <div className="w-8 h-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="w-1 h-[356px] bg-muted-foreground" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
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
            Coordinated Assault
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Fatal Opening
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Isolating Counter
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
            Fatal Finisher
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
