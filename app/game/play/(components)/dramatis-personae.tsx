import { Separator } from "@/components/ui/separator";
import { TypographyH4 } from "@/components/ui/typography";
import NamePortrait from "./name-portrait";

export default function DramatisPersonae() {
  return (
    <>
      <div>
        <div className="">
          <TypographyH4 className="text-orange-700 text-center">
            Dayshift
          </TypographyH4>
          <Separator className="mt-2 mb-4 bg-orange-700" />
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <NamePortrait name="Drusa" s3 pc />
            <NamePortrait name="Nail" s3 pc />
            <NamePortrait name="Malgus Veradun" s3 pc />
            <NamePortrait name="Merit" s3 pc />
          </div>
        </div>
      </div>
      <div>
        <TypographyH4 className="text-indigo-700 text-center">
          Nightshift
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-indigo-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Twenty-One" s3 pc />
          <NamePortrait name="Aika Drak" s3 pc />
          <NamePortrait name="Bessemer" />
          <NamePortrait
            name="Lilya Amati"
            src="https://provenire.s3.us-east-1.amazonaws.com/pc-art/Lilya Shirin Prisca Amati"
          />
          <NamePortrait name="Von" s3 pc />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-emerald-700 text-center">
          Laborers
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-emerald-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Rhima" s3 />
          <NamePortrait name="Galin" s3 />
          <NamePortrait name="Frax" s3 />
          <NamePortrait name="Donios" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-amber-700 text-center">
          The Bends
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-amber-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait
            name="Lilya Amati"
            src="https://provenire.s3.us-east-1.amazonaws.com/pc-art/Lilya Shirin Prisca Amati"
          />
          <NamePortrait name="Quarrel" />
          <NamePortrait name="Lio" s3 />
          <NamePortrait name="Kent" s3 />
          <NamePortrait name="Gaila the Daft" />
          <NamePortrait name="Audo the Gorger" s3 />
          <NamePortrait name="Hellet" s3 />
          <NamePortrait name="Gelimer" s3 />
          <NamePortrait name="Alma" s3 />
          <NamePortrait name="Nimund" s3 />
          <NamePortrait name="Lorel" s3 />
          <NamePortrait name="Miteri" />
          <NamePortrait name="Kian" />
          <NamePortrait name="Bran" s3 />
          <NamePortrait name="Gideon" s3 />
          <NamePortrait name="Theo" s3 />
          <NamePortrait name="Hrodulfr" />
          <NamePortrait name="Adosinda" />
          <NamePortrait name="Tan" />
          <NamePortrait name="Shiro" />
          <NamePortrait name="Suba" />
          <NamePortrait name="Isaac" />
          <NamePortrait name="Rhima" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Gorger&apos;s Sommoliers
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Audo the Gorger" s3 />
          <NamePortrait name="Hellet" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-amber-700 text-center">
          Stairwell
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-amber-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Ash Aalart" s3 />
          <NamePortrait name="Sigsvult" s3 />
          <NamePortrait name="Hichem" s3 />
          <NamePortrait name="Warner" s3 />
          <NamePortrait name="Cyrus" s3 />
          <NamePortrait name="Adwil" s3 />
          <NamePortrait name="Wess the Shark" s3 />
          <NamePortrait name="Svintha the Crumber" s3 />
          <NamePortrait name="Naric the Swindler" />
          <NamePortrait name="Borani" s3 />
          <NamePortrait
            name="Inga"
            src="https://provenire.s3.us-east-1.amazonaws.com/npc-art/inga.jpg"
          />
          <NamePortrait name="Tovarus" s3 />
          <NamePortrait name="Cassian" s3 />
          <NamePortrait name="Kuni the Rover" dead s3 />
          <NamePortrait name="Lorya" s3 />
          <NamePortrait name="Mori" />
          <NamePortrait name="Kaethe" />
          <NamePortrait name="Buffy" />
          <NamePortrait name="Melisande" />
          <NamePortrait name="Ivid" />
          <NamePortrait name="Rodulf" />
          <NamePortrait name="Sidar" s3 dead />
          <NamePortrait name="Dunny" />
          <NamePortrait name="Darius Azad" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          The Youngers
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Warner" s3 />
          <NamePortrait name="Cyrus" s3 />
          <NamePortrait name="Sidar" s3 dead />
          <NamePortrait name="Gabe" />
          <NamePortrait name="Darius Azad" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-amber-700 text-center">
          Lofts
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-amber-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Twenty-One" s3 pc />
          <NamePortrait name="Aika Drak" s3 pc />
          <NamePortrait name="Drusa" s3 pc />
          <NamePortrait name="Nail" s3 pc />
          <NamePortrait name="Malgus Veradun" s3 pc />
          <NamePortrait name="Von" s3 pc />
          <NamePortrait name="Sire Ciber" s3 />
          <NamePortrait name="Moore" s3 />
          <NamePortrait name="Nichros Perydark" s3 />
          <NamePortrait name="Laramie Black" s3 />
          <NamePortrait name="Yewin" s3 />
          <NamePortrait name="Zamza Veradun" />
          <NamePortrait name="Noirax Veradun" />
          <NamePortrait name="Venee Palen" s3 />
          <NamePortrait name="Pachni" />
          <NamePortrait name="Kasr" />
          <NamePortrait name="Amalina the Crow" s3 />
          <NamePortrait name="Naaza" s3 />
          <NamePortrait name="Kerrac" s3 />
          <NamePortrait name="Riks the Rat" />
          <NamePortrait
            name="Gnaeus"
            src="https://provenire.s3.us-east-1.amazonaws.com/npc-art/gnaeus.jpg"
          />
          <NamePortrait
            name="Hamlin"
            src="https://provenire.s3.us-east-1.amazonaws.com/npc-art/hamlin.jpg"
          />
          <NamePortrait name="Wilgefort" s3 />
          <NamePortrait name="Seperi" s3 />
          <NamePortrait name="Ardaric" />
          <NamePortrait name="Theodora" />
          <NamePortrait name="Elisaweta" />
          <NamePortrait name="Jeanne" />
          <NamePortrait name="Melle" />
          <NamePortrait name="Hana" />
          <NamePortrait name="Gran" />
          <NamePortrait name="Alexi" />
          <NamePortrait name="Rodric" />
          <NamePortrait name="Flynn" />
          <NamePortrait name="Luys" />
          <NamePortrait name="Frax" s3 />
          <NamePortrait name="Donios" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Moore&apos;s
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Moore" s3 />
          <NamePortrait name="Malgus Veradun" s3 pc />
          <NamePortrait name="Nichros Perydark" s3 />
          <NamePortrait name="Laramie Black" s3 />
          <NamePortrait name="Yewin" s3 />
          <NamePortrait name="Zamza Veradun" />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-amber-700 text-center">
          Fab Floor
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-amber-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Merit" s3 pc />
          <NamePortrait name="Bessemer" />
          <NamePortrait name="Lester Aurus" />
          <NamePortrait name="Minamo" s3 />
          <NamePortrait name="Enzo" s3 />
          <NamePortrait name="Seb" s3 />
          <NamePortrait name="Nadia" s3 />
          <NamePortrait name="Veria" s3 />
          <NamePortrait name="Malix" s3 />
          <NamePortrait name="Gisava the Bully" />
          <NamePortrait name="Felix the Facetious" s3 />
          <NamePortrait name="Lorin" />
          <NamePortrait
            name="Cyrus"
            src="https://provenire.s3.us-east-1.amazonaws.com/npc-art/cyrus_enforcer.png"
          />
          <NamePortrait name="Radegond the Stalker" />
          <NamePortrait name="Duara the Thinblood" s3 />
          <NamePortrait name="Utthas" s3 />
          <NamePortrait name="Rasha of the machines" />
          <NamePortrait name="Geleswin" s3 />
          <NamePortrait name="Gisa" s3 />
          <NamePortrait name="Shal" />
          <NamePortrait name="Finn" s3 />
          <NamePortrait name="Oza Kriche" s3 />
          <NamePortrait name="Sara" s3 />
          <NamePortrait name="Rasha" />
          <NamePortrait name="Naoko" />
          <NamePortrait name="Tsuji" />
          <NamePortrait name="Conrad" />
          <NamePortrait name="Nibel" />
          <NamePortrait name="Jyothi" />
          <NamePortrait name="Bardolph" />
          <NamePortrait name="Seth" />
          <NamePortrait name="Corrella" />
          <NamePortrait name="Gabe" />
          <NamePortrait name="Orin" />
          <NamePortrait name="Galin" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Scarbacks
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Enzo" s3 />
          <NamePortrait name="Veria" s3 />
          <NamePortrait name="Malix" s3 />
          <NamePortrait name="Oza Kriche" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Fighting Pits
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Hermesind" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Penal Pens
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Lanorella" s3 />
          <NamePortrait name="Hesperos" s3 />
          <NamePortrait name="Deritus" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Enforcers
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Bessemer" />
          <NamePortrait name="Kuni the Rover" dead s3 />
          <NamePortrait name="Svintha the Crumber" s3 />
          <NamePortrait name="Audo the Gorger" s3 />
          <NamePortrait name="Riks the Rat" />
          <NamePortrait name="Radegond the Stalker" />
          <NamePortrait name="Naric the Swindler" />
          <NamePortrait name="Gisava the Bully" />
          <NamePortrait name="Gaila the Daft" />
          <NamePortrait name="Hellet" s3 />
          <NamePortrait name="Borani" s3 />
          <NamePortrait name="Wess the Shark" s3 />
          <NamePortrait name="Kerrac" s3 />
          <NamePortrait name="Naaza" s3 />
          <NamePortrait name="Noirax Veradun" />
          <NamePortrait name="Felix the Facetious" s3 />
          <NamePortrait
            name="Cyrus"
            src="https://provenire.s3.us-east-1.amazonaws.com/npc-art/cyrus_enforcer.png"
          />
          <NamePortrait name="Ardaric" />
          <NamePortrait name="Kaethe" />
          <NamePortrait name="Lorya" s3 />
          <NamePortrait name="Jyothi" />
          <NamePortrait name="Bardolph" />
          <NamePortrait name="Rodric" />
          <NamePortrait name="Deritus" s3 />
          <NamePortrait name="Luys" />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Prowlers
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Marngil the Bear" s3 />
          <NamePortrait name="Amalina the Crow" s3 />
          <NamePortrait name="Ulf the Wolf" s3 />
          <NamePortrait name="Duara the Thinblood" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Marshalls
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Ridora the Ravenous" s3 />
          <NamePortrait name="Theodoric the Torturer" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-red-700 text-center">
          Commander
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-red-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Frida the Cruel" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-cyan-700 text-center">
          Archivists
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-cyan-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Drusa" s3 pc />
          <NamePortrait name="Von" s3 pc />
          <NamePortrait name="Alma" s3 />
          <NamePortrait name="Quarrel" />
          <NamePortrait name="Enzo" s3 />
          <NamePortrait name="Theodora" />
          <NamePortrait name="Elisaweta" />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-cyan-700 text-center">
          Machinists
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-cyan-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Aika Drak" s3 pc />
          <NamePortrait name="Geleswin" s3 />
          <NamePortrait name="Bran" s3 />
          <NamePortrait name="Malix" s3 />
          <NamePortrait name="Venee Palen" s3 />
          <NamePortrait name="Kasr" />
          <NamePortrait name="Nibel" />
          <NamePortrait name="Rodulf" />
          <NamePortrait name="Buffy" />
          <NamePortrait name="Tan" />
          <NamePortrait name="Alexi" />
          <NamePortrait name="Flynn" />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-cyan-700 text-center">
          Operators
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-cyan-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Nail" s3 pc />
          <NamePortrait name="Veria" s3 />
          <NamePortrait name="Theo" s3 />
          <NamePortrait name="Nimund" s3 />
          <NamePortrait name="Cassian" s3 />
          <NamePortrait name="Yewin" s3 />
          <NamePortrait name="Utthas" s3 />
          <NamePortrait name="Lorin" />
          <NamePortrait name="Conrad" />
          <NamePortrait name="Adosinda" />
          <NamePortrait name="Mori" />
          <NamePortrait name="Shiro" />
          <NamePortrait name="Sidar" s3 dead />
          <NamePortrait name="Corrella" />
          <NamePortrait name="Orin" />
          <NamePortrait name="Galin" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-cyan-700 text-center">
          Runners
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-cyan-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait
            name="Lilya Amati"
            src="https://provenire.s3.us-east-1.amazonaws.com/pc-art/Lilya Shirin Prisca Amati"
          />
          <NamePortrait name="Nadia" s3 />
          <NamePortrait name="Tovarus" s3 />
          <NamePortrait name="Adwil" s3 />
          <NamePortrait name="Kian" />
          <NamePortrait name="Seperi" s3 />
          <NamePortrait name="Sara" s3 />
          <NamePortrait name="Rasha" />
          <NamePortrait name="Melisande" />
          <NamePortrait name="Dunny" />
          <NamePortrait name="Darius Azad" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-cyan-700 text-center">
          Scrappers
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-cyan-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Merit" s3 pc />
          <NamePortrait name="Finn" s3 />
          <NamePortrait name="Oza Kriche" s3 />
          <NamePortrait
            name="Inga"
            src="https://provenire.s3.us-east-1.amazonaws.com/npc-art/inga.jpg"
          />
          <NamePortrait name="Lorel" s3 />
          <NamePortrait name="Naoko" />
          <NamePortrait name="Suba" />
          <NamePortrait name="Tsuji" />
          <NamePortrait name="Rhima" s3 />
        </div>
      </div>
      <div>
        <TypographyH4 className="text-cyan-700 text-center">
          Stokers
        </TypographyH4>
        <Separator className="mt-2 mb-4 bg-cyan-700" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <NamePortrait name="Twenty-One" s3 pc />
          <NamePortrait name="Wilgefort" s3 />
          <NamePortrait name="Gisa" s3 />
          <NamePortrait name="Seb" s3 />
          <NamePortrait name="Gideon" s3 />
          <NamePortrait name="Melle" />
          <NamePortrait name="Ivid" />
          <NamePortrait name="Seth" />
          <NamePortrait name="Isaac" />
          <NamePortrait name="Frax" s3 />
        </div>
      </div>
    </>
  );
}
