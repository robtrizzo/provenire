import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Integrations</TypographyH1>
      <TypographyP>
        These options will determine the manner of integration with the memories
        your character experienced in the <i>Crucibles</i>.
      </TypographyP>
      <TypographyH2 className="mt-8">Observation</TypographyH2>
      <TypographyP>
        Your dream was an out-of-body experience. Whoever&apos;s life this was,
        you were there for it all. You saw their mother&apos;s face when they
        were born. You caught rivals rolling eyes behind their back. You sat
        with them when they were low. You watched them die. In the end, you may
        know them better than they knew themselves.
      </TypographyP>
      <TypographyH4>Abilities & Skills</TypographyH4>
      <TypographyP>
        Though you didn&apos;t do it yourself, you were right there as the other
        psyche learned everything. With effort, you can teach yourself what they
        could do. You may spend <b>xp</b> to unlock or advance crucible{" "}
        <b>abilities</b> and <b>skills</b> as you would any other.
      </TypographyP>
      <TypographyBlockquote>
        You do <b>not</b> have access to crucible <b>Donums</b>.
      </TypographyBlockquote>
      <TypographyH4>Histories</TypographyH4>
      <TypographyP>
        You begin with all crucible <b>Histories</b> unlocked.
      </TypographyP>
      <TypographyH2 className="mt-8">Exploitation</TypographyH2>
      <TypographyP>
        Like some dreams go, you don&apos;t remember yours. But you do remember
        one thing: it&apos;s important that you don&apos;t let <i>them</i> out.
        They scream and curse and pound on the prison you&apos;ve constructed
        for them. All of their experiences and potential are sealed with them.
        Perhaps a few gaps in the cage would let you harness just enough of
        it...
      </TypographyP>
      <TypographyH4>Abilities & Skills</TypographyH4>
      <TypographyP>
        You can forcibly pull experiences from the other psyche when you need
        them, but it requires slackening their restraints. While you have{" "}
        <i>the upper hand</i>, you have access to all crucible skills and
        abilities. To use them for a scene, make a <b>condition roll</b>,
        representing the other psyche trying to escape. On a full success, they{" "}
        <i>gain the upper hand</i>. On a partial success, you may pay{" "}
        <b>stress</b> equal to the <b>threats</b> rolled to prevent them from
        taking <i>the upper hand</i>.
      </TypographyP>
      <TypographyBlockquote>
        A <b>condition roll</b> is a <b>fortune roll</b> with dice equal to the
        number of conditions you have marked.
      </TypographyBlockquote>
      <TypographyH4>Histories</TypographyH4>
      <TypographyBlockquote>
        You do not have access to crucible <b>Histories</b>
      </TypographyBlockquote>
      <TypographyH4>Special</TypographyH4>
      <TypographyBlockquote>
        <b>The upper hand</b> indicates who is in control and who is imprisoned.
        Be prepared to roleplay as the other psyche if/when they gain{" "}
        <b>the upper hand</b>.
      </TypographyBlockquote>
      <TypographyP>
        If you mark your final <b>condition</b> or your final <b>harm slot</b>,
        the other psyche escapes its cage and acts freely. Once they clear a{" "}
        <b>condition</b> or <b>harm</b> you regain conciousness, but the other
        psyche has the upper hand.
      </TypographyP>
      <TypographyH2 className="mt-8">Cooperation</TypographyH2>
      <TypographyP>
        When you wake up, you&apos;re not alone in your mind.{" "}
        <i>They&apos;re</i> here too, though more of a passenger in your life.{" "}
        <i>They</i> still have their wants and dreams, but they respect that you
        also have your own. Together you&apos;ll find a way to navigate the life
        you share.
      </TypographyP>
      <TypographyH4>Abilities & Skills</TypographyH4>
      <TypographyP>
        Each time you level up your <b>bond</b> with the other psyche, you may
        choose a crucible <b>ability</b> or <b>skill</b> which they become
        willing to teach you. Unlocking and avancing crucible <b>abilities</b>{" "}
        and <b>skills</b> costs <b>1 xp clock</b> less.
      </TypographyP>
      <TypographyBlockquote>
        You do <b>not</b> have access to crucible <b>Donums</b>.
      </TypographyBlockquote>
      <TypographyH4>Bonds</TypographyH4>
      <TypographyP>
        You gain a{" "}
        <b>
          <code>level 0</code> bond
        </b>{" "}
        with the other psyche. You can spend <b>1 stress</b> to add this{" "}
        <b>bond</b> to a roll.
      </TypographyP>
      <TypographyH4>Histories</TypographyH4>
      <TypographyP>
        You can always ask the other psyche about their life and the world they
        knew. Their answers will be colored by their memory, biases,
        perspectives, and agendas.
      </TypographyP>
      <TypographyH4>Special</TypographyH4>
      <TypographyP>
        If the other psyche feels that you&apos;ve completely disrespected them,
        your relationship may become <b>Opposition</b>.
      </TypographyP>
      <TypographyH2 className="mt-8">Suppression</TypographyH2>
      <TypographyP>
        Nothing has changed. Maybe the machine didn&apos;t work on you. Life
        goes on; that is, until a sudden recollection comes over you. A
        flashback of a moment or years play out in a heartbeat. You lived those
        experiences just as certainly as you&apos;re living right now. And you
        wouldn&apos;t be human if they didn&apos;t change you.
      </TypographyP>
      <TypographyH4>Abilities, Skills, & Histories</TypographyH4>
      <TypographyP>
        You begin with no access to any crucible options. You gain a five-piece{" "}
        <b>Trauma clock</b>. Whenever you mark a <b>condition</b> or{" "}
        <b>level 3+ harm</b>, tick the <b>Trauma clock</b>. When it becomes
        full, you may select a crucible option and reset the clock.
      </TypographyP>
      <TypographyH4>Special</TypographyH4>
      <TypographyP>
        During a <b>Desperate Position</b> you may choose to have an intense
        flashback when you take an action. This counts as critically failing,
        but ticks the <b>Trauma clock</b> by <b>5</b>.
      </TypographyP>
      <TypographyH2 className="mt-8">Opposition</TypographyH2>
      <TypographyP>
        In your dream you experienced birth, childhood, love, life, strife, and
        death. The only separation between you and them was that you remember
        your old life. Over the years, that gap grew. You (<i>they</i>) would
        look in the mirror and know something was wrong. You (<i>them</i>) would
        feel watched. And you (<i>they</i>) would grow to hate the watcher,
        whoever that is. When you (<i>they</i>) wake up, you find yourselves
        sharing a body and mind with a rival.
      </TypographyP>
      <TypographyH4>Abilities & Skills</TypographyH4>
      <TypographyP>
        You have access to all crucible skills and abilities. The catch is that
        in order to use any of them, it must be with the permission of the other
        psyche. They will demand concessions, favors, or outright
        self-destructive tasks in return. If not placated, they may deny you
        entirely.
      </TypographyP>
      <TypographyH4>Histories</TypographyH4>
      <TypographyP>
        You experienced their life just as sure as your own. All of that
        information is difficult to process though. You can spend time
        intentionally dreaming and remoniscing about it to unlock it. To do so,
        spend <b>3 xp clocks</b> during the <b>Train</b> downtime activity.
      </TypographyP>
      <TypographyH4>Special</TypographyH4>
      <TypographyP>
        If you end up befriending the other psyche, your relationship can become{" "}
        <b>Cooperative</b>. Alternatively if you mentally overpower them, you
        can change the relationship to <b>Exploitation</b>. Vice-versa, if the
        psyche mentally overpowers <i>you</i>, the relationship becomes{" "}
        <b>Exploitation</b> but they begin with the upper hand.
      </TypographyP>
      <TypographyH2 className="mt-8">Synthesis</TypographyH2>
      <TypographyP>
        You experienced another lifetime, and with no recollection of your own.
        Waking up doesn&apos;t feel like coming to your senses, it feels like
        being in someone else&apos;s skin. You know who they were. You are who
        they were, but somehow still yourself. Or both? Neither? Someone new.
      </TypographyP>
      <TypographyH4>Abilities</TypographyH4>
      <TypographyP>
        There is no difference between you and them; but the union is
        uncomfortable and you lose clarity in your memories. You lose half of
        your abilities, though you gain <b>xp clocks</b> to make up the
        difference. Those <b>xp clocks</b> can only be spent on crucible
        abilities.
      </TypographyP>
      <TypographyP>
        You may unlock further crucible abilities with <b>xp clocks</b>.
      </TypographyP>
      <TypographyH4>Bonds</TypographyH4>
      <TypographyP>
        It&apos;s difficult for you to relate to the people here and now, if you
        remember them at all. You become alienated from your bonds. Reset all
        bonds to{" "}
        <b>
          <code>level 0</code>
        </b>
        . You gain a number of <b>xp clocks</b> to make up the difference.
      </TypographyP>
      <TypographyH4>Histories</TypographyH4>
      <TypographyP>
        The memories are hazy and mixed up between both of your lives. It takes
        time for your mind sort through them. You gain a three-piece{" "}
        <b>Clarity clock</b>. Whenever <b>Time Passes</b>, tick the{" "}
        <b>Clarity clock</b>. When it becomes full, select a <b>History</b> from
        your crucible and reset the clock.
      </TypographyP>
      <TypographyH4>Skills</TypographyH4>
      <TypographyP>
        You start with two pools of <b>xp clocks</b> to spend on <b>skills</b>.
        One pool can only be spent on what your character would have; the other
        can only be spent on what the crucible character would have.
      </TypographyP>
      <TypographyP>
        You may unlock further crucible skills with <b>xp clocks</b>
      </TypographyP>

      <div className="mt-8" />
    </>
  );
}
