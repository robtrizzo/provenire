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
      <TypographyH1>The Churn</TypographyH1>
      <TypographyH2>Aftermath</TypographyH2>
      <TypographyH3>Rewards</TypographyH3>
      <TypographyH3>Heat</TypographyH3>
      <TypographyH2>Entanglements</TypographyH2>
      <TypographyP>
        Rivals, enemies, or annoying corporate execs will complicate your life
      </TypographyP>
      <TypographyH2>Taking a Breather</TypographyH2>
      <TypographyP>
        if you have a bond, hang with them to reduce some stress (gain heat?).
        or pay to reduce stress.
      </TypographyP>
      <TypographyH3>Overindulgence</TypographyH3>
      <TypographyH2>Agendas</TypographyH2>
      <TypographyP>
        These are Root&apos;s agendas. Maybe some new ones can get unlocked over
        time
      </TypographyP>
      <TypographyH3>Eliminate corporate rival</TypographyH3>
      <TypographyH3>Big public appearance</TypographyH3>
      <TypographyH3>Capture terrorist asset</TypographyH3>
      <TypographyH3>Bodyguard VIP</TypographyH3>
      <TypographyH3>R & R</TypographyH3>
      <TypographyH3>Internal investigation</TypographyH3>
    </>
  );
}
