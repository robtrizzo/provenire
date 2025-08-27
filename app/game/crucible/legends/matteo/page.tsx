import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Matteo&apos;s Descent</TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/desert.png`}
          alt="Matteo"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        A kindhearted soul unfit to live a lonesome life is damned to be a
        Relict by cruel chance. Forbidden from close bonds, he metes out a
        miserable existence doing his duty - until life has other plans. By
        sheer chance, he finds a new family and a love. His duty takes him away
        from her time and time again but they always meet again.
      </TypographyP>
      <TypographyP>
        And then life takes her from him. Brutally. Violently. No, it
        wasn&apos;t life that did this. People did this. To his dying day,
        Matteo made it his mission to kill every last person he could.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>Era One, Narscillia.</TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        Twisted and blackened soul bent on the nihilistic destruction of
        humanity. Will seek to demonstrate humanity&apos;s monstrosity - and to
        create it himself to fulfill his own vision of the world.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Survival and hunting skills. Incredible warrior. Indominable will.
        Knowledge of ancient Narscillia.
      </TypographyP>
    </>
  );
}
