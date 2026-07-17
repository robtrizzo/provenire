import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function BottomlessAppetite() {
  return (
    <>
      <TypographyP>
        A well fed bear grows. Gorge on <b className="text-red-500">4 Blood</b>{" "}
        at once to increase the physical size of your transformation and gain{" "}
        <b className="text-red-500">+2 max Blood</b>. You gain an additonal{" "}
        <b>condition</b>: <i>Insatiable</i>.
      </TypographyP>
      <TypographyBlockquote>
        <b>Insatiable</b>: your healing factor falters. Clear by indulging your
        appetite (<b>-2 blood</b> or <b>food</b>)
      </TypographyBlockquote>
    </>
  );
}
