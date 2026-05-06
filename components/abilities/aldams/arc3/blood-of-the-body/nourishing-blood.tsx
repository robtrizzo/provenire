import { TypographyP } from "@/components/ui/typography";
export default function NourishingBlood() {
  return (
    <>
      <TypographyP>
        The body pulls vital nutrients from the world to perpetuate itself.
        These nutrients are still a mystery only the body knows the answer to.
        Excesses are flushed from the body; so rather than waste, extra
        nutrients are pulled into the blood and stored for later. Whenever you
        spend <b className="text-red-500">1 Blood</b>, tick your{" "}
        <b>healing clock</b> by <b>1</b>.
      </TypographyP>
    </>
  );
}
