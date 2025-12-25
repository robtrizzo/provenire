import Breadcrumbs from "./(components)/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Admin", href: "#" },
        ]}
      />
      <TypographyH1>Admin</TypographyH1>
      <Link href="/admin/users" className="ml-2 underline text-red-500">
        manage users
      </Link>
      <br />
      <Link href="/admin/characters" className="ml-2 underline text-red-500">
        manage characters
      </Link>
      <br />
      <Link
        href="/game/arc-one/surveys/results"
        className="ml-2 underline text-red-500"
      >
        arc one survey results
      </Link>
      <br />
      <Link
        href="/game/arc-two/surveys/state-of-the-game/results"
        className="ml-2 underline text-red-500"
      >
        arc two state of the game survey results
      </Link>
    </>
  );
}
