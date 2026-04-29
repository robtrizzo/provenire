import { TypographyP, TypographyBlockquote } from "@/components/ui/typography";
export default function GrandAppetite() {
  return (
    <>
      <TypographyP>
        A well fed wolf grows. Gorge on <b className="text-red-500">3 Blood</b>{" "}
        at once to increase the physical size of your transformation and gain{" "}
        <b className="text-red-500">+1 max Blood</b>. You gain an additional{" "}
        <b>condition</b>: <i>Insatiable</i>.
      </TypographyP>
      <TypographyBlockquote>
        <b>Insatiable</b>: your healing factor falters. Clear by indulging your
        appetite (<b>-2 blood</b> or <b>food</b>)
      </TypographyBlockquote>
    </>
  );
}
