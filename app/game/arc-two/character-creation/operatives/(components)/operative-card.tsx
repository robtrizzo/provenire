import { Card } from "@/components/ui/card";
import { TypographyH3 } from "@/components/ui/typography";
import OpPortrait from "./operative-portrait";
import Link from "next/link";
export default function OperativeCard({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={"operatives/" + name.toLocaleLowerCase()} className="group">
      <Card className="py-0 pr-2 px-2 lg:px-0 pb-2 lg:pb-0 group-hover:border-fuchsia-700">
        <div className="flex flex-col lg:flex-row gap-2">
          <OpPortrait
            width={200}
            height={200}
            name={name}
            className="lg:rounded-l-lg mx-auto lg:mx-0"
          />
          <div>
            <TypographyH3 className="font-cyber">{name}</TypographyH3>
            {children}
          </div>
        </div>
      </Card>
    </Link>
  );
}
