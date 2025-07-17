import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyP,
} from "@/components/ui/typography";
import OperativeCard from "./(components)/operative-card";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber mb-8">Operatives</TypographyH1>

      <TypographyBlockquote className="font-cyber text-xs">
        Cytech Solutions presents the cutting edge of motion capture realism.
        Choose from our extensive collection of ten unique character archetypes:
        guaranteed to be a perfect match for your games and movies.
      </TypographyBlockquote>

      <TypographyP>
        <span className="font-cyber">Cytec&apos;s</span> operatives are designed
        to provide customers with a wide range of combat footage to choose from.
        The suits serve as both a marketing strategy as well as allowing the
        operators themselves to be interchangeable while maintaining a
        consistent visual identity.
      </TypographyP>
      <TypographyP>
        Where some might assume <span className="font-cyber">Cytec</span>{" "}
        sources its motion-capture professionals from stuntspeople and actors,
        the truth is darker. The people under the masks are memory-shelved
        soldiers contracted to <span className="font-cyber">Root</span>, one of{" "}
        <span className="font-cyber">Cytec&apos;s</span> subsidiaries.
      </TypographyP>
      <TypographyP>
        While posing as motion capture actors in public, the operatives are
        capturing combat footage in the most authentic way possible:{" "}
        <span className="font-cyber">Root&apos;s</span> anti-terrorist black
        ops. As if deadly black ops missions aren&apos;t hard enough on their
        own, operatives are required to stay in character and follow up on
        combat prompts from the <span className="font-cyber">Cytec</span> media
        coordinator to get the footage they need.
      </TypographyP>
      <TypographyP>
        It&apos;s a lethal job. You don&apos;t know the exact turnover rate, but
        the churn seems to be intense. Of course, you&apos;re not without tools
        to help with the corp&apos;s goals. Each operative is provided a skill
        codex [ <span className="font-cyber text-red-500">Action</span> ] and
        specialized [{" "}
        <span className="font-cyber text-fuchsia-500">Cyberware</span> ].
      </TypographyP>

      <div className="flex flex-col gap-2 mt-4">
        <OperativeCard name="Canon">
          <span className="text-sm text-muted-foreground font-cyber">
            Silent, simmering, sexy type. Explosive power.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Smolder</b> Handle social
            situations with a cool, charming demeanor.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Buran Experimental Integrated Blast Engine &quot;Overkill,
              Beibe&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Canon</span> is a mainstay of{" "}
            <span className="font-cyber">Root&apos;s</span> fantasy and sci-fi
            productions. Fans love the suave seductive type with overwhelming
            combat power. To that end,{" "}
            <span className="font-cyber">Canon&apos;s</span> job is to talk
            smooth and get that money-shot of their ultimate move.
          </TypographyP>
        </OperativeCard>
        <OperativeCard name="Close">
          <span className="text-sm text-muted-foreground font-cyber">
            Impulsive, reckless, clutch in a pinch.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Instinct</b> Make the right
            call when there&apos;s no time to think.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Integra Rapid Sleeve Resequencer &quot;Revivify&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Close</span> is the obvious choice when{" "}
            <span className="font-cyber">Root</span> needs to capture some high
            stakes thrills. Fans crave the scrappy underdog barely making it out
            of one situation to the next.{" "}
            <span className="font-cyber">Close&apos;s</span> job is to run
            towards danger and capture those high octane close calls.
          </TypographyP>
        </OperativeCard>
        <OperativeCard name="Facility">
          <span className="text-sm text-muted-foreground font-cyber">
            Cocky, calculated, always prepared.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Galvanize</b> Stoke positive
            energy; inspire confidence in yourself and others.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Foundation Megapower Endoskeleton &quot;Manhandler&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Facility</span> is the heart and soul
            of the team. <span className="font-cyber">Root</span> brings them in
            when they need to capture some moments of levity or positivity in
            the darkness. <span className="font-cyber">Facility&apos;s</span>{" "}
            job is to use their endless gadgets and heroic speeches to turn the
            tide once the mission&apos;s gone to hell.
          </TypographyP>
        </OperativeCard>
        <OperativeCard name="Hush">
          <span className="text-sm text-muted-foreground font-cyber">
            Edgy, mysterious, never hesitates.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Ambush</b> Exploit surprise
            for frightful or violent ends.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Synthra Antidetection Platform &quot;Vaporwave&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Root</span> brings{" "}
            <span className="font-cyber">Hush</span> in for their plotlines with
            an assassin villain or a mysterious stranger. Fans love the
            enigmatic, brooding type with a hidden agenda.{" "}
            <span className="font-cyber">Hush&apos;s</span> job is to be a
            merciless killer striking from the shadows, capturing brutal and
            creative stealth kills.
          </TypographyP>
        </OperativeCard>
        <OperativeCard name="Impact">
          <span className="text-sm text-muted-foreground font-cyber">
            Arrogant, short-tempered, always ready to fight.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Bravado</b> Maintain
            confidence even in the face of overwhelming odds.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              3MI Environmental Sleeve Adaptor &quot;Underdog&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Impact</span> fits in the niche of
            comedic relief and team mascot. Fans love to see the arrogant
            tryhard blown away, but stand back up ready to brawl again.{" "}
            <span className="font-cyber">Impact&apos;s</span> job is to be the
            one who never gives up, no matter how many times they get knocked
            down.
          </TypographyP>
        </OperativeCard>
        <OperativeCard name="Keeper">
          <span className="text-sm text-muted-foreground font-cyber">
            Serious, focused, always has a plan.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Coordinate</b> Direct
            multiple unique entities to act as one.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Cytech Simulation Stack &quot;Reality Fracture&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Root</span> casts{" "}
            <span className="font-cyber">Keeper</span> as the &quot;man with a
            plan&quot; type. Often the leader of the team and a foil to some of
            the more strong-willed characters;{" "}
            <span className="font-cyber">Keeper</span> is the one who strides
            into danger, shaping chaos into their order.
          </TypographyP>
        </OperativeCard>
        <OperativeCard name="Notion">
          <span className="text-sm text-muted-foreground font-cyber">
            Brooding, reluctant, tortured by their own strength.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Resolve</b> Find strength in
            your deep personal convictions.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Beasttech Portentum Battle Sleeve &quot;Ravager&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Root</span> brings{" "}
            <span className="font-cyber">Notion</span> into tragic roles in
            which <span className="font-cyber">Notion</span> is forced to
            struggle against circumstance or their own nature. Fans love
            watching <span className="font-cyber">Notion</span> pushed to the
            brink and forced to use the powers they hold back for so long.
          </TypographyP>
        </OperativeCard>
        <OperativeCard name="Quill">
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
        </OperativeCard>
        <OperativeCard name="Severance">
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
        </OperativeCard>
        <OperativeCard name="Watchtower">
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
        </OperativeCard>
      </div>
    </>
  );
}
