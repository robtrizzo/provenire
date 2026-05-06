import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function Debt() {
  return (
    <>
      <TypographyP>
        Ancient Toran culture revolved around a dictate of honor. Each
        individual is the sum of the debts they have incurred to others and the
        honors they have earned from their deeds. Asking or reminding someone of
        their debts is dishonorable and incurred a debt. So the Torans honed
        their ability to read this from each other nonverbally.
      </TypographyP>
      <TypographyP>
        You always know if someone feels guilt. You may spend{" "}
        <b className="text-red-500">1 Blood</b> to enhance this sense and ask
        the <b>Narrator</b> one of the following questions. They must answer
        honestly.
      </TypographyP>
      <TypographyUnorderedList>
        <li>Who here feels the most guilt?</li>
        <li>Is the source of this person&apos;s guilt here?</li>
        <li>
          How could I assuage <span className="text-muted-foreground">OR</span>{" "}
          exasterbate their guilt?
        </li>
      </TypographyUnorderedList>
    </>
  );
}
