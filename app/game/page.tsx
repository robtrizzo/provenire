import Donum from "@/components/ui/donum";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Introduction", href: "#" }]} />
      <div className="z-30 relative">
        <div
          className="relative top-0 w-full max-w-[800px] mx-auto"
          style={{ aspectRatio: "1/1" }}
        >
          <Image
            src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/logo_stylized-OJCarZDO1QJqm5BLGr2mj1pfbZAQYN.png"
            alt="room"
            layout="fill"
            objectFit="cover"
            className="rounded-xl opacity-30 z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
        </div>
        <div className="absolute top-0 z-30">
          <TypographyH1>Introduction to Provenire</TypographyH1>
          <TypographyP>
            The word <Donum>Provenire</Donum> is Latin, and has a cluster of
            meanings. To <b>derive</b> or <b>originate</b> from; to <b>come</b>{" "}
            from <b>an implied location</b>; to <b>descend</b> from; to{" "}
            <b>arise</b>; to <b>come forth</b>.
          </TypographyP>
          <TypographyP>
            <Donum>Provenire</Donum> is both a setting and a system. The system
            is a narrative-focused and rules-light system based heavily on{" "}
            <span className="italic">Blades in the Dark</span>,{" "}
            <span className="italic">Masks</span>,{" "}
            <span className="italic">Band of Blades</span>, and{" "}
            <span className="italic">Fellowship</span>. The setting is a world
            with very alien forces and natural laws at play, and barely
            understood by the people who live in it.
          </TypographyP>
          <Separator className="my-4" />
          <div className="flex flex-row mt-2">
            <Link href="/game/setting" className="ml-auto">
              <Button variant="outline">
                Setting <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
