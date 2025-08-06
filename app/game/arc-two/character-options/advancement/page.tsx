import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import Clock from "@/components/clock";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { ArrowRight, Repeat } from "lucide-react";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber">Advancement</TypographyH1>
      <TypographyH2 id="actions" className="font-cyber mb-4">
        Actions
      </TypographyH2>
      <TypographyP>
        Actions come in two varieties: <b>Ego Actions</b> and{" "}
        <b>Codex Actions</b>. Each has its own means of advancement.
      </TypographyP>
      <TypographyH3 className="font-cyber">Ego Actions</TypographyH3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <TypographyP>
          These are skills and attributes which are yours. You learned them,
          developed them, remember them no matter the sleeve you&apos;re in.{" "}
          <b>Ego Actions</b> are advanced via the <b>Train</b> action in{" "}
          <b>Mission Prep</b>, which allows you to spend <b>xp clocks</b> to
          upgrade the action&apos;s dice.
        </TypographyP>
        <Card className="flex justify-center items-center">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <span className="text-sm">1 xp clock</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <span className="text-sm">2 xp clocks</span>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-4">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <span className="text-sm">2 xp clocks</span>
            </div>
            <div className="flex items-center gap-2 mt-4 mb-2">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <span className="text-sm">3 xp clocks</span>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-4">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <span className="text-sm">3 xp clocks</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <span className="text-sm">4 xp clocks</span>
            </div>
          </div>
        </Card>
      </div>
      <TypographyH3 className="font-cyber">Codex Actions</TypographyH3>
      <TypographyP>
        These are one form or another of cyberware. This may take the form of a
        coritcal chip, genetic modifications, or other specialized hardware.
        Regardless of its form, <b>Codex Actions</b> may be swapped in and out
        just like any other kind of cyberware.
      </TypographyP>
      <TypographyP>
        Birthsleeves are capable of supporting up to two <b>Codex Actions</b>{" "}
        simultaneously, though depending on your sleeve and cyberware you may be
        capable of supporting more or less.
      </TypographyP>
      <TypographyP>
        <b>Codex Actions</b> have a set quality (
        <span className="font-cyber">q1</span> through{" "}
        <span className="font-cyber">q4</span>) which dictate their dice (
        <div className="inline-block">
          <div className="flex gap-2">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>{" "}
        through{" "}
        <div className="inline-block">
          <div className="flex gap-2">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
          </div>
        </div>
        ). One of your benefits at <span className="font-cyber">Root</span> is
        that they will provide any number of{" "}
        <span className="font-cyber">q1</span> <b>Basic Codex Actions</b> to you
        free of charge. If you want better, you&apos;ll have to subscribe to
        that cyberware.
      </TypographyP>
      <TypographyH4 className="font-cyber">Learning Codex Actions</TypographyH4>
      <TypographyP>
        These codexes were origninally intended to be teaching tools, not full
        replacements. That was a long time ago, but they still make for
        excellent starting points to learn new skills. If you wish, you can
        convert a <b>Codex Action</b> into an <b>Ego Action</b> during the{" "}
        <b>Train</b> activity and spending <b>4 xp clocks</b>. The{" "}
        <b>Ego Action</b> begins at{" "}
        <div className="inline-block">
          <div className="flex gap-2">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>{" "}
        regardless of the quality of the codex.
      </TypographyP>

      <TypographyH2 id="baggage" className="font-cyber mb-4">
        Baggage
      </TypographyH2>
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
        <b>1</b> (<b>-4 max stress</b> at most). At any time, you may contact{" "}
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
      <TypographyH3 className="font-cyber my-4">Types of Baggage</TypographyH3>
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
      <TypographyH3 id="memory-horizon" className="font-cyber">
        Memory Horizon
      </TypographyH3>
      <TypographyP>
        Once a threshold of memories have returned to you (4 pieces of{" "}
        <b>baggage</b>), the floodgates have opened and you remember more and
        more. Reduce your <b>memory clock</b> to a 2-piece clock{" "}
        <span className="inline-flex items-center gap-1">
          <Clock height={20} width={20} max={2} current={0} clickable={false} />
        </span>{" "}
        and remember all of your <b>Archetype Horizon Questions</b> (if your{" "}
        <b>archetype</b> has any).
      </TypographyP>
      <TypographyP>
        Once you&apos;ve unlocked all of your <b>baggage</b>, remove the penalty
        on your <b>max stress</b>.
      </TypographyP>

      <TypographyH2 id="bonds" className="font-cyber mb-4">
        Bonds
      </TypographyH2>
      <TypographyP>
        Bonds represent your character&apos;s connection to another character.
        Whenever a phase or ability prompts you to <b>advance a bond</b>, you
        mark the &quot;advance&quot; marker next to that bond. If you would{" "}
        <b>advance a bond</b> with the &quot;advance&quot; marker already
        checked, clear the marker and increase the bond&apos;s rating by one.
      </TypographyP>
      <TypographyP>
        Whenever you <b>advance a bond</b>, you may optionally spend{" "}
        <b>xp clocks</b> to advance it like you would an <b>Ego Action</b>.
      </TypographyP>
      <TypographyH3 className="font-cyber">Straining Bonds</TypographyH3>
      <TypographyP>
        Whenever you <b>strain a bond</b>, you may decrease its rating by any
        amount (but don&apos;t clear the &quot;advance&quot; marker if it&apos;s
        checked). When you do, gain <b>xp clocks</b> equal to the number it
        would have cost to advance the difference.
      </TypographyP>
      <TypographyH2 className="font-cyber">Abilities</TypographyH2>
      <TypographyP>
        Abilities can be learned during the <b>Train</b> action in the{" "}
        <b>Mission Prep</b> phase. Each type of ability costs a different number
        of <b>xp clocks</b>.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Archetype Abilities</span>:{" "}
        <b>2 xp clocks</b>
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Cyberware Abilities</span>:{" "}
        <b>
          variable<sup className="text-amber-500">*</sup>
        </b>
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Fighting Styles</span>: <b>3 xp clocks</b>.
        When initially unlocked, Fighting Styles grant an action with a{" "}
        <span className="inline-block">
          <span className="flex gap-2 mx-2">
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
          </span>
        </span>{" "}
        rating.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Transformation Abilities</span>:{" "}
        <b>3 xp clocks</b>
      </TypographyP>
      <TypographyBlockquote>
        <sup className="text-amber-500">*</sup> most cyberware doesn&apos;t
        include a skill tree; cyberware granted by operative choice does.
      </TypographyBlockquote>

      <TypographyH2 className="font-cyber" id="wealth-and-lifestyle">
        Wealth & Lifestyle
      </TypographyH2>
      <TypographyP>
        For each of <b>Pelts</b> (<span className="font-cyber">¤P</span>) and{" "}
        <b>Favors</b> (<span className="font-cyber">¤F</span>) you track your
        lifestyle with a 4-piece clock{" "}
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={0} clickable={false} />
        </span>
        . Each tick on the <b>lifestyle clock</b> represents a noticeable
        improvement in your character&apos;s day to day conditions.
      </TypographyP>
      <TypographyH4 className="font-cyber">Pelts (¤P)</TypographyH4>
      <TypographyP>
        Your <span className="font-cyber">¤P</span> <b>lifestyle clock</b> also
        includes a <b>wealth tracker</b>{" "}
        <span className="inline-flex">
          <BuildupCheckboxes max={8} current={0} />
        </span>
        . When the <b>wealth tracker</b> becomes full, you may clear it and tick
        your <b>lifestyle clock</b> by one.
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={0} clickable={false} />
        </span>{" "}
        Destitute. You&apos;re barely keeping up with bills and what little free
        time you have between shifts is spent avoiding debt collectors. Your
        living conditions are one of the shoebox bunks in a residential rack.
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={1} clickable={false} />
        </span>{" "}
        Struggling. The bills are paid but if you slip up for even a few days
        you&apos;ll be back in a bad spot. Your living conditions are a cramped
        pod with your own washroom. You can support{" "}
        <span className="text-emerald-500 font-cyber text-sm">
          <Repeat className="inline text-emerald-500" /> 1 ¤P
        </span>{" "}
        of subscriptions without needing to touch your expendable income.
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={2} clickable={false} />
        </span>{" "}
        Getting By. You can&apos;t complain. As long as you don&apos;t take a
        big financial hit, you should be able to coast. Your living conditions
        are a modest studio flat. You can support{" "}
        <span className="text-emerald-500 font-cyber text-sm">
          <Repeat className="inline text-emerald-500" /> 4 ¤P
        </span>{" "}
        of subscriptions without needing to touch your expendable income, though
        your conditions also permanently require{" "}
        <span className="text-emerald-500 font-cyber text-sm">
          <Repeat className="inline text-emerald-500" /> 1 ¤P
        </span>
        .
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={3} clickable={false} />
        </span>{" "}
        Decent. You don&apos;t have to worry much about <b>Pelts</b>, and you
        can get most basic things you want. Your living conditions are a three
        room apartment with a nice view and minimal pollution. You can support{" "}
        <span className="text-emerald-500 font-cyber text-sm">
          <Repeat className="inline text-emerald-500" /> 6 ¤P
        </span>{" "}
        of subscriptions without needing to touch your expendable income, though
        your conditions also permanently require{" "}
        <span className="text-emerald-500 font-cyber text-sm">
          <Repeat className="inline text-emerald-500" /> 2 ¤P
        </span>
        .
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={4} clickable={false} />
        </span>{" "}
        The Dream. <b>Pelts</b> are never on your mind, and you can spend them
        freely without a worry. Your living conditions are a penthouse suite in
        one of the cheaper neighborhoods. You can support{" "}
        <span className="text-emerald-500 font-cyber text-sm">
          <Repeat className="inline text-emerald-500" /> 10 ¤P
        </span>{" "}
        of subscriptions without needing to touch your expendable income, though
        your conditions also permanently require{" "}
        <span className="text-emerald-500 font-cyber text-sm">
          <Repeat className="inline text-emerald-500" /> 4 ¤P
        </span>
        .
      </TypographyP>
      <TypographyH4 className="font-cyber">Favors (¤F)</TypographyH4>
      <TypographyP>
        Your <span className="font-cyber">¤F</span> <b>lifestyle clock</b> also
        includes a <b>wealth tracker</b>{" "}
        <span className="inline-flex">
          <BuildupCheckboxes max={4} current={0} />
        </span>
        . When the <b>wealth tracker</b> becomes full, you may clear it and tick
        your <b>lifestyle clock</b> by one.
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={0} clickable={false} />
        </span>{" "}
        Hunted. You&apos;re marked as a parasite on <b>Kingwulf&apos;s</b>{" "}
        empire and beasts will actively hunt you for a bounty. When you{" "}
        <b>Take a Breather</b>, mark <b>2 stress</b> or a{" "}
        <b>level two harm: bitten</b>.
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={1} clickable={false} />
        </span>{" "}
        Isolated. You have friends, but you don&apos;t have the{" "}
        <span className="font-cyber">¤F</span> to hang out with them much. Or
        really at all. You miss your family. When you <b>Take a Breather</b>,
        clear <b>2 stress</b>.
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={2} clickable={false} />
        </span>{" "}
        Steady. You can hang out with your friends and family without worrying
        too much. You could even date someone if you wanted. When you{" "}
        <b>Take a Breather</b>, clear <b>4 stress</b>.
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={3} clickable={false} />
        </span>{" "}
        Eligable. You can host large social gatherings and acquire marriage
        permits. You&apos;ll be able to look after a few kids, too. When you{" "}
        <b>Take a Breather</b>, clear <b>all of your stress</b>.
      </TypographyP>
      <TypographyP>
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={4} clickable={false} />
        </span>{" "}
        Distinguished. You get invited to high-life social events. You could
        have multiple families and as many kids as you want. When you{" "}
        <b>Take a Breather</b>, clear <b>all of your stress</b> and clear a{" "}
        <b>condition</b>.
      </TypographyP>
      <div className="mb-8" />
    </>
  );
}
