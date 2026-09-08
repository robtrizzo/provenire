"use client";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import RemembrancePortrait from "../(components)/remembrance-portrait";
import ClockCost from "@/components/clock-cost";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old mb-2">
            Well God&apos;s Gift
          </TypographyH1>
          <span className="text-muted-foreground">
            Kilder, Era One, Two, and post cataclysm
          </span>
          <TypographyP>
            Instead of a single legendary figure, the Well God has decided to
            show you one hundred ordinary lives. Hunters, warriors, weavers;
            sisters, brothers, parents, children; hale and ill; villain and
            hero. Individuals each with their own desires, dreams, and ultimate
            demises. The full spectrum of human experience in the Kilder
            swamplands, now one hundred hearts entertwined and beating in
            unison.
          </TypographyP>
          <TypographyH3>Psyches</TypographyH3>
          <TypographyP>
            From the multitude of lives, a few emerge from the rest, almost like
            avatars of common lived experiences.
          </TypographyP>
          <TypographyUnorderedList>
            <li>
              <b>
                Bushra{" "}
                <i className="text-muted-foreground font-normal mr-0.5">
                  &ldquo;good news&rdquo;
                </i>
                {"  "}
                Weaver:
              </b>{" "}
              brimming with love and pride for the many children she was
              entrusted to raise. Her values and endless energy for her wards
              ushered in golden years for an entire community.
            </li>
            <li>
              <b>
                Daniya{" "}
                <i className="text-muted-foreground font-normal mr-0.5">
                  &ldquo;near&rdquo;
                </i>
                {"  "}
                Hunter:
              </b>{" "}
              incredible arrogance with the skills to back it up. So grand was
              her trophy hoard that she used it to add sixteen husbands to her
              collection as well.
            </li>
            <li>
              <b>
                Fatin{" "}
                <i className="text-muted-foreground font-normal mr-0.5">
                  &ldquo;clever&rdquo;
                </i>
                {"  "}
                Philosopher:
              </b>{" "}
              a boy wise beyond his years and thrust into leadership after his
              forbears&apos; assasination. Instead of cull the families
              responsible, he takes it upon himself to right his peoples&apos;
              wrongs. He survives thirty attempts on his life before a knife
              finds his throat.
            </li>
            <li>
              <b>
                Hazem{" "}
                <i className="text-muted-foreground font-normal mr-0.5">
                  &ldquo;resolute&rdquo;
                </i>
              </b>{" "}
              Soldier: never the stongest, fastest, or quick witted; but a
              cornerstone of his platoon. Entrusted with guiding four promising
              adolescents on their journey across the world to Helix.
            </li>
            <li>
              <b>
                Naaji{" "}
                <i className="text-muted-foreground font-normal mr-0.5">
                  &ldquo;saved&rdquo;
                </i>
                {"  "}
                Outlaw:
              </b>{" "}
              framed for murder by a manipulative philosopher and forced to flee
              into the swamp and survive alone. Grief, loneliness, and the swamp
              nearly claim his life, but retribution drives him ever forward.
            </li>
          </TypographyUnorderedList>
        </div>
        <RemembrancePortrait width={200} height={200} img="kilder" />
      </div>
      <TypographyH2 className="font-old">Abilities</TypographyH2>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Determination{" "}
          <Link href="/game/arc-three/character-options/aldams/determination">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <TypographyP>
        The advent of Aldams may be responsible for saving humanity outside of
        Helix from extinction, though remained insufficient to save them from
        immeasurable suffering. Donums came next, saving one people after
        another from the worst of the world. Except Kilder. Instead of dwindle
        away, the Kilder turned inwards and honed their blood arts to their
        utmost potential.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Shapes of War{" "}
          <Link href="/game/arc-three/character-options/fighting-styles#Shapes%20of%20War">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        Where other cultures honor the all-powerful Donum wielder, Kilder exalts
        the disciplined soldier in formation. Their might is not rooted in
        individual skill but rather the discipline to work together and
        outmaneuver stonger, smarter, or more skilled foes. It is the art of
        winning the fight before it has begun.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Snare and Shear{" "}
          <Link href="/game/arc-three/character-options/fighting-styles#Snare%20and%20Shear">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        A significant cultural disconnect between Kilder and others is that in
        Kilder there is no such thing as honor. Especially not in a fight or a
        hunt. And so Kilder hunters use every dirty trick available to them; any
        advantage is foolish to disregard. And when quarry is sufficiently
        weakened, that&apos;s the time to finish them.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Collective Good</TypographyH3>
        <ClockCost num={2} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Happiness and good life are only possible when working to the betterment
        of your community. We don&apos;t get to choose the role we play; life
        does that. But by industrious dedication to that role, you can be one
        more factor blazing the trail for the next generation.
      </TypographyP>
      <TypographyP>
        <i>
          What is your role in the <b>Crew</b>? In <b>Fabrication</b>? In the{" "}
          <b>rebellion</b>?
        </i>{" "}
        At the end of <b>downtime</b>, ask yourself{" "}
        <i>&ldquo;Have I played my role?&rdquo;</i> If yes, <b>mark 1xp</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Ancient Kilder</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Pre-Cataclysm Kilder</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Post-Cataclysm Kilder</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Pilgrimage to Helix</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
    </>
  );
}
