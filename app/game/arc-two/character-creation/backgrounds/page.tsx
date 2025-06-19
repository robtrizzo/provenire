import Clock from "@/components/clock";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          {
            name: "Character Creation",
            href: "/game/arc-two/character-creation",
          },
          { name: "Backgrounds", href: "#" },
        ]}
      />
      <TypographyH1 className="font-cyber mb-8">Backgrounds</TypographyH1>
      <TypographyP>
        This is who you were before you joined{" "}
        <b className="font-cyber">Root</b>. Or at least, part of who you were.
        It won&apos;t matter until you retire. But even if you can&apos;t
        remember, your memories are only <i>shelved</i>, remember? So
        you&apos;re still good at what you were good at.
      </TypographyP>
      <TypographyP>
        And your past? Well, everyone brings baggage into{" "}
        <b className="font-cyber">Root</b>. Let&apos;s just hope you steer
        clear. It&apos;s like they say,{" "}
        <i className="text-amber-500">
          the worst demons are the ones we bring with us
        </i>
        .
      </TypographyP>
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyP>
        <b>Baggage</b> represents the memories{" "}
        <b className="font-cyber">Root</b> shelved coming back to light. This
        can be because of memory relapses or by encountering components of your
        past.
      </TypographyP>
      <TypographyP>
        There are two ways to unlock some <b>baggage</b>: being the{" "}
        <b>narrative focus</b>, or by filling the <b>memory clock</b> . If you
        are the <b>narrative focus</b> this cycle, you may choose any{" "}
        <b>baggage</b> to unlock at any point. If you fill the{" "}
        <b>memory clock</b>, you unlock a piece of <b>baggage</b> chosen at
        random.
      </TypographyP>
      <TypographyP>
        You may only unlock one piece of <b>baggage</b> per mission cycle. Each
        piece of <b>baggage</b> you unlock reduces your <b>max stress</b> by{" "}
        <b>1</b>. At any time, you may contact{" "}
        <b className="font-cyber">Winith</b>, <b>Root&apos;s</b> head of HR and
        Wellness to re-shelve relapsed memories. This will reset your{" "}
        <b>max stress</b>, but remove all unlocked <b>baggage</b> rewards.{" "}
        <b className="font-cyber text-stone-500">Rivals</b> will continue to
        harry you though.
      </TypographyP>
      <TypographyBlockquote>
        The <b>memory clock</b> is a 4-piece clock{" "}
        <span className="inline-flex items-center gap-1">
          <Clock height={20} width={20} max={4} current={0} clickable={false} />
        </span>{" "}
        advanced by marking a <b>condition</b> or a <b>level 3 harm</b>.
      </TypographyBlockquote>
      <TypographyH4 className="font-cyber">Types of Baggage</TypographyH4>
      <TypographyP>
        Unlocking a piece of <b>baggage</b> grants you the element denoted in{" "}
        <b className="font-cyber">[ ]</b>. Elements marked with a{" "}
        <b className="font-cyber">{"->"}</b> indicate that this piece of{" "}
        <b>baggage</b> can be unlocked a second time to go deeper, and gain the
        second reward.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-fuchsia-500">Cyberware</b> is a piece of
        latent or forgotten tech which <b className="font-cyber">Root</b>{" "}
        elected not to tell you about.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-red-500">Actions</b> grant you a new
        keyword to add to your character&apos;s actions. You start with{" "}
        <span className="inline-block">
          <span className="flex gap-2 mx-2">
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
          </span>
        </span>{" "}
        in the action.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-orange-500">Transformations</b> are the
        Rathi Donums of bestial shapeshifting. Without extensive surgeries, they
        can damage your chrome.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-lime-500">Drive</b> is the answer to why
        you joined <b className="font-cyber">Root</b> in the first place.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-emerald-500">Fighting Style</b> is a
        school of fighting, the techniques and traditions. Not necessarily the
        physical capability.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-sky-500">Bonds</b> are NPCs which will
        actively go out of their way to help you or make personal sacrifices for
        your well being.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-stone-500">Rivals</b> are NPCs which will
        endeavor to make your life harder whenever given the opportunity.
      </TypographyP>
      <TypographyH4 className="font-cyber">Choosing a Background</TypographyH4>
      <TypographyP>
        These are blueprints to your character&apos;s past - not hard canon.
        When you choose, feel free to make small tweaks to the fiction as you
        see fit. Though if you want edits to the mechanics to suit your
        character, consult the GM.
      </TypographyP>
      <TypographyP>
        Due to the nature of <b>baggage</b>, I ask that you attempt to pick a
        unique background from each of the other players.
      </TypographyP>

      <TypographyH2 className="font-cyber mt-8">Biofundamentalist</TypographyH2>
      <TypographyP>
        Kingwulf conquered the world to create a paradise for predators, not a
        bleak concrete jungle populated with more machine than flesh. This world
        is sick and soft.
      </TypographyP>
      <TypographyP>
        No one knows how to do anything anymore. Take away the endless
        holostreams and they don&apos;t know how to socialize. Take away their
        bugbags and vending machines and they&apos;d starve. They&apos;ve even
        lost their transformations. But not you. You remember the old ways.
      </TypographyP>
      <TypographyP>
        The old ways are the comraderie of the pack, the necessity to hunt,
        clarity of the hierarchy. People need to be reminded that if they
        won&apos;t be the predators Kingwulf wants them to be, they&apos;ve
        become your prey.
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="text-red-500">Stalk</span>,{" "}
          <span className="text-red-500">Frighten</span>,{" "}
          <span className="text-red-500">Relate</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> birthsleeve
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Cyberware: <span className="font-normal">N / A</span>
        </b>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            A passion [ <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          A passtime you sank endless hours into, not related to work or
          survival - just something beautiful that you share with a few close
          friends.
        </li>
        <li>
          <b className="font-cyber">
            Littermate [ <span className="text-stone-500">Rival</span> {" -> "}{" "}
            <span className="text-emerald-500">Bestial Fighting Style</span> ]
          </b>{" "}
          You forgot who you are and where you come from. You left the pack. And
          so you have become prey.
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-lime-500">Drive</span> {" -> "}
            <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          The persistent sense of rejection, unworthiness. Fear of being alone
          forever. You find out why.
        </li>
        <li>
          <b className="font-cyber">
            Escaped prey [ <span className="text-stone-500">Rival</span>
            {" -> "}
            <span className="text-orange-500">Bestial Transformation</span> ]
          </b>{" "}
          You hunted them once and they got away. Well now it&apos;s their turn,
          and they&apos;ve brought backup, bitch.
        </li>
        <li>
          <b className="font-cyber">
            A parent (
            <span className="font-normal text-xs">or other relative</span>) [{" "}
            <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          They&apos;ve always had a soft spot for you. Instead of driving you
          away, they look forward to when you come back to the pack.
        </li>
      </TypographyUnorderedList>

      <TypographyH2 className="font-cyber mt-8">Bount</TypographyH2>
      <TypographyP>
        The Royal Rathi Army chewed you up and spit you out. You&apos;ve lost
        count of the number of times you&apos;ve died, been resleeved, and set
        loose into battle once again. You used to think there was more to life
        than this, but there really isn&apos;t.
      </TypographyP>
      <TypographyP>
        Life is cruel and unfair. The corps own everything and everyone. Even if
        you don&apos;t buy that, there&apos;s Kingwulf above them. So, fuck it.
        You&apos;re going to get yours, who can fault you for that?
      </TypographyP>
      <TypographyP>
        And so you kill for the corps. And the killing part, that&apos;s not
        hard. You&apos;re an expert. Finding people though, that can be tough in{" "}
        <b className="font-cyber">Feasting</b>.
      </TypographyP>

      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action:{" "}
          <span className="text-emerald-500">Fighting Style</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> Beasttech Bloodhound
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Cyberware: <span className="text-fuchsia-500">Rat-track</span>
        </b>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            The Cycle of Revenge [ <span className="text-stone-500">Rival</span>
            {" -> "}
            <span className="text-red-500">Lurk</span> ]
          </b>{" "}
          Fuckin corpos didn&apos;t tell you the target was a Dynastic daughter.
          Now they&apos;re all coming for you.
        </li>
        <li>
          <b className="font-cyber">
            Your stash [{" "}
            <span className="text-fuchsia-500">
              HSG-3 &quot;His Magesty&quot;
            </span>
            {" -> "}
            <span className="text-fuchsia-500">
              Integra Overwatch Drone &quot;Osprey&quot;
            </span>
            ]
          </b>{" "}
          You didn&apos;t come away from the army empty handed. You have stashes
          across the city for just the right occasion.
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-lime-500">Drive</span> ]
          </b>{" "}
          The waves of nihilism. The nightmares you never remember. You find out
          why.
        </li>
        <li>
          <b className="font-cyber">
            Corpo scum [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          You have simple boundaries: no kids, no innocents. Some clients just
          don&apos;t know how to be told &quot;no&quot;.
        </li>
        <li>
          <b className="font-cyber">
            War buddy [ <span className="text-red-500">Endure</span>
            {" -> "}
            <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          You&apos;ve crossed paths in battle dozens of times, each time in a
          different body. You made the introductions that got them into this
          business.
        </li>
      </TypographyUnorderedList>

      <TypographyH2 className="font-cyber mt-8">Corpo Labcoat</TypographyH2>
      <TypographyP>
        You live in the golden age of technological advancement, and you&apos;re
        a part of it. As a toddler, your parents sent you to the best science
        apprenticeship in the city. You&apos;ve been working in labs all your
        life.
      </TypographyP>
      <TypographyP>
        You used to get lonely, but your mentor advised you get your emotions
        stapled in favor of productivity modules. They were right, you felt
        better after that.
      </TypographyP>
      <TypographyP>
        It&apos;s not all bad. They pay you a good salary and grant you
        unlimited funding for your projects. You even get to choose their
        direction sometimes. Of course, working underneath the money people
        means they&apos;re constantly cutting your most pioneering work short to
        cut a profit. If only those fools could see the real potential.
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="text-red-500">Analyze</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> Vantro Enterprises Model 8-L
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Cyberware:{" "}
          <span className="text-fuchsia-500">
            Integra Optics &quot;Crow&apos;s Eye&quot;
          </span>
        </b>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            Your work [{" "}
            <span className="text-red-500">
              Tech [ X<sup className="text-amber-500">*</sup> ]
            </span>{" "}
            ]
          </b>{" "}
          They released it <i>unfinished</i> and ... wait... you dedicated your
          life to this to <i>help</i> people. What has this become?
        </li>
        <li>
          <b className="font-cyber">
            A naysayer [ <span className="text-stone-500">Rival</span>
            {" -> "}
            <span className="text-red-500">Debate</span> ]
          </b>{" "}
          They always doubted your intellect and sought to discredit you. Your
          mutual animosity has only escalated over the years.
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-lime-500">Drive</span>
            {" -> "}
            <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          A painful inability to feel anything as strongly as you see others
          experience. An inescapable sense of betrayal. You find out why.
        </li>
        <li>
          <b className="font-cyber">
            A collaborator [ <span className="text-sky-500">Bond</span>
            {" -> "}
            <span className="text-fuchsia-500">
              3MI Holosomatic Projector
            </span>{" "}
            ]
          </b>{" "}
          Your closest friend and partner in progress. You rarely spoke about
          personal matters, but you always understood each other.
        </li>
        <li>
          <b className="font-cyber">
            A curiosity [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          You have an inquisitive mind. It&apos;s what you designed yourself to
          do. When you noticed an inconsistency in the company, you
          couldn&apos;t help but to unspool that thread.
        </li>
      </TypographyUnorderedList>
      <TypographyBlockquote className="font-cyber text-xs">
        Tech [ X<sup className="text-amber-500">*</sup> ] denotes your choice of{" "}
        <b className="text-red-500">Crystech</b>,{" "}
        <b className="text-red-500">Electrotech</b>,{" "}
        <b className="text-red-500">Gentech</b>,{" "}
        <b className="text-red-500">Holotech</b>,{" "}
        <b className="text-red-500">Metaltech</b>,{" "}
        <b className="text-red-500">Neurotech</b>,{" "}
        <b className="text-red-500">Nettech</b>, or{" "}
        <b className="text-red-500">Tartech</b>
      </TypographyBlockquote>

      <TypographyH2 className="font-cyber mt-8">Dynastic Scion</TypographyH2>
      <TypographyP>
        The corporate suits fancy themselves the rulers of{" "}
        <b className="font-cyber">Feasting</b>. But compared to the noble
        families, they are babes - breastmilk still on their whimpering upstart
        lips. You&apos;ll show them real power. Real power is blood, fangs, and{" "}
        <b>Kingwulf&apos;s</b> favor.
      </TypographyP>
      <TypographyP>
        When you walk the streets, the people show you respect. Or they aught
        to. If they don&apos;t, they know the price. Your family built this
        place, employs them, raises them up under the glory of your name.
      </TypographyP>
      <TypographyP>
        When you aren&apos;t prowling your turf, you&apos;re cementing your
        alliances, both familial and personal. Worth it to grease palms just in
        case you ever need to call in favors.
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="text-red-500">Authority</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> Beasttech Pride Hide
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Cyberware: <span className="text-fuchsia-500">ETD Adrenaspike</span>
        </b>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            Your elder [ <span className="text-red-500">Scheme</span>
            {" -> "}
            <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          There&apos;s only one way to climb higher in your family, and
          that&apos;s by knocking someone else down. It&apos;s not personal,
          just power.
        </li>
        <li>
          <b className="font-cyber">
            Dynasty Rival [ <span className="text-stone-500">Rival</span>
            {" -> "}
            <span className="text-orange-500">Bestial Transformation</span> ]
          </b>{" "}
          You&apos;ve done a disservice to your bloodline. They&apos;re here to
          take their rightful place in the family hierarchy... at your expense.
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-lime-500">Drive</span> ]
          </b>{" "}
          The inferiority complex punching you in the gut. The paranoia that
          your closest friends will stab you in the back. You find out why.
        </li>
        <li>
          <b className="font-cyber">
            A mentor [ <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          They taught you everything you know about the game of power; hell,
          they basically raised you.
        </li>
        <li>
          <b className="font-cyber">
            Underworld contact [ <span className="text-red-500">Consort</span>{" "}
            {" -> "}
            <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          A useful servant of the dynasty, but with questionable loyalty. They
          played a role in your rise.
        </li>
      </TypographyUnorderedList>

      <TypographyH2 className="font-cyber mt-8">Factory Mundane</TypographyH2>
      <TypographyP>
        Day in and day out, you commute to the Grid, put in your hours, come
        home, repeat. But if you&apos;re going to pay the bills with dull
        factory work, you may as well go all the way with it.
      </TypographyP>
      <TypographyP>
        You don&apos;t just work, you lease your body to your employer.
        They&apos;ve paid to replace your sleeve with a platform fitted with
        precision manufacturing gear. You&apos;ve just got to keep it in good
        condition. Your birthsleeve is rented out to some other choom, a little
        income on the side.
      </TypographyP>
      <TypographyP>
        You show up to the factory floor and enable remote control. Your
        employers take care of the rest, all you have to do is sit tight and
        wait for the shift to end. Good thing you&apos;ve got a subscription to
        your favorite holostreams and video games. Makes all this bearable.
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="text-red-500">Interface</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> Foundation Omnifab
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Cyberware:{" "}
          <span className="text-fuchsia-500">3MI Lara Gameforce VTA Spike</span>
        </b>
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        The Lara Gameforce VTA Spike: experience gameplay immersion like no
        other.
      </TypographyBlockquote>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            The squad [ <span className="text-sky-500">Bond</span>
            {" -> "}
            <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          A cluster of gamers who like you, have all the time in the world to
          stay in netspace. Over the years you&apos;ve all become incredibly
          close.
        </li>
        <li>
          <b className="font-cyber">
            Your labor [ <span className="text-red-500">Manufacture</span>{" "}
            {" -> "} <span className="text-lime-500">Drive</span> ]
          </b>{" "}
          The product of endless hours of toil. You&apos;ve seen it all day,
          every day. You know its inner workings from start to finish. You could
          tolerate it, until you found out what it really was.
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          You sacrificed everything to get ahed in life. All for the promise of
          a humble retirement in your twilight years. And what did you get for
          it? Debt. Threats. A body incapable of sensation.
        </li>
        <li>
          <b className="font-cyber">
            Your boss [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          Your sleeve is a valuable company asset, and if you don&apos;t work,
          you don&apos;t get to keep it. They&apos;re not going to let you off
          that easy.
        </li>
        <li>
          <b className="font-cyber">
            A game (
            <span className="font-normal text-xs">or other form of media</span>)
            [ <span className="text-red-500">Disconnect</span>
            {" -> "}
            <span className="text-emerald-500">Fighting Style</span> ]
          </b>{" "}
          The only thing that would get you through the day. Your{" "}
          <span className="font-cyber">VTA Spike</span> allowed you to literally
          live the story. It became more real to you than your actual life at
          times.
        </li>
      </TypographyUnorderedList>

      <TypographyH2 className="font-cyber mt-8">Grid Finch</TypographyH2>
      <TypographyP>
        You&apos;ve got a simple arrangement with the chop shoppers: you steal
        parts, you get a good price on cobbled chrome. Sometimes you even get a
        cut of profit if times are really good. But you&apos;ve got other
        revenue streams - there are plenty of fences happy to pay for tech in
        good condition.
      </TypographyP>
      <TypographyP>
        You&apos;ve made the dark alleys and hidey holes of Big Grid your home.
        You know it better than any of the commuters or suits do, and it&apos;s
        not even close.
      </TypographyP>
      <TypographyP>
        That being said, it&apos;s not an easy life. Ducking security, evading
        bounts, and surviving dynastic turf wars all takes a toll. Your
        birthsleeve got dusted way back, you&apos;ve been making do with an
        outdated budget sleeve. It didn&apos;t even come with features on the
        face...{" "}
      </TypographyP>
      <TypographyP>
        <i>Just another year</i>, you tell yourself.{" "}
        <i>Then I&apos;ll get the fuck out of here.</i>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="text-red-500">Deal</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> Integra Model 2 Mod Pro
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Introducing our most customizable budget model yet, Model 2 Mod Max.
        Dream big.
      </TypographyBlockquote>
      <TypographyP>
        <b className="font-cyber">
          Cyberware:{" "}
          <span className="text-fuchsia-500">
            Beasttech Pounce Spring Joints
          </span>
        </b>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            Your running grounds [{" "}
            <span className="text-red-500">Navigate</span> ]
          </b>{" "}
          You&apos;ve spent so many endless hours running lost in a maze, you
          began to pick up a sixth sense for the right turns to take.
        </li>
        <li>
          <b className="font-cyber">
            Birthsleeve [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          What the <i>fuck</i>? You got dusted - four shots to the chest. The
          ripperdoc told you there was no coming back from that -{" "}
          <i>bastard sold your meat</i>!
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-stone-500">Rival</span>
            {" -> "}
            <span className="text-red-500">Hide</span> ]
          </b>{" "}
          The creeping dread that your days are numbered. The anxiety that
          you&apos;ve forgotten something crucially important. You find out why.
        </li>
        <li>
          <b className="font-cyber">
            Chop shopper [ <span className="text-sky-500">Bond</span>
            {" -> "}
            <span className="text-fuchsia-500">
              Zetalab Evasion Platform &quot;GTFO&quot;
            </span>{" "}
            ]
          </b>{" "}
          You&apos;ve been in their workshop more times than you can count. Your
          home away from home, they all treated you real nice here.
        </li>
        <li>
          <b className="font-cyber">
            Your family [ <span className="text-sky-500">Bond</span> {" -> "}
            <span className="text-lime-500">Drive</span> ]
          </b>{" "}
          You would do anything for them; and they for you. How long has it been
          since you saw them? Do they even know you&apos;re alive?
        </li>
      </TypographyUnorderedList>

      <TypographyH2 className="font-cyber mt-8">Motorhead</TypographyH2>
      <TypographyP>
        Pumping pistons, perfectly fitted gears, rumbling internal combustion -
        technology is beautiful. For as long as you remember, you&apos;ve had an
        intimate affinity for machines. They make sense to you. There&apos;s a
        romance to them, unlike biomatter. One day you&apos;ll be free of your
        meat.
      </TypographyP>
      <TypographyP>
        In the meantime, you grind for pelts so you can pay for that next mod.
        And when you&apos;re not working the churn or under the knife,
        you&apos;re cruising the city. Your bike is your pride and joy, and you
        treat it like a lover. You know every inch of it, and there&apos;s no
        better feeling than slotting in that neural interface and{" "}
        <i>becoming</i> the tires on the tracks.
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="text-red-500">Tinker</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> Foundation Machina
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Cyberware:{" "}
          <span className="text-fuchsia-500">
            Integra Chambercore &quot;Growler&quot;
          </span>
        </b>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            Your bike [ <span className="text-red-500">Pilot</span>
            {" -> "}
            <span className="text-fuchsia-500">
              Silcana Neural Interface &quot;Roadrunner&quot;
            </span>{" "}
            ]
          </b>{" "}
          You and that bike are family. You&apos;ve been modifying it since
          before you even got your own mods.
        </li>
        <li>
          <b className="font-cyber">
            Bio Cult Freak [ <span className="text-stone-500">Rival</span>
            {" -> "}
            <span className="text-red-500">Challenge</span> ]
          </b>{" "}
          Most people think you&apos;re a little weird, sure. But these guys -
          they pin everything wrong with society on you and you in particular.
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-lime-500">Drive</span> ]
          </b>{" "}
          The longing for something you feel is missing or incomplete. Life just
          feels so slow. You find out why.
        </li>
        <li>
          <b className="font-cyber">
            Rival racer [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          Some corpo brat who thinks their money and fancy sleeve make them a
          better racer than you. They&apos;ve had enough, and now they&apos;re
          gunning to elimate the competition.
        </li>
        <li>
          <b className="font-cyber">
            Corpo sponsor [{" "}
            <span className="text-fuchsia-500">3MI Autonav Integrated HUD</span>{" "}
            {" -> "}
            <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          You got a sweet deal from a corpo to promote their brand in exchange
          for chrome. They were always a bit too pushy though.
        </li>
      </TypographyUnorderedList>

      <TypographyH2 className="font-cyber mt-8">Netrunner</TypographyH2>
      <TypographyP>
        Flesh and metal are obselete. Everything important went virtual a long
        time ago. Information, currency, security, entertainment, even{" "}
        <b>Kingwulf&apos;s</b> blessings. And so, you&apos;re all in.
      </TypographyP>
      <TypographyP>
        It&apos;s amazing what the mind can do once you unteather it from your
        meat. Or at least, mostly. Your organs still have to survive so they can
        sustain your brain - along with all of the chrome you&apos;ve modded it
        with. That chrome lets you split your mind into distinct processes so
        you can grind for pelts while gaming, gooning, reading, and hacking
        corpo blacksites all at once.
      </TypographyP>
      <TypographyP>The net is real freedom.</TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="text-red-500">Hack</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> Sentry Mastermind
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Cyberware:{" "}
          <span className="text-fuchsia-500">Integra Lobe Optiplex</span>
        </b>
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        The Lobe Optixplex is the market leader in neural exponentiation. It
        answers the age old question: &quot;What if there was more of me?&quot;
      </TypographyBlockquote>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            An old mark [ <span className="text-red-500">Manipulate</span>
            {" -> "}
            <span className="text-fuchsia-500">
              Overcorp Personality Codec
            </span>{" "}
            ]
          </b>{" "}
          It&apos;s a shame, they weren&apos;t too bad of a person, but you
          needed someone with access to that mainframe.
        </li>
        <li>
          <b className="font-cyber">
            Your body [ <span className="text-red-500">Netsurf</span> {" -> "}{" "}
            <span className="text-fuchsia-500">Kerengraf Cyberrend Suite</span>{" "}
            ]
          </b>{" "}
          Your meat wastes away, hanging like a vestigial limb from the brain
          suspended by wires and tubes. You are not that body. You are what it
          allows you to become.
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-lime-500">Drive</span> ]
          </b>{" "}
          The slow drag of seconds. The paniced moments when you feel like
          something horrible is about to happen and you&apos;re supposed to do
          something about it. You find out why.
        </li>
        <li>
          <b className="font-cyber">
            Rival hacker [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          They tried to compete, and quickly learned they&apos;re too slow or
          too dumb to keep up with you. Some people just never get over it.
        </li>
        <li>
          <b className="font-cyber">
            A family member (
            <span className="font-normal text-xs">or friend</span>) [{" "}
            <span className="text-stone-500">Rival</span>
            {" -> "}
            <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          They never understood your obsession with the net and they&apos;ve
          been trying to bring you back into meatspace ever since.
        </li>
      </TypographyUnorderedList>

      <TypographyH2 className="font-cyber mt-8">
        Redzone Punk Metalist
      </TypographyH2>
      <TypographyP>
        Grab your guitar and c-sword. There are fascists in these streets.
        Can&apos;t let them think they own the joint.
      </TypographyP>
      <TypographyP className="font-cyber text-amber-500 font-bold">
        SCREAM. DANCE. FIGHT. FUCK. ROCK!
      </TypographyP>
      <TypographyP>
        If your ears aren&apos;t ringing, it was a fucked up lame night.
      </TypographyP>
      <TypographyP>
        The streets of Redzone are long ass gutters. Plenty of fools cap to the
        man and work their shifts in Griddy. That life? That&apos;s a scam and
        you&apos;re not falling for it.
      </TypographyP>
      <TypographyP>
        You&apos;re in a band. And your music is fucking fire. You&apos;re one
        big event off your big break. Anyway, being in a band isn&apos;t just
        about the music. It&apos;s about people. And by people, it&apos;s about
        drugs, sex, and giving fascists a bloody nose. What&apos;re you gonna do
        about it, choom? You wanna go?
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="text-red-500">Brawl</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> birthsleeve
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Cyberware:{" "}
          <span className="text-fuchsia-500">
            Integrated Advanced Audio Suite &quot;Boombox&quot;
          </span>
        </b>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            Your tunes [ <span className="text-red-500">Ignite</span> ]
          </b>{" "}
          You hear your music in a playlist or at a nearby club. You don&apos;t
          know how, but you know it&apos;s yours.
        </li>
        <li>
          <b className="font-cyber">
            A fascist [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          You rocked them at least once and now they&apos;re coming to get
          theirs
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-red-500">Defy</span>
            {" -> "}
            <span className="text-lime-500">Drive</span> ]
          </b>{" "}
          That feeling when you&apos;re alone and you look at yourself in the
          mirror. The bottomless pit in your gut. You find out why.
        </li>
        <li>
          <b className="font-cyber">
            A frienemy [ <span className="text-stone-500">Rival</span>
            {" -> "}
            <span className="text-sky-500">Bond</span> ]
          </b>{" "}
          Docking with the enemy? Well let&apos;s just say there&apos;s more
          than one way to change a mind. How&apos;d it turn out? Well...
        </li>
        <li>
          <b className="font-cyber">
            A bandmate [ <span className="text-sky-500">Bond</span> {" -> "}
            <span className="text-fuchsia-500">Cyberaxe Guitar</span> ]
          </b>{" "}
          You were closest friends, basically siblings. You had each
          other&apos;s backs on stage and in a scrap.
        </li>
      </TypographyUnorderedList>

      <TypographyH2 className="font-cyber mt-8">
        Trust Fund Dilettante
      </TypographyH2>
      <TypographyP>
        The point of life is bliss. You spend your days awash in a perpetual
        bath of dopamine. Anything which strikes your fancy is yours, supplied
        to you by a flock of doting servants.
      </TypographyP>
      <TypographyP>
        Not to minimize your contributions to society. Because of your
        privilaged position, you&apos;re freed up to think about the important
        things. You share your cutting truths and insightful observations in the
        podcast circuit and the news.
      </TypographyP>
      <TypographyP>
        That all being said, you don&apos;t really know much about anything.
        Well, you know a little about a lot of things. You have interests!
        Besides, why learn anything when you can just slot in a codex when you
        need to?
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyP>
        <b className="font-cyber">
          Starting Action: <span className="font-normal">N / A</span>
        </b>
      </TypographyP>
      <TypographyP className="font-cyber">
        <b className="font-cyber">Sleeve:</b> Feelmax Skyn
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Strata brings you the pinnacle of luxury sleeves. The latest in our
        Velvet series, the Feelmax Skyn. Feel it the most where it counts.
      </TypographyBlockquote>
      <TypographyP>
        <b className="font-cyber">
          Cyberware:{" "}
          <span className="text-fuchsia-500">
            Renaissance Man 64 Core Cortical Stack
          </span>
        </b>
      </TypographyP>
      <Separator className="mt-2" />
      <TypographyH3 className="font-cyber">Baggage</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b className="font-cyber">
            Corpo Bount [ <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          Plenty of people want to get at your family. Whether its for ambition,
          money, or revenge, they&apos;re here to take you out.
        </li>
        <li>
          <b className="font-cyber">
            Bodyguard [ <span className="text-stone-500">Rival</span> {" -> "}{" "}
            <span className="text-fuchsia-500">Project: Pheonix</span> ]
          </b>{" "}
          You gave them the slip to go your own way. They&apos;re here to take
          you back.
        </li>
        <li>
          <b className="font-cyber">
            Your hurt [ <span className="text-red-500">Pretense</span> ]
          </b>{" "}
          The gnawing sense that you dont belong. Like you&apos;re an impostor
          of a human being going through the motions. You find out why.
        </li>
        <li>
          <b className="font-cyber">
            Best Friend [ <span className="text-sky-500">Bond</span>
            {" -> "}
            <span className="text-stone-500">Rival</span> ]
          </b>{" "}
          Someone who relates to your rich kid problems. A partner in mischief
          and an admittedly bad influence.
        </li>
        <li>
          <b className="font-cyber">
            A sibling (
            <span className="font-normal text-xs">or other relative</span>) [{" "}
            <span className="text-sky-500">Bond</span> {" -> "}
            <span className="text-lime-500">Drive</span> ]
          </b>{" "}
          Your closest family member. The only one who supports your dreams and
          keeps you in check.
        </li>
      </TypographyUnorderedList>
    </>
  );
}
