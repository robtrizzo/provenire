import { TypographyP } from "@/components/ui/typography";
export default function ForsakenFlame() {
  return (
    <>
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to warp existing
        flames into vestiges of <b>Kingwulf&apos;s</b> flame. For each
        individual, if they love someone in the scene{" "}
        <i className="text-muted-foreground">OR</i> if someone in the scene
        loves them, they are fortified against the worst licks of the heat. If
        they find themselves loveless, this flame burns blue and green with heat
        for them.
      </TypographyP>
      <TypographyP>
        <i>Blazing</i>: despite love&apos;s cradle, hatred flares His flame. If
        someone in the scene hates you, no amount of love can protect you from
        the vile heat.
      </TypographyP>
    </>
  );
}
