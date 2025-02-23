import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  VenetianMask,
  Flame,
  Activity,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Breadcrumbs from '@/components/ui/breadcrumbs';
export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Character Creation', href: '/game/character-creation' },
          { name: 'Backgrounds', href: '#' },
        ]}
      />
      <TypographyH1>Backgrounds</TypographyH1>
      <TypographyP>
        Day in and day out. Generation after generation. The price of living in
        the Steel Trap is labor. The overseers demand harsh quotas and dole out
        harsher punishments at their whims. The workers of the Steel Trap toil
        on and withstand the humiliations and cruelties of their overseers.
        Their families depend on the meager scraps they bring home.
      </TypographyP>
      <TypographyP>
        Your Background is the job your character labors in the factory. It
        grants them unique character questions, actions, contacts, and dangers
        to overcome in the{' '}
        <Link href="/game/the-churn#subsistence">
          <span className="text-red-500 font-bold underline">Subsistence</span>
        </Link>{' '}
        Phase.
      </TypographyP>
      <TypographyH2 id="Archivist">
        <span className="text-red-500">Archivist</span>
        <span className="text-muted-foreground text-lg ml-8">
          Read manuals and catalog inventory
        </span>
      </TypographyH2>
      <TypographyP>
        As the story goes, the Steel Trap&apos;s machinery was designed by a man
        inspired by divine dreams. Archivists are the few capable of reading, so
        are tasked with interpreting the cryptic scrawlings he left behind.
        Despite the Archivist&apos;s best efforts, the notes are incomplete and
        what little there is, is often incomprehensible.
      </TypographyP>
      <TypographyP>
        When Archivists aren&apos;t studying, they&apos;re made responsible for
        keeping track of the factory&apos;s inventory. Not that they&apos;re
        given any authority to do anything about discrepencies. They&apos;re
        just supposed to know. And when things go wrong, they&apos;re the ones
        who get punished.
      </TypographyP>
      <TypographyP>
        Others in the factory apporach Archivists with caution. They&apos;re
        said to be bad luck; if anything is going wrong, you don&apos;t want to
        be around when the overseers come demanding answers from the Archivist
        in charge. Not only that, the concept of knowing how the machines work
        by looking at squiggles on parchment makes many workers&apos; skin
        crawl. No wonder the Archivists all go mad at some point or another.
      </TypographyP>
      <TypographyP>
        <i>
          You&apos;ve been having strange dreams about the factory&apos;s
          machinery. What do you see?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          You&apos;ve been noticing discrepancies in the factory&apos;s
          inventory. What&apos;s missing?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Assess <Flame className="inline-block mb-3" />:
          </b>{' '}
          Think before acting. Catalog the possible advantages and consequences
          of a course of action.
        </li>
        <li>
          <b>
            Study <VenetianMask className="inline-block mb-1" />:
          </b>{' '}
          Research a topic or item. Gain insight into its function or history.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Bonds</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>Alma:</b> An expert in the scrawlings of the mad creator. Old,
          sick, and quite mad themselves.
        </li>
        <li>
          <b>Utthas:</b> A worker who&apos;s been skimming off the top of the
          inventory. They&apos;re in over their head and need help covering
          their tracks.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyP>
        <b>Critical Benefit</b> Skim off the top of the inventory. Gain 1{' '}
        <b>1 material</b>.
      </TypographyP>
      <TypographyP>
        <b>Failure Consequence</b> (choose one):
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          The overseers have noticed discrepancies. They force you to stay up
          for days straight to correct the error. Suffer a temporary level 2
          harm: &quot;exhausted&quot;.
        </li>
        <li>
          You hear Ritiger&apos;s Whispers in the machinery. Advance the{' '}
          <b>Ritiger&apos;s Madness</b> clock by 1.
        </li>
      </TypographyUnorderedList>
      <TypographyH2 id="Enforcer">
        <span className="text-red-500">Enforcer</span>
        <span className="text-muted-foreground text-lg ml-8">
          Keep the fear and enforce the rules
        </span>
      </TypographyH2>
      <TypographyP>
        Not all overseers are beasts. They employ and coerce plenty of workers
        into doing their dirty work for them. Enforcers are the ones tasked with
        keeping the fear alive in the Steel Trap. They know their communities
        best and can use that knowledge to keep the workers in line.
      </TypographyP>
      <TypographyP>
        Not all Enforcers do this willingly. Many have dogged Overseer
        &quot;patrons&quot; who keep them in line with threats of violence
        against their families. Others are just as cruel as the overseers
        themselves.
      </TypographyP>
      <TypographyP>
        The other workers&apos; feelings towards the Enforcers are split. Some
        greet them with smiles and relief, considering them valiant protectors
        and righteous servants of the King. Others avoid or even curse them,
        naming them traitors and oppressors.
      </TypographyP>
      <TypographyP>
        <i>Why do you do the overseers&apos; bidding? What happened to you?</i>
      </TypographyP>
      <TypographyP>
        <i>
          You know a flaw in the overseers&apos; penal pen security. What is it?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Frighten <Activity className="inline-block mb-4" />:
          </b>{' '}
          Use fear as a blunt instrument.
        </li>
        <li>
          <b>
            Observe <VenetianMask className="inline-block mb-1" />:
          </b>{' '}
          Watch and learn. Gain insight into a person or situation.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Bonds</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>Hellet:</b> An overseer who&apos;s willing to do favors in exchange
          for your help advancing their career.
        </li>
        <li>
          <b>Borani:</b> An enforcer who uses torture to get what they want.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyP>
        <b>Critical Benefit</b> You found an opportunity to pin blame on someone
        else. Name them and reduce the crew&apos;s <b>heat</b> by 2.
      </TypographyP>
      <TypographyP>
        <b>Failure Consequence</b> (choose one):
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          You&apos;re forced to give an ally a beating. The crew loses{' '}
          <b>1 goodwill</b>.
        </li>
        <li>
          You don&apos;t do the job the way the overseers want. Advance the{' '}
          <b>Threat to your family</b> clock by 1.
        </li>
      </TypographyUnorderedList>
      <TypographyH2 id="Machinist">
        <span className="text-red-500">Machinist</span>
        <span className="text-muted-foreground text-lg ml-8">
          Living replacement for broken parts
        </span>
      </TypographyH2>
      <TypographyP>
        The Steel Trap&apos;s machinery is always roaring, rattling, and shaking
        itself apart. Machinists are the ones who crawl into the belly of the
        matrix and keep it running.
      </TypographyP>
      <TypographyP>
        The depths of the machines are unpredictable, shifting day to day.
        However, their ever-changing anatomy sometimes reveals secrets or
        treasures consumed by the factory long ago.
      </TypographyP>
      <TypographyP>
        The Machinists are a tightly knit group of workers. They bond over the
        shared hardship of their tasks, advice for one another, and the trauma
        of losing friends in the squeeze. They don&apos;t often acknowledge the
        impossible things they witness in the inner chambers. Especially not to
        anyone outside of the group.
      </TypographyP>
      <TypographyP>
        <li>
          You&apos;ve found a hidden compartment in the machinery. What&apos;s
          inside?
        </li>
      </TypographyP>
      <TypographyP>
        <li>
          A friend got lost in the matrix and you had to leave them behind. What
          happened?
        </li>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Interface <Flame className="inline-block mb-3" />:
          </b>{' '}
          Work with the machinery to accomplish a task.
        </li>
        <li>
          <b>
            Squeeze <Activity className="inline-block mb-4" />:
          </b>{' '}
          Get into or out of a tight spot.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Bonds</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>Rasha:</b> A stranger who&apos;s been living in the machines for
          years. You&apos;ve never seen them, but they talk to you.
        </li>
        <li>
          <b>Geleswin:</b> An experienced machinist who&apos;s a master
          contortionist.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyP>
        <b>Critical Benefit</b> You&apos;ve found a mangled corpse in the
        machinery. Gain <b>1 blood</b>.
      </TypographyP>
      <TypographyP>
        <b>Failure Consequence</b> (choose one):
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          The shifting innards nearly trap you. Take <b>2 stress</b>.
        </li>
        <li>
          The machine&apos;s issues require you to squirm deeper and deeper.
          Advance the <b>Belly of the Beast</b> clock by 1.
        </li>
      </TypographyUnorderedList>
      <TypographyH2 id="Operator">
        <span className="text-red-500">Operator</span>
        <span className="text-muted-foreground text-lg ml-8">
          Pull levers and crank wheels
        </span>
      </TypographyH2>
      <TypographyP>
        The Steel Trap&apos;s blast doors and heavy machinery require constant
        manpower to keep running. Workers are expected to work their bodies
        ceaselessly to keep the hammers beating. Some don&apos;t survive the
        physical toll. Others are driven mad by the monotony.
      </TypographyP>
      <TypographyP>
        Operators are the ones who meet the physical demand and train their
        minds to endure the repetition. The levers and wheels are a crucible
        that slowly reinforces their bodies and minds. This is why they are also
        the harbingers of *dreamstorms*. Where others flee the natural
        disasters, Operators are tasked with enduring them long enough to raise
        the alarm and give others a chance to escape.
      </TypographyP>
      <TypographyP>
        Operators are a chatty bunch, gossiping to pass the endless hours of
        dull labor. There&apos;s a lot of comraderie to be found in their small
        pods, and they often go out of their way to help each other even
        off-shift. That being said, other workers think of them as dull brutes.
      </TypographyP>
      <TypographyP>
        <i>
          What form of medidation have you learned to stave off the boredom?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          A fellow worker hasn&apos;t been meeting quotas and you&apos;re not
          strong enough to cover for them. Who are they?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Disconnect <Flame className="inline-block mb-3" />:
          </b>{' '}
          Fortify your mind against upsetting stimuli.
        </li>
        <li>
          <b>
            Pull <Activity className="inline-block mb-4" />:
          </b>{' '}
          Move something heavy or difficult.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Bonds</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>Sigsvult:</b> A shaman whose salves and tinctures ease the pain of
          the factory&apos;s labor.
        </li>
        <li>
          <b>Nimund:</b> An operator who is a monster of a person. They could do
          the work of three people if they chose to.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyP>
        You demonstrate constitution to those around you. Gain <b>1 rep</b>.
      </TypographyP>
      <TypographyP>
        <b>Failure Consequence</b> (choose one):
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          The stressed out workers get into a fight. Gain <b>2 heat</b>.
        </li>
        <li>
          Your body is slowly deteriorating from the constant strain. Advance
          the <b>Wear and Tear</b> clock by 1.
        </li>
      </TypographyUnorderedList>
      <TypographyH2 id="Runner">
        <span className="text-red-500">Runner</span>
        <span className="text-muted-foreground text-lg ml-8">
          Carry messages and transport crates
        </span>
      </TypographyH2>
      <TypographyP>
        The Steel Trap is a labyrinth of corridors, catwalks, and machinery.
        Runners are the ones who navigate the maze to deliver messages and
        goods. Their memories have to be sharp and their legs strong to keep up
        with the demands of the factory.
      </TypographyP>
      <TypographyP>
        Where none of the workers except Archivists learn to read, Runners have
        invented something of a secret language they share -{' '}
        <i>Runner&apos;s Scrawl</i>. It&apos;s a mix of drawn symbols
        accompanied by inconspicuous debris left near the scribbles. This is how
        runners warn each other about roaming overseers as well as communicate
        the goings ons of workers and overseers alike.
      </TypographyP>
      <TypographyP>
        Other workers are suspicious of Runners - the lackeys and messengers of
        the overseers. Spies, even. In the lanes and labyrinths, Runners look
        out for each other, but outside of that, even Runners are suspicious of
        each other. Most go out of their way to lie about their job, coming up
        with whatever cover they can. The ones people know about live an
        isolated life, rooms falling silent when they enter.
      </TypographyP>
      <TypographyP>
        <i>
          Two overseers are plotting against each other. What are they planning?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          An overseer took a shipment from you and framed you for it. What was
          in the shipment?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Carry <Activity className="inline-block mb-4" />:
          </b>{' '}
          Traverse the factory while under a heavy load.
        </li>
        <li>
          <b>
            Eavesdrop <VenetianMask className="inline-block mb-1" />:
          </b>{' '}
          Listen in on a conversation without being noticed.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Bonds</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>Tovarus:</b> A runner who claims to have seen the outside world.
        </li>
        <li>
          <b>Gelimer:</b> A community leader who uses runners to keep tabs on
          the overseers.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyP>
        <b>Critical Benefit:</b> You overhear the overseers planning. Gain{' '}
        <b>1 intel</b>.
      </TypographyP>
      <TypographyP>
        <b>Failure Consequence</b> (choose one):
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          You get cornered by an overseer and forced to talk. The crew loses{' '}
          <b>1 intel</b>.
        </li>
        <li>
          You deliver another shipment to a seemingly secret project. Advance
          the <b>Dreadful Cargo</b> clock by 1.
        </li>
      </TypographyUnorderedList>
      <TypographyH2 id="Scrapper">
        <span className="text-red-500">Scrapper</span>
        <span className="text-muted-foreground text-lg ml-8">
          Sort broken parts and salvage scrap
        </span>
      </TypographyH2>
      <TypographyP>
        Broken parts and defective products are a fact of life in the Steel
        Trap. Each one tells a story about the machines that made them and the
        workers who were blamed for the failure. But materials aren&apos;t
        infinite. Workers are expected to sort through the refuse to fix the
        machines and enrich the overseers.
      </TypographyP>
      <TypographyP>
        Scrappers are the ones coordinated enough to move through the dangerous
        piles of machinery innards and imaginative enough to see the potential
        of blasted pieces.
      </TypographyP>
      <TypographyP>
        Scrappers are fairly popular among the workers, who assume that
        they&apos;re collecting useful trinkets beneath the overseers&apos;
        noses. The assumption is usually right - many Scrappers trading food and
        favors for goggles, buckles, and gloves. These merchants of a kind can
        get quite competetive, pushing into each others&apos; territories,
        hiring gangs of bodyguards or thugs to help.
      </TypographyP>
      <TypographyP>
        <i>
          You&apos;ve found a nearly functional weapon meant for Fenrir&apos;s
          soldiers. What is it?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          All your life you&apos;ve heard whispered stories about the curse of
          the scrapyard. What have you experienced that makes you think
          they&apos;re right?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Step <Activity className="inline-block mb-4" />:
          </b>{' '}
          Traverse the factory while under a heavy load.
        </li>
        <li>
          <b>
            Rummage <VenetianMask className="inline-block mb-1" />
          </b>{' '}
          Listen in on a conversation without being noticed.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Bonds</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>Lorel:</b> A scrapper who&apos;s been hoarding useless scrap for
          years.
        </li>
        <li>
          <b>Lorya:</b> An overseer with a penchant for collecting rare and
          dangerous materials.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyP>
        <b>Critical Benefit:</b> You&apos;ve found a workable piece of scrap.
        Gain <b>1 material</b>.
      </TypographyP>
      <TypographyP>
        <b>Failure Consequence</b> (choose one):
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Some scrap you recovered is actually worse than you thought. One piece
          of the crew&apos;s equipment is damaged.
        </li>
        <li>
          You hear ominous noises in the scrapyard that follow you home. Advance
          the <b>Scrapyard Curse</b> clock by 1.
        </li>
      </TypographyUnorderedList>
      <TypographyH2 id="Stoker">
        <span className="text-red-500">Stoker</span>
        <span className="text-muted-foreground text-lg ml-8">
          Shovel tar and stoke the fires
        </span>
      </TypographyH2>
      <TypographyP>
        The Steel Trap&apos;s machines are powered by monstrous furnaces that
        must burn day and night. These furnace rooms are clouded with thick
        smoke and suffocating heat. The only reprieve is the occasional overflow
        vent of hot steam from the boilers.
      </TypographyP>
      <TypographyP>
        Stokers are the workers who learn the rhythm of fire. Pumping and
        containing tar - which is ever so eager to escape. Shaping the flames
        which are happy to lap at their turned backs. Venting steam when the
        pressure has built to a critical whistle.
      </TypographyP>
      <TypographyP>
        Many workers envy the Stokers. It&apos;s a tough job, yeah; but often
        the one least disturbed by enforcers and overseers. For that reason, the
        furnaces are something of a refuge for many who need a quiet hour or
        place to lay low. The Stokers maintain a culture of helping anyone who
        comes to them - and keeping quiet about it.
      </TypographyP>
      <TypographyP>
        <i>
          You see something in the smoke and flames no one else does. What is
          it?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          The overseers thought it would be funny to lock you all in the furnace
          room. Who did you lose that day?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Brace <Flame className="inline-block mb-3" />:
          </b>{' '}
          Prepare for a sudden pain or shock.
        </li>
        <li>
          <b>
            Fuel <VenetianMask className="inline-block mb-1" />:
          </b>{' '}
          Inflame a fire or strong emotion.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Bonds</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>Wilgefort:</b> A stoker who&apos;s learned to direct steam to other
          parts of the factory.
        </li>
        <li>
          <b>Gisa:</b> A worker who swears the water from the overflow vents has
          healing properties.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyP>
        <b>Critical Benefit:</b> You siphon off some of the steam for yourself.
        Gain <b>1 water</b>.
      </TypographyP>
      <TypographyP>
        <b>Failure Consequence</b> (choose one):
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          The furnace room&apos;s smoke is poisoning you. Add a level 1
          permanent harm: &quot;black lung&quot;
        </li>
        <li>
          The furnace is missing a crucial part that no one knows how to fix.
          Advance the <b>Detonation</b> clock by 1.
        </li>
      </TypographyUnorderedList>
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/heritages">
          <Button variant="outline">
            <ChevronLeft className="inline-block" /> Heritages
          </Button>
        </Link>
        <Link href="/game/skillsets">
          <Button variant="outline">
            Skillsets <ChevronRight className="inline-block" />
          </Button>
        </Link>
      </div>
    </>
  );
}
