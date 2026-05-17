import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import transformations from "@/public/arc3/transformations.json";
import { TransformationV3 } from "@/types/game";
import TransformationAbilities from "../(components)/transformations";

const donumPortentum: TransformationV3 = transformations.find(
  (t) => t.name === "Donum Portentum",
)!;

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Donum Porentum</TypographyH1>
      <TypographyP>
        <b>Donum Portentum</b> isn't a <b>Donum</b> in the way that others are;
        it covers a broad range of transformations which aren't adopted by
        Kingwulf into his empire. Because of this, <b>Donum Portentum</b>{" "}
        doesn't have a unified set of abilities. Instead, each character will
        have their own unique set.
      </TypographyP>
      <div className="mt-8">
        <TransformationAbilities
          parentName="donum-portentum"
          transformation={donumPortentum}
        />
      </div>
    </>
  );
}
