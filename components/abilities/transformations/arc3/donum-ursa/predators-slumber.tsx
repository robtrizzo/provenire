import { TypographyP } from "@/components/ui/typography";
export default function PredatorsSlumber() {
  return (
    <>
      <TypographyP>
        The second heart in your chest is growing, though not nearly so fast as
        the rest of your body. It requires rest to regenerate your form. When
        you end your transformation, tick your <b>healing clock</b> by <b>2</b>.
      </TypographyP>
      <TypographyP>
        You may instead settle in for a long slumber. For each{" "}
        <b className="text-red-500">Blood</b> in your gut, you sleep for a day
        and tick your <b>healing clock</b> by <b>5</b>.
      </TypographyP>
    </>
  );
}
