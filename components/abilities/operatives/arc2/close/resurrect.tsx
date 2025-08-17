import { TypographyP } from "@/components/ui/typography";

export default function Resurrect() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Preemptive Release
      </span>
      <TypographyP>
        Only one <span className="font-cyber">Close</span> has ever managed to
        pull this off. And frankly, we don&apos;t even know how.{" "}
        <b>Harys&apos;s</b> best theory is they somehow used reflex neurons in
        their spinal column to store a delayed <i>&quot;survive&quot;</i>{" "}
        impluse. Even if you do somehow get this to work, try to keep it subtle.{" "}
        <span className="font-cyber">Close</span> is supposed to always make it
        out.
      </TypographyP>
      <TypographyP>
        To perform a self-resurrection, <b>mark a condition</b>. As long as a
        fist-sized chunk of you survives, you&apos;ll come back. When you do,
        you&apos;ll still be in bad shape: fill your <b>harm tracker</b>.
      </TypographyP>
    </>
  );
}
