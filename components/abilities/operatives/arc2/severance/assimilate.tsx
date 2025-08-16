import { TypographyP } from "@/components/ui/typography";
export default function Assimilate() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Marionette, Sympathy
      </span>
      <TypographyP>
        Part of the reflection paradigm with which{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> is designed
        involves a degree of emotional attunement. A{" "}
        <span className="font-cyber">Severance</span> that becomes practiced at
        this can in a way, reverse the typical flow of the cyberware and allow
        the emotions surrounding them to inform their choices.
      </TypographyP>
      <TypographyP>
        When activating <span className="font-cyber">&quot;Sympathy&quot;</span>{" "}
        to attune to surrounding emotions,{" "}
        <span className="font-cyber">Severance</span> gains{" "}
        <b className="text-blue-500">+2d</b> to blend in or ingratiate
        themselves with the people around them.
      </TypographyP>
    </>
  );
}
