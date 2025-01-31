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
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import type { Item } from "@/types/game";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import AlchemySummary from "./alchemy-summary";

export default function AlchemyInput({
  alchemy,
  updateAlchemy,
  variant = "alchemy",
  removeAlchemy,
}: {
  alchemy: Item;
  updateAlchemy: (traits: string[], uses: number, ticks: number) => void;
  variant?: string;
  removeAlchemy?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [traits, setTraits] = useState(alchemy.traits);
  const [ticks, setTicks] = useState(alchemy.ticks);
  const [uses, setUses] = useState(alchemy.uses || 3);

  const formRef = useRef<HTMLFormElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { name, clock, slots, description } = alchemy;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newTraits = traits
        .map((_, idx) => formData.get(`trait-${idx}`) as string)
        .filter((trait) => trait !== null || trait !== undefined);
      setTraits(newTraits);
      updateAlchemy(newTraits, uses, ticks);
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
            <AlchemySummary
              item={alchemy}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <TypographyH4 className="mt-0">{name}</TypographyH4>
            {variant === "alchemy" ? (
              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <Clock
                    max={clock}
                    current={ticks}
                    setVal={(n) => {
                      setTicks(n);
                    }}
                    width={35}
                    height={35}
                  />
                  <span className="text-xs">project</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock
                    max={3}
                    current={uses}
                    setVal={(n) => {
                      setUses(n);
                    }}
                    width={35}
                    height={35}
                  />
                  <span className="text-xs">uses</span>
                </div>
              </div>
            ) : (
              <Clock
                max={clock}
                current={ticks}
                setVal={(n) => {
                  setTicks(n);
                }}
                width={35}
                height={35}
              />
            )}
          </div>
          <TypographyP className="mb-2">{description}</TypographyP>
          <b>Slots: {slots}</b>
          <br />
          {variant === "alchemy" ? (
            <>
              <div className="flex items-center justify-between">
                <b>Traits</b>
                <Link href="/game/appendix">
                  <span className="text-sm text-muted-foreground">
                    (<u className="text-red-500">list of traits</u>)
                  </span>
                </Link>
              </div>
              {traits.map((t, idx) => (
                <div
                  key={`${t}${idx}`}
                  className="flex gap-2 items-center mb-1"
                >
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
            </>
          ) : (
            <span>
              <b>Traits:</b>
              <span className="ml-2 text-muted-foreground">
                {traits.join(", ")}
              </span>
            </span>
          )}
          <div className="flex mt-2">
            {variant === "formula" && (
              <Button
                variant="destructive"
                type="button"
                onClick={() => {
                  if (removeAlchemy) {
                    removeAlchemy();
                  }
                }}
              >
                <Bomb />
                Remove
              </Button>
            )}
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
