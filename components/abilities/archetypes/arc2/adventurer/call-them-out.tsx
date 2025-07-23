import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function CallThemOut() {
  return (
    <div>
      <TypographyP>
        When the Adventurer notices someone acting differently, they can draw
        attention to it and ask:
      </TypographyP>
      <TypographyUnorderedList>
        <li>What are your true feelings toward _?</li>
        <li>How long have you been hiding your part in _ scheme?</li>
      </TypographyUnorderedList>
      <TypographyP>
        If they answer, they mark <b>1 xp</b>. If they refuse, they mark{" "}
        <b>2 stress</b>.
      </TypographyP>
    </div>
  );
}
