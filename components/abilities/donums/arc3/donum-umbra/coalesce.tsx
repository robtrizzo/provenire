import { TypographyP } from "@/components/ui/typography";
export default function Coalesce() {
  return (
    <>
      <TypographyP>
        You may spend <b className="text-blue-500">1 Water</b> to draw darkness
        and shadows from around you into a concentrated object you can take with
        you. The area which you draw from loses its shadows; lights become
        brighter; heat becomes more intense. You gain{" "}
        <b className="text-violet-500">2 Shadow</b>, each of which can be spent
        in place of <b className="text-blue-500">1 Water</b> on{" "}
        <b>Donum Umbra</b> abilities other than this one.
      </TypographyP>
      <TypographyP>
        <b className="text-violet-500">Shadow</b> lasts until the end of a
        scene. If not used by then, it bursts into <i>real darkness</i>.
      </TypographyP>
    </>
  );
}
