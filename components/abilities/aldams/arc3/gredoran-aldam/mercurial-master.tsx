import { TypographyP } from "@/components/ui/typography";
export default function MercurialMaster() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> <i>Issa&apos;s Remembrance</i>,{" "}
        <i>Mercurial Skull</i>
      </span>
      <TypographyP>
        Once your mind is cool, it takes far less blood to sustain the
        crystalization of thought over a long period. While already in{" "}
        <i>Mercurial Skull</i>, you may spend{" "}
        <b className="text-red-500">1 Blood</b> each three days you wish to free
        your psyche from the rashness of your interior mind.
      </TypographyP>
      <TypographyP>
        You can put your full focus to longstanding intellectual tasks without
        tiring or becoming distracted by emotion. You are not affected by your{" "}
        <b>conditions</b>, though you also cannot clear them. When you leave
        this state, the suspended emotions come roaring back in force. Mark a{" "}
        <b>condition</b>.
      </TypographyP>
    </>
  );
}
