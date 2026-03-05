import { TypographyP } from "@/components/ui/typography";
export default function CloakAndDagger() {
  return (
    <>
      <TypographyP>
        When you use a disguise or other form of covert misdirection, gain{" "}
        <code>
          <b className="text-emerald-500">+1 push</b>
        </code>{" "}
        to confuse or deflect suspicion.
      </TypographyP>
      <TypographyP>
        When you throw off your disguise, the resulting surprise gives you the
        initiative in the situation. If in a combat, act outside of{" "}
        <b>initiative</b> order. This still counts as taking your turn.
      </TypographyP>
    </>
  );
}
