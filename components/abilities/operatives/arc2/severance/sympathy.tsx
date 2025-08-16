import { TypographyP } from "@/components/ui/typography";
export default function Sympathy() {
  return (
    <>
      <TypographyP>
        This is what <span className="font-cyber">Overcorp</span> reps are
        really interested in studying. Can the{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> change minds?
        Yes and no. It&apos;s complicated. Short version is that the scope of
        the changes is limited to{" "}
        <span className="font-cyber">Severance&apos;s</span> emotional state.
      </TypographyP>
      <TypographyP>
        Slightly longer version: when{" "}
        <span className="font-cyber">Severance</span> activates{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> to project an
        emotional state onto a foe, they may either: force that foe to
        experience a powerful emotion which{" "}
        <span className="font-cyber">Severance</span> is experiencing{" "}
        <span className="text-muted-foreground text-sm">OR</span> prevent the
        formation of an emotion in the foe which{" "}
        <span className="font-cyber">Severance</span> is <i>not</i>{" "}
        experiencing.
      </TypographyP>
    </>
  );
}
