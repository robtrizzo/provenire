import { TypographyP } from "@/components/ui/typography";
export default function SurpressAndRelease() {
  return (
    <>
      <TypographyP>
        Despite the body-wracking rage you already hold, you invite more into
        yourself. When it builds to its crescendo, it becomes physically
        harmful; though the release becomes all the sweeter. Gain{" "}
        <b className="text-blue-500">+1 max Water</b>.
      </TypographyP>
      <TypographyP>
        When you are at <b className="text-blue-500">max Water</b> and you are{" "}
        <i>Enraged</i>, mark a <b>level 1 harm: pressure</b>.
      </TypographyP>
      <TypographyP>
        When you empty your last <b className="text-blue-500">Water</b>, gain a
        burst of a superhuman strength and tick your <b>healing clock</b> by{" "}
        <b>3</b>.
      </TypographyP>
    </>
  );
}
