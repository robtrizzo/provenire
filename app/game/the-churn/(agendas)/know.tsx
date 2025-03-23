import {
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Link from "next/link";
import cohorts from "@/public/cohorts.json";
import CohortEntry from "@/components/cohort-entry";

export default function Know() {
  return (
    <>
      <TypographyH3>Make them know you&apos;re not afraid</TypographyH3>
      <TypographyP>
        During The Churn, the crew is spreading word of their achievements to
        gain <b>rep</b>. The crew can spend <b>rep</b> to gain <b>gangs</b>
        and <b>cohorts</b> for the crew. Of course this all causes Heat if done
        recklessly.
      </TypographyP>
      <TypographyH4>Bragging Rights</TypographyH4>
      <TypographyP>
        The crew can choose to make claims of the crew&apos;s accomplishments to{" "}
        gain <b>rep</b>. First they <b>raise the stakes</b>. Then they make a
        roll and add rep according to the result: <b>1-3:</b> 0, <b>4-5:</b> 1,{" "}
        <b>6:</b> 2, <b>Critical:</b> 3.
      </TypographyP>
      <TypographyH4>Cohorts</TypographyH4>
      <TypographyP>
        First a Nail picks a gang or expert to recruit. They make a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        to pursue it. Once the clock is filled, the gang or expert is available.
        They can be recruited by spending <b>1 rep</b>. Once recruited, the gang
        or expert can be used to aid the crew in missions and downtime
        activities. If a gang or expert is killed or disbanded, the crew
        can&apos;t recruit them again. Each region of the factory has new gangs
        and experts to recruit.
      </TypographyP>
      <TypographyP>
        Instead of recruiting a new gang or expert, the Nail can start a new
        project to upgrade an existing gang. When an upgrade project is
        completed, the Nail can spend <b>1 rep</b> to remove a negative trait or
        add a positive trait to the gang. A full list of gang traits is{" "}
        <Link href="/game/appendix#gang-traits">
          <b className="underline text-red-500">here</b>
        </Link>
        .
      </TypographyP>
      <TypographyH4>Gangs (Fabrication)</TypographyH4>
      <TypographyUnorderedList>
        {cohorts.gangs.map((c, i) => (
          <li key={i}>
            <CohortEntry cohort={c} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH4>Experts (Fabrication)</TypographyH4>
      <TypographyUnorderedList>
        {cohorts.experts.map((c, i) => (
          <li key={i}>
            <CohortEntry cohort={c} />
          </li>
        ))}
      </TypographyUnorderedList>
    </>
  );
}
