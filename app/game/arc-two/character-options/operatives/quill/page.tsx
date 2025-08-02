import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
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
          { name: "Quill", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Quill</TypographyH1>
          <span className="text-sm text-muted-foreground font-cyber">
            Confident, charming, effortless talent.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Flaunt</b> Broadcast your
            skills and make a spectacle of using them.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Genlab Distributed Fast Access Nerve Centers &quot;Action
              Potential&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Root</span> casts{" "}
            <span className="font-cyber">Quill</span> as characters who live
            with large expectations; this is often dynastic children or prodigy
            talents. Fans love to see the unstoppable{" "}
            <span className="font-cyber">Quill</span> face an impossible
            challenge, then rise to the occasion beyond what anyone could have
            expected.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Quill"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Bust out a surprising skill no one thought you had</li>
        <li>Make pushing yourself to the brink look easy</li>
        <li>Face an impossible challenge alone</li>
        <li>Hit&apos;em with that one liner</li>
        <li>Get in way over your head</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Distributed Fast Access Nerve Centers &quot;Action Potential&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Genlab</span>
        <span>|</span>
        <span className="text-red-500">Gentech, Neurotech</span>
      </div>
      <TypographyP>
        According to <span className="font-cyber">Genlab</span> scientists,
        actions repeated time and time again no longer require thought. They
        become instinct, like flinching from fire or fear of the night. This is
        muscle memory: instincts imprinted on the nervous centers near the body
        parts which perform the action. Project{" "}
        <span className="font-cyber">&quot;Action Potential&quot;</span> aims to
        push this concept as far as modern genetic technology will let it.
      </TypographyP>
      <TypographyP>
        By growing specialized nervous centers throughout the body,{" "}
        <span className="font-cyber">&quot;Action Potential&quot;</span>{" "}
        facilitates mapping action to instinct at a rapid pace. The thing is, it
        takes practical experience to truly test the limits of a device such as
        this. <b>Raguta</b>, <span className="font-cyber">Root&apos;s</span>{" "}
        corporate contact specialist made the connection with{" "}
        <span className="font-cyber">Genlab</span>, promising to push{" "}
        <span className="font-cyber">&quot;Action Potential&quot;</span> to
        heights never seen before.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Potential</TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        It starts slowly. A flick of the wrist, a missed shot. Ten more,
        contact. Ten more, bullseye. One thousand bullseyes. Your body brims
        with potential, waiting for you to feed it the stimuli to continue the
        eternal journey forward.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Quill</span> has a second <b>xp tracker</b>{" "}
        for action-exclusive <b>xp</b>, filled when marking <b>potential</b>.{" "}
        <span className="font-cyber">Quill</span> marks <b>potential</b> when
        they:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          make a <b>physical action roll</b>
        </li>
        <li>
          make a <b>physical action roll</b> they have not used yet this mission
        </li>
        <li>
          <b>push themselves</b> on a <b>physical action roll</b>
        </li>
        <li>
          crit on a <b>physical action roll</b>
        </li>
      </TypographyUnorderedList>
      <TypographyBlockquote>
        A <b>physical action roll</b> is any action roll which is judged to
        involve <span className="font-cyber">Quill&apos;s</span> sleeve
        interacting with the world around them
      </TypographyBlockquote>
      <TypographyP>
        As part of any <b>physical action roll</b>,{" "}
        <span className="font-cyber">Quill</span> may spend{" "}
        <b>potential clocks</b> to advance that <b>action</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Accellerated Autodidact
        </TypographyH3>
        <ClockCost num={4} />
      </div>
      <TypographyP>
        The original purpose of{" "}
        <span className="font-cyber">skill codexes</span> were learning tools.
        Something which most people ignore in favor of more expensive codexes.
        For <span className="font-cyber">Quill</span> though, they&apos;re
        invaluable tools to jumpstart a new talent.
      </TypographyP>
      <TypographyP>
        At the end of each mission, <span className="font-cyber">Quill</span>{" "}
        may convert any physical <b>codex action</b> they used during the
        mission into an <b>ego action</b> without needing to spend the{" "}
        <b>xp clocks</b> to do so.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Mimicry</TypographyH3>
        <ClockCost num={5} />
      </div>
      <TypographyP>
        By following along with experts&apos; movements in high-adrenaline
        moments, skilled <span className="font-cyber">Quills</span> can learn
        from the best and begin to follow in their footsteps.
      </TypographyP>
      <TypographyP>
        When a teammate makes a <b>physical action roll</b> in which their
        rating is higher than <span className="font-cyber">Quill&apos;s</span>,{" "}
        <span className="font-cyber">Quill</span> can <b>assist</b> them for
        free.
      </TypographyP>
      <TypographyP>
        Add the following triggers to marking <b>potential</b>:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          a teammate <b>assists</b> <span className="font-cyber">Quill</span> on
          a <b>physical action roll</b>
        </li>
        <li>
          participate in a group <b>physical action roll</b>
        </li>
      </TypographyUnorderedList>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Relentless Regimen
        </TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Accellerated Autodidact
      </span>
      <TypographyP>
        From the outside looking in,{" "}
        <span className="font-cyber">Quill&apos;s</span> skills may seem
        effortless. But they come at the cost of hard-earned experience and
        endless hours of work. Besides, when it&apos;s so clear what that work
        gets them, how can <span className="font-cyber">Quill</span> ever afford
        to rest?
      </TypographyP>
      <TypographyP>
        When <span className="font-cyber">Quill</span> <b>trains</b> during{" "}
        <b>mission prep</b>, they mark <b>1 potential</b> for every{" "}
        <b>condition</b> they have.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Max Potential</TypographyH3>
        <ClockCost num={7} />
      </div>
      <TypographyP>
        Eventually the{" "}
        <span className="font-cyber">&quot;Action Potential&quot;</span> has
        stored so many instincts and reflexes that similar ones begin blending
        into novel motions never attempted before. This is exactly the kind of
        genius <span className="font-cyber">Genlab</span> was hoping to see
        synthesized from the project.
      </TypographyP>
      <TypographyP>
        When <span className="font-cyber">Quill</span> <b>pushes themself</b> on
        a <b>physical action roll</b>, they may <b>push themself</b> again to
        add another <b>physical action</b> to the roll.
      </TypographyP>
    </>
  );
}
