import { BorderBeam } from "@/components/magicui/border-beam";
import { Card } from "@/components/ui/card";
import { TypographyH1 } from "@/components/ui/typography";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="p-6">
      <Card className="max-w-2xl py-18 mb-12 flex flex-col items-center justify-center mx-auto">
        <TypographyH1 className="text-2xl font-bold mb-4">
          Crucible
        </TypographyH1>
      </Card>
      <Link href="/game/arc-one">
        <Card className="max-w-2xl py-18 mb-12 flex flex-col items-center justify-center mx-auto">
          <TypographyH1 className="text-2xl font-bold mb-4">
            Arc One: the Steel Trap
          </TypographyH1>
        </Card>
      </Link>
      <Link href="/game/arc-two">
        <Card className="max-w-2xl py-18 mb-12 flex flex-col items-center justify-center mx-auto relative">
          <TypographyH1 className="text-2xl font-bold mb-4 box-reflect font-cyber">
            Arc Two: Root
          </TypographyH1>
          <BorderBeam duration={8} size={100} />
        </Card>
      </Link>
    </div>
  );
}
