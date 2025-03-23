import { Cohort } from "@/types/game";

export default function CohortEntry({ cohort }: { cohort: Cohort }) {
  return (
    <span>
      <b>
        {cohort.name} ({cohort.clock})
      </b>{" "}
      <i className="text-muted-foreground">{cohort.traits.join(", ")}</i>
    </span>
  );
}
