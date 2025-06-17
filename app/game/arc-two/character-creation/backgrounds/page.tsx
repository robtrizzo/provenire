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
        <b>1</b>.
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
        <b className="font-cyber text-stone-500">Rivals</b> are NPCs which will
        endeavor to make your life harder whenever given the opportunity.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-sky-500">Bonds</b> are NPCs which will
        actively go out of their way to help you or make personal sacrifices for
        your well being.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-fuchsia-500">Cyberware</b> is a piece of
        latent or forgotten tech which <b className="font-cyber">Root</b>{" "}
        elected not to tell you about.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber text-lime-500">Drive</b> is the answer to why
        you joined <b className="font-cyber">Root</b> in the first place.
      </TypographyP>
      <TypographyH2 className="font-cyber mt-8">
        Redzone Punk Metalist
      </TypographyH2>
      <TypographyP>
        Grab your guitar and c-sword. There are facsists in these streets.
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
        drugs, sex, and giving facsists a bloody nose. What&apos;re you gonna do
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
            Integrated Advanced Audio Suite
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
            An enemy [ <span className="text-stone-500">Rival</span> ]
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
      <TypographyH2 className="font-cyber mt-8">Grid Finch</TypographyH2>
      <TypographyH2 className="font-cyber mt-8">Motorhead</TypographyH2>
      <TypographyH2 className="font-cyber mt-8">Dynastic Scion</TypographyH2>
      <TypographyH2 className="font-cyber mt-8">Trust Fund Baby</TypographyH2>
      <TypographyH2 className="font-cyber mt-8">Biofundamentalist</TypographyH2>
      <TypographyH2 className="font-cyber mt-8">Factory Mundane</TypographyH2>
      <TypographyH2 className="font-cyber mt-8">Netrunner</TypographyH2>
      <TypographyH2 className="font-cyber mt-8">Bount</TypographyH2>
      <TypographyH2 className="font-cyber mt-8">Corpo Tech Wiz</TypographyH2>
    </>
  );
}
