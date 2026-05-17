import { TypographyP } from "@/components/ui/typography";
export default function Rupture() {
  return (
    <>
      {/* <TypographyP>
        Bones want to grow. It&apos;s easiest to affect your own. Then someone
        else&apos;s bones. Hardest is bone which has been separated from the
        body. And at some arbitrary point, bone becomes ivory - and ivory is
        beyond your power to affect.
      </TypographyP> */}
      <TypographyP>
        You may spend <b className="text-blue-500">1 Water</b> to sever a few of
        the invisible forces which keep your bones contained within the borders
        of your flesh. They burst out into (choose one of): <i>claws</i>,{" "}
        <i>spines</i>, <i>horns</i>, and <i>plates</i>. Take a{" "}
        <b>level 2 harm: ruptures</b>.
      </TypographyP>
      <TypographyP>
        Performing this on someone else is markedly harder, it costs an
        additional <b className="text-blue-500">1 Water</b>. Rathi beasts are
        even harder still, requiring you also <b>push yourself</b>.
      </TypographyP>
    </>
  );
}
