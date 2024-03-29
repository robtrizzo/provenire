import { ReactNode } from 'react';
import Donum from '@/components/Donum';
import Blood from '@/components/Blood';
import Image from 'next/image';
import Link from 'next/link';
const BorderHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="border-solid border-b-2 border-indigo-700">{children}</h3>
);

export default function TwistedScion() {
  return (
    <>
      <h1 className="text-center">Twisted Scion</h1>
      <main className="md:columns-2">
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
          <p>
            The first time an <strong>Actor's Action</strong> fails, they gain a{' '}
            <strong className="text-rose-700">momentum shift</strong>. This can
            be used to roll an additional d6 for a future{' '}
            <strong>Action</strong>.
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
            <Link
              href="https://discord.gg/HxKzZkmg"
              className="text-rose-700 hover:text-rose-900"
            >
              <strong className="text-rose-700">
                Here is a link to the Discord server.
              </strong>
            </Link>
          </p>
          <p>
            Players may communicate privately with other players, or post public
            announcements in the{' '}
            <Link
              href="https://discord.gg/uf6uxhHM"
              className="text-rose-700 hover:text-rose-900"
            >
              <strong className="text-rose-700">
                #scathing-denouncements channel
              </strong>
            </Link>
            . Use the{' '}
            <Link
              href="https://discord.gg/3aXndkAQ"
              className="text-rose-700 hover:text-rose-900"
            >
              <strong className="text-rose-700">
                #game-discussion channel
              </strong>
            </Link>{' '}
            for out-of-character questions and comments. Use the{' '}
            <Link
              href="https://discord.gg/gncR7M2G"
              className="text-rose-700 hover:text-rose-900"
            >
              <strong className="text-rose-700">#shitposting channel</strong>
            </Link>{' '}
            for sidetalk.
          </p>
          <p>
            <strong>Actors</strong>{' '}
            <strong className="text-rose-700">may not post screenshots</strong>{' '}
            of private conversations or briefings.
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
            The <strong>Narrator</strong> will post updates each{' '}
            <strong className="text-rose-700">Wednesday at 11pm EST</strong>.
          </p>
          <p>
            <strong>Actors</strong> have until the following{' '}
            <strong className="text-rose-700">Monday at 11pm EST</strong> to
            submit <strong>Actions</strong> for the next <strong>Turn</strong>.
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
      <main className="md:columns-2">
        <article>
          <BorderHeading>Inciting Incident</BorderHeading>
          <h4>Battle at the Base of Infinity</h4>
          <p>
            A branch of <strong>Ara, Tree of the Infinite</strong> is exposed,
            draping from the heavens to the heat-blasted plateaus of{' '}
            <strong>Gredora</strong>. An army commanded by{' '}
            <strong className="text-rose-700">Agents of the Locum</strong>{' '}
            marched from the branch into this world where they were met by
            armies commanded by{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-14 max-w-sm left-0 ">
                Controversial King of Anidine. Known for pursuing peace and
                holding <b>Anidine's</b> warmongering factions at bay.
              </span>
              <strong>Vero Amati: King of Anidine</strong>
            </span>{' '}
            and <strong className="text-rose-700">Azama</strong> respectively.
          </p>
          <p>
            The battle was confusing - it remains unclear who was on which side
            of the conflict. As the dust settled, the{' '}
            <strong className="text-rose-700">Locum's</strong> army retreated up
            the branch,{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                Controversial King of Anidine. Known for pursuing peace and
                holding <b>Anidine's</b> warmongering factions at bay.
              </span>
              <strong>King Amati's</strong>
            </span>{' '}
            army retreated back into <strong>Anidine</strong> - their king
            missing, and <strong className="text-rose-700">Azama</strong> still
            holds the base of the branch.
          </p>
          <hr style={{ marginTop: '20px', marginBottom: '20px' }} />
          <h4>What now?</h4>
          <p>
            Missing leader of the world's military superpower, an exposed branch
            to <strong>Ara</strong>, invaders from another world. History is
            happening: and the powers that be are scrambling to turn it to their
            advantage.
          </p>
        </article>
        <article>
          <BorderHeading>Actors</BorderHeading>
          <p>
            <strong className="text-rose-700">
              Each section groups Actors by region they're from. Actors marked
              in <span className="text-yellow-700">yellow</span> are reserved.
            </strong>
          </p>
          <h4>Anidine</h4>
          <p>
            <strong className="text-rose-700">Chiara Amati</strong>:{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                Controversial King of Anidine. Known for pursuing peace and
                holding <b>Anidine's</b> warmongering factions at bay.
              </span>
              <strong>King Amati's</strong>
            </span>{' '}
            firstborn and the presumed successor to the throne. Powerful{' '}
            <em>wielder</em>, cunning and ruthless stateswoman. Suspected ties
            to{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                One of Argos's four noble houses. An international terror known
                for their use of <Donum>Donum Dolus</Donum> to shape world
                events through manipulation and assassination.
              </span>
              <strong>House Prisca</strong>
            </span>
            .
          </p>
          <p>
            <strong className="text-rose-700">General Amir Guran</strong>: A
            politically well-connected <strong>Anidinian</strong> nobleman and
            commander of the{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                An elite force of <b>Anidine's</b> best soldiers. To a man, they
                are all experts of <Donum>Donum Ferro</Donum> and are equipped
                with several <b>Adamantine</b> war machines.
              </span>
              <strong>Steel Column</strong>
            </span>
            . It's an open secret that he plots against{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                Controversial King of Anidine. Known for pursuing peace and
                holding <b>Anidine's</b> warmongering factions at bay.
              </span>
              <strong>King Amati</strong>
            </span>
            .
          </p>
          <p>
            <strong className="text-yellow-700">Prince Sebastian Amati</strong>:
            Second born son of{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                Controversial King of Anidine. Known for pursuing peace and
                holding <b>Anidine's</b> warmongering factions at bay.
              </span>
              <strong>King Amati</strong>
            </span>
            , skilled diplomat, and powerful <em>wielder</em> of{' '}
            <Donum tooltip="the gift of denial">Donum Denieth</Donum>. Somehow
            managed to travel between worlds without traversing{' '}
            <strong>Ara</strong>.
          </p>
          <p>
            <strong className="text-yellow-700">
              Praetorian Benedict Attano
            </strong>
            : Personal bodyguard of{' '}
            <strong className="text-yellow-700">Prince Sebastian Amati</strong>.
            Once in a generation <em>wielder</em> of{' '}
            <Donum tooltip="gift of the forge">Donum Fornax</Donum>, used to
            enhance his already formidable sword skills.
          </p>
          <h4>Argos</h4>
          <p>
            <strong className="text-rose-700">Canus Prisca</strong>: Head of{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                One of Argos's four noble houses. An international terror known
                for their use of <Donum>Donum Dolus</Donum> to shape world
                events through manipulation and assassination.
              </span>
              <strong>House Prisca</strong>
            </span>
            . A master of <Donum tooltip="gift of deceit">Donum Dolus</Donum> as
            well as conventional espionage. Countless influential people dance
            on his strings.
          </p>
          <h4>Fenrir Empire</h4>
          <p>
            <strong className="text-rose-700">Respa Sorbrand</strong>: Captain
            of{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm right-0">
                An elite strike force founded by <b>Fenrir's Duke of Ravens</b>{' '}
                for moments when <b>Fenrir</b> needs to reach outside the
                borders of the Empire.
              </span>
              <strong>Sordid Beak</strong>
            </span>
            . A master of <Donum tooltip="gift of the crow">Donum Corvus</Donum>{' '}
            and world class warrior. Seeking redemption after a crushing
            outmaneuvering by <strong className="text-rose-700">Azama</strong>{' '}
            years ago.
          </p>
          <h4>Gredora</h4>
          <p>
            <strong className="text-rose-700">Azama</strong>: Merchant-general
            of the{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm right-0">
                Impoverished and lowly caravan until{' '}
                <strong className="text-rose-700">Azama</strong> became its
                leader. Now it's enormous, well equipped, and always a step
                ahead of the competition.
              </span>
              <strong>Dameter Caravan-army</strong>
            </span>
            . Brilliant, arrogant, swiftly rising to prominence and power within{' '}
            <strong>Gredora</strong>.
          </p>
          <p>
            <strong className="text-yellow-700">Cassio</strong>:{' '}
            <strong className="text-rose-700">Azama's</strong> ingenious
            firstborn son. <em>Wielder</em> of a wide collection of yet unknown{' '}
            <Link
              href="/setting/donums#second_age"
              className="underline-offset-2 decoration-1 hover:decoration-2 hover:text-amber-100"
            >
              <Donum>Donums</Donum>
            </Link>{' '}
            - and with a past of suspiciously few details.
          </p>
          <h4>Heia</h4>
          <p>
            <strong className="text-rose-700">Zeke</strong>: The strongest{' '}
            <em>wielder</em> of{' '}
            <Donum tooltip="the gift of journey">Donum Iter</Donum> since{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm right-0">
                The <b>New God</b> of violence, restraint, and duty. First
                recorded person to gain <Donum>Donum Iter</Donum>. Wielder of
                the <b>Sword of Violence</b> - an unstoppable weapon.
              </span>
              <strong>Midir, Saint of Violence</strong>
            </span>
            . Desperate to protect the peaceful, sleepy life he's made for
            himself far away from the world's troubles.
          </p>
          <p>
            <strong className="text-yellow-700">Viggo Draconis</strong>: The
            talented heir to <strong>House Draconis</strong>, a small{' '}
            <strong>Heian</strong> noble house known for its drake riders and
            strong morals. Rides the drake he named{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                The <b>New God</b> of violence, restraint, and duty. First
                recorded person to gain <Donum>Donum Iter</Donum>. Wielder of
                the <b>Sword of Violence</b> - an unstoppable weapon.
              </span>
              <strong>Midir</strong>
            </span>
            , after the god of violence.
          </p>
          <p>
            <strong className="text-yellow-700">Taiga Taisho</strong>: Deadly{' '}
            <em>wielder</em> of{' '}
            <Donum tooltip="the gift of frost">Donum Gelu</Donum>, heir to the{' '}
            <strong>Heian</strong> noble house{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm right-0">
                For generations, a sleepy and unremarkable noble house. Once{' '}
                <b>Okazaki Taisho</b> succeeded the head of the house, it became
                a an abyssal pit of depravity and corruption.
              </span>
              <strong>Taisho</strong>
            </span>
            . She fled home as a young girl, returning years later with an army
            to obliterate her long-corrupted family.
          </p>
          <h4>Narscillia</h4>
          <p>
            <strong className="text-rose-700">Fia Lettiere</strong>: Enigmatic
            and all-knowing <em>wielder</em> of{' '}
            <Donum tooltip="gift of beholding">Donum Tueor</Donum> and High
            Visionary of the{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm right-0">
                A fortified library of portraits used by the <b>Visionaries</b>{' '}
                to spy on the world.
              </span>
              <strong>Gallery of Faces</strong>
            </span>
            : the intelligence aparatus of <strong>Narscillia</strong>.
          </p>
          <h4>Twisted Scion</h4>
          <p>
            <strong className="text-rose-700">Agents of the Locum</strong>: A
            cabal of <em>Wielders</em> from the <strong>Twisted Scion</strong>.
            They each have immense and strange{' '}
            <Link
              href="/setting/donums#second_age"
              className="underline-offset-2 decoration-1 hover:decoration-2 hover:text-amber-100"
            >
              <Donum>Donums</Donum>
            </Link>{' '}
            - the kind this world hasn't seen since the previous age.
          </p>
          <p>
            <strong className="text-rose-700">Avina Kriemhild</strong>: Governor
            of <strong>Ulgate</strong>, a city in the{' '}
            <strong>Twisted Scion</strong> using its incredibly powerful weapons
            to resist <strong className="text-rose-700">The Locum</strong> and
            safeguard the largest <strong>Adamatine</strong> deposit anyone has
            seen.
          </p>
          <p>
            <strong className="text-rose-700">Solitary and Wander</strong>:
            Mysterious vestiges of the <em>supposedly departed</em> deity,{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                The <b>New God</b> of sacrifice, truth, and destiny. Unshackled
                from his own destiny by <b>Asherah the Healer</b> and granted
                unknown powers by a red eye with a strange pupil.
              </span>
              <strong>Jira</strong>
            </span>
            . Clones of his body, seemingly imbued with minuscule fractions of
            his memories and power.
          </p>
        </article>
      </main>
      <hr />
      <div className="flex flex-col items-center">
        <BorderHeading>Theater of Play</BorderHeading>
        <Image
          src={'https://provenire.s3.amazonaws.com/osg_map.png'}
          width={1000}
          height={800}
          alt="Map of the world"
          className="rounded-lg w-auto h-auto"
        />
      </div>
      <hr />
      <main className="md:columns-2">
        <article>
          <BorderHeading>Cosmology</BorderHeading>
          <strong className="text-rose-700">
            The people of the world do not understand the forces at play.
          </strong>
          <p>
            <strong className="text-rose-700">Deities</strong>: The{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                Enigmatic beings of immense power. No one remembers anything
                about them other than their names.
              </span>
              <strong>Old Gods</strong>
            </span>{' '}
            are locked away, and the{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm">
                Mortals who ascended into godhood, saved the world, then decided
                to leave it.
              </span>
              <strong>New Gods</strong>
            </span>{' '}
            have departed of their own volition. The people of the world are
            left to their own devices.
          </p>
          <p>
            <strong className="text-rose-700">Ara, Tree of the Infinite</strong>
            : Until recently its existence was a secret only a handful knew. Its
            golden-brown branches stretch into infinity. The wrinkles of{' '}
            <strong>Ara's</strong> bark are mesmerizing: granting visions of
            other versions of history. Whenever someone enters the bark, a new
            branch begins to bud from the entrypoint. A new divergence of
            history - the one where that person entered, and the one which they
            didn't.
          </p>
          <p>
            <strong className="text-rose-700">Twisted Scion</strong>: One branch
            of <strong>Ara</strong> is twisted and dead. No one can enter the
            rotting bark except for the very tip of that branch. In that world,
            water seems to have been replaced with human blood.{' '}
            <Link
              href="/setting/donums#second_age"
              className="underline-offset-2 decoration-1 hover:decoration-2 hover:text-amber-100"
            >
              <Donum>Donums</Donum>
            </Link>{' '}
            don't work the same. They are corrupted and addictive.
          </p>
          <p>
            <strong className="text-rose-700">Dreamscape</strong>: There may be
            infinite worlds connected to <strong>Ara</strong>, but the people of
            every world come to this one place in their dreams. Recent events
            suggest that some have managed to physically travel there - what
            does this mean?
          </p>
        </article>
        <article>
          <BorderHeading>This World</BorderHeading>
          <strong className="text-rose-700">
            The name for this world hasn't been discovered yet - or more
            accurately - the concept of a world's name doesn't exist.
          </strong>
          <p>
            <strong className="text-rose-700">Life Ducts</strong>: There is no
            naturally occurring water. Instead, strange and arbitrary rituals
            are required at the foot of monoliths called{' '}
            <strong>Life Ducts</strong>. After the ritual is complete, water
            flows from it for some time. There are a few permanently open{' '}
            <strong>ducts</strong> around the world, but those are the
            exception. For most people, water is rarely available. Instead, they
            subsist on (mostly animal) <Blood />.
          </p>
          <p>
            <Link
              href="/setting/donums#second_age"
              className="underline-offset-2 text-rose-700 decoration-1 hover:decoration-2 hover:text-rose-800"
            >
              <strong>Donums</strong>
            </Link>
            : Supernatural powers awoken by and fueled by drinking water. The
            variety and strength of the powers seem to follow geographic,
            cultural, and familial patterns, but there are frequent exceptions.
          </p>
          <p>
            <strong className="text-rose-700">Blood</strong>: Most people sate
            their thirst with animal <Blood /> since water is so scarce. Humans
            can burn their blood to briefly empower their body, mind, or heal
            minor wounds. Some become masters of this, gaining powers
            approaching{' '}
            <Link
              href="/setting/donums#second_age"
              className="underline-offset-2 decoration-1 hover:decoration-2 hover:text-amber-100"
            >
              <Donum>Donums</Donum>
            </Link>{' '}
            in strength.
          </p>
          <p>
            <strong className="text-rose-700">Adamantine</strong>: A precious
            metal which can supercharge the powers of{' '}
            <Donum tooltip="gift of iron">Donum Ferro</Donum>,{' '}
            <Donum tooltip="gift of fire">Donum Ignis</Donum>, and{' '}
            <Donum tooltip="gift of the forge">Donum Fornax</Donum>. Also
            crucial to <strong>Gredoran</strong> and <strong>Anidinian</strong>{' '}
            war machines. Only sources are dragon bones and naga bones - both
            exceptionally scarce.
          </p>
        </article>
        <article>
          <BorderHeading>Nations at Play</BorderHeading>
          <strong className="text-rose-700">
            Some are content to sit this crisis out; these are the ones getting
            involved.
          </strong>
          <p>
            <Link
              href="/setting/second_age/anidine"
              className="underline-offset-2 text-rose-700 decoration-1 hover:decoration-2 hover:text-rose-800"
            >
              <strong>Anidine</strong>
            </Link>
            :{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm right-0">
                The <b>New God</b> of love, union, and vengeance. Rode a griffon
                steed <b>Astolfo</b>. Married to <b>Akil the Conqueror</b>.
              </span>
              <strong>Asherah the Healer</strong>
            </span>{' '}
            and{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm right-0">
                The <b>New God</b> of war, conquest, and cities. Second{' '}
                <em>wielder</em> of <Donum>Donum Duellum</Donum>. Married to{' '}
                <b>Asherah the Healer</b>.
              </span>
              <strong>Akil the Conqueror</strong>
            </span>{' '}
            forced the union of <strong>Cumeria</strong> and{' '}
            <strong>Gredora</strong>, two historically bitter enemies. The
            resulting nation is a powder keg that blew the moment those gods
            departed. Now only the core of its territory remains, but it's still
            the world's military superpower - and it's itching for a war.
          </p>
          <p>
            <Link
              href="/setting/second_age/argos"
              className="underline-offset-2 text-rose-700 decoration-1 hover:decoration-2 hover:text-rose-800"
            >
              <strong>Argos</strong>
            </Link>
            : Isolationist city-state far away from the stage of this conflict.
            Ruled by four houses. Three perfer to keep to themselves. The fourth
            house:{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 max-w-sm right-0">
                One of Argos's four noble houses. An international terror known
                for their use of <Donum>Donum Dolus</Donum> to shape world
                events through manipulation and assassination.
              </span>
              <strong>House Prisca</strong>
            </span>
            , is involved in everyone's business.
          </p>
          <p>
            <Link
              href="/setting/second_age/fenrir"
              className="underline-offset-2 text-rose-700 decoration-1 hover:decoration-2 hover:text-rose-800"
            >
              <strong>Fenrir Empire</strong>
            </Link>
            : Dystopian empire ruled by an immortal god-king,{' '}
            <span className="has-tooltip">
              <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 mt-8 right-0 max-w-sm">
                Progenitor of <Donum>Donum Rex</Donum> and ruler of the{' '}
                <b>Fenrir Empire</b>, formerly <b>Rath</b>. Claims to have been
                alive since far before the <b>New Gods</b> were born.
              </span>
              <strong>Kingwulf</strong>
            </span>
            . Far away from the stage of this conflict, but always looking for
            an opportunity to expand.
          </p>
          <p>
            <Link
              href="/setting/second_age/gredora"
              className="underline-offset-2 text-rose-700 decoration-1 hover:decoration-2 hover:text-rose-800"
            >
              <strong>Gredora</strong>
            </Link>
            : Nomadic caravan-armies without a centralized government. Recently
            defeated <strong>Anidine</strong> in a war for secession, but still
            missing the most resource-rich parts of its territory.{' '}
          </p>
          <p>
            <Link
              href="/setting/second_age/heia"
              className="underline-offset-2 text-rose-700 decoration-1 hover:decoration-2 hover:text-rose-800"
            >
              <strong>Heia</strong>
            </Link>
            : Nation of loose feudal alliances determined to stay out of{' '}
            <strong>Anidine's</strong> way, lest they get caught up in another
            doomed conflict with them.
          </p>
          <p>
            <Link
              href="/setting/second_age/narscillia"
              className="underline-offset-2 text-rose-700 decoration-1 hover:decoration-2 hover:text-rose-800"
            >
              <strong>Narscillia</strong>
            </Link>
            : A desert nation reeling from a recent war between{' '}
            <strong>Heia</strong> and <strong>Anidine</strong> which got fought
            within its borders.
          </p>
        </article>
      </main>
    </>
  );
}
