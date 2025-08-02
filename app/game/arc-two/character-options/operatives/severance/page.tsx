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
          { name: "Severance", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Severance</TypographyH1>
          <span className="text-sm text-muted-foreground font-cyber">
            Unpredictable, chaotic, genius of the unorthodox.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Diverge</b> Think outside of
            convention and embrace unexpected solutions.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Overcorp Impulse Reflector &quot;Sympathy&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Root</span> brings{" "}
            <span className="font-cyber">Severance</span> in to be a wild card
            character. Fans love the excitement and comedic relief of the
            chaotic anti-hero creating chaos for everyone around them.{" "}
            <span className="font-cyber">Severance&apos;s</span> role is is to
            spice up action that&apos;s getting stale, or to create a little bit
            of drama within the team.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Severance"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Call out what&apos;s unspoken between two teammates</li>
        <li>Change a car&apos;s tires while driving it</li>
        <li>Abruptly switch sides in an argument</li>
        <li>Break a window with a rocket launcher</li>
        <li>Make an unexpected sacrifice for the team</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Impulse Reflector &quot;Sympathy&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Overcorp</span>
        <span>|</span>
        <span className="text-red-500">Neurotech</span>
      </div>
      <TypographyP>
        Originally designed for law enforcement to issue sharp commands, early
        prototypes of <span className="font-cyber">&quot;Sympathy&quot;</span>{" "}
        only tapped into minor reflexes and existing instincts. It was good
        enough at getting prety to trip or a prisoner to raise their hands, but{" "}
        <span className="font-cyber">Overcorp</span> saw so much more potential
        for the device. Of course, the public wouldn&apos;t be too happy if they
        were the guinea pigs, so <span className="font-cyber">Overcorp</span>{" "}
        went looking for another test bed. <b>Delfon</b>,{" "}
        <span className="font-cyber">Root&apos;s</span> liason with{" "}
        <span className="font-cyber">Overcorp</span> made the connection.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Root&apos;s</span> R&D wing, headed by{" "}
        <b>Harys</b>, has made substantial progress on enhancing the device. It
        even got its name from a key discovery they made, which is that the
        signal becmes more potent when the wielder is under their own emotional
        duress.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Impulse Projection
        </TypographyH3>
        <ClockCost num={0} />
      </div>

      <TypographyP>
        It takes time for{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> to calibrate to
        a new psyche, so while it does, <b>Harys</b> recommends taking it easy
        and only attempting to impact small movements. Your own movements will
        likely have to be exaggerated to get the desired effect on the target.
      </TypographyP>
      <div className="my-2">
        <span>
          When you activate{" "}
          <span className="font-cyber">&quot;Sympathy&quot;</span>, make a{" "}
          <b>condition</b> roll.
        </span>
        <div className="ml-2">
          <span>
            <b>1-3:</b> nasty feedback loop, <b>mark 2 stress</b>
            <br />
            <b>4,5:</b> the impulse goes through but one of their reflexes or
            emotions also reflects back onto you
            <br />
            <b>6:</b> it works
            <br />
            <b>Crit:</b> it works and they think its their own mind messing with
            them
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Marionette</TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        In addition to forceful hostile reflections, clever{" "}
        <span className="font-cyber">Severances</span> have found collaborative
        uses for <span className="font-cyber">&quot;Sympathy&quot;</span>. This
        wasn&apos;t exactly what <span className="font-cyber">Overcorp</span>{" "}
        had in mind, but shh... <b>Harys</b> won&apos;t say anything.
      </TypographyP>
      <TypographyP>
        When <span className="font-cyber">Severance</span> activates{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> to collaborate
        with an ally, the next <b>assist</b> or <b>group roll</b> they both
        participate in costs no <b>stress</b>. In addition, the participants
        find that if they relax, they can mirror their movements. For a short
        time the chosen ally may make rolls on behalf of{" "}
        <span className="font-cyber">Severance</span> and vice versa. This can
        also work on an unoccupied sleeve.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Sympathy</TypographyH3>
        <ClockCost num={3} />
      </div>
      <TypographyP>
        This is what <span className="font-cyber">Overcorp</span> reps are
        really interested in studying. Can the{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> change minds?
        Yes and no. It&apos;s complicated. Short version is that the scope of
        the changes is limited to{" "}
        <span className="font-cyber">Severance&apos;s</span> emotional state.
      </TypographyP>
      <TypographyP>
        Slightly longer version: when{" "}
        <span className="font-cyber">Severance</span> activates{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> to project an
        emotional state onto a foe, they may either: force that foe to
        experience a powerful emotion which{" "}
        <span className="font-cyber">Severance</span> is experiencing{" "}
        <span className="text-muted-foreground text-sm">OR</span> prevent the
        formation of an emotion in the foe which{" "}
        <span className="font-cyber">Severance</span> is <i>not</i>{" "}
        experiencing.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Assimilate</TypographyH3>
        <ClockCost num={3} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Marionette, Sympathy
      </span>
      <TypographyP>
        Part of the reflection paradigm with which{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> is designed
        involves a degree of emotional attunement. A{" "}
        <span className="font-cyber">Severance</span> that becomes practiced at
        this can in a way, reverse the typical flow of the cyberware and allow
        the emotions surrounding them to inform their choices.
      </TypographyP>
      <TypographyP>
        When activating <span className="font-cyber">&quot;Sympathy&quot;</span>{" "}
        to attune to surrounding emotions,{" "}
        <span className="font-cyber">Severance</span> gains{" "}
        <b className="text-blue-500">+2d</b> to blend in or ingratiate
        themselves with the people around them.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Empathy</TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Assimilate
      </span>
      <TypographyP>
        Repeated exposure to emotional attunement does interesting things to the
        mind. <span className="font-cyber">Severances</span> begin to form
        unsettling emotional power over the people around them; almost like a
        snake hypnotizing its prey. In reality, this is the effect of emotional
        attunement focused in on a single individual.
      </TypographyP>
      <TypographyP>
        When <span className="font-cyber">Severances</span> activates{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> and remains
        focused on an individual, it&apos;s almost like{" "}
        <span className="font-cyber">Severance</span> can read their thoughts.
        The subject of the <b>Empathy</b> cannot accurately strike{" "}
        <span className="font-cyber">Severance</span> or rebuff them in any open
        dialogue.
      </TypographyP>
    </>
  );
}
