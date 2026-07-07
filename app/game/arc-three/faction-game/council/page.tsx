import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Fabrication Grand Council</TypographyH1>
      <TypographyP>
        In the steel jungle of Fabrication's machines, there is a new animal
        threatening the beasts' predatory apex. Unprecedented, yet undeniable.
        In this time of great and frightening change, Fabrication's powers
        assemble to "discuss" what comes next.
      </TypographyP>
      <TypographyP>
        The bitter truth is that this is the nexus for the power games and
        conflicts to come. Who will make friend - or declare war? When the dust
        settles, will the workers' lives be better for it?
      </TypographyP>
      <TypographyH2>Voting Members</TypographyH2>
      <TypographyP>
        Not everyone who leads a faction in Fabrication gets a vote. And not all
        voting members are leaders. The voting members are influential
        individuals motivated to step into a position of power such as this.
      </TypographyP>
      <TypographyP>
        Voting members generally fall into a few categories, though each has
        their own ideologies, agendas, and weaknesses.
      </TypographyP>
      <TypographyBlockquote>
        <b className="text-emerald-500">Advanced:</b> understands the system
        must be destroyed and something radically new must take its place
        <br />
        <b className="text-cyan-500">Sympathetic:</b> understands the system is
        broken but doesn't know exactly why this is the case or how they can
        help
        <br />
        <b className="text-stone-500">Unconcious:</b> doesn't understand that
        they are oppressed or that there can be a better way
        <br />
        <b className="text-amber-500">Reformist:</b> believes that the system
        will work with proper leadership or some tweaks around the edges
        <br />
        <b className="text-orange-500">Backwards:</b> prefers the current system
        or wants to make it even more oppressive to the workers
      </TypographyBlockquote>
      <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        <TypographyP className="mt-2">
          <b className="text-emerald-500">Merit</b>: well known amongst workers
          for earnest kindness and having the strength to smile even during the{" "}
          <i>Drone</i>.
        </TypographyP>
        <TypographyP>
          <b className="text-emerald-500">
            Naaza<sup className="text-amber-500">*</sup>
          </b>
          : known amongst enforcers as a clever wright with a keen mind and a
          level head.
          <br />
          <sup className="text-amber-500">*</sup>{" "}
          <i className="text-muted-foreground text-xs">
            not yet known to be a member of Theta
          </i>
        </TypographyP>
        <TypographyP>
          <b className="text-emerald-500">Drusa Santoris</b>: known for
          efficient operations and a ruthless decisiveness.
        </TypographyP>
        <TypographyP>
          <b className="text-emerald-500">Laramie Black</b>: known to be an
          unforgiving pragmatist. Prefers to maintain Moore's Gang's affluence.
          Can be swayed by threats against her people.
        </TypographyP>
        <TypographyP>
          <b className="text-orange-500">Amalina the Crow</b>: mostly absorbed
          with her personal wealth and entertainment. Willing to engage in
          politics to further her ambitions.
        </TypographyP>
        <TypographyP>
          <b className="text-cyan-500">Sire Ciber</b>: only interested in
          politics insofar as pushing events closer to prophesized{" "}
          <i>"great and terrible change"</i>
        </TypographyP>
        <TypographyP>
          <b className="text-amber-500">Lashma</b>: delusionally self important.
          Seeks to acquire gravitas by siding with whichever side is likely to
          win the vote. Will likely be swayed by whoever has her ear closest to
          voting.
        </TypographyP>
        <TypographyP>
          <b className="text-cyan-500">Taj Amati</b>: views himself as a
          peacemaker amongst workers. Can be swayed with promises of alliances
          or de-escalation.
        </TypographyP>
        <TypographyP>
          <b className="text-orange-500">Hrodulfr</b>: power hungry, conniving,
          and impatient. Can be swayed with personal gifts or with promises of
          violence on his foes.
        </TypographyP>
        <TypographyP>
          <b className="text-orange-500">Ulf</b>: not smart enough for politics
          and unaware of it. Will trend towards votes which crush those already
          beneath him. Can be swayed with influence or aggrandizement.
        </TypographyP>
        <TypographyP>
          <b className="text-stone-500">Kent</b>: doesn't want to be here, but
          figures this is the best way to look out for the Watering Hole. Will
          likely vote inconsistently and propose irrelevant topics.
        </TypographyP>
        <TypographyP>
          <b className="text-stone-500">Lio</b>: only here for his amusement.
          Will vote whichever way he thinks will be more interesting. That could
          mean pushing votes to a tie.
        </TypographyP>
        <TypographyP>
          <b className="text-cyan-500">Lexus Buteo</b>: wants a better
          Fabrication for all, but he's clearly overwhelmed with protecting his
          own community from the surrounding threats. Can be swayed with
          promises of protection.
        </TypographyP>
        <TypographyP>
          <b className="text-emerald-500">Minamo</b>: not interested in
          politics. Likely won't show up at all.
        </TypographyP>
        <TypographyP>
          <b className="text-amber-500">Enzo</b>: preoccupied with maintaining
          his position as the reasonable middle-ground between beasts and
          workers. Will attempt to vote with each side equally. Can be swayed by
          legitimacy or authority.
        </TypographyP>
        <TypographyP>
          <b className="text-amber-500">Duara</b>: competently plays the
          political game in pursuit of her own accumulation of power.
        </TypographyP>
        <TypographyP>
          <b className="text-stone-500">Wilgefort</b>: focused on improving
          Fabrication's infrastructure and quality of life. Can be swayed with
          competency and promises of resources.
        </TypographyP>
        <TypographyP>
          <b className="text-amber-500">Cyrus</b>: spiteful and erratic voting
          patterns. Will likely vote against anything his enemies vote for.
        </TypographyP>
        <TypographyP>
          <b className="text-orange-500">Yulgar</b>: reasonable and charming.
          Wants to remove Fabrication's current power structures in favor of a
          more fundamentalist Rathi hierarchy. Can be swayed by Rathi purist
          rhetoric.
        </TypographyP>
        <TypographyP>
          <b className="text-stone-500">Borani</b>: frustrated that the
          enforcers are getting attacked by both beasts and workers. Can be
          swayed by authoritarian rhetoric and promises of 'rightful' justice.
        </TypographyP>
        <TypographyP>
          <b className="text-amber-500">Hitchen</b>: interested in establishing
          more formal commerce and a merchant class amongst the workers. Can be
          swayed by access to resources or trade routes.
        </TypographyP>
        <TypographyP>
          <b className="text-orange-500">Ridora</b>: not interested in politics
          and hates the existence of the council in the first place. Will work
          to undermine it as swiftly as he can.
        </TypographyP>
      </div>
      <TypographyH2>
        Inaugural Session of the Fabrication Grand Council
      </TypographyH2>
      <TypographyP>
        Theta has given the workers a shot at change, but don't be fooled: the
        beasts will use every tactic possible to destroy this new movement.
      </TypographyP>
      <TypographyP>
        There are few places where Fabrication's powers can gather and "debate"
        the issues at hand. Enzo advocated the center of Fab Floor as neutral
        ground. This was swiftly rejected by the beasts who insisted Hrodulfr's
        feasting hall the only proper place. At risk of no grand council at all,
        this is where it will take place.
      </TypographyP>
      <TypographyP>
        It's clear that the beasts plan to inhabit the hall in force. The first
        obstacle and veiled threat to the thinbloods newly stepping into power.
      </TypographyP>
      <TypographyP>
        The next question is who will host and facilitate discussion.
        Fortunately it was a short debate: even the beasts agree that{" "}
        <b>Merit</b> is trustworthy to be a neutral arbiter.
      </TypographyP>
      <TypographyH3>Proposed Issues</TypographyH3>
      <TypographyP>
        <i>Who has the right to vote in the council?</i> -{" "}
        <span className="text-muted-foreground">Ulf</span>
      </TypographyP>
      <TypographyP>
        <i>How will votes be weighted?</i> -{" "}
        <span className="text-muted-foreground">Hrodulfr</span>
      </TypographyP>
      <TypographyP>
        <i>Where will the council be permanently hosted?</i> -{" "}
        <span className="text-muted-foreground">Enzo</span>
      </TypographyP>
      <TypographyP>
        <i>How many issues will be voted on each session?</i> -{" "}
        <span className="text-muted-foreground">Borani</span>
      </TypographyP>
      <TypographyP>
        <i>How will voting ties be broken?</i> -{" "}
        <span className="text-muted-foreground">Yulgar</span>
      </TypographyP>
      <TypographyP>
        <i>How will food be distributed?</i> -{" "}
        <span className="text-muted-foreground">Duara</span>
      </TypographyP>
      <TypographyP>
        <i>Who is responsible for their workers returning to work?</i> -{" "}
        <span className="text-muted-foreground">Lashma</span>
      </TypographyP>
      <TypographyP>
        <i>Who will assume Frida's role?</i> -{" "}
        <span className="text-muted-foreground">Amalina</span>
      </TypographyP>
    </>
  );
}
