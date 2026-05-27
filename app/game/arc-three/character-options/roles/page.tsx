import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Roles</TypographyH1>
      <TypographyP>
        Like it or not, want it or not, the Crew has grown in size, influence,
        and responsibility. No one can manage it all alone; so everyone&apos;s
        got a job to do. These options determine which crucial aspect of the
        Crew&apos;s operations your character is responsible for.
      </TypographyP>
      <TypographyH2>Influence</TypographyH2>
      <TypographyP>
        In the wake of <b>Delivery</b>, the workers of Fabrication hold the Crew
        in incredibly high esteem. The members of the Crew can use this to grasp
        power in the loose coalition of communities that they helped form. Or,
        or they can echew the tangle of politics and focus their attention on
        the matters of the Crew.
      </TypographyP>
      <TypographyP>
        Your choice will shape the scope of your character&apos;s role in the
        Crew.
      </TypographyP>
      <TypographyH3>Councilor</TypographyH3>
      <TypographyP>
        <b>What you get:</b> political influence, access to coaliton resources
      </TypographyP>
      <TypographyP>
        <b>What you give:</b> time, effort, solitude, and beholden to coalitoin
        laws and obligations
      </TypographyP>
      <TypographyH3>Advisor</TypographyH3>
      <TypographyP>
        <b>What you get:</b> more independence, ability to be deeply influential
        in a single community, a voice at the table
      </TypographyP>
      <TypographyP>
        <b>What you give:</b> time, effort, ability to vote, beholden to
        coalition laws
      </TypographyP>
      <TypographyH3>Operative</TypographyH3>
      <TypographyP>
        <b>What you get:</b> complete independence, solitude, ability to focus
        on friends and family
      </TypographyP>
      <TypographyP>
        <b>What you give:</b> a chance to shape the coalition and communities
      </TypographyP>
      <TypographyH2>Responsibilities</TypographyH2>
      <TypographyH3>Seeker</TypographyH3>
      <TypographyP>
        Explore the Steel Trap for better routes between sectors, access to new
        ones, and establish supply lines for the resistance.
      </TypographyP>
      <TypographyH3>Wright</TypographyH3>
      <TypographyP>
        Cannibalize whatever machines and scrap you can get your hands on to
        invent and manufacture new gear for the resistance.
      </TypographyP>
      <TypographyH3>Shade</TypographyH3>
      <TypographyP>
        Infiltrate your enemies and learn their secrets. Gain access to their
        most heavily guarded structures.
      </TypographyP>
      <TypographyH3>Lock</TypographyH3>
      <TypographyP>
        Protect the resistance from threats both without and within.
      </TypographyP>
      <TypographyH3>Vault</TypographyH3>
      <TypographyP>
        Manage critical resources and establish supply chains to fuel the
        resistance's efforts.
      </TypographyP>
      <TypographyH3>Cipher</TypographyH3>
      <TypographyP>
        Peel back the layers of deceit heaped on you. Gain mastery of the
        machines.
      </TypographyP>
      <TypographyH3>Pact</TypographyH3>
      <TypographyP>
        Manage the many personalities and factions of the resistance. Keep them
        from turning on each other.
      </TypographyP>
      <TypographyH3>Scaffold</TypographyH3>
      <TypographyP>
        Turn this wretched factory into fortifications, community spaces, and
        homes.
      </TypographyP>
      <TypographyH3>Auger</TypographyH3>
      <TypographyP>
        Create a fighting force capable of striking further into enemy
        territory.
      </TypographyP>
    </>
  );
}
