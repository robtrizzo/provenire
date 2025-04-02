import { TypographyP } from "@/components/ui/typography";
export default function BrassCoils() {
  return (
    <TypographyP>
      Ignited blood flushes your muscles with fire and audacity. Spend{" "}
      <b className="text-red-500">1 Blood</b> to accomplish a feat of superhuman
      strength <b className="text-muted-foreground">OR</b> speed. Unless also
      activating <i>Bronze Bones</i>, the stress on your body is substantial:
      mark a <b>level 2 harm</b>.
    </TypographyP>
  );
}
