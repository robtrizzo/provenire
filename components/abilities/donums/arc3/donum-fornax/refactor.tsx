import { TypographyP } from "@/components/ui/typography";
export default function Refactor() {
  return (
    <>
      <TypographyP>
        You may reorganize an object&apos;s parts into another configuration so
        long as its material proportions remain the same. If done in the heat of
        the moment, it is your choice of <i>imprecise</i> or <i>slow</i>. If the
        object is larger than handheld or held by someone else, spend{" "}
        <b className="text-red-500">1 Blood</b>.
      </TypographyP>
      <TypographyP>
        Objects others hold which contain any amount of{" "}
        <b className="text-mauve-500">Adamantine</b> are immune to your power.
      </TypographyP>
    </>
  );
}
