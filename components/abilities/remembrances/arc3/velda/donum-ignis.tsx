import { TypographyP } from "@/components/ui/typography";
export default function DonumIgnis() {
  return (
    <>
      <span className="text-fuchsia-500 text-sm font-old">
        The Gift of Fire
      </span>
      <TypographyP>
        Consuming <b>Kingwulf&apos;s</b> flame endowed Velda with an incredible
        power, though one which threatens to consume her. Love is her bastion
        against the sweltering fire. And now that she has passed the flame on to
        you, love must be your shield too.
      </TypographyP>
      <TypographyP>
        Whenever <b>time passes</b> and whenever you run out of{" "}
        <b className="text-red-500">blood</b>, you take a{" "}
        <b>level 2 harm: heartburn</b>. You may only <b>resist</b> this with{" "}
        <b>bonds</b>.
      </TypographyP>
    </>
  );
}
