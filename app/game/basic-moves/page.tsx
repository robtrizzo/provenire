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
      <TypographyH1>Basic Moves</TypographyH1>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 ">
        <article
          className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-xl`}
        >
          {/* <div className="text-center">
            <span className="text-white text-2xl">Defy the King&apos;s Spell</span>
          </div> */}
          <div className="text-center">
            <TypographyH3>Defy the King&apos;s Spell</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When a Royal authority figure uses the King&apos;s Spell on you,
            roll + <Defiance />
          </TypographyP>
          <TypographyP className="text-center">
            They gain <strong>influence</strong> over you.
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP className="text-start">
              You will not bow, you will not break. Stand strong and remove
              their <strong>influence</strong> over you.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP className="text-start">
              Your head nods and your knees wobble. Stand strong and{' '}
              <strong>mark a condition</strong> or fall into a bow.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP className="text-start">
              Your body betrays your will. Do what they say or fall into a
              grovel and <strong>mark a condition</strong>.
            </TypographyP>
          </div>
        </article>
        <article
          className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Manipulate Someone</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you manipulate somone susceptible to your words, say what
            you&apos;re trying to get them to do and roll + <Machina />
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
              They rise to the bait and do what you want.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>They choose one:</TypographyP>
          </div>
          <ul className="text-start ml-12">
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              they stumble, +1 <strong>forward</strong>
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              they err: gain a critical opportunity
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              they overreact: gain <strong>Influence</strong> over them
            </li>
          </ul>
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
            <TypographyP>both.</TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>you choose one:</TypographyP>
          </div>
          <ul className="text-start ml-12">
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              if they do it, +1 <strong>Team</strong> and they get +1{' '}
              <strong>xp</strong>
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              if they don&apos;t do it, they <strong>mark a condition</strong>
            </li>
          </ul>
        </article>
        <article
          className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Read Someone</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you observe someone to determine the personality and
            motivations beneath their exterior, roll + <Machina />
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>ask two</TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>ask one</TypographyP>
          </div>
          <ul className="text-start ml-12">
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              what are you really planning?
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              what do you want me to do?
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              what do you intend to do?
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              how could i get you to __?
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              how could I gain <strong>Influence</strong> over you?
            </li>
          </ul>
        </article>
        <article
          className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Savagely Engage a Threat</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you throw your body wildly and violently at the problem, roll +{' '}
            <Savagery />
          </TypographyP>
          <TypographyP className="text-center">
            Any amount of <Blood /> may be spent to add +1 each to this roll.
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>pick two</TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>pick one</TypographyP>
          </div>
          <ul className="text-start ml-12">
            <li style={{ marginTop: 0, marginBottom: 0 }}>avoid their blows</li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              force them into dangerous machinery
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              impress or frighten them
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>push them back</li>
          </ul>
        </article>
        <article
          className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Defend</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you defend someone or something from an immediate threat, roll
            + <Heart />
          </TypographyP>
          <TypographyP className="text-center">
            Any amount of <Blood /> may be spent to add +1 each to this roll.
          </TypographyP>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>
              You keep them safe. Choose one: +1 <strong>Team</strong> to the
              pool, take <strong>Influence</strong> over someone you protect, or{' '}
              <strong>clear a condition</strong>
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>
              You protect them but it costs you. Expose yourself to danger or
              escalate the situation.
            </TypographyP>
          </div>
        </article>
        <article
          className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>The Truth About You</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you tell someone a truth about themselves in a tough situation,
            lose <strong>Influence</strong> over them and roll + <Heart />
          </TypographyP>
          <TypographyP className="text-center">
            Then ask if they accept or reject the truth.
          </TypographyP>
          <div className="flex flex-row items-center gap-4">
            <hr
              className="my-0 border-white w-full"
              style={{ marginTop: 0, marginBottom: 0 }}
            />
            <span className="text-lg shrink-0">Accept</span>
            <hr
              className="my-0 border-white w-full"
              style={{ marginTop: 0, marginBottom: 0 }}
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>
              as 7-9, but keep your <strong>Influence</strong> over them
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>
              you <strong>shift</strong> one of their labels then they gain +1{' '}
              <strong>Forward</strong>
            </TypographyP>
          </div>
          <div className="flex flex-row items-center gap-4">
            <hr
              className="my-0 border-white w-full"
              style={{ marginTop: 0, marginBottom: 0 }}
            />
            <span className="text-lg shrink-0">Reject</span>
            <hr
              className="my-0 border-white w-full"
              style={{ marginTop: 0, marginBottom: 0 }}
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>
              they mark a condition or let you <strong>shift</strong> one of
              their labels
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>
              they may lash out. if they do, you{' '}
              <strong>mark a condition</strong> and they take{' '}
              <strong>Influence</strong> over you
            </TypographyP>
          </div>
        </article>
        <article
          className={`bg-[rgb(103,65,217)]/20 border-[rgb(103,65,217)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Put the Pieces Together</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you foresee the situation&apos;s cause and effect, roll +{' '}
            <Ingenuity />
          </TypographyP>

          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>
              ask one, then you get to ask a follow-up question. The GM must
              answer it honestly.
            </TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>ask one</TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">6-</span>
            <TypographyP>
              you critically misunderstand the situation, leaving yourself open
              to danger or you&apos;re too slow to respond
            </TypographyP>
          </div>
          <hr
            className="my-0 border-white w-full"
            style={{ marginTop: '10px', marginBottom: '10px' }}
          />
          <ul className="text-start ml-8">
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              if I do nothing, what&apos;s most likely to happen?
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              how would __ react to __?
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              what&apos;s the key to the enemy&apos;s plan?
            </li>
          </ul>
        </article>
        <article
          className={`bg-[rgb(103,65,217)]/20 border-[rgb(103,65,217)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <TypographyH3>Traverse the Mechanical Matrix</TypographyH3>
          </div>
          <TypographyP className="text-center">
            When you navigate the dangerous machinery of the Steel Trap under
            pressure, roll + <Ingenuity />
          </TypographyP>
          <TypographyP className="text-center">
            Any amount of <Blood /> may be spent to add +1 each to this roll.
          </TypographyP>

          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">10+</span>
            <TypographyP>pick two</TypographyP>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="shrink-0">7-9</span>
            <TypographyP>pick one</TypographyP>
          </div>
          <hr
            className="my-0 border-white w-full"
            style={{ marginTop: '10px', marginBottom: '10px' }}
          />
          <ul className="text-start ml-8">
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              avoid getting hurt by the machines
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>no one notices</li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              you&apos;re not delayed
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              bring someone with you
            </li>
          </ul>
        </article>
      </div>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/basic-rules">
          <Button variant="outline">
            <ChevronLeft /> Basic Rules
          </Button>
        </Link>
        <Link href="/game/downtime">
          <Button variant="outline">
            Downtime <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
