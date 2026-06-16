import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import actions from "@/public/arc3/actions.json";
import { ActionV3 } from "@/types/arc3";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Actions</TypographyH1>
      <TypographyH2>Aptitudes</TypographyH2>
      <div className="mt-4 grid grid-cols-12 gap-1">
        {actions.Aptitudes.map((a, idx) => (
          <Action key={"apt" + idx} action={a} />
        ))}
      </div>
      <TypographyH2>Skills</TypographyH2>
      <div className="mt-4 grid grid-cols-12 gap-1">
        {actions.Skills.map((a, idx) => (
          <Action key={"sk" + idx} action={a} />
        ))}
      </div>
      <TypographyH2>Fighting Styles</TypographyH2>
      <div className="mt-4 grid grid-cols-12 gap-1">
        {actions.FightingStyles.map((a, idx) => (
          <Action key={"fs" + idx} action={a} />
        ))}
      </div>
    </>
  );
}

function Action({ action }: { action: { name: string; description: string } }) {
  return (
    <>
      <div className="col-span-4 md:col-span-2">
        <b className="text-red-500 text-lg">{action.name}</b>
      </div>
      <div className="col-span-8 md:col-span-10">
        <span className="text-md">{action.description}</span>
      </div>
    </>
  );
}
