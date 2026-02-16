import { Card } from "@/components/ui/card";
import { TypographyH3 } from "@/components/ui/typography";
import Link from "next/link";
import RemembrancePortrait from "./remembrance-portrait";

export default function RemembranceCard({
  name,
  img,
  children,
}: {
  name: string;
  img: string;
  children?: React.ReactNode;
}) {
  return (
    <Card className="pt-0 pr-2 px-3 lg:px-0 pb-3 lg:pb-0 lg:pr-1 relative">
      <div className="flex flex-col lg:flex-row gap-2">
        <RemembrancePortrait
          width={200}
          height={200}
          img={img}
          className="lg:rounded-l-lg mx-auto lg:mx-0"
        />
        <div>
          <div className="flex">
            <Link href={"remembrances/" + name.toLocaleLowerCase()}>
              <TypographyH3 className="font-old hover:underline hover:decoration-orange-500">
                {name}
              </TypographyH3>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </Card>
  );
}
