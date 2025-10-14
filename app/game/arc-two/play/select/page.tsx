import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import {
  getAllCharacters,
  getAllCharactersForUser,
} from "@/handlers/characters";
import { checkAuth } from "@/lib/auth";
import { CharacterV2 } from "@/types/game";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const { session, error } = await checkAuth("player");
  if (error) redirect("/signin");

  const characters =
    session.user.role === "admin"
      ? await getAllCharacters()
      : await getAllCharactersForUser(session.user.id);

  return (
    <div>
      <Breadcrumbs />
      <TypographyH1>Select a Character</TypographyH1>
      <div className="flex flex-wrap gap-2">
        {characters.map((c, idx) => {
          const character = c as unknown as CharacterV2;
          return (
            <CharacterCard character={character} key={character.name + idx} />
          );
        })}
      </div>
    </div>
  );
}

async function CharacterCard({ character }: { character: CharacterV2 }) {
  return (
    <Link
      href={`${character.id || "#"}`}
      className="relative w-56 h-24 rounded-md border-[1px] border-border"
    >
      {character.portrait && (
        <Image
          src={character.portrait}
          alt="character portrait"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 224px) 100vw, 50vw"
          className="z-0 rounded-md"
        />
      )}
      <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-opacity-30 hover:cursor-pointer transition-all duration-300">
        <b className="text-lg">{character.name}</b>
      </div>

      {character.version === 2 ? (
        <div className="absolute bottom-0 right-0 z-20 rounded-full h-8 min-w-8 bg-linear-45 from-black to-slate-600 border-[1px] border-border flex items-center justify-center px-2">
          <code className="text-xs">v{character.version || 1}</code>
        </div>
      ) : (
        <div className="absolute bottom-0 right-0 z-20 rounded-full h-8 min-w-8 bg-linear-45 from-black to-red-950 border-[1px] border-border flex items-center justify-center px-2">
          <code className="text-xs text-red-500 font-bold">
            <TriangleAlert className="inline-flex" size={14} /> incompatible
            version: v{character.version || 1}
          </code>
        </div>
      )}
    </Link>
  );
}
