import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Time Passes</TypographyH1>
      <TypographyP>
        During missions, characters are in the thick of it, fighting against the
        system and the overseers who shape it. But what about the time in
        between? The daily struggle, the grind. The treacherous routine of life
        in the Steel Trap. During this time, the crew can't murder their way out
        of all of their problems. They have to rely on the people around them.
      </TypographyP>
      <TypographyH2>Entanglements</TypographyH2>
      <TypographyP>
        Your crew didn't just spring into existence overnight. You have a
        complex history of favors, commitments, debts, and promises that got you
        where you are today. To reflect this, after each mission you roll dice
        to find out which <b>entanglement</b> comes calling. An{" "}
        <b>entanglement</b> might be a rival, opposing faction, an enforcer,
        overseer, or even the strange workings of the Steel Trap's machinery.
      </TypographyP>
      <TypographyP>
        The <b>Narrator</b> rolls in secret. They may choose to introduce the
        entanglement immediately , or they may bide their time for a dramatic
        moment <i>before the next mission</i>. The <b>entanglement</b> manifests
        fully before the crew have a chance to avoid it - it cannot be{" "}
        <b>resisted</b>. The players may choose to make it a quick resolution or
        to dive deep into the scene.
      </TypographyP>
      <TypographyH2>The Faction Game</TypographyH2>
      <TypographyP>
        The crew is one of many factions within Fabrication vying for influence
        and power. Each one has their own agendas and will be working diligently
        to complete them. This will manifest in the form of factions advancing
        each of their clocks by <b>1 tick</b> for each <b>downtime</b> since the
        previous <b>time passes</b>. When clocks complete, the <b>Narrator</b>{" "}
        will announce it to the crew and the results of that clock happen; it
        cannot be <b>resisted</b>.
      </TypographyP>
      <TypographyP>
        The faction game isn't all about other factions. The crew must also
        contend with the positions of influence and leadership they have over
        Fabrication or other factions they have become prominent in. Whenever{" "}
        <b>time passes</b>, each member of the crew will be told the resources
        they have access to and will be given the chance to advance crew and
        faction projects.
      </TypographyP>
      <TypographyBlockquote>
        Each character has an <b>event deck</b>. Whenever <b>time passes</b>,
        the <b>Narrator</b> will pick a few characters' decks to pull from.
        Events can be anything from a worker in distress to a crucial decision
        that will determine <b>how things are done</b> going forward...
      </TypographyBlockquote>
      <TypographyH2>Subsistence</TypographyH2>
      <TypographyP>
        Not everyone who lives in the factory works. Many are too young, too
        old, or not cut out for the brutality of the factory floor. These people
        rely on the labor of their family members to survive. Your character
        works not only to feed themselves, but to feed their loved ones, and
        perhaps their communities as well.
      </TypographyP>
      <TypographyH2>Fabrication's Council</TypographyH2>
      <TypographyP>
        <b>Frida the Cruel</b> is dead. None have risen to take her place, nor
        has <b>THE MASTER</b> sent a new overlord to oversee this mutinous
        sector of the factory. In the vacuum of power, leaders and influential
        members of Fabrication have assembled a Council to debate and determine
        Fabrication's future. Each of the remaining overseers are scheming for
        control, but while they plot against one another, they show face at the
        grand council, lest be seen as weak.
      </TypographyP>
      <TypographyP>
        The Council assembles from time to time. Issues will be debated, chests
        will be puffed, dicks will be measured, and votes will be cast. The
        results of these Council sessions will either steer Fabrication towards
        a future of liberation or plunge it into a bedlam of infighting.
      </TypographyP>
      <TypographyP>
        The crew's enemies are counting on the latter. There will be all degrees
        of bad actors, sabatours, and exploitative tyrants seeking to cynically
        leverage the Council to their own ends.
      </TypographyP>
      <TypographyBlockquote>
        Council sessions will often be handled asynchronously between sessions
        of play. When it is more interesting to play them out, we will. Often,
        what will be more interesting than the debates will be what the crew
        does beforehand to ensure the vote goes the right way.
      </TypographyBlockquote>
    </>
  );
}
