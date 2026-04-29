import Breadcrumbs from "@/components/ui/breadcrumbs";
import TransformationAbilities from "../(components)/transformations";
import transformations from "@/public/arc3/transformations.json";
import { DonumV3 } from "@/types/game";

const donumRex: DonumV3 = transformations.find((t) => t.name === "Donum Rex")!;

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TransformationAbilities transformation={donumRex} />
    </>
  );
}
