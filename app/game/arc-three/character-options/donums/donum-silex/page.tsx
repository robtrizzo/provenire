import Breadcrumbs from "@/components/ui/breadcrumbs";
import DonumAbilities from "../(components)/donum";
import donums from "@/public/arc3/donums.json";
import { DonumV3 } from "@/types/game";

const donumSilex: DonumV3 = donums.find((d) => d.name === "Donum Silex")!;

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <DonumAbilities donum={donumSilex} />
    </>
  );
}
