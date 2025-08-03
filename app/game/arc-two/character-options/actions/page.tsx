import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Actions</TypographyH1>
      <TypographyP>
        Actions come in two varieties: <b>Ego Actions</b> and{" "}
        <b>Codex Actions</b>. <b>Ego Actions</b> are skills and attributes which
        are yours. You learned them, developed them, remember them no matter the
        sleeve you're in. <b>Codex Actions</b> are one form or another of
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
    </>
  );
}
