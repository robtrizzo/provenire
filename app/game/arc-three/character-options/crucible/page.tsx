import Clock from "@/components/clock";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Crucible</TypographyH1>
      <TypographyP>
        Memories, stories, dreams - your character's mind has had a lifetime
        poured into it. Reservoirs of power and knowledge which set the
        rebelion's "leaders" at each others' throats. It's your power now,
        though it comes with its own opinions on how it should be used.
      </TypographyP>
      <TypographyH2>Advancement</TypographyH2>
      <TypographyP>
        Your remembrance's abilities can be unlocked via <b>xp clocks</b> as any
        other abilities can be. The manner which your character accesses and
        learns these abilities is up to you: you can use your integration for
        inspiration or come up with whichever way suits you.
      </TypographyP>
      <TypographyP>
        Intense experiences can also accelerate this process. Each character
        keeps track of a{" "}
        <div className="inline-block mx-1">
          <Clock clickable={false} max={6} current={0} height={24} width={24} />
        </div>{" "}
        <b>trauma clock</b>. When your character marks a <b>condition</b> or a{" "}
        <b>level 3 harm</b>, tick the <b>trauma clock</b>. When it is full, you
        unlock a <b>surge</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>Surge</b>: gain <b>3 defiance dice</b> and access to all of your
        remembrance's powers for a scene. When the scene ends, unlock one
        ability permanently and clear the <b>trauma clock</b>.
      </TypographyBlockquote>
      <TypographyH2>Bond</TypographyH2>
      <TypographyP>
        Create a <b>bond</b> for your remembrance; it starts at{" "}
        <b>
          <code>level 1</code>
        </b>
        . The lower the <b>bond</b>, the more likely your crucible is to work
        against you, or even sabotage your efforts. You may invest{" "}
        <b>xp clocks</b> into the <b>bond</b> or increase it via the{" "}
        <b>consort downtime action</b> as you can for other <b>bonds</b>. At the
        end of each mission, if you acted against your remembrance's wishes, you
        will <b>strain your bond</b>.
      </TypographyP>
      <TypographyH2>Integrations</TypographyH2>
      <TypographyP>
        These options will determine the manner which your character experienced
        the remembrance's memories in the <i>Crucibles</i>. You can mix, match
        or come up with one of your own if you choose.
      </TypographyP>
      <TypographyH3 className="mt-8" id="Observation">
        Observation
      </TypographyH3>
      <TypographyP>
        Your dream was an out-of-body experience. Whoever&apos;s life this was,
        you were there for it all. You saw their mother&apos;s face when they
        were born. You caught rivals rolling eyes behind their back. You sat
        with them when they were low. You watched them die. In the end, you may
        know them better than they knew themselves.
      </TypographyP>
      <TypographyH3 className="mt-8" id="Exploitation">
        Exploitation
      </TypographyH3>
      <TypographyP>
        Like some dreams go, you don&apos;t remember yours. But you do remember
        one thing: it&apos;s important that you don&apos;t let <i>them</i> out.
        They scream and curse and pound on the prison you&apos;ve constructed
        for them. All of their experiences and potential are sealed with them.
        Perhaps a few gaps in the cage would let you harness just enough of
        it...
      </TypographyP>
      <TypographyH3 className="mt-8" id="Cooperation">
        Cooperation
      </TypographyH3>
      <TypographyP>
        When you wake up, you&apos;re not alone in your mind.{" "}
        <i>They&apos;re</i> here too, though more of a passenger in your life.{" "}
        <i className="mr-1">They</i> still have their wants and dreams, but they
        respect that you also have your own. Together you&apos;ll find a way to
        navigate the life you share.
      </TypographyP>
      <TypographyH3 className="mt-8" id="Suppression">
        Suppression
      </TypographyH3>
      <TypographyP>
        Nothing has changed. Maybe the machine didn&apos;t work on you. Life
        goes on; that is, until a sudden recollection comes over you. A
        flashback of a moment or years play out in a heartbeat. You lived those
        experiences just as certainly as you&apos;re living right now. And you
        wouldn&apos;t be human if they didn&apos;t change you.
      </TypographyP>
      <TypographyH3 className="mt-8" id="Opposition">
        Opposition
      </TypographyH3>
      <TypographyP>
        In your dream you experienced birth, childhood, love, life, strife, and
        death. The only separation between you and them was that you remember
        your old life. Over the years, that gap grew. You (<i>they</i>) would
        look in the mirror and know something was wrong. You (<i>them</i>) would
        feel watched. And you (<i>they</i>) would grow to hate the watcher,
        whoever that is. When you (<i>they</i>) wake up, you find yourselves
        sharing a body and mind with a rival.
      </TypographyP>
      <TypographyH3 className="mt-8" id="Synthesis">
        Synthesis
      </TypographyH3>
      <TypographyP>
        You experienced another lifetime, and with no recollection of your own.
        Waking up doesn&apos;t feel like coming to your senses, it feels like
        being in someone else&apos;s skin. You know who they were. You are who
        they were, but somehow still yourself. Or both? Neither? Someone new.
      </TypographyP>

      <div className="mt-8" />
    </>
  );
}
