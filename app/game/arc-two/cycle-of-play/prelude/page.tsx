import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { GitGraph } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Prelude</TypographyH1>
      <TypographyH2>Free Play</TypographyH2>
      <TypographyH2>Sitrep</TypographyH2>
      <TypographyH2>Mission Prep</TypographyH2>
      <TypographyH3>Consort</TypographyH3>
      <TypographyP>
        When you consort, you choose any character (PC or NPC) to spend time
        with. You can build on your relationship, have a crucial confrontation,
        or just chat. Set the scene, then play to find out what happens. When
        you consort, you may choose to <b>advance your bond</b> with any one
        character in the scene.
      </TypographyP>
      <TypographyH3>Gather Information</TypographyH3>
      <TypographyP>
        Seek out information that isn&apos;t trivial to come by. Explain your
        approach to exploring the topic, then the <b>Narrator</b> will set
        position and effect. After this, make an <b>action roll</b>.
        Consequences may be <b>resisted</b> as normal.
      </TypographyP>
      <TypographyP>
        Some information is too obscure or has too complex a barrier to answer
        with one <b>gather information</b> activity. These pieces of information
        should be pursued as a <b>project</b>.
      </TypographyP>
      <TypographyH3>Go Under the Knife</TypographyH3>
      <TypographyP>
        One of the biggest benefits of working for{" "}
        <span className="font-cyber">Root</span> is the in-house ripperdoc, who
        you can make use of free of charge.
      </TypographyP>
      <TypographyP>
        First, choose if you wish to resleeve. This may be to or from your
        biosleeve, one of <span className="font-cyber">Root&apos;s</span> spare
        sleeves, or one you&apos;ve bought with your own <b>¤P</b>. When you
        relseeve, your cyberware is transferred alongside your psyche. Even for
        experienced operatives, resleeving is psychologically arduous: make a{" "}
        <b>resistance roll</b> unless you&apos;re entering your birthsleeve.
      </TypographyP>
      <TypographyP>
        Next, choose if you want any new cyberware installed. Some cyberware
        fundamentally changes the way your body or mind works (marked with{" "}
        <GitGraph className="inline-block text-pink-500" />
        ). Even for experienced operatives, waking up to these changes can be
        psychologically arduous: make a <b>resistance roll</b>.
      </TypographyP>
      <TypographyP>
        Lastly, the ripperdoc repairs any damage to your sleeve: clear all of
        your <b>harms</b>.
      </TypographyP>
      <TypographyH3>Project</TypographyH3>
      <div>
        <TypographyP>
          Accomplish a <b>simple project</b>.
        </TypographyP>
        <span className="text-muted-foreground font-serif">or</span>
        <TypographyP>
          Work on a <b>long term project</b> not encompassed by the other
          agendas or downtime activities. This can cover a wide range of
          activities like puzzling out a mystery, gaining someone&apos;s trust,
          or building a unique item. Based on the goal of the project, the GM
          will tell you the clock(s) to create and suggest a method by which you
          might make progress. To advance a <b>long term project</b>, make a{" "}
          <Link href="/game/arc-two/rules/actions-and-rolls#project-rolls">
            <span className="text-red-500 underline">project roll</span>
          </Link>{" "}
          as normal.
        </TypographyP>
      </div>
      <TypographyH3>Psyche Massage</TypographyH3>
      <TypographyP>
        <span className="font-cyber">Root</span> is well aware of the mental
        toll the operatives&apos; work can take on them. To mitigate psychic
        breakdowns, <span className="font-cyber">Root</span> provides a full
        psyche massage suite and expert psychologists, free of charge.
      </TypographyP>
      <TypographyP>
        First, the operative&apos;s psyche is extraced from their sleeve and
        massaged by proprietary{" "}
        <span className="font-cyber">Ambrosia Medical</span> neuron spools. This
        is to put the mind in a state of <i>neuroplasticity</i> - making it
        susceptible to changes.
      </TypographyP>
      <TypographyP>
        Once an operative&apos;s psyche is <i>neuroplastic</i>, they may choose
        to swap <b>Action Codexes</b> and/or reorganize their <b>action grid</b>
        .
      </TypographyP>
      <TypographyP>
        Next, if the operative wishes to relieve some of the strain on their
        mind they may opt into plastic therapy. Plastic therapy is a process of
        sifting through memories exposed by the neuron spools, interrogating
        core impulses, and shelving memories which are disruptive to the
        operative&apos;s mission-readiness. Where technically anyone can perform
        the therapy, <span className="font-cyber">Ambrosia Medical</span> urges
        you only allow licensed professionals to do so.
      </TypographyP>
      <TypographyP>
        If you receive plastic therapy from{" "}
        <span className="font-cyber">Root&apos;s</span> in house therapist,{" "}
        <b>clear a condition</b> and reduce your <b>memory clock</b> by two
        ticks.
      </TypographyP>
      <TypographyP>
        If you elect for a crewmate to perform the therapy, they make an action
        roll. Their results allow them to choose one or more from the following:
      </TypographyP>
      <Card className="grid grid-cols-1 md:grid-cols-2 p-2 mt-2">
        <div>
          <span className="font-cyber">Plastic Therapy Action Roll</span>
          <div className="ml-4 mt-0">
            <span>
              <b>1-3</b>: leave them dazed and disoriented, they mark{" "}
              <b>2 stress</b>
              <br />
              <b>4,5</b>: choose 1
              <br />
              <b>6</b>: choose 2
              <br />
              <b>Crit</b>: choose 3
            </span>
          </div>
        </div>
        <div>
          <span className="font-cyber">Plastic Therapy Options</span>
          <div className="ml-4 mt-0">
            <span>
              clear 2 <b>stress</b>
              <br />
              clear a <b>condition</b>
              <br />
              tick the <b>memory clock</b>
              <br />
              tamper with a <b>bond</b>
            </span>
          </div>
        </div>
      </Card>
      <TypographyH3>Train</TypographyH3>
      <TypographyP>
        When you spend time training, <b>spend xp</b> to get an advance for your
        character. Describe the training montage with an appropriate instructor
        or mentor. You can choose this activity to act as an <b>instructor</b>{" "}
        in an area of your expertise. When you&apos;re an instructor, you may{" "}
        also <b>spend xp</b> to advance.
      </TypographyP>
      <TypographyBlockquote>
        What&apos;s your relationship with you trainer? Has it changed?
        What&apos;s the most challenging or valuable part of your training
        session?
      </TypographyBlockquote>
      <TypographyH3>Work</TypographyH3>
      <TypographyP>
        When you spend extra time working for Cytech, make an <b>action roll</b>
        :
      </TypographyP>
      <div className="ml-4">
        <TypographyP>
          <b>1-3</b>: your poor performance earns you nothing
          <br />
          <b>4,5</b>: earn <b>1 ¤P</b>
          <br />
          <b>6</b>: earn <b>2 ¤P</b>
          <br />
          <b>Crit</b>: impress everyone, earn <b>2 ¤P</b> and <b>1 ¤F</b>
        </TypographyP>
      </div>
      <TypographyH2>Engagement Roll</TypographyH2>
      <TypographyH3>Approach</TypographyH3>
    </>
  );
}
