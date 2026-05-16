import { TypographyP } from "@/components/ui/typography";
export default function AnimalEmpath() {
  return (
    <>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        As a <b>downtime activity</b> you can spend <b>1 Food</b> and care for
        an animal. If you do, <b>clear a condition</b>.
      </TypographyP>
      <TypographyP>
        You may form <b>bonds</b> with animals. When you do, you form an
        empathic connection with which emotions can be transmitted.
      </TypographyP>
    </>
  );
}
