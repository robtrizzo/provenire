import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function MonstrousAppetite() {
  return (
    <>
      <TypographyP>
        Your monstrous form has a frantic animalistic hunger which cannot be
        sated. But that doesn&apos;t mean you can&apos;t try. Gorge on{" "}
        <b className="text-red-500">4 fresh Blood</b> at once to increase the
        physical size of your transformation and gain{" "}
        <b className="text-red-500">+2 max Blood</b>. You gain an additional{" "}
        <b>condition</b>: <i>Insatiable</i>.
      </TypographyP>
      <TypographyBlockquote>
        <b>Insatiable</b>: your healing factor falters. Clear by indulging your
        appetite (<b>-2 blood</b> or <b>food</b>)
      </TypographyBlockquote>
    </>
  );
}
