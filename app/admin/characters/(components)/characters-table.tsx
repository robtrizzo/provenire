"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Character } from "@/types/game";
import Image from "next/image";
import DeleteCharacterButton from "./delete-character-button";
import { useState } from "react";
import AddToFilterButton from "./add-to-filter-button";
import { HardDriveDownload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CharactersTable({ characters }: { characters: Character[] }) {
  const [chars, setChars] = useState(characters);
  const removeCharacterCallback = (characterName: string) => {
    setChars(chars.filter((c) => c.name !== characterName));
  };
  return (
    <Table>
      <TableCaption>characters table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="border-r-slate-800 border-r-[1px]">
            img
          </TableHead>
          <TableHead className="border-l-slate-800 border-l-[1px]">
            name
          </TableHead>
          <TableHead className="border-l-slate-800 border-l-[1px]">
            player
          </TableHead>
          <TableHead className="border-l-slate-800 border-l-[1px]">
            last saved
          </TableHead>
          <TableHead className="border-l-slate-800 border-l-[1px]">
            actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {chars ? (
          chars.map((character: Character, idx: number) => (
            <TableRow key={character.name + idx}>
              <TableCell>
                {character.portrait && (
                  <Image
                    src={character.portrait}
                    alt="character-portrait"
                    height={50}
                    width={50}
                  />
                )}
              </TableCell>
              <TableCell>{character.name}</TableCell>
              <TableCell>
                {character.player
                  ? character.player
                  : character.key?.split(":")[1]}
              </TableCell>
              <TableCell>
                {character.updatedAt
                  ? new Date(character.updatedAt).toLocaleString()
                  : "unknown"}
              </TableCell>
              <TableCell className="flex gap-2">
                <Button variant="outline" size="icon">
                  <HardDriveDownload />
                </Button>
                <AddToFilterButton character={character} />
                <DeleteCharacterButton
                  character={character}
                  handleRemoveCharacter={removeCharacterCallback}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </TableBody>
    </Table>
  );
}
