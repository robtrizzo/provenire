import { Skull } from "lucide-react";
import Image from "next/image";

export default function NamePortrait({
  name,
  src,
  pc,
  s3,
  dead,
}: {
  name?: string;
  src?: string;
  s3?: boolean;
  pc?: boolean;
  dead?: boolean;
}) {
  if (!src && s3 && name) {
    const folder = !!pc ? "pc-art" : "npc-art";
    const fileName = !!pc
      ? name
      : name.toLocaleLowerCase().replaceAll(" ", "_");
    const ext = !!pc ? "" : ".png";
    src = `${process.env.NEXT_PUBLIC_S3_BUCKET}/${folder}/${fileName}${ext}`;
  }
  return (
    <div className="relative w-56 h-56 rounded-md border-[1px] border-border">
      {src && (
        <Image
          src={src}
          alt="character portrait"
          fill
          objectPosition="center"
          sizes="(max-width: 224px) 100vw, 50vw"
          className="z-0 rounded-md object-cover"
        />
      )}
      {dead ? (
        <div className="absolute group bottom-0 left-0 h-56 w-56 z-10 bg-red-950/70 rounded-md flex items-center justify-center hover:bg-black/0 transition-all duration-300">
          <div className="flex flex-col items-center justify-center gap-2 group-hover:opacity-0 transition-all duration-300">
            <b className="text-lg line-through">{name || "???"}</b>
            <Skull />
          </div>
        </div>
      ) : (
        <div className="absolute group bottom-0 left-0 h-56 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/0 transition-all duration-300">
          <b className="text-lg group-hover:opacity-0 transition-all duration-300">
            {name || "???"}
          </b>
        </div>
      )}
    </div>
  );
}
