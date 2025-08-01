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
          { name: "Hush", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Hush</TypographyH1>
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
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Hush"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Decapitate three enemies with one blow and vanish</li>
        <li>Taunt your prey before you hunt them down</li>
        <li>Execute foes begging for mercy</li>
        <li>
          Leave a trail of dead guards and disabled security for your team
        </li>
        <li>Intimidatingly emerge from the shadows</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Antidetection Platform &quot;Vaporwave&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Synthra</span>
        <span>|</span>
        <span className="text-red-500">Tartech, Nettech</span>
      </div>
      <TypographyP>
        For a subsidiary of the premier security corp,{" "}
        <span className="font-cyber">Synthra</span> produces a lot of
        security-bypassing tech. In fact,{" "}
        <span className="font-cyber">Synthra</span> is the industry leader in
        stealth and cyberpen chrome. For decades they were a thorn in{" "}
        <span className="font-cyber">Sentry&apos;s</span> side, so much that the
        only way <span className="font-cyber">Sentry</span> could win the arms
        race was to incorporate <span className="font-cyber">Synthra</span> into
        itself.
      </TypographyP>
      <TypographyP>
        The dirty open secret is that the dynamic never changed.{" "}
        <span className="font-cyber">Synthra&apos;s</span> tech continues to be
        years ahead of anything <span className="font-cyber">Sentry</span> can
        handle. And the most exclusive piece of chrome{" "}
        <span className="font-cyber">Synthra</span> produces is sitting squarely
        in <span className="font-cyber">Root&apos;s</span> repo.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Vaporwave</TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        The <span className="font-cyber">&quot;Vaporwave&quot;</span> is strange
        and powerful technology, even in the cyber age. Rather than a mental
        trigger, it employs an old fashioned panel of buttons and dials which
        controls the chrome. Even weirder for this kind of tech, it&apos;s
        fueled by a bloodwell in the chrome itself. There&apos;s only enough
        blood in the well for one activation. After that, it&apos;s on{" "}
        <span className="font-cyber">Hush</span> to give it more - from
        themselves or others.
      </TypographyP>
      <TypographyP>
        When activated, a wave of cool, inky vapor flows from{" "}
        <span className="font-cyber">Hush&apos;s</span> sleeve. This isn&apos;t
        like a fog which blocks or refracts the light; the vapor creates an
        absence of light in its wake.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        Root provides Hush with a specialty device to refuel the Vaporwave: a
        slim razorknife which can act as a syringe.
      </TypographyBlockquote>

      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Shadowstep</TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        It doesn&apos;t take <span className="font-cyber">Hushes</span> long
        before they begin to discover the secret controls embedded in the{" "}
        <span className="font-cyber">&quot;Vaporwave&quot;</span> panel. Now,
        they aren&apos;t labeled nor are there instructions, so figuring them
        out is a bit of a trial by error.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Hush</span> can activate the chrome to
        dissolve into vapor, coalescing anywhere within the shadows cast by{" "}
        <span className="font-cyber">&quot;Vaporwave&quot;</span>.
      </TypographyP>
      <i>
        If there&apos;s no neural connection, how does it know where you want to
        go?
      </i>

      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Midnight Silence
        </TypographyH3>
        <ClockCost num={3} />
      </div>
      <TypographyP>
        Yet more contols hidden in the recesses of your body. You don&apos;t
        remember the chrome being instlled there, but there&apos;s an appealing
        subtlety to it nonetheless.
      </TypographyP>
      <TypographyP>
        With these new controls, <span className="font-cyber">Hush</span> can
        enhance the vapor to dampen sounds in addition to swallowing light.
        It&apos;s an oppressive silence in which you can&apos;t even hear your
        own heartbeat.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Shadow Synthesis
        </TypographyH3>
        <ClockCost num={3} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Shadow Step
      </span>
      <TypographyP>
        After rigorous practice, the occasional{" "}
        <span className="font-cyber">Hush</span> discovers the true potential of
        their partnership with the vapor.{" "}
        <span className="font-cyber">Hush</span> can allow themselves to
        completely dissolve into the mist and remain there for a short time.
        While in this form, they are briefly in a superposition within the
        vapor. They are nowhere and everywhere until they decide to coalesce
        once again and strike from the shadows.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Sensory Eclipse</TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Midnight Silence
      </span>
      <TypographyP>
        <span className="font-cyber">&quot;Vaporwave&apos;s&quot;</span> deepest
        secret. Accessing this took weeks of meticulous experimentation;
        it&apos;s like the cyberware is measuring you, testing to see if
        you&apos;re worthy. Once it judged you are, the final controls revealed
        themselves to you.
      </TypographyP>
      <TypographyP>
        Within the vapor, there are no senses. Without your thoughts, you
        wouldn&apos;t even know you&apos;re alive.
      </TypographyP>
    </>
  );
}
