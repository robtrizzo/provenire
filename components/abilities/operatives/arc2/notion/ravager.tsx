import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import Clock from "@/components/clock";
import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function Ravager() {
  return (
    <>
      <TypographyP>
        Rumor is there hasn&apos;t been more than three{" "}
        <span className="font-cyber">Notions</span> before you; rumor is the
        sleeve consumed the last person who wore it. It&apos;s a hulking thing,
        nearly as large as a{" "}
        <span className="font-cyber">Beasttech Pride Hide</span>. It speaks to
        you.
      </TypographyP>
      <div className="my-2">
        <i className="text-muted-foreground">I want to feed</i>
      </div>
      <TypographyP>
        Why is a sleeve talking to you? And <i>why the fuck</i> is that the sort
        of thing it says? <b>Vakr</b>,{" "}
        <span className="font-cyber">Root&apos;s</span> narrative director has
        some answers on that:
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-sm">
        I&apos;ve taken the liberty of installing a persona into
        &quot;Ravager.&quot; It&apos;s like a starved war beast, you see. You
        have to tame it and put it on a leash. Only let it out when you require
        its strength. For realism! Now you have some real internal struggle
        which will come through brilliantly on camera.
      </TypographyBlockquote>
      <TypographyP>
        And that&apos;s how you, <span className="font-cyber">Notion</span>, are
        the only safety measure keeping in check the most dangerous, most
        illegal warsleeve ever constructed. Speaking of illegal,{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span> is being hunted.
        Or, will be hunted once its noticed by{" "}
        <span className="font-cyber">Overcorp</span>. The Hunt is tracked by a{" "}
        <b>heat tracker</b>{" "}
        <span className="inline-flex">
          <BuildupCheckboxes max={6} current={0} />
        </span>{" "}
        and <b>hunt clock</b>{" "}
        <span className="inline-flex">
          <Clock height={20} width={20} max={4} current={0} clickable={false} />
        </span>
        .
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Notion</span> may partially manifest for{" "}
        <b>+1 heat</b>. Razor claws, giant wings, steel-snapping jaws, whatever
        horrors your mind can conjure. Just for a moment though, else too many
        see.
      </TypographyP>
      <TypographyP>
        At the end of missions, <b>-1 heat</b>. If there are no living witnesses
        to <span className="font-cyber">&quot;Ravager&quot;</span>,{" "}
        <b>-1 heat</b>.
      </TypographyP>
    </>
  );
}
