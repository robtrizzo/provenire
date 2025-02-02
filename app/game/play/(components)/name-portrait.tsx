import Image from "next/image";

export default function NamePortrait({
  name,
  src,
}: {
  name?: string;
  src?: string;
}) {
  return (
    <div className="relative w-56 h-56 rounded-md border-[1px] border-border">
      {src && (
        <Image
          src={src}
          alt="character portrait"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 224px) 100vw, 50vw"
          className="z-0 rounded-md"
        />
      )}
      <div className="absolute group bottom-0 left-0 h-56 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/0 transition-all duration-300">
        <b className="text-lg group-hover:opacity-0 transition-all duration-300">
          {name || "???"}
        </b>
      </div>
    </div>
  );
}
