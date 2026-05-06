import { TypographyP } from "@/components/ui/typography";
export default function OurJoy() {
  return (
    <>
      <TypographyP>
        Music is a portal into the soul. If you listen closely enough you can
        experience a piece of what the musician is sharing with you. Or perhaps
        that musician is you.
      </TypographyP>
      <TypographyP>
        In a moment of victory you can spend{" "}
        <b className="text-red-500">1 Blood</b> to open yourself to the emotions
        in the music surrounding you. If you do, recover <b>1 stress</b> per{" "}
        <b>condition</b> you have marked.
      </TypographyP>
      <TypographyP>
        If you make the music with <i>Let Loose the Soul</i>, you may clear a{" "}
        <b>condition</b> instead.
      </TypographyP>
    </>
  );
}
