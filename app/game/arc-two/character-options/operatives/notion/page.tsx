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
import Clock from "@/components/clock";
import { BuildupCheckboxes } from "@/components/buildup-checkboxes";

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
          { name: "Notion", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Notion</TypographyH1>
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
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Notion"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Pull a kid out of a burning building with your monstrous form</li>
        <li>Put off transforming until the edge of death</li>
        <li>Go on a rampage</li>
        <li>Torment a deserving victim</li>
        <li>Deliver a brooding monologue</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Portentum Battle Sleeve &quot;Ravager&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Beasttech</span>
        <span>|</span>
        <span className="text-red-500">Gentech, Metaltech</span>
      </div>
      <TypographyP>
        <span className="font-cyber">Beasttech</span> constructs all manner of
        titanic beast form sleeves for the <b>Royal Rathi Army</b>. It&apos;s
        been a fruitful relationship for many years. But this, <i>this</i> is an
        exercise in hubris. Arrogance. Blasphemy even. No one in their right
        mind would purchase this sleeve, much less <i>wear</i> it. Sacrilage
        like this is only possible in a city which <b>Kingwulf</b> has left to
        its own devices for generations.
      </TypographyP>
      <TypographyP>
        Word got around quickly. <span className="font-cyber">Overcorp</span>{" "}
        launched an inquisition and{" "}
        <span className="font-cyber">Beasttech</span> needed to ditch the sleeve
        as soon as possible. That&apos;s when <b>Dunwell</b>,{" "}
        <span className="font-cyber">Root&apos;s</span> head of acquisitions got
        his hands on the <span className="font-cyber">&quot;Ravager&quot;</span>
        . How? He has his ways. Even more puzzling though: <b>Delfon</b>,{" "}
        <span className="font-cyber">Overcorp&apos;s</span> liason to{" "}
        <span className="font-cyber">Root</span> seems to look the other way
        when it comes to the blasphemous sleeve.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          &quot;Ravager&quot;
        </TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        Rumor is there hasn&apos;t been more than three{" "}
        <span className="font-cyber">Notions</span> before you; rumor is the
        sleeve consumed the last person who wore it. It&apos;s a hulking thing,
        nearly as large as a{" "}
        <span className="font-cyber">Beasttech Pride Hide</span>. It speaks to
        you.
      </TypographyP>
      <div className="my-2">
        <i className="text-muted-foreground">I want to feed</i>
      </div>
      <TypographyP>
        Why is a sleeve talking to you? And <i>why the fuck</i> is that the sort
        of thing it says? <b>Vakr</b>,{" "}
        <span className="font-cyber">Root&apos;s</span> narrative director has
        some answers on that:
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        I&apos;ve taken the liberty of installing a persona into
        &quot;Ravager.&quot; It&apos;s like a starved war beast, you see. You
        have to tame it and put it on a leash. Only let it out when you require
        its strength. For realism! Now you have some real internal struggle
        which will come through brilliantly on camera.
      </TypographyBlockquote>
      <TypographyP>
        And that&apos;s how you, <span className="font-cyber">Notion</span>, are
        the only safety measure keeping in check the most dangerous, most
        illegal warsleeve ever constructed. Speaking of illegal,{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span> is being hunted.
        Or, will be hunted once its noticed by{" "}
        <span className="font-cyber">Overcorp</span>. The Hunt is tracked by a{" "}
        <b>heat tracker</b>{" "}
        <span className="inline-flex">
          <BuildupCheckboxes max={6} current={0} />
        </span>{" "}
        and <b>hunt clock</b>{" "}
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={0} clickable={false} />
        </span>
        .
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Notion</span> may partially manifest for{" "}
        <b>+1 heat</b>. Razor claws, giant wings, steel-snapping jaws, whatever
        horrors your mind can conjure. Just for a moment though, else too many
        see.
      </TypographyP>
      <TypographyP>
        At the end of missions, <b>-1 heat</b>. If there are no living witnesses
        to <span className="font-cyber">&quot;Ravager&quot;</span>,{" "}
        <b>-1 heat</b>.
      </TypographyP>

      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Devourer</TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        Most battle sleeves have one form of self-repair or another. None can
        compare to the healing factor of a natural born noble beast, but
        warsleeves are another matter. They are designed to survive for days or
        weeks of perpetual combat and so must be capable of consistent
        reconstruction.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Notion</span> may consume a fresh corpose
        to heal any one <b>harm</b> the sleeve has suffered; <b>+2 heat</b>.
      </TypographyP>

      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Night Terrors</TypographyH3>
        <ClockCost num={3} />
      </div>
      <TypographyP>
        You begin experiencing terrible nightmares. Vivid scenes of you and your
        loved ones suffering at the hands of evil folk. But your memories are
        shelved - did this happen? Is this why you joined{" "}
        <span className="font-cyber">Root</span>?
      </TypographyP>
      <TypographyP>
        <b>Vakr</b> has some answers:
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        Don&apos;t worry, that&apos;s not your real family. In fact,
        they&apos;re not real at all. These are signals I use to prime the beast
        persona for its vengeful aspects. This is good news! It means
        you&apos;re synchronizing with{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span>.
      </TypographyBlockquote>
      <TypographyP>
        Real or not, the impression the dreams leave on{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span> is very real.
        When <span className="font-cyber">Notion</span> encounters the subject
        of their night terrors (the player ultimately decides when this
        happens), <span className="font-cyber">&quot;Ravager&quot;</span> will
        attempt a multi-manefestation to kill them.{" "}
        <span className="font-cyber">Notion</span> can choose to resist this,
        but if they don&apos;t, <b>+2 heat</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Beast Within</TypographyH3>
        <ClockCost num={3} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Night Terrors
      </span>
      <TypographyP>
        After enough time in shared nightmares and life-or-death scenarios,{" "}
        <span className="font-cyber">Notion</span> may begin to either:
        harmonize with <span className="text-muted-foreground text-sm">OR</span>{" "}
        wrest control of <span className="font-cyber">&quot;Ravager&quot;</span>{" "}
        (player&apos;s choice). One way or another,{" "}
        <span className="font-cyber">Notion</span> learns to tap into{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span> never-ending
        thirst for vengeance.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Notion</span> may <b>push themself</b> and
        gain <b>+2 heat</b> to multi-manifest bestial transformations.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Warform</TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Beast Within
      </span>
      <TypographyP>
        No <span className="font-cyber">Notion</span> has ever managed this
        before. Hypothetically once you&apos;ve gained full control of{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span>, you can trigger
        its full warform: a titanic mass of entropic metal and flesh capable of
        reshaping into whatever appendage may best cleave its foes.
      </TypographyP>
      <TypographyP>
        To assume full warform, <b>mark a condition</b> and <b>+6 heat</b>.
      </TypographyP>
    </>
  );
}
