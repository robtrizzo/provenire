import { TypographyP } from "@/components/ui/typography";
export default function Force() {
  return (
    <>
      <TypographyP>
        Once the interior fractal has been released, it has an incredibly larger
        space to expand into. At first, this was frightening and you felt
        yourself hold it back. You let go of that now. It will return to you.
      </TypographyP>
      <TypographyP>
        When you use another <b>Donum Aquae</b> ability, you may spend an
        additional <b className="text-blue-500">1 Water</b> to affect ten times
        the amount of water. Make a <b>1d fortune roll</b>; on a <b>1-5</b>,
        your use of the ability is your choice of <i>slow</i>{" "}
        <span className="text-muted-foreground">OR</span> <i>catastrophic</i>.
      </TypographyP>
    </>
  );
}
