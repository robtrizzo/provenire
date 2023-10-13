import Link from 'next/link';
import Defiance from '@/components/Defiance';
import Previous from '@/components/Previous';
import Ingenuity from '@/components/Ingenuity';
import Heart from '@/components/Heart';
import Machina from '@/components/Machina';
import Savagery from '@/components/Savagery';

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

export default function Playbooks() {
  return (
    <>
      <h1>Playbooks</h1>
      <p>
        Before starting play, choose a playbook for your character. The playbook
        you choose sets the character's starting stats and grants them the
        signature ability from the playbook.
      </p>
      <p>
        Additionally before starting play, try to answer each of the following
        questions for your character:
      </p>
      <p>
        <strong>What's your hurt?</strong>
      </p>
      <p>
        <strong>What makes your life hell in the factory?</strong>
      </p>
      <p>
        <strong>What's your dream?</strong>
      </p>
      <p>
        <strong>What has shown you that there's no other option?</strong>
      </p>
      <p>
        <strong>What do you have faith in?</strong>
      </p>
      <p>
        <strong>Will there be bloodshed?</strong> (There... is no other way. //
        I hope not... but there may be no other way.)
      </p>
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
          <p className="text-center">D: +1, M: +2, S: -1, H: -1, I: +1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Whose life have you saved in the <strong>Steel Trap</strong>{' '}
              because of your decisive action and split second ingenuity?
            </p>
            <p>
              Who would you love to date, to give your all, if only you could
              figure out a good way to ... whatever people do to start dating?
            </p>
            <p>
              Which one of the overseers gave you a brutal beating after your
              correct, but irreverent, nay, scathing contrarianism?
            </p>
            <p>
              Which one of the overseers do you have dirt on? How might they be
              exploited for your advantage?
            </p>
            <p>
              Whose romantic advances have you ruined with brutal honesty and
              tactless criticism?
            </p>
          </div>
          <hr className="border-[rgb(224,49,49)]" />
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">The Chess Game of Life</span>{' '}
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
            <p>
              You have significant people in your life. It's important to you
              that you have the relationship you want with them.
            </p>
            <p>
              <strong>Friends:</strong> Best Friend, Intellectual Match, Wise
              Mentor, Crush
            </p>
            <p>
              <strong>Foes:</strong> Overseer, Abuser, Rival, Doubter
            </p>
            <p>
              You start the game without <strong>Influence</strong> over any
              friends and <strong>Influenced</strong> by all foes.
            </p>
            <p>
              At the start of missions, pick one friend or foe. +1{' '}
              <strong>forward</strong> to rolls which could gain{' '}
              <strong>influence</strong> over a friend or remove{' '}
              <strong>influence</strong> from a foe.
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">A Thirst for Knowledge</span>
            </div>
            <p>
              Strategists may always <strong>Train</strong> for free in a single
              stat which they failed a roll with in the last mission.
            </p>
            <p>
              Once per mission, if they get a hit with a stat they trained in,
              +1<strong>xp</strong>
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Villainous Intellect</span>
            </div>
            <p>
              When scapegoating someone with <strong>Shift the Blame</strong>,
              the <strong>Strategist</strong> may explain their plans to the
              scapegoat as it's happening. If they do, +1<strong>xp</strong>. On
              a 9-, also +1 <strong>Heat</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">My Body is My Machine</span>
            </div>
            <p>
              When someone tries to <strong>Manipulate</strong>,{' '}
              <strong>Dominate</strong>, or <strong>Tell You Your Truth</strong>
              , you may interfere. Roll + <Defiance />. On a 7+ they take -2 to
              their roll. On a 10+ you also take <strong>influence</strong> over
              them or <strong>clear a condition</strong>. On a 6-, they get a
              10+ no matter what they rolled.
            </p>
          </article>
        </article>
        <article
          id="engineer"
          className={`border-[rgb(224,49,49)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(224,49,49)] text-2xl">Engineer</span>
          </div>
          <p className="text-center">D: -1, M: 0, S: 0, H: +1, I: +2</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Happy moments are rare in the <strong>Steel Trap</strong>; how did
              you use your creativity to bring joy to your friends?
            </p>
            <p>
              Who is a pleasant distraction from your thoughts? Why can't you
              work up the courage to ask them out?
            </p>
            <p>
              You reinvented the wheel behind the overseers' backs and it
              resulted in a close friend getting injured. Who?
            </p>
            <p>
              You've already figured out one of the new machines in the Steel
              trap. How could it be used to your advantage?
            </p>
            <p>
              Whose romantic advances have you ruined with your stubborn willful
              ignorance of feelings?
            </p>
          </div>
          <hr className="border-[rgb(224,49,49)]" />
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">The Life of the Mind</span>{' '}
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
            <p>
              A cerebral sort often lost in day- dreams, once per mission during
              a stressful or dire situation, the <strong>Engineer</strong> may
              withdraw into their thoughts.
            </p>
            <p>
              If they do, they don't have a chance to participate in solving or
              escaping the situation, but they get to roll +<Machina /> to
              advance any <strong>Long Term Project</strong> the team is working
              on.
            </p>
            <p>
              If this completes the project, describe the moment of genius that
              brings it all together and introduces the result to the scene.
            </p>
          </article>

          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Open Minded</span>
            </div>
            <p>
              When someone rejects your <strong>Comfort</strong> or you reject
              someone else's <strong>Comfort</strong>, decide if their advice
              had sound reasoning or not. If it did, neither person marks a
              condition as a result of rejected advice.
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Curious and Original</span>
            </div>
            <p>
              <strong>Engineers</strong> may always advance a{' '}
              <strong>Long Term Project</strong> for free each downtime, but to
              do so, they must come up with a completely new approach to the
              problem. This may involve starting a sub-project.
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">
                Mysteries of the Universe
              </span>
            </div>
            <p className="text-center">
              When you carefully observe a structure or phenomenon, roll +
              <Ingenuity />
            </p>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <p>ask two</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>ask one</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                You're baffled by what you observe, and take -1{' '}
                <strong>ongoing</strong> to interact with it until you complete
                a <strong>Long Term Project</strong> to understand it.
              </p>
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
            <span className="text-[rgb(224,49,49)] text-2xl">Commander</span>
          </div>
          <p className="text-center">D: 0, M: +1, S: +2, H: -2, I: +1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>What's the name of your group of loyal lackeys?</p>
            <p>
              Who would you love to date, if only they took romance as seriously
              as you do?
            </p>
            <p>
              Which overseer publicly humiliated you after a spat about who
              gives orders to your gang?
            </p>
            <p>
              Who else knows about the secret network of informants you've set
              up throughout the <strong>Steel Trap</strong>?
            </p>
            <p>
              Whose romantic advances have you spurned because they weren't
              putting in as much to the relationship as you?
            </p>
          </div>
          <hr className="border-[rgb(224,49,49)]" />
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">A Worthy Challenge</span>{' '}
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
            <p>
              Once per mission, the <strong>Commander</strong> may demand that
              they Take Charge. Each team member votes yes or no.
            </p>
            <p>
              The Commander becomes <strong>influenced</strong> by everyone who
              votes no. They lose <strong>influence</strong>
              over everyone who votes yes.
            </p>
            <p>
              If the rest of the team unanimously votes yes, the{' '}
              <strong>Commander</strong> lays out their plan. The team takes +1{' '}
              <strong>forward</strong>
              to acting on the plan, and if the plan succeeds, everyone gains +1
              <strong>xp</strong>.
            </p>
          </article>

          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Strive for Greatness</span>
            </div>
            <p>
              Direct one teammate to help another. If they do, they add +2
              instead of the normal +1 to the roll.
            </p>
            <p>
              If they don't help or if the roll isn't a 10+, call out their
              failure, they <strong>mark a condition</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Efficiency is King</span>
            </div>
            <p>
              The <strong>Commander</strong> may always perform an extra
              downtime activity of their choosing.
            </p>
            <p>
              They may also instruct a teammate on how they could be more
              efficient. If they reject your advice,{' '}
              <strong>mark a condition</strong>. If they accept it, roll +
              <Ingenuity />. On a 7+, they gain an additional downtime activity.
              On a 10+, +1 <strong>team</strong>. On a 6-, they may lash out at
              you; they get to <strong>shift</strong> one of your labels.
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Sacrificial Pawn</span>
            </div>
            <p>
              When you <strong>Shift the Blame</strong>, you may roll +
              <Savagery />. If you do, you order or bully someone close to the
              team to take the fall.
            </p>
          </article>
        </article>
        <article
          id="visionary"
          className={`border-[rgb(224,49,49)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(224,49,49)] text-2xl">Visionary</span>
          </div>
          <p className="text-center">D: +2, M: 0, S: -1, H: -1, I: +2</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Who have you inspired with your relentless wit and sharp eye for
              revolutionary rhetoric?
            </p>
            <p>
              Who would you love to date, if only you could find the right
              opportunity for your grand gesture of affection?
            </p>
            <p>
              Which one of the overseers withholds rations from you due to your
              terrible performance at tedious tasks?
            </p>
            <p>
              Which overseer have you so chronically debated that they become
              irritated with you on sight? What's the moment you think they
              realized you're right?
            </p>
            <p>
              Whose romantic advances have you ruined because they couldn't keep
              up with your constant need for growth and novelty?
            </p>
          </div>
          <hr className="border-[rgb(224,49,49)]" />
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">Rapid Originality</span>{' '}
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
            <p>
              When using <strong>Team</strong> to assist one of the crew, the{' '}
              <strong>Visionary</strong> can instead allow the teammate to
              reroll the dice.
            </p>
            <p>
              If the teammate does and still gets a 6-, they may lash out at the{' '}
              <strong>Visionary</strong>. This makes them{' '}
              <strong>mark a condition</strong> and the teammate may{' '}
              <strong>shift</strong> one of the <strong>Visionary's</strong>{' '}
              stats.
            </p>
          </article>

          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Expert Brainstormer</span>
            </div>
            <p>
              <strong>Visionaries</strong> get +2 <strong>forward</strong> to
              the first roll of a <strong>Long Term Project</strong>.
            </p>
            <p>
              <strong>Visionaries</strong> get -2 <strong>forward</strong> to{' '}
              <strong>Long Term Projects</strong> that are 75% or more done.
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Contrarian Charisma</span>
            </div>
            <p>
              The <strong>Visionary</strong> may always{' '}
              <strong>Cook Something Up</strong> for free each downtime.
            </p>
            <p>
              When they do, add a helpful gang of ragamuffins to the list of
              options for a 7+. If you choose this option, +1{' '}
              <strong>Heat</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(224,49,49)]/20 border-[rgb(224,49,49)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Question Everything</span>
            </div>
            <p>
              When you are presented with information or conventional wisdom,
              roll +<Defiance />.
            </p>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <p>
                Ask a question. TheGM will answer honestly, then ask a follow-up
                question.
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>
                Ask a question, then lose <strong>Influence</strong> over the
                giver of info/wisdom.
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                Your examinations lead you to wildly un-useful conclusions. Take
                -1 <strong>forward</strong> to acting on the info/wisdom and
                lose <strong>influence</strong> over the giver.
              </p>
            </div>
            <hr
              className="border-white"
              style={{ marginTop: '5px', marginBottom: '5px' }}
            />
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what's the critical flaw that makes this not apply to my current
                situation?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                if i do the opposite, what will the consequences be?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what's the advantage to this that they didn't even realize?
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
          <p className="text-center">D: +2, M: -1, S: 0, H: +1, I: 0</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Whose life have you saved by stepping in and taking the punishment
              for them?
            </p>
            <p>
              Who do you have a deep romantic, or even spiritual connection
              with? What's stopping you from dating each other?
            </p>
            <p>
              Which one of the overseers forced you to carry out an especially
              violent beating, or else they would kill one of your loved ones?
            </p>
            <p>
              Your indominable dedication to your principles and peers has
              resulted in years of horrible beatings. How has this scarred you?
              Through this ordeal, you've turned the heart of an overseer. Who
              are they?
            </p>
            <p>
              Whose romantic advances have you spurned because they don't share
              your core values?
            </p>
          </div>
          <hr className="border-[rgb(47,158,68)]" />
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">Seeking Purpose</span>{' '}
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
            <p>
              The <strong>Advocate</strong> is always seeking their purpose, and
              once they've found it, striving to do it justice. At the start of
              the game, pick a purpose from the list below.
            </p>
            <p>
              As long as you are directly pursuing it, gain +1{' '}
              <strong>ongoing</strong>. If you betray your purpose,{' '}
              <strong>mark a condition</strong>. When you complete your purpose,
              +1<strong>xp</strong> and choose a new purpose.
            </p>
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
              <span className="text-white text-xl">Connecting with Others</span>
            </div>
            <p>
              <strong>Advocates</strong>
              take +1 forward to <strong>Comfort</strong>.{' '}
              <strong>Advocates</strong> may only <strong>Recover</strong> if
              they have <strong>Comforted</strong> first.
            </p>
            <p>
              If the <strong>Advocate's</strong> advice is taken, they gain{' '}
              <strong>influence</strong> over the person they{' '}
              <strong>Comforted</strong>.
            </p>
            <p>
              Others take -1 <strong>forward</strong> to{' '}
              <strong>Comfort</strong> <strong>Advocates</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">A Personal Mission</span>
            </div>
            <p>
              When you encounter a clear injustice during a mission which isn't
              your main objective, and pursuing justice would complicate the
              mission: appeal to your team to right the wrong.
            </p>
            <p>If you choose to ignore it, mark a condition.</p>
            <p>
              If you pursue it, +1 <strong>team</strong> for each crewmate who
              comes with you. If you succeed, each participant gets +1
              <strong>xp</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">
                Principled Perfectionism
              </span>
            </div>
            <p>
              Once per mission, when an <strong>Advocate</strong> would get a 6-
              on a <strong>Defend</strong> or{' '}
              <strong>Defy the King's Spell</strong> roll, they may voice how
              they would never give up on their purpose. If they do, mark a
              condition and treat the roll as a partial.
            </p>
          </article>
        </article>
        <article
          id="idealist"
          className={`border-[rgb(47,158,68)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(47,158,68)] text-2xl">Idealist</span>
          </div>
          <p className="text-center">D: +1, M: -2, S: 0, H: +2, I: +1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Who is your best friend? Someone you've inspired with grand
              visions of the future and who you've always helped out of bad
              spots?
            </p>
            <p>
              Who would you love to date despite all of their superficial flaws?
              Why are they your soul-mate?
            </p>
            <p>
              Which one of the overseers threatens your best friend in order to
              get you to be an informant to Lawler?
            </p>
            <p>
              The overseers work to sow discord and conflict among the workers.
              You've mediated and mended hatred between two of your community's
              leaders. Who are they?
            </p>
            <p>
              Who broke your heart because dating them wasn't everything you'd
              imagined it would be?
            </p>
          </div>
          <hr className="border-[rgb(47,158,68)]" />
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">In Search of a Calling</span>{' '}
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
            <p>
              The <strong>Idealist</strong> is connected with a sense of purpose
              to uplift others. They feel other peoples' suffering as if it was
              their own. At the start of the game, pick a community from the
              list below.
            </p>
            <p>
              As long as you are directly working to alleviate that community's
              suffering, gain +1 <strong>ongoing</strong>. If you aren't doing
              so, <strong>mark a condition</strong>. It can't be cleared until
              you're working to help again. When you succeed, +1
              <strong>xp</strong> and choose a new one.
            </p>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Children working the boiler's valves.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Ever-abused coal shovelers.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Smelter workers on the nightmare shift.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Detainees hanging from crow's cages.
              </li>
            </ul>
          </article>

          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Speaking their Truth</span>
            </div>
            <p>
              <strong>Idealists</strong> add "Express your inner thoughts and
              feelings through art" to the list of ways they can recover from an
              additional condition when <strong>Recovering</strong> in downtime.
              If you show this art to others, they gain{' '}
              <strong>influence</strong> over you.
            </p>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Empathize</span>
            </div>
            <p className="text-center">
              When you internalize someone's emotions to understand them better,
              Roll +<Heart />
            </p>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <p>
                they must reveal a vulnerability to you and you gain{' '}
                <strong>influence</strong> over them
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>
                <strong>mark a condition</strong> and they must reveal a
                vulnerability to you
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                <strong>mark a condition</strong> and they get to{' '}
                <strong>shift</strong> your stats
              </p>
            </div>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Open Heart</span>
            </div>
            <p>
              You can always <strong>Comfort</strong>, even during a mission. If
              you do, the character you <strong>Comforted</strong> can always{' '}
              <strong>shift</strong> an additional one of your stats.
            </p>
          </article>
        </article>
        <article
          id="leader"
          className={`border-[rgb(47,158,68)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(47,158,68)] text-2xl">Leader</span>
          </div>
          <p className="text-center">D: +2, M: -2, S: 0, H: +2, I: 0</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              When your community leader passed away, who advocated for you to
              take their place? How is filling their shoes going?
            </p>
            <p>
              Who's the one who got away? Where are they now, and what's your
              plan to win them back?
            </p>
            <p>
              Which one of the overseers poisoned food meant for you, resulting
              in the death of one of your loved ones? Who?
            </p>
            <p>
              You have lead the way in forming secret fight clubs to train for
              rebellion one day. Who is the instructor you found for your
              community, and what combat form do they teach?
            </p>
            <p>
              Who rejected you after what seemed to them as a sudden declaration
              of your love?
            </p>
          </div>
          <hr className="border-[rgb(47,158,68)]" />
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">
                Speaking Up for What's Right
              </span>{' '}
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
            <p className="text-center">
              When you persuade someone you
              <strong>influence</strong> to do the right thing, lose{' '}
              <strong>influence</strong> and Roll +<Heart />
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
              <p>they do what you're asking them</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>they do it, but you owe them a difficult favor</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                they reject you. <strong>mark a condition</strong>
              </p>
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
              <p>both</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>you choose one</p>
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
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                they may lash out. if they do, <strong>mark a condition</strong>
              </p>
            </div>
          </article>

          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Getting Involved</span>
            </div>
            <p>
              Each downtime, you must spend one activity helping someone else
              with one of their downtime activities by taking charge. When you
              do, roll as if you were doing the activity. On a 10+, give +1{' '}
              <strong>forward</strong> and gain <strong>influence</strong> over
              them. On a 7-9, give +1 <strong>forward</strong>. On a 6-, give -1{' '}
              <strong>forward</strong> and <strong>mark a condition</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Lead the Way</span>
            </div>
            <p>
              When you start a fight for a just cause without heed for your own
              safety, <strong>Savagely Engage a Threat</strong> but Roll +
              <Defiance />.
            </p>
            <p>
              Add "inspire others, +2 <strong>team</strong>" to the options.
              Remove "resist or avoid their blows" from the options.
            </p>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Intense and Receptive</span>
            </div>
            <p>
              At the start of a mission, you can explain your plan. You gain{' '}
              <strong>influence</strong> over everyone who agrees. Each person
              who disagrees adds +1 <strong>team</strong>.
            </p>
          </article>
        </article>
        <article
          id="dreamer"
          className={`border-[rgb(47,158,68)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(47,158,68)] text-2xl">Dreamer</span>
          </div>
          <p className="text-center">D: +1, M: -2, S: -1, H: +2, I: +2</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Your dreams are vivid, almost ... real? What scheme have you
              crafted in your dreams to bring freedom to your brethren?
            </p>
            <p>
              Who's your ex who you would love to date again? Why does it seem
              like too much work?
            </p>
            <p>
              Which one of the overseers watches your each and every move,
              punishing you immediately if you so much as toe the line of the
              box they've defined for you?
            </p>
            <p>
              You had found a win-win relationship between your former overseer
              and your work pod. Who are they? Why did they get fired?
            </p>
            <p>
              Who did you break up with after an intense honeymoon phase because
              the flames of romance started to flicker?
            </p>
          </div>
          <hr className="border-[rgb(47,158,68)]" />
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">
                The Magic of Everyday Life
              </span>{' '}
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
            <p className="text-center">
              When think outside the box about how something in the mission
              could be used to enrich the lives of your community after the
              mission, Roll +<Ingenuity />
            </p>
            <p className="text-center">Choose one</p>
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
              <p>this complicates the mission</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                this complicates the mission and puts you in an especially bad
                spot
              </p>
            </div>
          </article>

          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">People Pleaser</span>
            </div>
            <p>
              Each downtime, you may <strong>Comfort</strong>
              someone for free if they approach you and ask.
            </p>
            <p>
              Anyone you <strong>Read</strong>, <strong>Comfort</strong>, or{' '}
              <strong>Tell Their Truth </strong> gains{' '}
              <strong>influence</strong> over you.
            </p>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Emotionally Perceptive</span>
            </div>
            <p>You always know all conditions affecting each PC.</p>
            <p>
              You may <strong>Read Someone</strong> by rolling +<Ingenuity />{' '}
              instead of +<Machina />. If you do,{' '}
              <strong>mark a condition</strong> on a miss.
            </p>
          </article>
          <article
            className={`bg-[rgb(47,158,68)]/20 border-[rgb(47,158,68)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Bursts of Enthusiasm</span>
            </div>
            <p>
              You can assist without spending <strong>team</strong> from the
              pool until there's a setback or complication; then it takes 2{' '}
              <strong>team</strong> for you to assist.
            </p>
          </article>
        </article>
        <article
          id="logistician"
          className={`border-[rgb(25,113,194)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(25,113,194)] text-2xl">Logistician</span>
          </div>
          <p className="text-center">D: -2, M: 0, S: +2, H: 0, I: +2</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Whose life have you saved by doing their work in addition to your
              own while they were hurt?
            </p>
            <p>
              Who do you have feelings for, who just makes sense for you? How
              long have you been waiting for them to make a move?
            </p>
            <p>
              Which one of the overseers noticed how hard you worked and then
              doubled your shift's duties because of it?
            </p>
            <p>
              You've been invited to meetings between the overseers and Lawler;
              they consulted you about how to rework the factory for the new
              project. What have you learned that will help your crew ruin
              Lawler's plans?
            </p>
            <p>
              Who broke up with you despite you being the one who won every
              argument?
            </p>
          </div>
          <hr className="border-[rgb(25,113,194)]" />
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">
                Dutiful Servant of the King
              </span>{' '}
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
            <p>
              The <strong>Logistician</strong> values the King's order and has
              worked diligently within its confines. This has gained them
              certain privileges and powers.
            </p>
            <p>
              The <strong>Logistician</strong> may cast{' '}
              <strong>The King's Spell</strong> on someone they{' '}
              <strong>influence</strong>.
            </p>
            <p>
              This position doesn't make many friends among the factory workers.
              Now that you've embraced rebellion, you find there are many you
              have to prove yourself to.
            </p>
            <ul className="text-start">
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Your sibling __, who hates you even though you provide for them.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Your shift workers who you've kept organized and on-task all
                these years.
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Your best friend __, who you had to report to the overseers,
                else everyone in their family would have been killed.
              </li>
            </ul>
            <p>
              Each time you make amends, +1<strong>xp</strong> and shift{' '}
              <Defiance /> up and another stat down.
            </p>
          </article>

          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Structure and Order</span>
            </div>
            <p>
              <strong>Logisticians</strong> may always{' '}
              <strong>Labor for Scraps</strong> each downtime for free. If they
              do and miss, the overseers get some insight into the crew's ops,
              +1 <strong>Heat</strong>.
            </p>
            <p>
              You gain +1 <strong>ongoing</strong> to{' '}
              <strong>Labor for Scraps</strong> and{' '}
              <strong>Long Term Projects</strong>, but -2{' '}
              <strong>ongoing</strong> to <strong>Shift the Blame</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Picking Up the Slack</span>
            </div>
            <p>
              If a teammate <strong>Recovers</strong> during downtime, you may
              take another downtime activity. If you do, you can't{' '}
              <strong>Recover</strong> during this downtime.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">
                By the Book is Practical
              </span>
            </div>
            <p>
              You add +2 <strong>team</strong> by being on the mission. Once a
              teammate complicates the mission, mark a condition or it now takes
              3 <strong>team</strong> for you to assist.
            </p>
          </article>
        </article>
        <article
          id="defender"
          className={`border-[rgb(25,113,194)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(25,113,194)] text-2xl">Defender</span>
          </div>
          <p className="text-center">D: -1, M: -1, S: +1, H: +2, I: +1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              You've been giving every spare scrap of your food to your fellow
              shift workers. What toll on your body has this taken?
            </p>
            <p>
              Who do you have a crush on; who you jump to the defense of, even
              when it doesn't make sense? Why haven't you expressed your
              feelings?
            </p>
            <p>
              Which one of the overseers loves tormenting you, beating you,
              watching you suffer as you quietly work in order to support your
              family?
            </p>
            <p>
              One of the overseers nearly killed one of your fellow shift
              workers last week. Rather than sit by, you shoved his head into a
              piston and killed him. Who have you gotten to pose as the
              overseer?
            </p>
            <p>
              Who broke up with you because you never let them fight their own
              battles?
            </p>
          </div>
          <hr className="border-[rgb(25,113,194)]" />
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">Humble Dedication</span>{' '}
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
            <p>
              At the start of each mission, choose a crewmate to help. It
              doesn't cost any <strong>team</strong> for you to assist them.
              They gain +1 <strong>ongoing</strong> to{' '}
              <strong>Savagely Engage a Threat</strong>, <strong>Defend</strong>
              , and
              <strong>Traverse the Mechanical Matrix</strong>. They gain -1{' '}
              <strong>ongoing</strong> to <strong>Manipulate Someone</strong>{' '}
              and <strong>Defy the King's Spell</strong>.
            </p>
            <p>
              At the end of the mission, if they ever thanked you for your help,
              +1<strong>xp</strong> and you gain <strong>influence</strong> over
              them. If they don't, <strong>mark a condition</strong> and they
              gain <strong>influence</strong> over you.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">The Gift of Loyalty</span>
            </div>
            <p>
              <strong>The King's Spell</strong> can never cause you to hurt or
              sabotage your crew or loved ones.
            </p>
            <p>
              Anyone who <strong>influences</strong> you gains +2{' '}
              <strong>forward</strong> to <strong>Manipulate</strong>,{' '}
              <strong>Persuade</strong>, or <strong>Read</strong> you.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">The Highest Standard</span>
            </div>
            <p>
              You can only perform one downtime activity, but gain +2{' '}
              <strong>forward</strong> on it.
            </p>
            <p>
              If no one on the team recognizes you for a job-well-done,{' '}
              <strong>mark a condition</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Showing Up</span>
            </div>
            <p>
              You may use <Heart /> for{' '}
              <strong>Savagely Engage a Threat</strong> when your foes would
              otherwise threaten your crew or loved ones.
            </p>
            <p>
              If you do, remove "force them into dangerous machinery" and
              "impress or frighten them" from the list of options and add
              "prevent them from hurting _" to the list of options.
            </p>
          </article>
        </article>
        <article
          id="executive"
          className={`border-[rgb(25,113,194)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(25,113,194)] text-2xl">Executive</span>
          </div>
          <p className="text-center">D: -1, M: +2, S: -1, H: +1, I: +1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              You have a set of beliefs sacred to your people that give you
              hope: beliefs now outlawed by the King. What are they?
            </p>
            <p>
              Who do you see at social gatherings who really interests you? What
              position do you need to be in before you know they'd go out with
              you?
            </p>
            <p>
              Which one of the overseers has spirited you away on late shifts to
              experiment on you? What scars has their tampering left?
            </p>
            <p>
              Many of these years you have shut out the external horrors and
              focused wholeheartedly on yourself. What special skill have you
              honed in this time?
            </p>
            <p>
              Who broke up with you because you're incapable of having your mind
              changed?
            </p>
          </div>
          <hr className="border-[rgb(25,113,194)]" />
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">
                A Greater Responsibility
              </span>{' '}
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
            <p>
              When you feel that an ally has jeopardized a mission due to
              incompetence, laziness, or dishonesty,
              <strong>hold</strong> 1 over them.
            </p>
            <p>
              During downtime, you may spend 1 <strong>hold</strong>
              on an ally to Condemn them. Roll +<Machina />. On a 10+, they mark
              a condition and lose <strong>influence</strong> over someone of
              your choice. On a 7-9, they <strong>mark a condition</strong> or
              lose
              <strong>influence</strong> over someone of your choice. On a miss,
              you <strong>mark a condition</strong> and lose{' '}
              <strong>influence</strong> over them.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Lead by Example</span>
            </div>
            <p>
              At the start of a each mission, you may describe a plan which does
              not glorify you, but makes the best use of everyone's talents in
              your opinion.
            </p>
            <p>
              Each crew member who agrees to the plan may spend team on
              themselves as long as it furthers your plan. If they agree and you
              fail at your part, they gain <strong>influence</strong> over you.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Here are the Facts</span>
            </div>
            <p>
              When you <strong>Manipulate Someone</strong>, you may describe to
              them in detail why they have to do what you're saying. If you do,
              take +1 <strong>forward</strong> and +1 <strong>Heat</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Climb the Ladder</span>
            </div>
            <p>
              During downtime, you may Climb the Ladder of a community or
              organization which you are familiar with.
            </p>
            <p>
              Roll +<Machina />. On a 10+, you schmooze your way into a higher
              status with that group. On a 7-9, you must exploit a close friend
              or family member of the crew to do so. Who are they? On a miss,
              the organization asks you a very difficult favor.
            </p>
          </article>
        </article>
        <article
          id="consul"
          className={`border-[rgb(25,113,194)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(25,113,194)] text-2xl">Consul</span>
          </div>
          <p className="text-center">D: 0, M: +1, S: 0, H: 0, I: +1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Each night you tell stories of rebels and heroes of the common
              people. It brings your community together. Who are these heroes?
            </p>
            <p>
              Someone is always there for you, reassuring you when you doubt
              yourself and supporting you through hard times. Who are they? How
              do you plan to win their heart?
            </p>
            <p>
              Which one of the overseers takes joy in publicly humiliating you
              and discrediting you in front of your peers?
            </p>
            <p>
              You and your shiftmates have worked together in secret for years
              to build a secret passage within the factory. Where does it go?
            </p>
            <p>
              Who did you break up with because they never gave you the approval
              you need, even when you changed yourself for them?
            </p>
          </div>
          <hr className="border-[rgb(25,113,194)]" />
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">
                Relationships that Last
              </span>{' '}
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
            <p>
              You've spent your time being there for your friends and family
              through thick and thin. You know things about them they may have
              forgotten about themselves.
            </p>
            <p>
              When a teammate rolls a 6- during a mission, you may tell them{' '}
              <strong>The Truth About Themselves</strong> , speaking to a shared
              memory. If you do, you may always <strong>shift</strong> their
              stats and they may always turn their 6- into a 7.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Living for Connection</span>
            </div>
            <p>
              At the end of each mission, if you gained{' '}
              <strong>influence</strong> over someone new, +1<strong>xp</strong>
              . If you lost <strong>influence</strong> over anyone, mark a
              condition.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Factory Mastery</span>
            </div>
            <p>
              When you <strong>Traverse the Mechanical Matrix</strong>, you may
              always choose one, even on a Miss.
            </p>
          </article>
          <article
            className={`bg-[rgb(25,113,194)]/20 border-[rgb(25,113,194)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Host a Gathering</span>
            </div>
            <p>
              During downtime, you may Host a Gathering of close friends,
              teammates, and family. Each teammate chooses if they wish to
              invest a downtime activity to attend. Lose{' '}
              <strong>influence</strong> over each teammate who doesn't come.
              Each teammate who attends may <strong>Recover</strong>. During the
              next mission, gain +1 <strong>forward</strong>
              to <strong>Read</strong> or <strong>Manipulate</strong> them.
            </p>
            <p>
              Roll +<Ingenuity />. On a 10+, the guards are none the wiser.
              Otherwise, +1 <strong>Heat</strong>.
            </p>
          </article>
        </article>
        <article
          id="virtuoso"
          className={`border-[rgb(240,140,0)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(240,140,0)] text-2xl">Virtuoso</span>
          </div>
          <p className="text-center">D: +2, M: -2, S: 0, H: 0, I: +2</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Who is your mentor? A fellow tinkerer who has helped you learn the
              multitude of your interests?
            </p>
            <p>
              Who is the latest flame to catch your eye? What's your novel plan
              to initiate love?
            </p>
            <p>
              Which one of the overseers gets a little too close? Breathes down
              your neck? Is visible from the corner of your eye as you walk home
              at night?
            </p>
            <p>
              You've slain a great beats in a hunt not too long back, and you
              managed to preserve the remains - a great cache of food. But you
              can't access it easily, what's the catch?
            </p>
            <p>
              Who did you break up with because they wanted to get serious too
              quickly?
            </p>
          </div>
          <hr className="border-[rgb(240,140,0)]" />
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">Dare to Differ</span>{' '}
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
            <p>
              During downtime and missions, <strong>hold</strong> 1
              <strong>Steady</strong> each time someone else takes the lead on
              an <Ingenuity /> roll.
            </p>
            <p>
              Spend 3 <strong>Steady</strong> to have a burst of impulsive and
              creative energy and take a 10 on an <Ingenuity /> roll - this can
              be done on the same roll as caused you to gain a{' '}
              <strong>hold</strong>.
            </p>
            <p>
              If you do, you must approach the situation from a completely
              different angle and spare no one's feelings. Lose{' '}
              <strong>influence</strong> over anyone you snub.
            </p>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">All Fair Play</span>
            </div>
            <p>
              Other character's can't gain <strong>influence</strong>
              over the <strong>Virtuoso</strong> without their permission.
              Whenever another character would lose <strong>influence</strong>{' '}
              over the <strong>Virtuoso</strong>, they don't unless the{' '}
              <strong>Virtuoso</strong> allows it
            </p>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Personal Project</span>
            </div>
            <p>
              During downtime, the <strong>Virtuoso</strong> must spend a
              downtime activity to work on a personal project. This is similar
              to a <strong>Long Term Project</strong>, but the goal isn't
              defined at the start and it has no limit on the progress that can
              be made towards it.
            </p>
            <p>
              During a mission, the
              <strong>Virtuoso</strong> can Unveil their Personal Project, say
              what it is, and the GM will determine how effective it is based on
              the progress it had.
            </p>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Defying the Rules</span>
            </div>
            <p>
              The <strong>Virtuoso</strong> can mark a condition and explain an
              out-of-the-box solution to the problem. If they do, they roll a
              basic move with <Ingenuity /> rather than the normal stat.
            </p>
          </article>
        </article>
        <article
          id="artist"
          className={`border-[rgb(240,140,0)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(240,140,0)] text-2xl">Artist</span>
          </div>
          <p className="text-center">D: +1, M: +1, S: -2, H: +1, I: +1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              You and a close friend relax by acrobatics in and around the
              equipment. Who are they? Which region of the Steel Trap is it?
            </p>
            <p>
              Who do you delight in surprising in little ways? Why haven't they
              asked you out yet?
            </p>
            <p>
              Which one of the overseers takes delight in working to control
              you? To break you of your resolve and small acts of defiance?
            </p>
            <p>
              You've been working on a passion project, some form of creativity
              and insight to express your bold ideas and speak to your fellows'
              hearts. What is it?
            </p>
            <p>
              Who did you mutually break up with due to their pushiness and your
              guarded emotions?
            </p>
          </div>
          <hr className="border-[rgb(240,140,0)]" />
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">Many Passions</span>{' '}
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
            <p>
              The first time the <strong>Artist</strong> uses a move during a
              mission, they gain +1 <strong>forward</strong>.
            </p>
            <p>
              On the third (and higher) time using a particular move during a
              mission, the <strong>Artist</strong> takes -1{' '}
              <strong>forward</strong>.
            </p>
            <p>
              During a mission, if the <strong>Artist</strong> uses four or more
              unique moves, +1<strong>xp</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Read Emotions</span>
            </div>
            <p className="text-center">
              When you relate to someone's emotions to better understand them,
              roll +<Heart />
            </p>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <p>ask one</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>ask one, they get an opportunity to surprise you</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                what you glean, if true, is hurtful or disturbing to you.{' '}
                <strong>mark a condition</strong> and they get an opportunity to
                surprise you
              </p>
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
              <span className="text-white text-xl">Overwhelmed</span>
            </div>
            <p>
              The <strong>Artist</strong> has an extra condition they may mark
              called <strong>Overwhelmed</strong>. If this condition is marked,
              they can only do one downtime activity.{' '}
              <strong>Overwhelmed</strong> may be cleared normally or by
              spending a downtime activity to take time for themselves.
            </p>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Pain to Rage</span>
            </div>
            <p>
              When someone uses <strong>The Truth About You</strong> or{' '}
              <strong>The King's Spell</strong> on you, you may always choose to
              <strong>mark a condition</strong> and ignore the effects.
            </p>
            <p>
              If you do, you must attack them or hurt them. Whichever move you
              use to do so, you may use <Defiance /> instead of the normal stat.
            </p>
          </article>
        </article>
        <article
          id="adventurer"
          className={`border-[rgb(240,140,0)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(240,140,0)] text-2xl">Adventurer</span>
          </div>
          <p className="text-center">D: +2, M: +2, S: +1, H: -2, I: -1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Who is your partner in crime? Your confidant and close friend who
              you adventure with?
            </p>
            <p>
              Who would you love to introduce to all of your hobbies? To explore
              and have fun with?
            </p>
            <p>
              Which one of the overseers locked you and your best friend up into
              solitary confinement for months? Why did they let you out but not
              your friend?
            </p>
            <p>
              You've been using your large social circle to spread rumors
              amongst the workers. What are the rumors and how will they work to
              your crew's advantage?
            </p>
            <p>
              Who broke up with you because they were looking for something not
              just fun, but deeper?
            </p>
          </div>
          <hr className="border-[rgb(240,140,0)]" />
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">Socialite</span>{' '}
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
            <p className="text-center">
              During downtime, when you spend time making new friends and not
              thinking about anything important or serious, Roll +<Machina />.
            </p>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <p>
                gain <strong>influence</strong> over an NPC and gain their
                support on your next mission
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>
                gain <strong>influence</strong> over an NPC
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                they don't particularly like you. They'll tell you why and you
                mark a condition.
              </p>
            </div>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Call Them Out</span>
            </div>
            <p className="text-center">
              When you notice someone acting differently and want to draw
              attention to it, Roll +<Machina />
            </p>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <p>
                ask one, then they must answer honestly or everyone in the scene
                gains <strong>influence</strong> over them
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>ask one, then they must answer honestly or mark a condition</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>
                you were dead wrong. They may lash out at you. If they do, mark
                a condition or you lose <strong>influence</strong> over everyone
                in the scene
              </p>
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
              <span className="text-white text-xl">Dive Right In</span>
            </div>
            <p>
              When planning has gone on for too long, you may Initiate and do it
              your way.
            </p>
            <p>
              Roll +<Defiance />. On a 10+ your plan is already working just
              fine. On a 7-9, you're in the thick of things and the GM
              introduces a complication. On a 6-, you're caught in a major
              complication and need the team's help immediately. +1
              <strong>xp</strong>.
            </p>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">
                The Path Less Travelled
              </span>
            </div>
            <p>
              During downtime you may only perform activities which haven't been
              done yet, or are tied for the least done. Take +1{' '}
              <strong>forward</strong> to these activities.
            </p>
          </article>
        </article>
        <article
          id="entertainer"
          className={`border-[rgb(240,140,0)] border-2 rounded-lg p-8 max-w-xl`}
        >
          <div className="text-center">
            <span className="text-[rgb(240,140,0)] text-2xl">Entertainer</span>
          </div>
          <p className="text-center">D: 0, M: +2, S: 0, H: +1, I: -1</p>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              Sometimes when you dream, you make contact with someone else in a
              very real way. Who are they?
            </p>
            <p>
              Who excites you? Makes you full of energy with just their
              presence? What's stopping you?
            </p>
            <p>
              Which one of the overseers takes time to sabotage or outright ruin
              your clothing and appearance?
            </p>
            <p>
              Your wide socialization has brought people together from many
              walks of life. What is this unlikely group of friends and what
              have you all accomplished which could only have been done
              together?
            </p>
            <p>
              Who did you break up with because they criticized you and just
              killed the spark?
            </p>
          </div>
          <hr className="border-[rgb(240,140,0)]" />
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg`}
          >
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-white text-xl">A Spontaneous Spirit</span>{' '}
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
            <p>
              When the <strong>Entertainer</strong> eschews planning and
              convention during a mission, they may make a move and roll +
              <strong>Nothing</strong>. If they do, any number of teammates may
              assist and add <strong>team</strong> to the roll. +1
              <strong>xp</strong>.
            </p>
            <p>
              If the move is a 10+, the <strong>Entertainer</strong> gains{' '}
              <strong>influence</strong> over those who helped and those who did
              not help lose <strong>influence</strong> over the
              <strong>Entertainer</strong>.
            </p>
            <p>
              On a 6-, the <strong>Entertainer</strong> loses{' '}
              <strong>influence</strong> over those who helped and those who did
              not help gain <strong>influence</strong> over the{' '}
              <strong>Entertainer</strong>
            </p>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Living With Passion</span>
            </div>
            <p>
              During downtime, the <strong>Entertainer</strong> may always{' '}
              <strong>Make Trouble</strong> for free. If they do, they may
              choose to tell the grand tales about the crew's exploits,
              incurring +1 <strong>Heat</strong> and adding 3{' '}
              <strong>team</strong> to the pool for the upcoming mission.
            </p>
            <p>
              If the <strong>Entertainer</strong>{' '}
              <strong>Labors for Scraps</strong>, it costs 2 downtime
              activities.
            </p>
          </article>
          <article
            className={`bg-[rgb(240,140,0)]/20 border-[rgb(240,140,0)] border-2 rounded-lg p-6 max-w-lg mt-8`}
          >
            <div className="text-center">
              <span className="text-white text-xl">Situational Awareness</span>
            </div>
            <p className="text-center">
              When you quickly analyze the real material things going on around
              you, roll +<Machina />.
            </p>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">10+</span>
              <p>ask two</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">7-9</span>
              <p>ask one</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <span className="shrink-0">6-</span>
              <p>lose focus, something critical slips your attention</p>
            </div>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what key thing has changed?
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                what's the best escape route?
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
              <span className="text-white text-xl">Avoid Conflict</span>
            </div>
            <p>
              If someone rejects you as a result of a move, you may Avoid
              Conflict and ignore the negative effects.
            </p>
            <p>You may never lash out at someone as part of a move.</p>
          </article>
        </article>
      </div>
      <div className="flex flex-row mt-8">
        <Previous href="/game/downtime" text="Downtime" />
      </div>
    </>
  );
}
