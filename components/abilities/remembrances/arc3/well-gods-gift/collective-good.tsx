import { TypographyP } from "@/components/ui/typography";
export default function CollectiveGood() {
  return (
    <>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Happiness and good life are only possible when working to the betterment
        of your community. We don&apos;t get to choose the role we play; life
        does that. But by industrious dedication to that role, you can be one
        more factor blazing the trail for the next generation.
      </TypographyP>
      <TypographyP>
        <i>
          What is your role in the <b>Crew</b>? In <b>Fabrication</b>? In the{" "}
          <b>rebellion</b>?
        </i>{" "}
        At the end of <b>downtime</b>, ask yourself{" "}
        <i>&ldquo;Have I played my role?&rdquo;</i> If yes, <b>mark 1xp</b>.
      </TypographyP>
    </>
  );
}
