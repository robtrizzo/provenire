import Donum from '@/components/stats/donum';
import Defiance from '@/components/stats/defiance';
import Heart from '@/components/stats/heart';
import Ingenuity from '@/components/stats/ingenuity';
import Machina from '@/components/stats/machina';
import Savagery from '@/components/stats/savagery';
import Blood from '@/components/stats/blood';
import Hunger from '@/components/stats/hunger';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from '@/components/ui/typography';

export default function Page() {
  return (
    <>
      <TypographyH1>Downtime</TypographyH1>
      <TypographyP>
        Between missions the crew tries to keep their lives together and spend
        time with their loved ones between brutal shifts in the factory.
      </TypographyP>
      <TypographyP>
        Everyone gets two downtime activities they can pursue. Unless otherwise
        stated, the same activity can be done twice.
      </TypographyP>
      <TypographyH2>Acquire Food</TypographyH2>
      <TypographyP>
        Overseers and employers control all of the food outside of the
        wildlands. They dole it out stingily.
      </TypographyP>
      <TypographyP>
        You have to feed yourself and your family and/or friends. Your
        <Hunger /> can go from 0 to 3. Your family&apos;s <Hunger /> can go from
        0 to 2. If a family member begins play with max <Hunger /> and
        isn&apos;t fed, they die.
      </TypographyP>
      <TypographyP>
        Reaching 3 <Hunger /> means you are starving and you must acquire food
        during the mission. If you fail, you are{' '}
        <strong>taken out of the action</strong> until you eat.
      </TypographyP>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-4">
        <article
          className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Labor for Scraps</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you rely on the generosity of the Overseers for food, roll -{' '}
            <Defiance />
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP className="text-start">
              You work obediently and diligently. Your overseer rewards you with
              three people&apos;s worth of food.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP className="text-start">
              You kept your head down and did your job. You&apos;re rewarded
              with enough food for yourself.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP className="text-start">
              When the overseer said &ldquo;jump,&rdquo; you didn&apos;t ask
              &ldquo;how high?&rdquo; quickly enough. You get only scraps,
              barely enough to keep you going.
            </TypographyP>
          </div>
        </article>
        <article
          className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Hunt in the Wildlands</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you brave the wildlands to hunt for food and defend your prize,
            roll + <Savagery />
          </TypographyP>
          <TypographyP className="text-center">
            Any amount of <Blood /> may be spent to add +1 each to this roll.
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>
              You would make the King proud. You track, hunt, and butcher enough
              meat and blood for three people
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>
              Others found the prey before you did, but yo umanaged to rip
              scraps away from them. You return with enough meat for one person
              and blood for two
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP>
              Prey was scarce - other hunters decided you would make a good
              meal. Spend 2 <Blood /> to escape or{' '}
              <strong>mark 2 conditions</strong>.
            </TypographyP>
          </div>
        </article>
      </div>
      <TypographyH2>Train</TypographyH2>
      <TypographyP>
        You can spend your free time honing your abilities and working on
        yourself. <strong>Hold</strong> 1 on a stat of your choosing. During
        play, you may spend that <strong>hold</strong> to turn a 6- with that
        stat into a 7-9. When you do, +1<strong>xp</strong>.
      </TypographyP>
      <TypographyH2>Long Term Project</TypographyH2>
      <TypographyP>
        You can pursue any activity or project that isn&apos;t normally covered
        by any of the other downtime activities. This can mean research,
        investigation, gaining new contacts, etc.
      </TypographyP>
      <TypographyP>
        The GM will tell you how involved the project is and make an initial
        suggestion for how it may be advanced.
      </TypographyP>
      <TypographyP>
        Sometimes, in order to pursue a project you must satisfy conditions that
        aren&apos;t already met. This means completing another project first.
      </TypographyP>
      <TypographyH2>Cover your Tracks</TypographyH2>
      <TypographyP>
        Your crew is up to no good, and that will certainly come back to bite
        you if you&apos;re not careful. Your team&apos;s <strong>Heat</strong>{' '}
        can progress from 0 to 4. At 4, a faction or NPC you&apos;ve wronged
        will retaliate in a major way.
      </TypographyP>
      <TypographyP>
        You can only Cover Your Tracks once per downtime.
      </TypographyP>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-4">
        <article
          className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Shift the Blame</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you search for a scapegoat to take the blame for your
            crew&apos;s actions, roll + <Machina />
          </TypographyP>
          <TypographyP className="text-center">
            Always reduce <strong>Heat</strong> by 1.
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>
              You find the ideal scapegoat. Someone who had it coming, who no
              one will miss once they&apos;re gone.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>
              Your schemes are imperfect. Your victim is your choice of{' '}
              <em>kind</em>, <em>trustworthy</em>, or <em>owes you a favor</em>.
              Name them, then betray them.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP>
              Your enemies are far closer than you had anticipated. Your only
              option is to scapegoat a close contact or family member of the
              team. Otherwise, +1 <strong>Heat</strong>
            </TypographyP>
          </div>
        </article>
      </div>
      <TypographyH2>Recover</TypographyH2>
      <TypographyP>
        You can spend time in leisure, treatment, and/or doing what you love
        with the people you love. <strong>Clear</strong> one condition.
      </TypographyP>
      <TypographyP>
        You can recover from an additional condition by:
      </TypographyP>
      <ul>
        <li style={{ marginTop: 0, marginBottom: 0 }}>
          bragging about your exploits: +1 <strong>Heat</strong>
        </li>
        <li style={{ marginTop: 0, marginBottom: 0 }}>
          looking for a fight: -1 <Blood />
        </li>
      </ul>
      <TypographyP>
        If your character wasn&apos;t present in the last mission, they
        automatically <strong>clear a condition</strong>.
      </TypographyP>
      <TypographyH2>Support</TypographyH2>
      <TypographyP>
        The whole point of this endeavor is to better the lives of your friends
        and loved ones. This is you making an effort to do just that.
      </TypographyP>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-4">
        <article
          className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Comfort</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you try to help talk a friend through their troubles, roll +{' '}
            <Heart />
          </TypographyP>
          <div className="flex flex-row items-center gap-4">
            <hr
              className="border-white w-full"
              style={{ marginTop: 0, marginBottom: 0 }}
            />
            <span className="text-lg shrink-0">For NPCs</span>
            <hr
              className="border-white w-full"
              style={{ marginTop: 0, marginBottom: 0 }}
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>
              They take your advice to heart, for better or worse. +1{' '}
              <strong>xp</strong>
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>
              They open up to you about a problem they&apos;re having
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP>
              They don&apos;t feel like opening up to you, and they tell you
              why.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center gap-4">
            <hr
              className="my-0 border-white w-full"
              style={{ marginTop: 0, marginBottom: 0 }}
            />
            <span className="text-lg shrink-0">For PCs</span>
            <hr
              className="my-0 border-white w-full"
              style={{ marginTop: 0, marginBottom: 0 }}
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>
              If they open up to you and tell you their troubles, they{' '}
              <strong>clear a condition</strong>. You may shift one of their
              labels. If they don&apos;t, <strong>mark a condition</strong>.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>
              You open up to them in an attempt to help by relating your mutual
              problems. If they accept your advice, they{' '}
              <strong>clear a condition</strong>. If they reject you,{' '}
              <strong>mark a condition</strong>.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP>
              The player tells you something that would be unsettling or hurtful
              to their character. That&apos;s what you say. They may choose to
              lash out. If htey do, they <strong>clear a condition</strong> and
              you <strong>mark a condition</strong>.
            </TypographyP>
          </div>
        </article>
      </div>
      <TypographyH2>Prepare</TypographyH2>
      <TypographyP>
        Small acts of rebellion matter. Just because you&apos;re not actively
        sticking it to the man doesn&apos;t mean there isn&apos;t more you can
        do to get ready for the next mission.
      </TypographyP>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-4">
        <article
          className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Make Trouble</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you stir up trouble to gain support for your crew, roll +{' '}
            <Defiance />
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP className="text-start">
              You fuck shit up. Gain an NPC&apos;s support or helpful gang of
              ragamuffins for the next mission.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP className="text-start">
              You cause a real ruckus. You gain a gang of helpful ragamuffins
              for the next mission, but +1 <strong>Heat</strong>.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP className="text-start">
              There were more King&apos;s guards than you were expecting, you
              didn&apos;t get the chance you were hoping for. You can still
              cause trouble for them though. if you do, +1 <strong>Heat</strong>{' '}
              and +1 <strong>xp</strong>.
            </TypographyP>
          </div>
        </article>
        <article
          className={`bg-[rgb(103,65,217)]/20 border-[rgb(103,65,217)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Cook Something Up</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you use the materials available to you to make something useful
            for your crew, roll + <Ingenuity />
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP className="text-start">
              You&apos;re a genius. Gain a temporary asset or +2{' '}
              <strong>Team</strong> for the next mission.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP className="text-start">
              As 10+, but you had to steal materials for your project - either
              from someone close to the team or from an enemy. If you choose
              enemy, +1 <strong>Heat</strong>
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP className="text-start">
              You get caught red-handed while working. Either abandon the
              project and <strong>mark a condition</strong> or the mission
              begins with the scene of you being found out.
            </TypographyP>
          </div>
        </article>
      </div>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/basic-moves">
          <Button variant="outline">
            <ChevronLeft /> Basic Moves
          </Button>
        </Link>
        <Link href="/game/playbooks">
          <Button variant="outline">
            Playbooks <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
