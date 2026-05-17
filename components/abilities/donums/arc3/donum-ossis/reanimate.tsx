import { TypographyP } from "@/components/ui/typography";
export default function Reanimate() {
  return (
    <>
      <TypographyP>
        The forces which animate a human form are tactile and tantilizingly
        glimpseable. And utterly inscrutible. Though someone could be
        centuries-long dead, somehow the discarded flesh remembers. It retains
        vestiges of the life it lived. You may spend{" "}
        <b className="text-blue-500">2 Water</b> to reinvigorate the dicarded
        flesh with motion. You may choose to restore one of their: <i>talent</i>
        , <i>personality</i>, <i>loyalty</i>, or <i>love</i>. The rest is
        outside of your capability.
      </TypographyP>
      <TypographyP>
        The flesh remains in motion for one week before it requires{" "}
        <b className="text-blue-500">1 Water</b> to continue.
      </TypographyP>
    </>
  );
}
