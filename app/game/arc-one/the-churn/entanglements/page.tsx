import {
  TypographyH1,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function Page() {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    redirect("/signin");
  }
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Rules", href: "/game/arc-one/core-system" },
          { name: "Churn", href: "/game/arc-one/the-churn" },
          { name: "Entanglements", href: "#" },
        ]}
      />
      <TypographyH1>Entanglements</TypographyH1>
      <TypographyP>
        The <b>Narrator</b> may choose to roll entanglements in the
        &quot;open&quot; or they may choose to roll it secretly. They may bring
        it into play immediately, or they may wait for a dramatic moment.
        <b>Entanglements</b> manifest fully before the PCs have a chance to
        avoid them. This is to simplify a complicated situation and make trouble
        for the characters. Each has a list of potential ways to deal with it.
        The Players may choose to make it a quick resolution or to dive deep
        into the scene.
      </TypographyP>
      <Table className="mt-8">
        <TableCaption>Entanglements</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 border-r-slate-800 border-r-[1px]">
              roll
            </TableHead>
            <TableHead className="w-20">Heat 0-3</TableHead>
            <TableHead className="w-20">Heat 4/5</TableHead>
            <TableHead className="w-20">Heat 6+</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              1-3
            </TableCell>
            <TableCell className="w-20">
              Gang Trouble or the Usual Suspects
            </TableCell>
            <TableCell className="w-20">Gang Trouble or Questioning</TableCell>
            <TableCell className="w-20">Flipped or Interrogation</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              4/5
            </TableCell>
            <TableCell className="w-20">Rivals or Factory Mishap</TableCell>
            <TableCell className="w-20">Reprisals or Factory Mishap</TableCell>
            <TableCell className="w-20">Dreamstorm or Show of Force</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              6
            </TableCell>
            <TableCell className="w-20">Cooperation</TableCell>
            <TableCell className="w-20">Show of Force</TableCell>
            <TableCell className="w-20">Arrest</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TypographyH4>Arrest</TypographyH4>
      <TypographyP>
        The overseers move in on one of the PCs to imprison them. They
        don&apos;t need evidence and they don&apos;t come alone, they often
        bring a gang of enforcers with them. Throw other workers under the bus
        and lose <b>goodwill</b> equal to <b>2 + wanted level</b>, hand your PC
        over (this clears your heat), or try to evade capture.
      </TypographyP>
      <TypographyH4>Cooperation</TypographyH4>
      <TypographyP>
        A friendly faction asks you for a favor. Agree to do it or sacrifice{" "}
        <b>4 rep</b> or incur <b>1 scorn</b> with them. If you don&apos;t have a
        friendly faction, you avoid entanglements right now.
      </TypographyP>
      <TypographyH4>Dreamstorm</TypographyH4>
      <TypographyP>
        A deadly natural disaster strikes the factory. The PCs and their loved
        ones are directly in its path. The players may choose to play out the
        scene or make a <b>resistance roll</b> in each attribute and narrate how
        they survive.
      </TypographyP>
      <TypographyH4>Factory Mishap</TypographyH4>
      <TypographyP>
        The factory&apos;s machinery in your home turn goes haywire. Acquire the
        services of an <b>archivist</b> and <b>machinist</b>, or deal with it
        yourself.
      </TypographyP>
      <TypographyH4>Flipped</TypographyH4>
      <TypographyP>
        One of your PC&apos;s rivals arranges for one of your contacts, patrons,
        clients, or group of workers to switch allegiances due to the{" "}
        <b>heat</b>
        on you. They&apos;re loyal to another faction now.
      </TypographyP>
      <TypographyH4>Gang Trouble</TypographyH4>
      <TypographyP>
        One of your gangs or cohorts causes trouble due to their flaws. You lose
        face (forfeit <b>goodwill</b> equal to your <b>wanted level</b>), make
        an example of one of the gang members, or face reprisals from the
        wronged party (incur <b>1 scorn</b>).
      </TypographyP>
      <TypographyH4>Interrogation</TypographyH4>
      <TypographyP>
        Enforcers round up one of the PCs to question them about the crew&apos;s
        crimes. Either you pay them off with <b>2 food</b> or they beat you up (
        <b>level 2 harm</b>) and you tell them what they want to know (
        <b>+3 heat</b>). You can resist each of thoe consequences separately.
      </TypographyP>
      <TypographyH4>Questioning</TypographyH4>
      <TypographyP>
        Enforcers grab an NPC member of the crew or one of the crew&apos;s
        contacts to question them about your crimes. Make a <b>fortune roll</b>{" "}
        to see how much they talk (<b>1-3: +2 heat, 4/5: +1 heat</b>), or pay
        them off with
        <b>1 food</b>.
      </TypographyP>
      <TypographyH4>Reprisals</TypographyH4>
      <TypographyP>
        An enemy faction makes a move against you (or a friend, contact, or
        friendly faction). Pay them (<b>1 food or 1 material</b>) per scorn you
        have with them as an apology, allow them to mess with you or yours, or
        fight back and show them who&apos;s boss.
      </TypographyP>
      <TypographyH4>Rivals</TypographyH4>
      <TypographyP>
        A neutral faction throws their weight around. They threaten you, a
        friend, a contact, or a friendly faction. Forfeit <b>1 rep</b> and{" "}
        <b>1 goodwill</b> or stand up to them and incur <b>1 scorn</b>.
      </TypographyP>
      <TypographyH4>Show of Force</TypographyH4>
      <TypographyP>
        A faction with whom you have a negative status with makes a move against
        you. Give them the territory they&apos;re after or fight back and they
        drop to <b>3 scorn</b>.
      </TypographyP>
      <TypographyH4>The Usual Suspects</TypographyH4>
      <TypographyP>
        Enforcers grab someone in the periphery of your crew. One player
        volunteers a bond as the most likely to be taken. Make a{" "}
        <b>bond roll</b>
        to find out if they resist questioning (
        <b>1-3: +2 heat, 4/5: level 2 harm</b>), or pay the enforcers off with{" "}
        <b>1 food</b>.
      </TypographyP>
    </>
  );
}
