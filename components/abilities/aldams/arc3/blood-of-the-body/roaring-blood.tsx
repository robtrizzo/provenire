import { TypographyP } from "@/components/ui/typography";
export default function RoaringBlood() {
  return (
    <>
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to temporarily
        dissolve the barrier dividing the inner and outer minds. Your inner
        molten mind takes command; you must act brazenly on one of your{" "}
        <b>conditions</b>. You gain{" "}
        <code className="font-bold text-emerald-500">+1 push</code> in this
        pursuit. If you attain catharsis, you may clear that <b>condition</b>.
      </TypographyP>
      <TypographyP>
        <i>Excited Blood&apos;s</i> effects are amplified during{" "}
        <i>Roaring Blood</i>. When both are over, mark a{" "}
        <b>level 1 permanent harm: hungry</b>.
      </TypographyP>
    </>
  );
}
