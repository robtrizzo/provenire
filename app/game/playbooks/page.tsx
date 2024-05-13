import Donum from '@/components/stats/donum';
import Defiance from '@/components/stats/defiance';
import Heart from '@/components/stats/heart';
import Ingenuity from '@/components/stats/ingenuity';
import Machina from '@/components/stats/machina';
import Savagery from '@/components/stats/savagery';
import Blood from '@/components/stats/blood';
import Hunger from '@/components/stats/hunger';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';

const PlaybookGridCard = ({
  id,
  name,
  color,
}: {
  id: string;
  name: string;
  color: string;
}) => (
  <Link href={`/game/playbooks/#${id}`} className="no-underline">
    <article
      className={`border-[${color}] border-2 rounded-lg p-8 hover:bg-[${color}]/20`}
    >
      <div className="text-center">
        <span className={`text-[${color}] text-2xl`}>{name}</span>
      </div>
    </article>
  </Link>
);

export default function Page() {
  return (
    <>
      <TypographyH1>Playbooks</TypographyH1>
      <TypographyP>
        Before starting play, choose a playbook for your character. The playbook
        you choose sets the character&apos;s starting stats and grants them the
        signature ability from the playbook.
      </TypographyP>
      <TypographyP>
        Additionally before starting play, try to answer each of the following
        questions for your character:
      </TypographyP>
      <TypographyP>
        <strong>What&apos;s your hurt?</strong>
      </TypographyP>
      <TypographyP>
        <strong>What makes your life hell in the factory?</strong>
      </TypographyP>
      <TypographyP>
        <strong>What&apos;s your dream?</strong>
      </TypographyP>
      <TypographyP>
        <strong>What has shown you that there&apos;s no other option?</strong>
      </TypographyP>
      <TypographyP>
        <strong>What do you have faith in?</strong>
      </TypographyP>
      <TypographyP>
        <strong>Will there be bloodshed?</strong> (There... is no other way. //
        I hope not... but there may be no other way.)
      </TypographyP>
      <div className="grid grid-cols-4 gap-4 my-16">
        <PlaybookGridCard
          id="strategist"
          name="Strategist"
          color="rgb(224,49,49)"
        />
        <PlaybookGridCard
          id="engineer"
          name="Engineer"
          color="rgb(224,49,49)"
        />
        <PlaybookGridCard
          id="commander"
          name="Commander"
          color="rgb(224,49,49)"
        />
        <PlaybookGridCard
          id="visionary"
          name="Visionary"
          color="rgb(224,49,49)"
        />
        <PlaybookGridCard
          id="advocate"
          name="Advocate"
          color="rgb(47,158,68)"
        />
        <PlaybookGridCard
          id="idealist"
          name="Idealist"
          color="rgb(47,158,68)"
        />
        <PlaybookGridCard id="leader" name="Leader" color="rgb(47,158,68)" />
        <PlaybookGridCard id="dreamer" name="Dreamer" color="rgb(47,158,68)" />
        <PlaybookGridCard
          id="logistician"
          name="Logistician"
          color="rgb(25,113,194)"
        />
        <PlaybookGridCard
          id="defender"
          name="Defender"
          color="rgb(25,113,194)"
        />
        <PlaybookGridCard
          id="executive"
          name="Executive"
          color="rgb(25,113,194)"
        />
        <PlaybookGridCard id="consul" name="Consul" color="rgb(25,113,194)" />
        <PlaybookGridCard
          id="mechanic"
          name="Mechanic"
          color="rgb(240,140,0)"
        />
        <PlaybookGridCard id="artist" name="Artist" color="rgb(240,140,0)" />
        <PlaybookGridCard
          id="adventurer"
          name="Adventurer"
          color="rgb(240,140,0)"
        />
        <PlaybookGridCard
          id="entertainer"
          name="Entertainer"
          color="rgb(240,140,0)"
        />
      </div>
      <div className="flex flex-row items-start justify-center flex-wrap gap-8 mt-8">
        <article
          id="strategist"
          className={`border-[rgb(224,49,49)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(224,49,49)] text-2xl">Strategist</span>
          </div>
          <TypographyP className="text-center">
            D: +1, M: +2, S: -1, H: -1, I: +1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Whose life have you saved in the <strong>Steel Trap</strong>{' '}
              because of your decisive action and split second ingenuity?
            </TypographyP>
            <TypographyP>
              Who would you love to date, to give your all, if only you could
              figure out a good way to ... whatever people do to start dating?
            </TypographyP>
            <TypographyP>
              Which one of the overseers gave you a brutal beating after your
              correct, but irreverent, nay, scathing contrarianism?
            </TypographyP>
            <TypographyP>
              Which one of the overseers do you have dirt on? How might they be
              exploited for your advantage?
            </TypographyP>
            <TypographyP>
              Whose romantic advances have you ruined with brutal honesty and
              tactless criticism?
            </TypographyP>
          </div>
          <hr className="border-[rgb(224,49,49)] my-4" />
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>The Chess Game of Life</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              You have significant people in your life. It&apos;s important to
              you that you have the relationship you want with them.
            </TypographyP>
            <TypographyP>
              <strong>Friends:</strong> Best Friend, Intellectual Match, Wise
              Mentor, Crush
            </TypographyP>
            <TypographyP>
              <strong>Foes:</strong> Overseer, Abuser, Rival, Doubter
            </TypographyP>
            <TypographyP>
              You start the game without <strong>Influence</strong> over any
              friends and <strong>Influenced</strong> by all foes.
            </TypographyP>
            <TypographyP>
              At the start of missions, pick one friend or foe. +1{' '}
              <strong>forward</strong> to rolls which could gain{' '}
              <strong>influence</strong> over a friend or remove{' '}
              <strong>influence</strong> from a foe.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>A Thirst for Knowledge</TypographyH4>
            </div>
            <TypographyP>
              Strategists may always <strong>Train</strong> for free in a single
              stat which they failed a roll with in the last mission.
            </TypographyP>
            <TypographyP>
              Once per mission, if they get a hit with a stat they trained in,
              +1<strong>xp</strong>
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Villainous Intellect</TypographyH4>
            </div>
            <TypographyP>
              When scapegoating someone with <strong>Shift the Blame</strong>,
              the <strong>Strategist</strong> may explain their plans to the
              scapegoat as it&apos;s happening. If they do, +1
              <strong>xp</strong>. On a 9-, also +1 <strong>Heat</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>My Body is My Machine</TypographyH4>
            </div>
            <TypographyP>
              When someone tries to <strong>Manipulate</strong>,{' '}
              <strong>Dominate</strong>, or <strong>Tell You Your Truth</strong>
              , you may interfere. Roll + <Defiance />. On a 7+ they take -2 to
              their roll. On a 10+ you also take <strong>influence</strong> over
              them or <strong>clear a condition</strong>. On a 6-, they get a
              10+ no matter what they rolled.
            </TypographyP>
          </article>
        </article>
        <article
          id="engineer"
          className={`border-[rgb(224,49,49)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(224,49,49)] text-2xl">Engineer</span>
          </div>
          <TypographyP className="text-center">
            D: -1, M: 0, S: 0, H: +1, I: +2
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Happy moments are rare in the <strong>Steel Trap</strong>; how did
              you use your creativity to bring joy to your friends?
            </TypographyP>
            <TypographyP>
              Who is a pleasant distraction from your thoughts? Why can&apos;t
              you work up the courage to ask them out?
            </TypographyP>
            <TypographyP>
              You reinvented the wheel behind the overseers&apos; backs and it
              resulted in a close friend getting injured. Who?
            </TypographyP>
            <TypographyP>
              You&apos;ve already figured out one of the new machines in the
              Steel trap. How could it be used to your advantage?
            </TypographyP>
            <TypographyP>
              Whose romantic advances have you ruined with your stubborn willful
              ignorance of feelings?
            </TypographyP>
          </div>
          <hr className="border-[rgb(224,49,49)] my-4" />
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>The Life of the Mind</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              A cerebral sort often lost in day- dreams, once per mission during
              a stressful or dire situation, the <strong>Engineer</strong> may
              withdraw into their thoughts.
            </TypographyP>
            <TypographyP>
              If they do, they don&apos;t have a chance to participate in
              solving or escaping the situation, but they get to roll +
              <Machina /> to advance any <strong>Long Term Project</strong> the
              team is working on.
            </TypographyP>
            <TypographyP>
              If this completes the project, describe the moment of genius that
              brings it all together and introduces the result to the scene.
            </TypographyP>
          </article>

          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Open Minded</TypographyH4>
            </div>
            <TypographyP>
              When someone rejects your <strong>Comfort</strong> or you reject
              someone else&apos;s <strong>Comfort</strong>, decide if their
              advice had sound reasoning or not. If it did, neither person marks
              a condition as a result of rejected advice.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Curious and Original</TypographyH4>
            </div>
            <TypographyP>
              <strong>Engineers</strong> may always advance a{' '}
              <strong>Long Term Project</strong> for free each downtime, but to
              do so, they must come up with a completely new approach to the
              problem. This may involve starting a sub-project.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Mysteries of the Universe</TypographyH4>
            </div>
            <TypographyP className="text-center">
              When you carefully observe a structure or phenomenon, roll +
              <Ingenuity />
            </TypographyP>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>ask two</TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>ask one</TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                You&apos;re baffled by what you observe, and take -1{' '}
                <strong>ongoing</strong> to interact with it until you complete
                a <strong>Long Term Project</strong> to understand it.
              </TypographyP>
            </div>
            <hr
              className="border-white"
              style={{ marginTop: '5px', marginBottom: '5px' }}
            />
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what is it made of?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                how could it be weakened or strengthened?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                how could it be used to my advantage?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what is its purpose?
              </li>
            </ul>
          </article>
        </article>
        <article
          id="commander"
          className={`border-[rgb(224,49,49)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(224,49,49)] text-2xl my-4">
              Commander
            </span>
          </div>
          <TypographyP className="text-center">
            D: 0, M: +1, S: +2, H: -2, I: +1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              What&apos;s the name of your group of loyal lackeys?
            </TypographyP>
            <TypographyP>
              Who would you love to date, if only they took romance as seriously
              as you do?
            </TypographyP>
            <TypographyP>
              Which overseer publicly humiliated you after a spat about who
              gives orders to your gang?
            </TypographyP>
            <TypographyP>
              Who else knows about the secret network of informants you&apos;ve
              set up throughout the <strong>Steel Trap</strong>?
            </TypographyP>
            <TypographyP>
              Whose romantic advances have you spurned because they weren&apos;t
              putting in as much to the relationship as you?
            </TypographyP>
          </div>
          <hr className="border-[rgb(224,49,49)] my-4" />
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>A Worthy Challenge</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              Once per mission, the <strong>Commander</strong> may demand that
              they Take Charge. Each team member votes yes or no.
            </TypographyP>
            <TypographyP>
              The Commander becomes <strong>influenced</strong> by everyone who
              votes no. They lose <strong>influence</strong> over everyone who
              votes yes.
            </TypographyP>
            <TypographyP>
              If the rest of the team unanimously votes yes, the{' '}
              <strong>Commander</strong> lays out their plan. The team takes +1{' '}
              <strong>forward</strong> to acting on the plan, and if the plan
              succeeds, everyone gains +1
              <strong>xp</strong>.
            </TypographyP>
          </article>

          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Strive for Greatness</TypographyH4>
            </div>
            <TypographyP>
              Direct one teammate to help another. If they do, they add +2
              instead of the normal +1 to the roll.
            </TypographyP>
            <TypographyP>
              If they don&apos;t help or if the roll isn&apos;t a 10+, call out
              their failure, they <strong>mark a condition</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Efficiency is King</TypographyH4>
            </div>
            <TypographyP>
              The <strong>Commander</strong> may always perform an extra
              downtime activity of their choosing.
            </TypographyP>
            <TypographyP>
              They may also instruct a teammate on how they could be more
              efficient. If they reject your advice,{' '}
              <strong>mark a condition</strong>. If they accept it, roll +
              <Ingenuity />. On a 7+, they gain an additional downtime activity.
              On a 10+, +1 <strong>team</strong>. On a 6-, they may lash out at
              you; they get to <strong>shift</strong> one of your labels.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Sacrificial Pawn</TypographyH4>
            </div>
            <TypographyP>
              When you <strong>Shift the Blame</strong>, you may roll +
              <Savagery />. If you do, you order or bully someone close to the
              team to take the fall.
            </TypographyP>
          </article>
        </article>
        <article
          id="visionary"
          className={`border-[rgb(224,49,49)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(224,49,49)] text-2xl">Visionary</span>
          </div>
          <TypographyP className="text-center">
            D: +2, M: 0, S: -1, H: -1, I: +2
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Who have you inspired with your relentless wit and sharp eye for
              revolutionary rhetoric?
            </TypographyP>
            <TypographyP>
              Who would you love to date, if only you could find the right
              opportunity for your grand gesture of affection?
            </TypographyP>
            <TypographyP>
              Which one of the overseers withholds rations from you due to your
              terrible performance at tedious tasks?
            </TypographyP>
            <TypographyP>
              Which overseer have you so chronically debated that they become
              irritated with you on sight? What&apos;s the moment you think they
              realized you&apos;re right?
            </TypographyP>
            <TypographyP>
              Whose romantic advances have you ruined because they couldn&apos;t
              keep up with your constant need for growth and novelty?
            </TypographyP>
          </div>
          <hr className="border-[rgb(224,49,49)] my-4" />
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Rapid Originality</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              When using <strong>Team</strong> to assist one of the crew, the{' '}
              <strong>Visionary</strong> can instead allow the teammate to
              reroll the dice.
            </TypographyP>
            <TypographyP>
              If the teammate does and still gets a 6-, they may lash out at the{' '}
              <strong>Visionary</strong>. This makes them{' '}
              <strong>mark a condition</strong> and the teammate may{' '}
              <strong>shift</strong> one of the{' '}
              <strong>Visionary&apos;s</strong> stats.
            </TypographyP>
          </article>

          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Expert Brainstormer</TypographyH4>
            </div>
            <TypographyP>
              <strong>Visionaries</strong> get +2 <strong>forward</strong> to
              the first roll of a <strong>Long Term Project</strong>.
            </TypographyP>
            <TypographyP>
              <strong>Visionaries</strong> get -2 <strong>forward</strong> to{' '}
              <strong>Long Term Projects</strong> that are 75% or more done.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Contrarian Charisma</TypographyH4>
            </div>
            <TypographyP>
              The <strong>Visionary</strong> may always{' '}
              <strong>Cook Something Up</strong> for free each downtime.
            </TypographyP>
            <TypographyP>
              When they do, add a helpful gang of ragamuffins to the list of
              options for a 7+. If you choose this option, +1{' '}
              <strong>Heat</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Question Everything</TypographyH4>
            </div>
            <TypographyP>
              When you are presented with information or conventional wisdom,
              roll +<Defiance />.
            </TypographyP>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>
                Ask a question. The GM will answer honestly, then ask a
                follow-up question.
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>
                Ask a question, then lose <strong>Influence</strong> over the
                giver of info/wisdom.
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                Your examinations lead you to wildly un-useful conclusions. Take
                -1 <strong>forward</strong> to acting on the info/wisdom and
                lose <strong>influence</strong> over the giver.
              </TypographyP>
            </div>
            <hr
              className="border-white"
              style={{ marginTop: '5px', marginBottom: '5px' }}
            />
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what&apos;s the critical flaw that makes this not apply to my
                current situation?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                if i do the opposite, what will the consequences be?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what&apos;s the advantage to this that they didn&apos;t even
                realize?
              </li>
            </ul>
          </article>
        </article>
        <article
          id="advocate"
          className={`border-[rgb(47,158,68)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(47,158,68)] text-2xl">Advocate</span>
          </div>
          <TypographyP className="text-center">
            D: +2, M: -1, S: 0, H: +1, I: 0
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Whose life have you saved by stepping in and taking the punishment
              for them?
            </TypographyP>
            <TypographyP>
              Who do you have a deep romantic, or even spiritual connection
              with? What&apos;s stopping you from dating each other?
            </TypographyP>
            <TypographyP>
              Which one of the overseers forced you to carry out an especially
              violent beating, or else they would kill one of your loved ones?
            </TypographyP>
            <TypographyP>
              Your indominable dedication to your principles and peers has
              resulted in years of horrible beatings. How has this scarred you?
              Through this ordeal, you&apos;ve turned the heart of an overseer.
              Who are they?
            </TypographyP>
            <TypographyP>
              Whose romantic advances have you spurned because they don&apos;t
              share your core values?
            </TypographyP>
          </div>
          <hr className="border-[rgb(47,158,68)] my-4" />
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Seeking Purpose</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              The <strong>Advocate</strong> is always seeking their purpose, and
              once they&apos;ve found it, striving to do it justice. At the
              start of the game, pick a purpose from the list below.
            </TypographyP>
            <TypographyP>
              As long as you are directly pursuing it, gain +1{' '}
              <strong>ongoing</strong>. If you betray your purpose,{' '}
              <strong>mark a condition</strong>. When you complete your purpose,
              +1<strong>xp</strong> and choose a new purpose.
            </TypographyP>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Protect __ from __ at all costs.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Exact vengeance on __ for __.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Overcome your personal failing to __.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Form a deep connection with __.
              </li>
            </ul>
          </article>

          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Connecting with Others</TypographyH4>
            </div>
            <TypographyP>
              <strong>Advocates</strong>
              take +1 forward to <strong>Comfort</strong>.{' '}
              <strong>Advocates</strong> may only <strong>Recover</strong> if
              they have <strong>Comforted</strong> first.
            </TypographyP>
            <TypographyP>
              If the <strong>Advocate&apos;s</strong> advice is taken, they gain{' '}
              <strong>influence</strong> over the person they{' '}
              <strong>Comforted</strong>.
            </TypographyP>
            <TypographyP>
              Others take -1 <strong>forward</strong> to{' '}
              <strong>Comfort</strong> <strong>Advocates</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>A Personal Mission</TypographyH4>
            </div>
            <TypographyP>
              When you encounter a clear injustice during a mission which
              isn&apos;t your main objective, and pursuing justice would
              complicate the mission: appeal to your team to right the wrong.
            </TypographyP>
            <TypographyP>
              If you choose to ignore it, mark a condition.
            </TypographyP>
            <TypographyP>
              If you pursue it, +1 <strong>team</strong> for each crewmate who
              comes with you. If you succeed, each participant gets +1
              <strong>xp</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Principled Perfectionism</TypographyH4>
            </div>
            <TypographyP>
              Once per mission, when an <strong>Advocate</strong> would get a 6-
              on a <strong>Defend</strong> or{' '}
              <strong>Defy the King&apos;s Spell</strong> roll, they may voice
              how they would never give up on their purpose. If they do, mark a
              condition and treat the roll as a partial.
            </TypographyP>
          </article>
        </article>
        <article
          id="idealist"
          className={`border-[rgb(47,158,68)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(47,158,68)] text-2xl">Idealist</span>
          </div>
          <TypographyP className="text-center">
            D: +1, M: -2, S: 0, H: +2, I: +1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Who is your best friend? Someone you&apos;ve inspired with grand
              visions of the future and who you&apos;ve always helped out of bad
              spots?
            </TypographyP>
            <TypographyP>
              Who would you love to date despite all of their superficial flaws?
              Why are they your soul-mate?
            </TypographyP>
            <TypographyP>
              Which one of the overseers threatens your best friend in order to
              get you to be an informant to Lawler?
            </TypographyP>
            <TypographyP>
              The overseers work to sow discord and conflict among the workers.
              You&apos;ve mediated and mended hatred between two of your
              community&apos;s leaders. Who are they?
            </TypographyP>
            <TypographyP>
              Who broke your heart because dating them wasn&apos;t everything
              you&apos;d imagined it would be?
            </TypographyP>
          </div>
          <hr className="border-[rgb(47,158,68)] my-4" />
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>In Search of a Calling</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              The <strong>Idealist</strong> is connected with a sense of purpose
              to uplift others. They feel other peoples&apos; suffering as if it
              was their own. At the start of the game, pick a community from the
              list below.
            </TypographyP>
            <TypographyP>
              As long as you are directly working to alleviate that
              community&apos;s suffering, gain +1 <strong>ongoing</strong>. If
              you aren&apos;t doing so, <strong>mark a condition</strong>. It
              can&apos;t be cleared until you&apos;re working to help again.
              When you succeed, +1
              <strong>xp</strong> and choose a new one.
            </TypographyP>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Children working the boiler&apos;s valves.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Ever-abused coal shovelers.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Smelter workers on the nightmare shift.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Detainees hanging from crow&apos;s cages.
              </li>
            </ul>
          </article>

          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Speaking their Truth</TypographyH4>
            </div>
            <TypographyP>
              <strong>Idealists</strong> add &ldquo;Express your inner thoughts
              and feelings through art&rdquo; to the list of ways they can
              recover from an additional condition when{' '}
              <strong>Recovering</strong> in downtime. If you show this art to
              others, they gain <strong>influence</strong> over you.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Empathize</TypographyH4>
            </div>
            <TypographyP className="text-center">
              When you internalize someone&apos;s emotions to understand them
              better, Roll +<Heart />
            </TypographyP>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>
                they must reveal a vulnerability to you and you gain{' '}
                <strong>influence</strong> over them
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>
                <strong>mark a condition</strong> and they must reveal a
                vulnerability to you
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                <strong>mark a condition</strong> and they get to{' '}
                <strong>shift</strong> your stats
              </TypographyP>
            </div>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Open Heart</TypographyH4>
            </div>
            <TypographyP>
              You can always <strong>Comfort</strong>, even during a mission. If
              you do, the character you <strong>Comforted</strong> can always{' '}
              <strong>shift</strong> an additional one of your stats.
            </TypographyP>
          </article>
        </article>
        <article
          id="leader"
          className={`border-[rgb(47,158,68)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(47,158,68)] text-2xl">Leader</span>
          </div>
          <TypographyP className="text-center">
            D: +2, M: -2, S: 0, H: +2, I: 0
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              When your community leader passed away, who advocated for you to
              take their place? How is filling their shoes going?
            </TypographyP>
            <TypographyP>
              Who&apos;s the one who got away? Where are they now, and
              what&apos;s your plan to win them back?
            </TypographyP>
            <TypographyP>
              Which one of the overseers poisoned food meant for you, resulting
              in the death of one of your loved ones? Who?
            </TypographyP>
            <TypographyP>
              You have lead the way in forming secret fight clubs to train for
              rebellion one day. Who is the instructor you found for your
              community, and what combat form do they teach?
            </TypographyP>
            <TypographyP>
              Who rejected you after what seemed to them as a sudden declaration
              of your love?
            </TypographyP>
          </div>
          <hr className="border-[rgb(47,158,68)] my-4" />
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Speaking Up for What&apos;s Right</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP className="text-center">
              When you persuade someone you <strong>influence</strong> to do the
              right thing, lose <strong>influence</strong> and Roll +<Heart />
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
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>they do what you&apos;re asking them</TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>
                they do it, but you owe them a difficult favor
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                they reject you. <strong>mark a condition</strong>
              </TypographyP>
            </div>
            <div className="flex flex-row items-center gap-4">
              <hr
                className="border-white w-full"
                style={{ marginTop: 0, marginBottom: 0 }}
              />
              <span className="text-lg shrink-0">For PCs</span>
              <hr
                className="border-white w-full"
                style={{ marginTop: 0, marginBottom: 0 }}
              />
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>both</TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>you choose one</TypographyP>
            </div>
            <ul className="text-start">
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                if they do it, +1 <strong>Team</strong> and they get +1{' '}
                <strong>xp</strong>
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                if they don&apos;t do it, they <strong>mark a condition</strong>
              </li>
            </ul>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                they may lash out. if they do, <strong>mark a condition</strong>
              </TypographyP>
            </div>
          </article>

          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Getting Involved</TypographyH4>
            </div>
            <TypographyP>
              Each downtime, you must spend one activity helping someone else
              with one of their downtime activities by taking charge. When you
              do, roll as if you were doing the activity. On a 10+, give +1{' '}
              <strong>forward</strong> and gain <strong>influence</strong> over
              them. On a 7-9, give +1 <strong>forward</strong>. On a 6-, give -1{' '}
              <strong>forward</strong> and <strong>mark a condition</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Lead the Way</TypographyH4>
            </div>
            <TypographyP>
              When you start a fight for a just cause without heed for your own
              safety, <strong>Savagely Engage a Threat</strong> but Roll +
              <Defiance />.
            </TypographyP>
            <TypographyP>
              Add &ldquo;inspire others, +2 <strong>team</strong>&rdquo; to the
              options. Remove &ldquo;resist or avoid their blows&rdquo; from the
              options.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Intense and Receptive</TypographyH4>
            </div>
            <TypographyP>
              At the start of a mission, you can explain your plan. You gain{' '}
              <strong>influence</strong> over everyone who agrees. Each person
              who disagrees adds +1 <strong>team</strong>.
            </TypographyP>
          </article>
        </article>
        <article
          id="dreamer"
          className={`border-[rgb(47,158,68)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(47,158,68)] text-2xl">Dreamer</span>
          </div>
          <TypographyP className="text-center">
            D: +1, M: -2, S: -1, H: +2, I: +2
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Your dreams are vivid, almost ... real? What scheme have you
              crafted in your dreams to bring freedom to your brethren?
            </TypographyP>
            <TypographyP>
              Who&apos;s your ex who you would love to date again? Why does it
              seem like too much work?
            </TypographyP>
            <TypographyP>
              Which one of the overseers watches your each and every move,
              punishing you immediately if you so much as toe the line of the
              box they&apos;ve defined for you?
            </TypographyP>
            <TypographyP>
              You had found a win-win relationship between your former overseer
              and your work pod. Who are they? Why did they get fired?
            </TypographyP>
            <TypographyP>
              Who did you break up with after an intense honeymoon phase because
              the flames of romance started to flicker?
            </TypographyP>
          </div>
          <hr className="border-[rgb(47,158,68)] my-4" />
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>The Magic of Everyday Life</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP className="text-center">
              When think outside the box about how something in the mission
              could be used to enrich the lives of your community after the
              mission, Roll +<Ingenuity />
            </TypographyP>
            <TypographyP className="text-center">Choose one</TypographyP>
            <ul className="text-start">
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                gain an asset that helps your community, not your crew on
                missions
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                gain <strong>influence</strong> over an NPC and gain their
                support on the next mission
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                gain 3 <strong>Food</strong> and 2 <strong>Blood</strong>
              </li>
            </ul>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7+</span>
              <TypographyP>this complicates the mission</TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                this complicates the mission and puts you in an especially bad
                spot
              </TypographyP>
            </div>
          </article>

          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>People Pleaser</TypographyH4>
            </div>
            <TypographyP>
              Each downtime, you may <strong>Comfort</strong> someone for free
              if they approach you and ask.
            </TypographyP>
            <TypographyP>
              Anyone you <strong>Read</strong>, <strong>Comfort</strong>, or{' '}
              <strong>Tell Their Truth </strong> gains{' '}
              <strong>influence</strong> over you.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Emotionally Perceptive</TypographyH4>
            </div>
            <TypographyP>
              You always know all conditions affecting each PC.
            </TypographyP>
            <TypographyP>
              You may <strong>Read Someone</strong> by rolling +<Ingenuity />{' '}
              instead of +<Machina />. If you do,{' '}
              <strong>mark a condition</strong> on a miss.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Bursts of Enthusiasm</TypographyH4>
            </div>
            <TypographyP>
              You can assist without spending <strong>team</strong> from the
              pool until there&apos;s a setback or complication; then it takes 2{' '}
              <strong>team</strong> for you to assist.
            </TypographyP>
          </article>
        </article>
        <article
          id="logistician"
          className={`border-[rgb(25,113,194)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(25,113,194)] text-2xl">Logistician</span>
          </div>
          <TypographyP className="text-center">
            D: -2, M: 0, S: +2, H: 0, I: +2
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Whose life have you saved by doing their work in addition to your
              own while they were hurt?
            </TypographyP>
            <TypographyP>
              Who do you have feelings for, who just makes sense for you? How
              long have you been waiting for them to make a move?
            </TypographyP>
            <TypographyP>
              Which one of the overseers noticed how hard you worked and then
              doubled your shift&apos;s duties because of it?
            </TypographyP>
            <TypographyP>
              You&apos;ve been invited to meetings between the overseers and
              Lawler; they consulted you about how to rework the factory for the
              new project. What have you learned that will help your crew ruin
              Lawler&apos;s plans?
            </TypographyP>
            <TypographyP>
              Who broke up with you despite you being the one who won every
              argument?
            </TypographyP>
          </div>
          <hr className="border-[rgb(25,113,194)] my-4" />
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Dutiful Servant of the King</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              The <strong>Logistician</strong> values the King&apos;s order and
              has worked diligently within its confines. This has gained them
              certain privileges and powers.
            </TypographyP>
            <TypographyP>
              The <strong>Logistician</strong> may cast{' '}
              <strong>The King&apos;s Spell</strong> on someone they{' '}
              <strong>influence</strong>.
            </TypographyP>
            <TypographyP>
              This position doesn&apos;t make many friends among the factory
              workers. Now that you&apos;ve embraced rebellion, you find there
              are many you have to prove yourself to.
            </TypographyP>
            <ul className="text-start">
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Your sibling __, who hates you even though you provide for them.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Your shift workers who you&apos;ve kept organized and on-task
                all these years.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Your best friend __, who you had to report to the overseers,
                else everyone in their family would have been killed.
              </li>
            </ul>
            <TypographyP>
              Each time you make amends, +1<strong>xp</strong> and shift{' '}
              <Defiance /> up and another stat down.
            </TypographyP>
          </article>

          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Structure and Order</TypographyH4>
            </div>
            <TypographyP>
              <strong>Logisticians</strong> may always{' '}
              <strong>Labor for Scraps</strong> each downtime for free. If they
              do and miss, the overseers get some insight into the crew&apos;s
              ops, +1 <strong>Heat</strong>.
            </TypographyP>
            <TypographyP>
              You gain +1 <strong>ongoing</strong> to{' '}
              <strong>Labor for Scraps</strong> and{' '}
              <strong>Long Term Projects</strong>, but -2{' '}
              <strong>ongoing</strong> to <strong>Shift the Blame</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Picking Up the Slack</TypographyH4>
            </div>
            <TypographyP>
              If a teammate <strong>Recovers</strong> during downtime, you may
              take another downtime activity. If you do, you can&apos;t{' '}
              <strong>Recover</strong> during this downtime.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>By the Book is Practical</TypographyH4>
            </div>
            <TypographyP>
              You add +2 <strong>team</strong> by being on the mission. Once a
              teammate complicates the mission, mark a condition or it now takes
              3 <strong>team</strong> for you to assist.
            </TypographyP>
          </article>
        </article>
        <article
          id="defender"
          className={`border-[rgb(25,113,194)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(25,113,194)] text-2xl">Defender</span>
          </div>
          <TypographyP className="text-center">
            D: -1, M: -1, S: +1, H: +2, I: +1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              You&apos;ve been giving every spare scrap of your food to your
              fellow shift workers. What toll on your body has this taken?
            </TypographyP>
            <TypographyP>
              Who do you have a crush on; who you jump to the defense of, even
              when it doesn&apos;t make sense? Why haven&apos;t you expressed
              your feelings?
            </TypographyP>
            <TypographyP>
              Which one of the overseers loves tormenting you, beating you,
              watching you suffer as you quietly work in order to support your
              family?
            </TypographyP>
            <TypographyP>
              One of the overseers nearly killed one of your fellow shift
              workers last week. Rather than sit by, you shoved his head into a
              piston and killed him. Who have you gotten to pose as the
              overseer?
            </TypographyP>
            <TypographyP>
              Who broke up with you because you never let them fight their own
              battles?
            </TypographyP>
          </div>
          <hr className="border-[rgb(25,113,194)] my-4" />
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Humble Dedication</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              At the start of each mission, choose a crewmate to help. It
              doesn&apos;t cost any <strong>team</strong> for you to assist
              them. They gain +1 <strong>ongoing</strong> to{' '}
              <strong>Savagely Engage a Threat</strong>, <strong>Defend</strong>
              , and <strong>Traverse the Mechanical Matrix</strong>. They gain
              -1 <strong>ongoing</strong> to <strong>Manipulate Someone</strong>{' '}
              and <strong>Defy the King&apos;s Spell</strong>.
            </TypographyP>
            <TypographyP>
              At the end of the mission, if they ever thanked you for your help,
              +1<strong>xp</strong> and you gain <strong>influence</strong> over
              them. If they don&apos;t, <strong>mark a condition</strong> and
              they gain <strong>influence</strong> over you.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>The Gift of Loyalty</TypographyH4>
            </div>
            <TypographyP>
              <strong>The King&apos;s Spell</strong> can never cause you to hurt
              or sabotage your crew or loved ones.
            </TypographyP>
            <TypographyP>
              Anyone who <strong>influences</strong> you gains +2{' '}
              <strong>forward</strong> to <strong>Manipulate</strong>,{' '}
              <strong>Persuade</strong>, or <strong>Read</strong> you.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>The Highest Standard</TypographyH4>
            </div>
            <TypographyP>
              You can only perform one downtime activity, but gain +2{' '}
              <strong>forward</strong> on it.
            </TypographyP>
            <TypographyP>
              If no one on the team recognizes you for a job-well-done,{' '}
              <strong>mark a condition</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Showing Up</TypographyH4>
            </div>
            <TypographyP>
              You may use <Heart /> for{' '}
              <strong>Savagely Engage a Threat</strong> when your foes would
              otherwise threaten your crew or loved ones.
            </TypographyP>
            <TypographyP>
              If you do, remove &ldquo;force them into dangerous
              machinery&rdquo; and &ldquo;impress or frighten them&rdquo; from
              the list of options and add &ldquo;prevent them from hurting
              _&rdquo; to the list of options.
            </TypographyP>
          </article>
        </article>
        <article
          id="executive"
          className={`border-[rgb(25,113,194)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(25,113,194)] text-2xl">Executive</span>
          </div>
          <TypographyP className="text-center">
            D: -1, M: +2, S: -1, H: +1, I: +1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              You have a set of beliefs sacred to your people that give you
              hope: beliefs now outlawed by the King. What are they?
            </TypographyP>
            <TypographyP>
              Who do you see at social gatherings who really interests you? What
              position do you need to be in before you know they&apos;d go out
              with you?
            </TypographyP>
            <TypographyP>
              Which one of the overseers has spirited you away on late shifts to
              experiment on you? What scars has their tampering left?
            </TypographyP>
            <TypographyP>
              Many of these years you have shut out the external horrors and
              focused wholeheartedly on yourself. What special skill have you
              honed in this time?
            </TypographyP>
            <TypographyP>
              Who broke up with you because you&apos;re incapable of having your
              mind changed?
            </TypographyP>
          </div>
          <hr className="border-[rgb(25,113,194)] my-4" />
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>A Greater Responsibility</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              When you feel that an ally has jeopardized a mission due to
              incompetence, laziness, or dishonesty,
              <strong>hold</strong> 1 over them.
            </TypographyP>
            <TypographyP>
              During downtime, you may spend 1 <strong>hold</strong>
              on an ally to Condemn them. Roll +<Machina />. On a 10+, they mark
              a condition and lose <strong>influence</strong> over someone of
              your choice. On a 7-9, they <strong>mark a condition</strong> or
              lose <strong>influence</strong> over someone of your choice. On a
              miss, you <strong>mark a condition</strong> and lose{' '}
              <strong>influence</strong> over them.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Lead by Example</TypographyH4>
            </div>
            <TypographyP>
              At the start of a each mission, you may describe a plan which does
              not glorify you, but makes the best use of everyone&apos;s talents
              in your opinion.
            </TypographyP>
            <TypographyP>
              Each crew member who agrees to the plan may spend team on
              themselves as long as it furthers your plan. If they agree and you
              fail at your part, they gain <strong>influence</strong> over you.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Here are the Facts</TypographyH4>
            </div>
            <TypographyP>
              When you <strong>Manipulate Someone</strong>, you may describe to
              them in detail why they have to do what you&apos;re saying. If you
              do, take +1 <strong>forward</strong> and +1 <strong>Heat</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Climb the Ladder</TypographyH4>
            </div>
            <TypographyP>
              During downtime, you may Climb the Ladder of a community or
              organization which you are familiar with.
            </TypographyP>
            <TypographyP>
              Roll +<Machina />. On a 10+, you schmooze your way into a higher
              status with that group. On a 7-9, you must exploit a close friend
              or family member of the crew to do so. Who are they? On a miss,
              the organization asks you a very difficult favor.
            </TypographyP>
          </article>
        </article>
        <article
          id="consul"
          className={`border-[rgb(25,113,194)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(25,113,194)] text-2xl">Consul</span>
          </div>
          <TypographyP className="text-center">
            D: 0, M: +1, S: 0, H: 0, I: +1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Each night you tell stories of rebels and heroes of the common
              people. It brings your community together. Who are these heroes?
            </TypographyP>
            <TypographyP>
              Someone is always there for you, reassuring you when you doubt
              yourself and supporting you through hard times. Who are they? How
              do you plan to win their heart?
            </TypographyP>
            <TypographyP>
              Which one of the overseers takes joy in publicly humiliating you
              and discrediting you in front of your peers?
            </TypographyP>
            <TypographyP>
              You and your shiftmates have worked together in secret for years
              to build a secret passage within the factory. Where does it go?
            </TypographyP>
            <TypographyP>
              Who did you break up with because they never gave you the approval
              you need, even when you changed yourself for them?
            </TypographyP>
          </div>
          <hr className="border-[rgb(25,113,194)] my-4" />
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Relationships that Last</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              You&apos;ve spent your time being there for your friends and
              family through thick and thin. You know things about them they may
              have forgotten about themselves.
            </TypographyP>
            <TypographyP>
              When a teammate rolls a 6- during a mission, you may tell them{' '}
              <strong>The Truth About Themselves</strong> , speaking to a shared
              memory. If you do, you may always <strong>shift</strong> their
              stats and they may always turn their 6- into a 7.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Living for Connection</TypographyH4>
            </div>
            <TypographyP>
              At the end of each mission, if you gained{' '}
              <strong>influence</strong> over someone new, +1<strong>xp</strong>
              . If you lost <strong>influence</strong> over anyone, mark a
              condition.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Factory Mastery</TypographyH4>
            </div>
            <TypographyP>
              When you <strong>Traverse the Mechanical Matrix</strong>, you may
              always choose one, even on a Miss.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Host a Gathering</TypographyH4>
            </div>
            <TypographyP>
              During downtime, you may Host a Gathering of close friends,
              teammates, and family. Each teammate chooses if they wish to
              invest a downtime activity to attend. Lose{' '}
              <strong>influence</strong> over each teammate who doesn&apos;t
              come. Each teammate who attends may <strong>Recover</strong>.
              During the next mission, gain +1 <strong>forward</strong>
              to <strong>Read</strong> or <strong>Manipulate</strong> them.
            </TypographyP>
            <TypographyP>
              Roll +<Ingenuity />. On a 10+, the guards are none the wiser.
              Otherwise, +1 <strong>Heat</strong>.
            </TypographyP>
          </article>
        </article>
        <article
          id="virtuoso"
          className={`border-[rgb(240,140,0)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(240,140,0)] text-2xl">Virtuoso</span>
          </div>
          <TypographyP className="text-center">
            D: +2, M: -2, S: 0, H: 0, I: +2
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Who is your mentor? A fellow tinkerer who has helped you learn the
              multitude of your interests?
            </TypographyP>
            <TypographyP>
              Who is the latest flame to catch your eye? What&apos;s your novel
              plan to initiate love?
            </TypographyP>
            <TypographyP>
              Which one of the overseers gets a little too close? Breathes down
              your neck? Is visible from the corner of your eye as you walk home
              at night?
            </TypographyP>
            <TypographyP>
              You&apos;ve slain a great beats in a hunt not too long back, and
              you managed to preserve the remains - a great cache of food. But
              you can&apos;t access it easily, what&apos;s the catch?
            </TypographyP>
            <TypographyP>
              Who did you break up with because they wanted to get serious too
              quickly?
            </TypographyP>
          </div>
          <hr className="border-[rgb(240,140,0)] my-4" />
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Dare to Differ</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              During downtime and missions, <strong>hold</strong> 1
              <strong>Steady</strong> each time someone else takes the lead on
              an <Ingenuity /> roll.
            </TypographyP>
            <TypographyP>
              Spend 3 <strong>Steady</strong> to have a burst of impulsive and
              creative energy and take a 10 on an <Ingenuity /> roll - this can
              be done on the same roll as caused you to gain a{' '}
              <strong>hold</strong>.
            </TypographyP>
            <TypographyP>
              If you do, you must approach the situation from a completely
              different angle and spare no one&apos;s feelings. Lose{' '}
              <strong>influence</strong> over anyone you snub.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>All Fair Play</TypographyH4>
            </div>
            <TypographyP>
              Other character&apos;s can&apos;t gain <strong>influence</strong>
              over the <strong>Virtuoso</strong> without their permission.
              Whenever another character would lose <strong>influence</strong>{' '}
              over the <strong>Virtuoso</strong>, they don&apos;t unless the{' '}
              <strong>Virtuoso</strong> allows it
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Personal Project</TypographyH4>
            </div>
            <TypographyP>
              During downtime, the <strong>Virtuoso</strong> must spend a
              downtime activity to work on a personal project. This is similar
              to a <strong>Long Term Project</strong>, but the goal isn&apos;t
              defined at the start and it has no limit on the progress that can
              be made towards it.
            </TypographyP>
            <TypographyP>
              During a mission, the
              <strong>Virtuoso</strong> can Unveil their Personal Project, say
              what it is, and the GM will determine how effective it is based on
              the progress it had.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Defying the Rules</TypographyH4>
            </div>
            <TypographyP>
              The <strong>Virtuoso</strong> can mark a condition and explain an
              out-of-the-box solution to the problem. If they do, they roll a
              basic move with <Ingenuity /> rather than the normal stat.
            </TypographyP>
          </article>
        </article>
        <article
          id="artist"
          className={`border-[rgb(240,140,0)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(240,140,0)] text-2xl">Artist</span>
          </div>
          <TypographyP className="text-center">
            D: +1, M: +1, S: -2, H: +1, I: +1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              You and a close friend relax by acrobatics in and around the
              equipment. Who are they? Which region of the Steel Trap is it?
            </TypographyP>
            <TypographyP>
              Who do you delight in surprising in little ways? Why haven&apos;t
              they asked you out yet?
            </TypographyP>
            <TypographyP>
              Which one of the overseers takes delight in working to control
              you? To break you of your resolve and small acts of defiance?
            </TypographyP>
            <TypographyP>
              You&apos;ve been working on a passion project, some form of
              creativity and insight to express your bold ideas and speak to
              your fellows&apos; hearts. What is it?
            </TypographyP>
            <TypographyP>
              Who did you mutually break up with due to their pushiness and your
              guarded emotions?
            </TypographyP>
          </div>
          <hr className="border-[rgb(240,140,0)] my-4" />
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Many Passions</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              The first time the <strong>Artist</strong> uses a move during a
              mission, they gain +1 <strong>forward</strong>.
            </TypographyP>
            <TypographyP>
              On the third (and higher) time using a particular move during a
              mission, the <strong>Artist</strong> takes -1{' '}
              <strong>forward</strong>.
            </TypographyP>
            <TypographyP>
              During a mission, if the <strong>Artist</strong> uses four or more
              unique moves, +1<strong>xp</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Read Emotions</TypographyH4>
            </div>
            <TypographyP className="text-center">
              When you relate to someone&apos;s emotions to better understand
              them, roll +<Heart />
            </TypographyP>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>ask one</TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>
                ask one, they get an opportunity to surprise you
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                what you glean, if true, is hurtful or disturbing to you.{' '}
                <strong>mark a condition</strong> and they get an opportunity to
                surprise you
              </TypographyP>
            </div>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what conditions have they marked?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                how could I minimize conflict with this person?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what could i do to befriend them?
              </li>
            </ul>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Overwhelmed</TypographyH4>
            </div>
            <TypographyP>
              The <strong>Artist</strong> has an extra condition they may mark
              called <strong>Overwhelmed</strong>. If this condition is marked,
              they can only do one downtime activity.{' '}
              <strong>Overwhelmed</strong> may be cleared normally or by
              spending a downtime activity to take time for themselves.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Pain to Rage</TypographyH4>
            </div>
            <TypographyP>
              When someone uses <strong>The Truth About You</strong> or{' '}
              <strong>The King&apos;s Spell</strong> on you, you may always
              choose to
              <strong>mark a condition</strong> and ignore the effects.
            </TypographyP>
            <TypographyP>
              If you do, you must attack them or hurt them. Whichever move you
              use to do so, you may use <Defiance /> instead of the normal stat.
            </TypographyP>
          </article>
        </article>
        <article
          id="adventurer"
          className={`border-[rgb(240,140,0)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(240,140,0)] text-2xl">Adventurer</span>
          </div>
          <TypographyP className="text-center">
            D: +2, M: +2, S: +1, H: -2, I: -1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Who is your partner in crime? Your confidant and close friend who
              you adventure with?
            </TypographyP>
            <TypographyP>
              Who would you love to introduce to all of your hobbies? To explore
              and have fun with?
            </TypographyP>
            <TypographyP>
              Which one of the overseers locked you and your best friend up into
              solitary confinement for months? Why did they let you out but not
              your friend?
            </TypographyP>
            <TypographyP>
              You&apos;ve been using your large social circle to spread rumors
              amongst the workers. What are the rumors and how will they work to
              your crew&apos;s advantage?
            </TypographyP>
            <TypographyP>
              Who broke up with you because they were looking for something not
              just fun, but deeper?
            </TypographyP>
          </div>
          <hr className="border-[rgb(240,140,0)] my-4" />
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>Socialite</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP className="text-center">
              During downtime, when you spend time making new friends and not
              thinking about anything important or serious, Roll +<Machina />.
            </TypographyP>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>
                gain <strong>influence</strong> over an NPC and gain their
                support on your next mission
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>
                gain <strong>influence</strong> over an NPC
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                they don&apos;t particularly like you. They&apos;ll tell you why
                and you mark a condition.
              </TypographyP>
            </div>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Call Them Out</TypographyH4>
            </div>
            <TypographyP className="text-center">
              When you notice someone acting differently and want to draw
              attention to it, Roll +<Machina />
            </TypographyP>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>
                ask one, then they must answer honestly or everyone in the scene
                gains <strong>influence</strong> over them
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>
                ask one, then they must answer honestly or mark a condition
              </TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                you were dead wrong. They may lash out at you. If they do, mark
                a condition or you lose <strong>influence</strong> over everyone
                in the scene
              </TypographyP>
            </div>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what are your true feelings toward __?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                how long have you been hiding your part in __ scheme?
              </li>
            </ul>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Dive Right In</TypographyH4>
            </div>
            <TypographyP>
              When planning has gone on for too long, you may Initiate and do it
              your way.
            </TypographyP>
            <TypographyP>
              Roll +<Defiance />. On a 10+ your plan is already working just
              fine. On a 7-9, you&apos;re in the thick of things and the GM
              introduces a complication. On a 6-, you&apos;re caught in a major
              complication and need the team&apos;s help immediately. +1
              <strong>xp</strong>.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>The Path Less Travelled</TypographyH4>
            </div>
            <TypographyP>
              During downtime you may only perform activities which haven&apos;t
              been done yet, or are tied for the least done. Take +1{' '}
              <strong>forward</strong> to these activities.
            </TypographyP>
          </article>
        </article>
        <article
          id="entertainer"
          className={`border-[rgb(240,140,0)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(240,140,0)] text-2xl">Entertainer</span>
          </div>
          <TypographyP className="text-center">
            D: 0, M: +2, S: 0, H: +1, I: -1
          </TypographyP>
          <div className="flex flex-col gap-4 mt-4">
            <TypographyP>
              Sometimes when you dream, you make contact with someone else in a
              very real way. Who are they?
            </TypographyP>
            <TypographyP>
              Who excites you? Makes you full of energy with just their
              presence? What&apos;s stopping you?
            </TypographyP>
            <TypographyP>
              Which one of the overseers takes time to sabotage or outright ruin
              your clothing and appearance?
            </TypographyP>
            <TypographyP>
              Your wide socialization has brought people together from many
              walks of life. What is this unlikely group of friends and what
              have you all accomplished which could only have been done
              together?
            </TypographyP>
            <TypographyP>
              Who did you break up with because they criticized you and just
              killed the spark?
            </TypographyP>
          </div>
          <hr className="border-[rgb(240,140,0)] my-4" />
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <TypographyH4>A Spontaneous Spirit</TypographyH4>{' '}
              <span className="text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <TypographyP>
              When the <strong>Entertainer</strong> eschews planning and
              convention during a mission, they may make a move and roll +
              <strong>Nothing</strong>. If they do, any number of teammates may
              assist and add <strong>team</strong> to the roll. +1
              <strong>xp</strong>.
            </TypographyP>
            <TypographyP>
              If the move is a 10+, the <strong>Entertainer</strong> gains{' '}
              <strong>influence</strong> over those who helped and those who did
              not help lose <strong>influence</strong> over the
              <strong>Entertainer</strong>.
            </TypographyP>
            <TypographyP>
              On a 6-, the <strong>Entertainer</strong> loses{' '}
              <strong>influence</strong> over those who helped and those who did
              not help gain <strong>influence</strong> over the{' '}
              <strong>Entertainer</strong>
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Living With Passion</TypographyH4>
            </div>
            <TypographyP>
              During downtime, the <strong>Entertainer</strong> may always{' '}
              <strong>Make Trouble</strong> for free. If they do, they may
              choose to tell the grand tales about the crew&apos;s exploits,
              incurring +1 <strong>Heat</strong> and adding 3{' '}
              <strong>team</strong> to the pool for the upcoming mission.
            </TypographyP>
            <TypographyP>
              If the <strong>Entertainer</strong>{' '}
              <strong>Labors for Scraps</strong>, it costs 2 downtime
              activities.
            </TypographyP>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Situational Awareness</TypographyH4>
            </div>
            <TypographyP className="text-center">
              When you quickly analyze the real material things going on around
              you, roll +<Machina />.
            </TypographyP>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <TypographyP>ask two</TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <TypographyP>ask one</TypographyP>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <TypographyP>
                lose focus, something critical slips your attention
              </TypographyP>
            </div>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what key thing has changed?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what&apos;s the best escape route?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                who here is in the most danger?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                who here is the most dangerous?
              </li>
            </ul>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <TypographyH4>Avoid Conflict</TypographyH4>
            </div>
            <TypographyP>
              If someone rejects you as a result of a move, you may Avoid
              Conflict and ignore the negative effects.
            </TypographyP>
            <TypographyP>
              You may never lash out at someone as part of a move.
            </TypographyP>
          </article>
        </article>
      </div>
      <Separator />
      <div className="w-full flex">
        <Link href="/game/downtime" className="mr-auto">
          <Button variant="outline">
            <ChevronLeft /> Downtime
          </Button>
        </Link>
      </div>
    </>
  );
}
