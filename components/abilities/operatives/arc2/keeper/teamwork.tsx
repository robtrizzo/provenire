import { TypographyP } from "@/components/ui/typography";
export default function Teamwork() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        <div className="inline-block">
          <div className="flex items-center gap-2">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>{" "}
        bond or better with every teammate
      </span>
      <TypographyP>
        <span className="font-cyber">Keeper</span> can spend the simulation
        searching for the best way to leverage everyone&apos;s strengths. Rather
        than search for the highest percentage good outcome, they trust the team
        to see the plan through. When <span className="font-cyber">Keeper</span>{" "}
        does this, they only grant no <b>simulation die</b>, but the next three
        times a teammate <b>assists</b> or <b>pushes themself</b>, it costs no{" "}
        <b>stress</b>.
      </TypographyP>
    </>
  );
}
