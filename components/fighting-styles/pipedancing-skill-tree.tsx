import { TypographyP } from "../ui/typography";

export default async function PipedancingSkillTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center max-w-[340px] md:max-w-none overflow-auto">
      <div className="flex flex-col">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Basic Movements
          </TypographyP>
        </div>
      </div>
      <div className="w-8 h-24 flex items-center justify-center">
        <div className="w-8 h-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="w-1 h-[180px] bg-muted-foreground" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Improvised Weaponry
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            The Dance
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Opportunist
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Acrobatic Surge
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            ???
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            ???
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
