import { TypographyP } from "@/components/ui/typography";
export default function BronzeBones() {
  return (
    <TypographyP>
      Ignited blood tempers a region of your body to near-metal durability.
      Spend <b className="text-red-500">1 Blood</b> to reduce an incoming{" "}
      <b>harm</b> by 2 steps. Inexperienced practitioners run the risk of fusing
      their joints.
    </TypographyP>
  );
}
