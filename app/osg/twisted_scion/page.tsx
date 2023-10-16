import { ReactNode } from 'react';
import Donum from '@/components/Donum';
const BorderHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="border-solid border-b-2 border-indigo-700">{children}</h3>
);

export default function TwistedScion() {
  return (
    <>
      <h1 className="text-center">Twisted Scion</h1>
      <main className="columns-2">
        <article>
          <BorderHeading>Expectations</BorderHeading>
          <p>
            The <strong className="text-rose-700">goal</strong> of the game is
            to achieve your objectives.
          </p>
          <p>
            The <strong className="text-rose-700">point</strong> of the game is
            to create a credible narrative.
          </p>
        </article>
        <article>
          <BorderHeading>Structure</BorderHeading>
          <p>
            Each <strong>Turn</strong>, each <strong>Actor</strong> performs a
            single <strong>Action</strong>.
          </p>
          <p>
            This <strong>Action</strong> is sent to the{' '}
            <strong>Narrator</strong> in private.
          </p>
          <p>
            At the end of each <strong>Turn</strong>, the{' '}
            <strong>Narrator</strong> posts an update detailing the public
            outcome of all <strong>Actions</strong>, as well as private updates.
          </p>
          <p>
            The game ends after{' '}
            <strong className="text-rose-700">6 Turns</strong>.
          </p>
          <p>
            At the end of the game, <strong>Actors</strong> self-assess whether
            or not they completed their objectives.
          </p>
        </article>
        <article>
          <BorderHeading>Actions</BorderHeading>
          <p>
            An <strong>Action</strong> must be a single, specific course of
            action.
          </p>
          <p>
            <strong>Actions</strong> must be sent to the{' '}
            <strong>Narrator</strong> in this format:
          </p>
          <p className="pl-4">
            <strong className="text-rose-700">Action</strong>: What specifically
            are you doing?
          </p>
          <p className="pl-4">
            <strong className="text-rose-700">Outcome</strong>: What is your
            desired outcome?
          </p>
          <p className="pl-4">
            <strong className="text-rose-700">Leverage</strong>: What makes the
            outcome probable?
          </p>
          <p>
            If an <strong>Action</strong> is unopposed or easy,{' '}
            <strong className="text-rose-700">it happens</strong>.
          </p>
          <p>
            If the outcome is uncertain, the <strong>Narrator</strong> rolls 2d6
            and uses the highest die.
          </p>
          <p>
            A roll of{' '}
            <strong className="text-rose-700">6 is complete success</strong>. A
            roll of{' '}
            <strong className="text-rose-700">4-5 is partial success</strong>.
          </p>
          <p className="pl-4">
            With <strong className="text-rose-700">strong leverage</strong>, the{' '}
            <strong>Narrator</strong> rolls 3d6 and uses the highest.
          </p>
          <p className="pl-4">
            With <strong className="text-rose-700">weak leverage</strong>, the{' '}
            <strong>Narrator</strong> rolls 1d6.
          </p>
          <p>
            If two <strong>Actions</strong> are in{' '}
            <strong className="text-rose-700">direct conflict</strong>, the{' '}
            <strong>Narrator</strong> addresses the <strong>Action</strong> of
            the <strong>Actor</strong> in the stronger position first. If they
            fully succeed, the conflicting <strong>Action</strong>{' '}
            <strong className="text-rose-700">automatically fails</strong>.
          </p>
        </article>
        <article>
          <BorderHeading>Actors</BorderHeading>
          <p>
            Each player has control over one of the <strong>Actors</strong> in
            the scenario.
          </p>
          <p>
            Each <strong>Actor's</strong> briefing details their{' '}
            <strong className="text-rose-700">objectives</strong> and the
            important factors of their starting{' '}
            <strong className="text-rose-700">position</strong>.
          </p>
        </article>
        <article>
          <BorderHeading>Communication</BorderHeading>
          <p>
            <strong>Actors</strong> may communicate freely with each other. This
            is strongly encouraged. Agreements established outside the fiction
            are not considered binding. When in doubt, ask the{' '}
            <strong>Narrator</strong> to witness.
          </p>
          <p>
            Players may communicate privately with other players, or post public
            announcements in the{' '}
            <strong className="text-rose-700">
              #scathing-denouncements channel
            </strong>
            . Use the{' '}
            <strong className="text-rose-700">#game-discussion channel</strong>{' '}
            for out-of-character questions and comments. Use the{' '}
            <strong className="text-rose-700">#shitposting channel</strong> for
            sidetalk.
          </p>
        </article>
        <article>
          <BorderHeading>Time</BorderHeading>
          <p>
            At the start of each <strong>Turn</strong>, the{' '}
            <strong>Narrator</strong> will inform the players how much
            in-fiction time will pass.
          </p>
          <p>
            When the <strong>Narrator</strong> posts an update,{' '}
            <strong>Actors</strong> have{' '}
            <strong className="text-rose-700">72 hours</strong> to submit{' '}
            <strong>Actions</strong> for the next <strong>Turn</strong>.
          </p>
          <p>
            If no <strong>Actions</strong> are submitted, the{' '}
            <strong>Actor</strong> is assumed to hold steady, undertaking no
            particular <strong>Action</strong>.
          </p>
          <p>
            If a player needs an extension of a deadline, they can request one
            privately from the <strong>Narrator</strong> or publicly in the{' '}
            <strong className="text-rose-700">#game-discussion channel</strong>.
            The <strong>Narrator</strong> does their best to honor all requests
            for extensions.
          </p>
        </article>
      </main>
      <hr />
      <main className="columns-2">
        <article>
          <BorderHeading>Inciting Incident</BorderHeading>
          <p>
            A branch of <strong>Ara, Tree of the Infinite</strong> is exposed,
            draping from the heavens to the heat-blasted plateaus of{' '}
            <strong>Gredora</strong>. Beneath the tip of the exposed branch,{' '}
            <strong className="text-rose-700">Agents of the Locum</strong> lead
            an army against the allied armies of{' '}
            <strong className="text-rose-700">Azama</strong> and{' '}
            <strong>Anidine's King Amati</strong>, who has been missing since
            the battle.
          </p>
          <p>
            Missing leader of the world's military superpower, an exposed branch
            to <strong>Ara</strong>, invaders from another world. History is
            happening: and the powers that be are scrambling to turn it to their
            advantage.
          </p>
        </article>
        <article>
          <BorderHeading>The Actors</BorderHeading>
          <p>
            <strong className="text-rose-700">Azama</strong>: Merchant-general
            of the <strong>Dameter Caravan-army</strong>. Brilliant, arrogant,
            swiftly rising to prominence and power within{' '}
            <strong>Gredora</strong>.
          </p>
          <p>
            <strong className="text-rose-700">Agents of the Locum</strong>: A
            cabal of <em>Wielders</em> from the <strong>Twisted Scion</strong>.
            They each have immense and strange <Donum>Donums</Donum> - the kind
            this world hasn't seen since the previous age.
          </p>
          <p>
            <strong className="text-rose-700">Avina Kriemhild</strong>: High
            Priestess of the <strong>Trinity Sisterhood</strong>. Governor of{' '}
            <strong>Ulgate</strong>, the solitary city in the world of the{' '}
            <strong>Twisted Scion</strong> with the ability to resist{' '}
            <strong className="text-rose-700">The Locum</strong>.
          </p>
          <p>
            <strong className="text-rose-700">General Amir Guran</strong>: A
            politically well-connected <strong>Anidinian</strong> nobleman and
            commander of the <strong>Steel Column</strong>. It's an open secret
            that he plots against <strong>King Amati</strong>.
          </p>
          <p>
            <strong className="text-rose-700">Fia Lettiere</strong>:{' '}
            <em>Wielder</em> of <Donum>Donum Tueor</Donum> and High Visionary of
            the <strong>Gallery of Faces</strong>: the intelligence aparatus of{' '}
            <strong>Narscillia</strong>.
          </p>
          <p>
            <strong className="text-rose-700">Solitary and Wander</strong>:
            Mysterious vestiges of the <em>supposedly departed</em> deity,{' '}
            <strong>Jira</strong>. Clones of his body, seemingly imbued with
            miniscule fractions of his memories and power.
          </p>
          <p>
            <strong className="text-rose-700">Canus Prisca</strong>: Head of{' '}
            <strong>House Prisca</strong>: an <strong>Argosi</strong>{' '}
            organization internationally despised for their use of{' '}
            <Donum>Donum Dolus</Donum> to shape world events through
            manipulation and assassination.
          </p>
          <p>
            <strong className="text-rose-700">Respa Sorbrand</strong>: Captain
            of <strong>Sordid Beak</strong>, an elite strike force founded by{' '}
            <strong>Fenrir's Duke of Ravens</strong> for moments when{' '}
            <strong>Fenrir</strong> needs to reach outside the borders of the
            Empire.
          </p>
          <p>
            <strong className="text-rose-700">Zeke</strong>: The strongest{' '}
            <em>wielder</em> of <Donum>Donum Iter</Donum> since{' '}
            <strong>Midir, Saint of Violence</strong>. Desperate to protect the
            peaceful, sleepy life he's made for himself far away from the
            world's troubles.
          </p>
          <p>
            <strong className="text-rose-700">Vigo Draconis</strong>: The
            talented heir to of <strong>House Draconis</strong>, a small{' '}
            <strong>Heian</strong> noble house known for its drake riders and
            strong morals. Rides the drake he named <strong>Midir</strong>,
            after the god of violence.
          </p>
          <p>
            <strong className="text-rose-700">Taiga Taisho</strong>: Deadly{' '}
            <em>wielder</em> of <Donum>Donum Gelu</Donum>, heir to the{' '}
            <strong>Heian</strong> noble house <strong>Taisho</strong>. She fled
            home as a young girl, returning with an army to obliterate her
            family.
          </p>
          <p>
            <strong className="text-rose-700">Cassio</strong>:{' '}
            <strong className="text-rose-700">Azama's</strong> ingenious
            firstborn son. <em>Wielder</em> of a wide collection of yet unknown{' '}
            <Donum>Donums</Donum> - and with a past of suspiciously few details.
          </p>
          <p>
            <strong className="text-rose-700">Prince Sebastian Amati</strong>:
            Second born son of <strong>King Amati</strong> and powerful{' '}
            <em>wielder</em> of <Donum>Donum Denieth</Donum>. Somehow managed to
            travel between worlds without traversing <strong>Ara</strong>.
          </p>
          <p>
            <strong className="text-rose-700">
              Praetorian Benedict Attano
            </strong>
            : Personal bodyguard of{' '}
            <strong className="text-rose-700">Prince Sebastian Amati</strong>.
            Once in a generation <em>wielder</em> of <Donum>Donum Fornax</Donum>
            , used to enhance his already formidable sword skills.
          </p>
        </article>
      </main>
    </>
  );
}
