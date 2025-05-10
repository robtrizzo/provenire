"use server";
import Breadcrumbs from "../(components)/breadcrumbs";
import { Character } from "@/types/game";
import { getAllCharacters } from "@/app/api/characters/route";
import ManageCharacters from "./(components)/manage-characters";

export default async function Page() {
  const characters: Character[] = await getAllCharacters();
  characters.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Admin", href: "/admin" },
          { name: "Characters", href: "#" },
        ]}
      />
      <ManageCharacters characters={characters} />
    </>
  );
}
