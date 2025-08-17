import { TypographyP } from "@/components/ui/typography";

export default function OversizedWeaponry() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Controlled Launch
      </span>
      <TypographyP>
        The <span className="font-cyber">&quot;Manhandler&apos;s&quot;</span>{" "}
        sheer strength allows swinging and shooting weapons intended for sleeves
        ten times <span className="font-cyber">Facility&apos;s</span> size.
        Though as most <span className="font-cyber">Facilities</span> find out,
        the endoskeleton doesn&apos;s help correct balance. A single swing can
        result in lanching themself through a wall from the momentum shift.
      </TypographyP>
      <TypographyP>
        To account for this, skilled{" "}
        <span className="font-cyber">Facilities</span> have learned to wield an
        oversized weapon in each hand to act as counterweights. Just be careful
        not to overexert the soft tissues in your sleeve.
      </TypographyP>
    </>
  );
}
