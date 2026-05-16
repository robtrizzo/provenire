import { TypographyP } from "@/components/ui/typography";
export default function ArtOrWar() {
  return (
    <>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Issa&apos;s mind is at war with itself. In his heart of hearts he
        believes that weapons of war are not the answer to the world&apos;s
        problems. The world seems determined to prove otherwise.
      </TypographyP>
      <TypographyP>
        Issa has a six-piece <b>Dissonance clock</b> which starts with{" "}
        <b>three ticks</b>. If the clock ever becomes full, Issa&apos;s
        worldview is shattered and he gives in to the necessity of weaponry.
      </TypographyP>
      <TypographyP>
        You gain a post-mission question:{" "}
        <i>
          Were weapons (or would they have been) the answer to people&apos;s
          problems?
        </i>{" "}
        If yes, tick the <b>Dissonance clock</b>. Otherwise, clear a tick.
      </TypographyP>
    </>
  );
}
