import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import actions from "@/public/arc2/actions.json";
import ActionGrid from "./(components)/action-grid";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber">Actions</TypographyH1>
      <TypographyP>
        Actions come in two varieties: <b>Ego Actions</b> and{" "}
        <b>Codex Actions</b>. <b>Ego Actions</b> are skills and attributes which
        are yours. You learned them, developed them, remember them no matter the
        sleeve you&apos;re in. <b>Codex Actions</b> are one form or another of
        cyberware. This may take the form of a coritcal chip, genetic
        modifications, or other specialized hardware. Regardless of its form,
        Codex Actions may be swapped in and out just like any other kind of
        cyberware.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Overcorp</span> has a vested interest in
        its citizens being productive workers and contributing members of
        society. That&apos;s why <span className="font-cyber">Overcorp</span>{" "}
        engineers invented <span className="font-cyber">Skill Codexes</span> in
        the first place. But not all skills are judged appropriate for the
        general public. <span className="font-cyber">Overcorp</span> has curated
        lists of skills and knowledge which are restricted or forbidden from
        civilian access.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-muted-foreground text-sm">
        Actions marked with <span className="text-amber-500">*</span> cannot be
        selected as <b>ego actions</b> at the start of the game
      </TypographyBlockquote>
      <TypographyH2 className="font-cyber" id="basic">
        Basic Actions
      </TypographyH2>
      <span className="font-cyber text-sm text-muted-foreground">
        Judged safe for commercial markets
      </span>
      <ActionGrid actions={actions.Basic} className="mt-4" />
      <TypographyH2 className="font-cyber" id="specialized">
        Specialized Actions
      </TypographyH2>
      <span className="font-cyber text-sm text-muted-foreground">
        Judged risky or unnecessary for open civilian access
      </span>
      <ActionGrid actions={actions.Restricted} className="mt-4" />
      <TypographyH2 className="font-cyber" id="forbidden">
        Forbidden Actions
      </TypographyH2>
      <span className="font-cyber text-sm text-muted-foreground">
        Judged blasphemous or harmful for the empire
      </span>
      <ActionGrid actions={actions.Forbidden} className="mt-4" />
    </>
  );
}
