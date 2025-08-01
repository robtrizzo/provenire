import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import OpPortrait from "../(components)/operative-portrait";
import ClockCost from "../(components)/clock-cost";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          {
            name: "Character Creation",
            href: "/game/arc-two/character-options",
          },
          {
            name: "Operatives",
            href: "/game/arc-two/character-options/operatives",
          },
          { name: "Watchtower", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Watchtower</TypographyH1>
          <span className="text-sm text-muted-foreground font-cyber">
            Steady, protective, rarely ever surprised.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Assess</b> Think before
            acting. Catalog the possible advantages and consequences of a course
            of action.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Sentry Advanced Surveillance Swarm &quot;Watchdogs&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Watchtower</span> is something of a
            special role in <span className="font-cyber">Root</span>. They
            aren&apos;t expected to engage in combat and capture exciting
            moments; <span className="font-cyber">Watchtower&apos;s</span> job
            is to keep the team appraised of the situation and to be a line of
            communication back to{" "}
            <span className="font-cyber">Root&apos;s</span> misison control.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Watchtower"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Close the loop. Tie up loose ends.</li>
        <li>Drop a bombshell reveal about one of your teammates</li>
        <li>
          Make sure good &quot;stunt partners&quot; don&apos;t die too soon
        </li>
        <li>Withold critical information from a teammate</li>
        <li>Tag in for a teammate who&apos;s been taken out of the action</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Advanced Surveilance Swarm &quot;Watchdogs&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Sentry</span>
        <span>|</span>
        <span className="text-red-500">Crystech, Electrotech, Nettech</span>
      </div>
      <TypographyP>
        Top of the line tech born from an experimental collaboration between{" "}
        <span className="font-cyber">Sentry</span> and{" "}
        <span className="font-cyber">Cytech</span>. What were once
        seek-and-destroy drones have been retrofitted with the latest and
        greatest 3D camera technology. A short history of these drones gone
        haywire has kept them off the commercial market for the time being.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Root</span> has even considered
        decommisioning the{" "}
        <span className="font-cyber">&quot;Watchdogs&quot;</span> project but{" "}
        <b>Felicity</b>, <span className="font-cyber">Root&apos;s</span> media
        coordinator, has insisted that the footage they get is just{" "}
        <i>too good</i>. Besides. <span className="font-cyber">Watchtower</span>{" "}
        and the <span className="font-cyber">&quot;Watchdogs&quot;</span>{" "}
        project are tied at the hip. So it&apos;s on you to make them look good.
        And don&apos;t say shit if they act up.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Saw it Coming</TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        The <span className="font-cyber">&quot;Watchdogs&quot;</span> are a
        potent surveilance tool, but it can also be incredibly overwhelming to
        the senses. The neural implant that enables piloting the drones also
        streams all of their data back to your brain and reconstructs a real
        time 3D image of the surrounding area. This makes{" "}
        <span className="font-cyber">Watchtower</span> incredibly capable of
        spotting incoming threats.
      </TypographyP>
      <TypographyP>
        When the team would be ambushed or surprised by a new threat,{" "}
        <b>push yourself</b> to have already seen it coming. It&apos;s up to you
        if you shared the intel with the team. Your call. Whatever creates the
        most interesting combats.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Give Me the Fucking Camera
        </TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        <b>Felicity</b> and her team of media coordinators are in the
        team&apos;s ear to make sure <span className="font-cyber">Cytech</span>{" "}
        captures all the best footage. But they&apos;ve never been in your
        shoes. You see the action first-hand and you know for a fact that
        you&apos;re a better director than they are a lot of the time.
      </TypographyP>
      <TypographyP>
        When you disagree with <b>Felicity</b> on a directing call,{" "}
        <b>push yourself</b> and make an <b>action roll</b>. <b>1-5</b>: if it
        goes wrong, it&apos;s on you, <b>mark 2 stress</b>; <b>4-6</b>: you can
        reframe the action scene in the way you want; <b>Crit</b>: it&apos;s
        fucking fire, both you and the filmed operative get a bonus 1 ¤P.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Attack Dogs</TypographyH3>
        <ClockCost num={3} />
      </div>
      <TypographyP>
        Turns out the <span className="font-cyber">&quot;Watchdogs&quot;</span>{" "}
        had less of their starting tech stripped out than you thought. It&apos;s
        disabled, but nothing a skilled{" "}
        <span className="font-cyber">Watchtower</span> can&apos;t undo. Once
        reactivated, attacking with them is as easy as mentally indicating a
        target. They take care of the rest.
      </TypographyP>
      <TypographyP>
        Keep in mind that <b>Felicity</b> won&apos;t approve. So be subtle. And
        for fuck&apos;s sake, don&apos;t get all the drones taken out in some
        frivolous combat.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Mission Control, Tell Corporate They Can Shove It.
        </TypographyH3>
        <ClockCost num={3} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Give Me the Fucking Camera
      </span>
      <TypographyP>
        Sometimes <b>Felicity</b> forgets that this isn&apos;t a movie studio
        and the guys your team is fighting - they&apos;re not stuntmen. And on
        top of it all, you have a mission to accomplish that isn&apos;t just
        getting cool shots goddamnit. Gentle reminders don&apos;t usually get
        results, so experienced <span className="font-cyber">Watchtowers</span>{" "}
        learn how to wield their gravitas.
      </TypographyP>
      <TypographyP>
        When you disregard <span className="font-cyber">Cytech&apos;s</span>{" "}
        motion capture objectives in favor of{" "}
        <span className="font-cyber">Root&apos;s</span> counter-terrorist
        mission, make an <b>action roll</b>. <b>1-3</b>: you work for <i>us</i>,
        you can forget about any bonuses at the end of the mission; <b>4,5</b>:
        fine, but you&apos;d better get some kind of footage or there&apos;ll be
        hell to pay; <b>6</b>: heard, telling them to put it where it don&apos;t
        shine; <b>Crit</b>: well done for your loyalty to <b>Kingwulf</b>, +1
        ¤F.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Contract Escalation
        </TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Mission Control, Tell Corporate They Can Shove It.
      </span>
      <TypographyP>
        You&apos;ve made yourself a valuable part of the{" "}
        <span className="font-cyber">Cyctech / Root</span> back and forth. Both
        orgs are always in need of talent like you and so its time your
        responsibilities were increased. You&apos;ll be briefed on the mission
        as a whole. The real mission.
      </TypographyP>
    </>
  );
}
