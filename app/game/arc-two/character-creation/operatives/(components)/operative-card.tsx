import { Card } from "@/components/ui/card";
import { TypographyH3 } from "@/components/ui/typography";
import OpPortrait from "./operative-portrait";
import Link from "next/link";
import CharacterOptionVotePopover from "./operative-vote-popver";
export default function OperativeCard({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  return (
    <Card className="py-0 pr-2 px-2 lg:px-0 pb-2 lg:pb-0 relative">
      <div className="flex flex-col lg:flex-row gap-2">
        <OpPortrait
          width={200}
          height={200}
          name={name}
          className="lg:rounded-l-lg mx-auto lg:mx-0"
        />
        <div>
          <div className="flex">
            <Link href={"operatives/" + name.toLocaleLowerCase()}>
              <TypographyH3 className="font-cyber hover:underline hover:decoration-fuchsia-500">
                {name}
              </TypographyH3>
            </Link>
          </div>
          {children}
        </div>
      </div>
      <CharacterOptionVotePopover name={name} />
    </Card>
  );
}
