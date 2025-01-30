"use client";

import { useState, useRef, useEffect } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { SaveIcon, Bomb, Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cohort } from "@/types/game";
import GangSummary from "./gang-summary";
import { TypographyH4 } from "@/components/ui/typography";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function GangInput({
  gang,
  updateGang,
}: {
  gang: Cohort;
  updateGang: (traits: string[], ticks: number) => void;
}) {
  const { name, clock, location } = gang;

  const [open, setOpen] = useState(false);
  const [traits, setTraits] = useState(gang.traits);
  const [ticks, setTicks] = useState(gang.ticks);

  const formRef = useRef<HTMLFormElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newTraits = traits
        .map((_, idx) => formData.get(`trait-${idx}`) as string)
        .filter((trait) => trait !== null || trait !== undefined);
      setTraits(newTraits);
      updateGang(newTraits, ticks);
      setOpen(false);
    }
  };

  function handleRemoveTrait(idx: number) {
    const newTraits = traits.filter((_, index) => index !== idx);
    setTraits(newTraits);
  }

  function handleAddTrait() {
    const newTraits = [...traits, "new trait"];
    setTraits(newTraits);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          {isMounted && (
            <GangSummary
              gang={gang}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <TypographyH4 className="mt-0">{name}</TypographyH4>
            <Clock
              max={clock}
              current={ticks}
              setVal={(n) => {
                setTicks(n);
              }}
              width={35}
              height={35}
            />
          </div>
          <b>Location: {location}</b>
          <br />
          <div className="flex items-center justify-between">
            <b>Traits</b>
            <Link href="/game/appendix">
              <span className="text-sm text-muted-foreground">
                (<u className="text-red-500">list of traits</u>)
              </span>
            </Link>
          </div>
          {traits.map((t, idx) => (
            <div key={`${t}${idx}`} className="flex gap-2 items-center mb-1">
              <Input defaultValue={t} size={10} name={`trait-${idx}`} />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="text-red-400"
                onClick={() => handleRemoveTrait(idx)}
              >
                <Bomb />
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => handleAddTrait()}
          >
            <Plus /> new trait
          </Button>
          <div className="flex mt-2">
            <Button
              variant="secondary"
              className="text-sm ml-auto"
              type="submit"
            >
              <SaveIcon />
              Save
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
