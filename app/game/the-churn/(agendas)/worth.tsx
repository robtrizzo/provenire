import {
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyOrderedList,
} from "@/components/ui/typography";
import Link from "next/link";

export default function Worth() {
  return (
    <>
      <TypographyH3>Make the pain worth it</TypographyH3>
      <TypographyP>
        During The Churn, the crew is consorting with community leaders and crew
        contacts to help protect themselves from notice... or <i>rats</i>. They
        can spend <b>goodwill</b> to upgrade the crew&apos;s security and
        increase the quality of living conditions in the community.
      </TypographyP>
      <TypographyP>
        First, the crew picks a project to pursue. They make a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        and once the clock is filled, the project is ready. The crew can
        complete a project by spending <b>1 goodwill</b>. Once completed, the
        project is applied to the crew. Many projects have prerequisites that
        must be completed before they can be selected. Each time a project is
        completed, <b>raise the stakes</b>.
      </TypographyP>
      <TypographyH4>Projects</TypographyH4>
      <TypographyP>
        <b>Living Space (3)</b>
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Rooms</b>: Crew clears the permanent <b>1 harm</b>{" "}
          &quot;tired&quot; from their sheet.
        </li>
        <li>
          <b>Locked doors</b>: Crew is no longer vulnerable while resting
        </li>
        <li>
          <b>Beds</b>: Crew reduces <b>1 stress</b> each downtime
        </li>
        <li>
          <b>Poultices</b>: gain <b>4 ticks</b> on your healing clock when you
          <b>recover</b>
        </li>
      </TypographyOrderedList>
      <TypographyP>
        <b>Security (5)</b>
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Stash</b>: 2 slots each for <b>food</b> and <b>materials</b>
        </li>
        <li>
          <b>Stoker Contact</b>: <b>+1d</b> to reduce <b>heat</b> after killing
        </li>
        <li>
          <b>Large Stash</b>: 4 slots each for <b>food</b> and <b>materials</b>
        </li>
        <li>
          <b>Lookouts</b>: <b>-2 heat</b> per mission
        </li>
      </TypographyOrderedList>
      <TypographyP>
        <b>Lair (7)</b>
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Training Room</b>: The crew gains an xp trigger: *You put your
          instructors&apos; lessons into practice*.
        </li>
        <li>
          <b>Holding Chamber</b>: secure place to hold one prisoner.
        </li>
        <li>
          <b>Meeting Room</b>: creates a repeating 5-clock &quot;outisde
          contact&quot; representing new factions reaching out to the crew.
        </li>
        <li>
          <b>Common Room</b>: group rolls during downtime can treat multiple 6s
          as a critical.
        </li>
      </TypographyOrderedList>
      <TypographyP>
        <b>Community (5)</b>
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Meetings</b>: <b>+1d</b> to persuade or consort while in the
          community.
        </li>
        <li>
          <b>Pooled Resources</b>: Starvation clocks are 1 larger
        </li>
        <li>
          <b>Giving Back</b>: Members of the community perform a downtime action
          for the crew.
        </li>
        <li>
          <b>United Front</b>: <b>+1 max stress</b>
        </li>
      </TypographyOrderedList>
    </>
  );
}
