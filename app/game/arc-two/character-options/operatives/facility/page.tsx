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
          { name: "Facility", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Facility</TypographyH1>
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
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Facility"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Invoke the power of believing in yourself</li>
        <li>Pick up your teammates when they fall down</li>
        <li>Have &quot;just the thing&quot; for the occasion</li>
        <li>Strike a heroic pose mid-conflict</li>
        <li>Gallantly lead the charge into battle</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Megapower Endoskeleton &quot;Manhandler&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Foundation</span>
        <span>|</span>
        <span className="text-red-500">Gentech, Metaltech</span>
      </div>
      <TypographyP>
        Sometimes there are solid pieces which are too heavy for conventional
        equipment to lift into place. That&apos;s where the{" "}
        <span className="font-cyber">&quot;Manhandler&quot;</span> comes in.
        Forged of an adamantine-titanium alloy and laced into the sleeve&apos;s
        skeletal system, the{" "}
        <span className="font-cyber">&quot;Manhandler&quot;</span> is designed
        for these most demanding custom construction jobs.
      </TypographyP>
      <TypographyP>
        Word is that <span className="font-cyber">Foundation</span> execs have
        been looking for a military application of this chrome for years.{" "}
        <b>Raguta</b>, <span className="font-cyber">Root&apos;s</span> corporate
        contact specialist, managed to make the connection and secure an
        experimental combat version of the chrome.{" "}
        <span className="font-cyber">Facility&apos;s</span> job is to make it
        look good.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Heavy Hauler</TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        The <span className="font-cyber">&quot;Manhandler&quot;</span> can
        effortlessly support an enormous amount of weight, though it&apos;s
        quite heavy itself. It renders{" "}
        <span className="font-cyber">Facility&apos;s</span> sleeve quite
        sluggish in certain circumstances, but on the bright side they can bring
        an entire arsenal with them.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Facility</span> can never take a{" "}
        <i>discrete</i> loadout, but they can hold up to <b>8 item slots</b>{" "}
        with a <i>conspicuous</i> loadout and <b>12 item slots</b> with a{" "}
        <i>heavy</i> loadout.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Into the Fray</TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        Carrying capacity isn&apos;t the only benefit of the adamantine-titanium
        alloy bones. It also makes{" "}
        <span className="font-cyber">Facility&apos;s</span> sleeve incredibly
        durable. By putting a limb or even their skull directly in the path of
        impact, <span className="font-cyber">Facility</span> reduces incoming
        harms by <b>3 levels</b> when they resist. Unprepared foes may find
        whatever they tried to hurt <span className="font-cyber">Facility</span>{" "}
        with damaged or destroyed by the impact.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Controlled Launch
        </TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        Where the{" "}
        <span className="font-cyber">&quot;Manhandler&apos;s&quot;</span>{" "}
        doesn&apos;t lend itself to quick reflexes or fast-twitch tissue, clever{" "}
        <span className="font-cyber">Facilities</span> have learned to create
        their own mobility.
      </TypographyP>
      <TypographyP>
        By swinging and/or throwing immense objects,{" "}
        <span className="font-cyber">Facility</span> can launch themselves with
        the centrifugal force. Brace yourself, it's not often a graceful
        landing.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Unstoppable</TypographyH3>
        <ClockCost num={4} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Into the Fray
      </span>
      <TypographyP>
        Carrying the building-sized objects the{" "}
        <span className="font-cyber">&quot;Manhandler&quot;</span> was designed
        for requires an immense amount of power and stability in the base. of
        the sleeve. With practice, <span className="font-cyber">Facility</span>{" "}
        can <b>push themself</b> and continue advancing forward despite any
        resistance or obstacle in their way. With sufficient effort,{" "}
        <span className="font-cyber">Facility&apos;s</span> could topple the
        buildings their chrome was designed to construct.
      </TypographyP>

      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Oversized Weaponry
        </TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Controlled Launch
      </span>
      <TypographyP>
        The <span className="font-cyber">&quot;Manhandler&apos;s&quot;</span>{" "}
        sheer strength allows swinging and shooting weapons intended for sleeves
        ten times <span className="font-cyber">Facility&apos;s</span> size.
        Though as most <span className="font-cyber">Facilities</span> find out,
        the endoskeleton doesn&apos;s help correct balance. A single swing can
        result in lanching themself through a wall from the momentum shift.
      </TypographyP>
      <TypographyP>
        To account for this, skilled{" "}
        <span className="font-cyber">Facilities</span> have learned to wield an
        oversized weapon in each hand to act as counterweights. Just be careful
        not to overexert the soft tissues in your sleeve.
      </TypographyP>
    </>
  );
}
