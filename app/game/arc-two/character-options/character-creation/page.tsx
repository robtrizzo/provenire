import Clock from "@/components/clock";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Character Creation</TypographyH1>
      <TypographyP>
        In{" "}
        <i>
          Provenire <span className="font-cyber">Arc Two: ROOT</span>
        </i>{" "}
        your characters are citizens of <b>Feasting City</b>. For one reason or
        another, your character has joined{" "}
        <span className="font-cyber">ROOT</span>, a secretive organization
        requiring your character shelve their memories to join. Your job at{" "}
        <span className="font-cyber">ROOT</span> is to fight terrorists and
        capture exciting combat footage for{" "}
        <span className="font-cyber">ROOT&apos;s</span> parent company,{" "}
        <span className="font-cyber">Cytech</span>.
      </TypographyP>

      <TypographyH2>Guided Creation</TypographyH2>
      <TypographyP>
        You can make choices and fill out your character in any order you
        please! But if you&apos;re looking for a structured framework,
        here&apos;s one.
      </TypographyP>

      <TypographyP>
        I recommend glancing over each of the options before making a choice
        since each choice will modify your gameplay experience quite a bit.{" "}
        <b>Archetype</b> is the most character-focused, <b>Background</b> the
        most narrative-focused, and <b>Operative</b> the most mission-focused of
        the options.
      </TypographyP>

      <TypographyP>
        <b>
          <u>Step One</u>
        </b>
      </TypographyP>
      <TypographyP>
        Choose an{" "}
        <Link href="/game/arc-two/character-options/operatives">
          <b className="text-red-500">
            <u>Operative</u>
          </b>
        </Link>
        . <b>Operatives</b> are the role{" "}
        <span className="font-cyber">ROOT</span> has cast your character into.
        They may embrace the role or reject it - that&apos;s up to you. But
        regardless of what your character wants, this is what{" "}
        <span className="font-cyber">ROOT</span> expects of them.{" "}
        <b>Operatives</b> include a <b> codex action</b> and{" "}
        <b>experimental cyberware</b>.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        Your <b>Operative</b> choice grants you a <b>codex action</b> at
        <div className="inline-block ml-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        . Subscription fees will be paid by ROOT.
      </TypographyBlockquote>

      <TypographyP>
        <b>
          <u>Step Two</u>
        </b>
      </TypographyP>
      <TypographyP>
        Choose a{" "}
        <Link href="/game/arc-two/character-options/backgrounds">
          <b className="text-red-500">
            <u>Background</u>
          </b>
        </Link>
        . <b>Backgrounds</b> are who your character <i>was</i> before they
        joined <span className="font-cyber">ROOT</span>. This will be your
        secret backstory which you will get to introduce gradually throughout
        play. <b>Backgrounds</b> include an <b>action</b> (with rare
        exceptions), <b>bonds</b>, <b>rivals</b>, <b>cyberware</b>,{" "}
        <b>sleeve</b>, and other potential special options.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        Your <b>Background</b> choice may grant you one or more{" "}
        <b>ego actions</b> at
        <div className="inline-block ml-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        .
      </TypographyBlockquote>
      <TypographyP>
        Look at the <b>Background&apos;s</b>{" "}
        <b className="font-cyber text-lime-500">Drive</b> and think of why your
        character joined <span className="font-cyber">ROOT</span> in the first
        place. If you would rather the <b>Narrator</b> do this for you,
        that&apos;s fine too. Just let me know.
      </TypographyP>

      <TypographyP>
        <b>
          <u>Step Three</u>
        </b>
      </TypographyP>
      <TypographyP>
        Note the <b className="font-cyber text-sky-500">Bonds</b> and{" "}
        <b className="font-cyber text-stone-500">Rivals</b> granted by your
        chosen <b>Background</b>. For each of these, invent a character which
        fills that role for you. If you would rather the <b>Narrator</b> do this
        for you, that&apos;s fine too. Just let me know.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        When you unlock <b>bonds</b> granted by your <b>Background</b>, they
        start at{" "}
        <div className="inline-block ml-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 "></div>
          </div>
        </div>
        .
      </TypographyBlockquote>

      <TypographyP>
        <b>
          <u>Step Four</u>
        </b>
      </TypographyP>
      <TypographyP>
        Choose an{" "}
        <Link href="/game/arc-two/character-options/archetypes">
          <b className="text-red-500">
            <u>Archetype</u>
          </b>
        </Link>
        . <b>Archetypes</b> are your character&apos;s personality and short
        history since having joined <span className="font-cyber">ROOT</span>.{" "}
        <b>Archetypes</b> include character-building questions, an <b>action</b>
        , <b className="text-amber-500">keystone ability</b>, and more
        unlockable <b>abilities</b>.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        Your <b>Background</b> choice grants you an <b>ego action</b> at
        <div className="inline-block ml-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        .
      </TypographyBlockquote>

      <TypographyP>
        <b>
          <u>Step Five</u>
        </b>
      </TypographyP>
      <TypographyP>
        Fill out the character questions granted by your chosen <b>Archetype</b>
        . These are open-ended intentionally; you can be creative with your
        answers and even create fiction to support them. Keep in mind that the
        Narrator will review your answers to help you stay within the bounds of
        the fiction.
      </TypographyP>

      <TypographyP>
        <b>
          <u>Step Six</u>
        </b>
      </TypographyP>
      <TypographyP>
        In addition to the <b>actions</b> granted by character choices, you may
        choose three additional <b>basic actions</b> and one{" "}
        <b>specialized action</b> as <b>ego actions</b>. Each one starts at{" "}
        <div className="inline-block ml-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
      </TypographyP>

      <TypographyP>
        <b>
          <u>Step Seven</u>
        </b>
      </TypographyP>
      <TypographyP>
        Each other member of your squad is a <b>bond</b> starting at{" "}
        <div className="inline-block ml-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        . Choose two NPC coworkers / staff members at{" "}
        <span className="font-cyber">ROOT</span>. One is a <b>bond</b> (starting
        at{" "}
        <div className="inline-block ml-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        ) and the other is a <b>rival</b>. Feel free to invent why this is!
        Though keep in mind your character has only known them for a few weeks
        now.
      </TypographyP>

      <TypographyP>
        <b>
          <u>Step Eight</u>
        </b>
      </TypographyP>
      <TypographyP>
        You have <b>6 xp clocks</b> to spend on <b>ego actions</b>, <b>bonds</b>
        , and <b>archetype abilities</b>.{" "}
        <i>
          <b>Note:</b> this does not include{" "}
          <b>operative cyberware abilities</b>. You&apos;ve only just completed
          your training!
        </i>
      </TypographyP>
      <TypographyP>
        Refer to{" "}
        <Link href="/game/arc-two/character-options/advancement">
          <b className="text-red-500">
            <u>advancement</u>
          </b>
        </Link>{" "}
        for how many <b>xp clocks</b> each progression costs.
      </TypographyP>

      <TypographyP>
        <b>
          <u>Step Nine</u>
        </b>
      </TypographyP>
      <TypographyP>
        Set your starting <b>¤P</b> and <b>¤F</b> <b>lifestyle clocks</b> to{" "}
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={1} clickable={false} />
        </span>
        . Feel free to reduce your <b>¤P lifestyle clock</b> to{" "}
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={0} clickable={false} />{" "}
        </span>{" "}
        if you wish to spend <b>¤P</b> on additional cyberware.
      </TypographyP>

      <TypographyP>
        <b>
          <u>Step Ten</u>
        </b>
      </TypographyP>
      <TypographyP>
        Now for the hardest part. Name your character. Now you&apos;re ready to
        play!
      </TypographyP>
    </>
  );
}
