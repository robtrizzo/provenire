import {
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import factions from "@/public/factions.json";
import FactionEntry from "@/components/faction-entry";
import ScornTable from "@/components/scorn-table";

export default function Carve() {
  return (
    <>
      <TypographyH3>Carve a path of connection and conversation</TypographyH3>
      <TypographyP>
        During The Churn, the crew is making deals and promises to acquire{" "}
        resources. These deals and promises are important to accomplish during
        Missions, or else the crew is going to get put in a tough spot.
      </TypographyP>
      <TypographyP>
        <b>Factions</b> can be community leaders, worker clans, or overseer
        packs. Each <b>faction</b> has its own agenda and will be working to
        accomplish it with or without the crew&apos;s help. Each <b>faction</b>{" "}
        also has a scorn track. This will increase if the crew fails to
        accomplish the task they promised to do. If the scorn track reaches 3,
        the crew can no longer make deals with that faction.
      </TypographyP>
      <TypographyP>
        The crew can only make deals with <b>factions</b> in regions of the
        factory that the crew has access to.
      </TypographyP>
      <TypographyP>
        Choose the faction to make a deal with. Gain the <b>faction&apos;s</b>{" "}
        payment up front in exchange for promising to accomplish a task related
        to the <b>faction&apos;s</b> agenda.
      </TypographyP>
      <TypographyH4>Factions</TypographyH4>
      <TypographyUnorderedList>
        {factions.map((f, i) => (
          <li key={i}>
            <FactionEntry faction={f} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH4>Scorn</TypographyH4>
      <TypographyP>
        If the crew doesn&apos;t accomplish the task, the <b>faction&apos;s</b>{" "}
        scorn track increases by 1 and the crew rolls on the Scorn table after
        the Misison. The result is determined by the faction&apos;s scorn and
        the die roll.
      </TypographyP>
      <ScornTable />
    </>
  );
}
