import Defiance from '@/components/Defiance';
import Next from '@/components/Next';
import Previous from '@/components/Previous';
import Ingenuity from '@/components/Ingenuity';
import Heart from '@/components/Heart';
import Machina from '@/components/Machina';
import Savagery from '@/components/Savagery';
import Blood from '@/components/Blood';

export default function BasicMoves() {
  return (
    <>
      <h1>Basic Moves</h1>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8">
        <article
          className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Defy the King's Spell</span>
          </div>
          <p className="text-center">
            When a Royal authority figure uses the King's Spell on you, roll +{' '}
            <Defiance />
          </p>
          <p className="text-center">They gain Influence over you.</p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p className="text-start">
              You will not bow, you will not break. Stand strong and remove
              their Influence over you.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p className="text-start">
              Your head nods and your knees wobble. Stand strong and mark a
              condition or fall into a bow.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p className="text-start">
              Your damned body betrays your will. Do what they say or fall into
              a grovel and mark a condition.
            </p>
          </div>
        </article>
        <article
          className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Manipulate Someone</span>
          </div>
          <p className="text-center">
            When you manipulate somone susceptible to your words, say what
            you're trying to get them to do and roll + <Machina />
          </p>
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
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>They rise to the bait and do what you want.</p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>They choose one:</p>
          </div>
          <ul className="text-start">
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
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>both.</p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>you choose one:</p>
          </div>
          <ul className="text-start">
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              if they do it, +1 <strong>Team</strong> and they get +1{' '}
              <strong>xp</strong>
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              if they don't do it, they <strong>mark a condition</strong>
            </li>
          </ul>
        </article>
        <article
          className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Read Someone</span>
          </div>
          <p className="text-center">
            When you observe someone to determine the personality and
            motivations beneath their exterior, roll + <Machina />
          </p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>ask two</p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>ask one</p>
          </div>
          <ul className="text-start">
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
            <span className="text-white text-2xl">
              Savagely Engage a Threat
            </span>
          </div>
          <p className="text-center">
            When you throw your body wildly and violently at the problem, roll +{' '}
            <Savagery />
          </p>
          <p className="text-center">
            Any amount of <Blood /> may be spent to add +1 each to this roll.
          </p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>pick two</p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>pick one</p>
          </div>
          <ul className="text-start">
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
            <span className="text-white text-2xl">Defend</span>
          </div>
          <p className="text-center">
            When you defend someone or something from an immediate threat, roll
            + <Heart />
          </p>
          <p className="text-center">
            Any amount of <Blood /> may be spent to add +1 each to this roll.
          </p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>
              You keep them safe. Choose one: +1 <strong>Team</strong> to the
              pool, take <strong>Influence</strong> over someone you protect, or{' '}
              <strong>clear a condition</strong>
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>
              You protect them but it costs you. Expose yourself to danger or
              escalate the situation.
            </p>
          </div>
        </article>
        <article
          className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">The Truth About You</span>
          </div>
          <p className="text-center">
            When you tell someone a truth about themselves in a tough situation,
            lose <strong>Influence</strong> over them and roll + <Heart />
          </p>
          <p className="text-center">
            Then ask if they accept or reject the truth.
          </p>
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
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>
              as 7-9, but keep your <strong>Influence</strong> over them
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>
              you <strong>shift</strong> one of their labels then they gain +1{' '}
              <strong>Forward</strong>
            </p>
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
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>
              they mark a condition or let you <strong>shift</strong> one of
              their labels
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>
              they may lash out. if they do, you{' '}
              <strong>mark a condition</strong> and they take{' '}
              <strong>Influence</strong> over you
            </p>
          </div>
        </article>
        <article
          className={`bg-[rgb(103,65,217)]/20 border-[rgb(103,65,217)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Put the Pieces Together</span>
          </div>
          <p className="text-center">
            When you foresee the situation's cause and effect, roll +{' '}
            <Ingenuity />
          </p>

          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>
              ask one, then you get to ask a follow-up question. The GM must
              answer it honestly.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>ask one</p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p>
              you critically misunderstand the situation, leaving yourself open
              to danger or you're too slow to respond
            </p>
          </div>
          <hr
            className="my-0 border-white w-full"
            style={{ marginTop: '10px', marginBottom: '10px' }}
          />
          <ul className="text-start">
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              if I do nothing, what's most likely to happen?
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              how would __ react to __?
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              what's the key to the enemy's plan?
            </li>
          </ul>
        </article>
        <article
          className={`bg-[rgb(103,65,217)]/20 border-[rgb(103,65,217)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">
              Traverse the Mechanical Matrix
            </span>
          </div>
          <p className="text-center">
            When you navigate the dangerous machinery of the Steel Trap under
            pressure, roll + <Ingenuity />
          </p>
          <p className="text-center">
            Any amount of <Blood /> may be spent to add +1 each to this roll.
          </p>

          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>pick two</p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>pick one</p>
          </div>
          <ul className="text-start">
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              avoid getting hurt by the machines
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>no one notices</li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              you're not delayed
            </li>
            <li style={{ marginTop: 0, marginBottom: 0 }}>
              bring someone with you
            </li>
          </ul>
        </article>
      </div>
      <div className="flex flex-row mt-8">
        <Previous href="/game/basic_rules" text="Basic Rules" />
        <Next href="/game/downtime" text="Downtime" />
      </div>
    </>
  );
}
