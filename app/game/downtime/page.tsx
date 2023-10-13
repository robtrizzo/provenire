import Defiance from '@/components/Defiance';
import Next from '@/components/Next';
import Previous from '@/components/Previous';
import Ingenuity from '@/components/Ingenuity';
import Heart from '@/components/Heart';
import Machina from '@/components/Machina';
import Savagery from '@/components/Savagery';
import Blood from '@/components/Blood';
import Hunger from '@/components/Hunger';
export default function Downtime() {
  return (
    <>
      <h1>Downtime</h1>
      <p>
        Between missions the crew tries to keep their lives together and spend
        time with their loved ones between brutal shifts in the factory.
      </p>
      <p>
        Everyone gets two downtime activities they can pursue. Unless otherwise
        stated, the same activity can be done twice.
      </p>
      <h2>Acquire Food</h2>
      <p>
        Overseers and employers control all of the food outside of the
        wildlands. They dole it out stingily.
      </p>
      <p>
        You have to feed yourself and your family and/or friends. Your{' '}
        <Hunger />
        can go from 0 to 3. Your family's <Hunger /> can go from 0 to 2. If a
        family member begins play iwth max <Hunger /> and isn't fed, they die.
      </p>
      <p>
        Reaching 3 <Hunger /> means you are starving and you must acquire food
        during the mission. If you fail, you are{' '}
        <strong>taken out of the action</strong> until you eat.
      </p>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-4">
        <article
          className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Labor for Scraps</span>
          </div>
          <p className="text-center">
            When you rely on the generosity of the Overseers for food, roll -{' '}
            <Defiance />
          </p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p className="text-start">
              You work obediently and diligently. Your overseer rewards you with
              three people's worth of food.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p className="text-start">
              You kept your head down and did your job. You're rewarded with
              enough food for yourself.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p className="text-start">
              When the overseer said 'jump,' you didn't ask 'how high?' quickly
              enough. You get only scraps, barely enough to keep you going.
            </p>
          </div>
        </article>
        <article
          className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Hunt in the Wildlands</span>
          </div>
          <p className="text-center">
            When you brave the wildlands to hunt for food and defend your prize,
            roll + <Savagery />
          </p>
          <p className="text-center">
            Any amount of <Blood /> may be spent to add +1 each to this roll.
          </p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>
              You would make the King proud. You track, hunt, and butcher enough
              meat and blood for three people
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>
              Others found the prey before you did, but yo umanaged to rip
              scraps away from them. You return with enough meat for one person
              and blood for two
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p>
              Prey was scarce - other hunters decided you would make a good
              meal. Spend 2 <Blood /> to escape or{' '}
              <strong>mark 2 conditions</strong>.
            </p>
          </div>
        </article>
      </div>
      <h2>Train</h2>
      <p>
        You can spend your free time honing your abilities and working on
        yourself. <strong>Hold</strong> 1 on a stat of your choosing. During
        play, you may spend that <strong>hold</strong> to turn a 6- with that
        stat into a 7-9. When you do, +1<strong>xp</strong>.
      </p>
      <h2>Long Term Project</h2>
      <p>
        You can pursue any activity or project that isn't normally covered by
        any of the other downtime activities. This can mean research,
        investigation, gaining new contacts, etc.
      </p>
      <p>
        The GM will tell you how involved the project is and make an initial
        suggestion for how it may be advanced.
      </p>
      <p>
        Sometimes, in order to pursue a project you must satisfy conditions that
        aren't already met. This means completing another project first.
      </p>
      <h2>Cover your Tracks</h2>
      <p>
        Your crew is up to no good, and that will certainly come back to bite
        you if you're not careful. Your team's <strong>Heat</strong> can
        progress from 0 to 4. At 4, a faction or NPC you've wronged will
        retaliate in a major way.
      </p>
      <p>You can only Cover Your Tracks once per downtime.</p>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-4">
        <article
          className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Shift the Blame</span>
          </div>
          <p className="text-center">
            When you search for a scapegoat to take the blame for your crew's
            actions, roll + <Machina />
          </p>
          <p className="text-center">
            Always reduce <strong>Heat</strong> by 1.
          </p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>
              You find the ideal scapegoat. Someone who had it coming, who no
              one will miss once they're gone.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>
              Your schemes are imperfect. Your victim is your choice of{' '}
              <em>kind</em>, <em>trustworthy</em>, or <em>owes you a favor</em>.
              Name them, then betray them.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p>
              Your enemies are far closer than you had anticipated. Your only
              option is to scapegoat a close contact or family member of the
              team. Otherwise, +1 <strong>Heat</strong>
            </p>
          </div>
        </article>
      </div>
      <h2>Recover</h2>
      <p>
        You can spend time in leisure, treatment, and/or doing what you love
        with the people you love. <strong>Clear</strong> one condition.
      </p>
      <p>You can recover from an additional condition by:</p>
      <ul>
        <li style={{ marginTop: 0, marginBottom: 0 }}>
          bragging about your exploits: +1 <strong>Heat</strong>
        </li>
        <li style={{ marginTop: 0, marginBottom: 0 }}>
          looking for a fight: -1 <Blood />
        </li>
      </ul>
      <p>
        If your character wasn't present in the last mission, they automatically{' '}
        <strong>clear a condition</strong>.
      </p>
      <h2>Support</h2>
      <p>
        The whole point of this endeavor is to better the lives of your friends
        and loved ones. This is you making an effort to do just that.
      </p>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-4">
        <article
          className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Comfort</span>
          </div>
          <p className="text-center">
            When you try to help talk a friend through their troubles, roll +{' '}
            <Heart />
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
            <p>
              They take your advice to heart, for better or worse. +1{' '}
              <strong>xp</strong>
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>They open up to you about a problem they're having</p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p>
              They don't feel like opening up to you, and they tell you why.
            </p>
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
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p>
              If they open up to you and tell you their troubles, they{' '}
              <strong>clear a condition</strong>. You may shift one of their
              labels. If they don't, <strong>mark a condition</strong>.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p>
              You open up to them in an attempt to help by relating your mutual
              problems. If they accept your advice, they{' '}
              <strong>clear a condition</strong>. If they reject you,{' '}
              <strong>mark a condition</strong>.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p>
              The player tells you something that would be unsettling or hurtful
              to their character. That's what you say. They may choose to lash
              out. If htey do, they <strong>clear a condition</strong> and you{' '}
              <strong>mark a condition</strong>.
            </p>
          </div>
        </article>
      </div>
      <h2>Prepare</h2>
      <p>
        Small acts of rebellion matter. Just because you're not actively
        sticking it to the man doesn't mean there isn't more you can do to get
        ready for the next mission.
      </p>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-4">
        <article
          className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Make Trouble</span>
          </div>
          <p className="text-center">
            When you stir up trouble to gain support for your crew, roll +{' '}
            <Defiance />
          </p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p className="text-start">
              You fuck shit up. Gain an NPC's support or helpful gang of
              ragamuffins for the next mission.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p className="text-start">
              You cause a real ruckus. You gain a gang of helpful ragamuffins
              for the next mission, but +1 <strong>Heat</strong>.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p className="text-start">
              There were more King's guards than you were expecting, you didn't
              get the chance you were hoping for. You can still cause trouble
              for them though. if you do, +1 <strong>Heat</strong> and +1{' '}
              <strong>xp</strong>.
            </p>
          </div>
        </article>
        <article
          className={`bg-[rgb(103,65,217)]/20 border-[rgb(103,65,217)] border-2 rounded-lg p-6 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-white text-2xl">Cook Something Up</span>
          </div>
          <p className="text-center">
            When you use the materials available to you to make something useful
            for your crew, roll + <Ingenuity />
          </p>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">10+</span>
            <p className="text-start">
              You're a genius. Gain a temporary asset or +2{' '}
              <strong>Team</strong> for the next mission.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">7-9</span>
            <p className="text-start">
              As 10+, but you had to steal materials for your project - either
              from someone close to the team or from an enemy. If you choose
              enemy, +1 <strong>Heat</strong>
            </p>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="shrink-0">6-</span>
            <p className="text-start">
              You get caught red-handed while working. Either abandon the
              project and <strong>mark a condition</strong> or the mission
              begins with the scene of you being found out.
            </p>
          </div>
        </article>
      </div>
      <div className="flex flex-row mt-8">
        <Previous href="/game/basic_moves" text="Basic Moves" />
        <Next href="/game/playbooks" text="Playbooks" />
      </div>
    </>
  );
}
