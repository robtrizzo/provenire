import { TypographyP } from "@/components/ui/typography";
export default function Reap() {
  return (
    <>
      <TypographyP>
        The seasons can be long, and sometimes that glimmering potential can be
        too slow to yield its fruit. You may spend{" "}
        <b className="text-blue-500">1 Water</b> and walk the crops, running
        your hands over them and force their fruit to bear. This allows you to
        convert a crop's <b>yield</b> into <b>food</b> before the{" "}
        <b className="text-amber-500">Season of Harvest</b>. If you instead wait
        for the <b className="text-amber-500">Season of Harvest</b>, you
        increase the <b>yield</b> by <b>1</b> and nearby characters can spend{" "}
        <b>xp clocks</b> as if they had <b>trained</b>.
      </TypographyP>
    </>
  );
}
