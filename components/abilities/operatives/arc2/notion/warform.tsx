import { TypographyP } from "@/components/ui/typography";
export default function Warform() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Beast Within
      </span>
      <TypographyP>
        No <span className="font-cyber">Notion</span> has ever managed this
        before. Hypothetically once you&apos;ve gained full control of{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span>, you can trigger
        its full warform: a titanic mass of entropic metal and flesh capable of
        reshaping into whatever appendage may best cleave its foes.
      </TypographyP>
      <TypographyP>
        To assume full warform, <b>mark a condition</b> and <b>+6 heat</b>.
      </TypographyP>
    </>
  );
}
