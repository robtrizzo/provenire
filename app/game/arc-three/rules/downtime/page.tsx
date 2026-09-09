import { InlineSymbol } from "@/components/dice/dice-borders";
import {
  Advantage,
  Theta,
  ThetaDouble,
  ThetaTriple,
  Threat,
} from "@/components/dice/dice-symbols";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mb-8">
      <Breadcrumbs />
      <TypographyH1>Downtime</TypographyH1>
      <TypographyH2>Comfort</TypographyH2>
      <TypographyP>
        When you comfort someone you might be a shoulder to cry on, a listening
        ear, or a source of tough love. Approach a character who is actively
        about to <b>clear a condition</b> by <b>doing something shitty</b> and{" "}
        <b>paying a price</b>.
      </TypographyP>
      <TypographyBlockquote>
        Make an <b>action roll</b> representing how your character helps them
        through this difficult moment.
      </TypographyBlockquote>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-end gap-2">
            <InlineSymbol size={40}>
              <Theta />
            </InlineSymbol>
            <span className="mb-2">one additional pick</span>
          </div>
          <div className="flex items-end gap-2">
            <InlineSymbol size={40}>
              <ThetaDouble />
            </InlineSymbol>
            <span className="mb-2">two additional picks</span>
          </div>
          <div className="flex items-end gap-2">
            <InlineSymbol size={40}>
              <ThetaTriple />
            </InlineSymbol>
            <span className="mb-2">three additional picks</span>
          </div>
        </div>
        <div>
          <TypographyP>Pick one or more:</TypographyP>
          <TypographyUnorderedList>
            <li>
              they don&apos;t have to <b>do something shitty</b>
            </li>
            <li>
              they don&apos;t have to <b>pay a price</b>
            </li>
            <li>
              you may both <b>advance your bond</b>
            </li>
            <li>
              you may both gain{" "}
              <InlineSymbol size={24}>
                <Advantage />
              </InlineSymbol>
            </li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , <b>resist</b> or <b>strain your bond</b> with them.
          </TypographyP>
        </div>
      </div>
      <TypographyH2>Consort</TypographyH2>
      <TypographyP>
        When you consort, you choose any character (PC or NPC) to spend time
        with. You can build on your relationship, have a crucial confrontation,
        or just chat. Set the scene, then play to find out what happens. When
        you consort, you may choose to <b>advance your bond</b> with any one
        character in the scene.
      </TypographyP>
      <TypographyH2>Gather Information</TypographyH2>
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
      <TypographyH2>Heal</TypographyH2>
      <div className="mt-2">
        <TypographyP className="mb-1">
          When you recover in a safe location, you seek treatment and heal your
          harm. You gain <b>4 ticks</b> on your <b>healing clock</b>. When you
          fill your <b>healing clock</b>, reduce each instance of harm on your
          sheet by one level, then clear the clock. If you have more ticks to
          mark, they &quot;roll over.&quot;
        </TypographyP>
        <span className="text-muted-foreground font-serif">
          or if you engage the services of a Mediciner you&apos;re familiar
          with,
        </span>
        <TypographyP>
          Receive as good a treatment as you can in the Steel Trap. Remove one
          instance of harm from your sheet. Pay them <b>3 food/materials</b>.
        </TypographyP>
      </div>
      <TypographyBlockquote>
        Some harm can&apos;t be healed by normal means. Examples incude
        &quot;hungry&quot; and &quot;tired&quot;. These can have their levels
        reduced by recovery, but require specific actions to heal entirely.
      </TypographyBlockquote>
      <TypographyH2>Project</TypographyH2>
      <div className="mt-2">
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
          <Link href="#">
            <span className="text-red-500 underline">project roll</span>
          </Link>{" "}
          as normal.
        </TypographyP>
      </div>
      <TypographyH2>Shift Blame</TypographyH2>
      <TypographyP>
        When you shift blame, you&apos;re trying to reduce the crew&apos;s heat
        generated in missions. You might be spreading rumors, bribing officials,
        or framing someone else for your crimes. Decrease the crew&apos;s{" "}
        <b>Heat</b> by the <b>Escalation Level</b>.
      </TypographyP>
      <TypographyBlockquote>
        Whatever your approach, you need a scapegoat. Name them and make an{" "}
        <b>action roll</b>.
      </TypographyBlockquote>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-end gap-2">
            <InlineSymbol size={40}>
              <Theta />
            </InlineSymbol>
            <span className="mb-2">pick one</span>
          </div>
          <div className="flex items-end gap-2">
            <InlineSymbol size={40}>
              <ThetaDouble />
            </InlineSymbol>
            <span className="mb-2">pick two</span>
          </div>
          <div className="flex items-end gap-2">
            <InlineSymbol size={40}>
              <ThetaTriple />
            </InlineSymbol>
            <span className="mb-2">pick three</span>
          </div>
        </div>
        <div>
          <TypographyP>On a success, pick one or more:</TypographyP>
          <TypographyUnorderedList>
            <li>they had it coming anyway</li>
            <li>
              their arrest won&apos;t cause backlash in the <b>Faction Game</b>
            </li>
            <li>
              decrease <b>Heat</b> by an additional <b>1</b>
            </li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , <b>resist</b> or they know who scapegoated them.
          </TypographyP>
        </div>
      </div>
      <TypographyH2>Train</TypographyH2>
      <TypographyP>
        When you spend time training, <b>spend xp</b> to get an advance for your
        character. Describe the training montage with an appropriate instructor
        or mentor. You can choose this activity to act as an <b>instructor</b>{" "}
        in an area of your expertise. When you&apos;re an instructor, you may{" "}
        <b>spend xp</b> to advance.
      </TypographyP>
      <TypographyBlockquote>
        What&apos;s your relationship with you trainer/trainee? Has it changed?
        What&apos;s the most challenging or valuable part of your training
        session?
      </TypographyBlockquote>
    </div>
  );
}
