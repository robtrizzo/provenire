"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  Brain,
  Handshake,
  Wheat,
  Anvil,
  Speech,
  Droplets,
  Droplet,
  Eye,
  Siren,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BuildupCheckboxes } from "@/components/buildup-checkboxes";

export default function Page() {
  const [tab, setTab] = useState("character");

  const [heat, setHeat] = useState(0);
  const [wanted, setWanted] = useState(0);

  const [food, setFood] = useState(0);
  const [materials, setMaterials] = useState(0);

  useEffect(() => {
    if (window === undefined) return;
    // read the hash and set the tab
    const hash = window.location.hash;
    if (hash && ["crew", "character"].includes(hash.substring(1))) {
      setTab(hash.substring(1));
    }
  }, []);
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Play", href: "#" }]} />
      <Tabs
        defaultValue="character"
        value={tab}
        className="w-full my-3 mx-auto"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="character"
            onClick={() => {
              setTab("character");
              // save the tab to the hash
              window.location.hash = "character";
            }}
          >
            Character
          </TabsTrigger>
          <TabsTrigger
            value="crew"
            onClick={() => {
              setTab("crew");
              // save the tab to the hash
              window.location.hash = "crew";
            }}
          >
            Crew
          </TabsTrigger>
        </TabsList>
        <TabsContent value="character" className="w-full"></TabsContent>
        <TabsContent value="crew" className="w-full">
          <div className="grid w-full grid-cols-1 md:grid-cols-4">
            <div>
              <div className="">
                <TypographyH4 className="text-orange-700 text-center">
                  Dayshift
                </TypographyH4>
                <Separator className="mt-2 mb-4 bg-orange-700" />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                </div>
              </div>
            </div>
            <div className="col-span-2 px-2">
              <TypographyH4 className="text-center">CREW NAME</TypographyH4>
              <Separator className="mt-2 mb-4" />

              <div className="flex justify-between items-center flex-wrap">
                <div className="flex items-center gap-2">
                  <Eye className="text-orange-500" />
                  <BuildupCheckboxes
                    max={9}
                    current={heat}
                    numDisabled={0}
                    onChange={(n) => {
                      setHeat(n);
                    }}
                    clearPosition="end"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Siren className="text-rose-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={wanted}
                    numDisabled={0}
                    onChange={(n) => {
                      setWanted(n);
                    }}
                    clearPosition="end"
                  />
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Wheat className="text-amber-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={food}
                    numDisabled={3}
                    onChange={(n) => {
                      setFood(n);
                    }}
                    clearPosition="end"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Anvil className="text-violet-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={materials}
                    numDisabled={3}
                    onChange={(n) => {
                      setMaterials(n);
                    }}
                    clearPosition="end"
                  />
                </div>
              </div>
              <Separator className="my-4" />

              <div className="flex items-center flex-wrap gap-2 my-2">
                <ResourceBox>
                  <Brain className="text-teal-500" />{" "}
                  <TypographyP>Intel</TypographyP>
                </ResourceBox>
                <ResourceBox>
                  <Handshake className="text-fuchsia-500" />{" "}
                  <TypographyP>Goodwill</TypographyP>
                </ResourceBox>
                <ResourceBox>
                  <Wheat className="text-amber-500" />{" "}
                  <TypographyP>Food</TypographyP>
                </ResourceBox>
                <ResourceBox>
                  <Anvil className="text-violet-500" />{" "}
                  <TypographyP>Materials</TypographyP>
                </ResourceBox>
                <ResourceBox>
                  <Speech className="text-lime-500" />{" "}
                  <TypographyP>Rep</TypographyP>
                </ResourceBox>
                <ResourceBox>
                  <Droplets className="text-red-500" />{" "}
                  <TypographyP>Blood</TypographyP>
                </ResourceBox>
                <ResourceBox>
                  <Droplet className="text-blue-500" />{" "}
                  <TypographyP>Water</TypographyP>
                </ResourceBox>
                <ResourceBox>
                  <Eye className="text-orange-500" />{" "}
                  <TypographyP>Heat</TypographyP>
                </ResourceBox>
                <ResourceBox>
                  <Siren className="text-rose-500" />{" "}
                  <TypographyP>Wanted</TypographyP>
                </ResourceBox>
              </div>
            </div>
            <div>
              <TypographyH4 className="text-indigo-700 text-center">
                Nightshift
              </TypographyH4>
              <Separator className="mt-2 mb-4 bg-indigo-700" />
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

function ResourceBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-solid border-text-secondary border-2 box-border py-2 px-4 rounded-md">
      {children}
    </div>
  );
}
