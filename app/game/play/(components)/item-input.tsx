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
import ItemSummary from "./item-summary";

export default function ItemInput({
  item,
  updateItem,
}: {
  item: Item;
  updateItem: (traits: string[], ticks: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const [traits, setTraits] = useState(item.traits);
  const [ticks, setTicks] = useState(item.ticks);

  const formRef = useRef<HTMLFormElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { name, clock, slots, description } = item;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newTraits = traits
        .map((_, idx) => formData.get(`trait-${idx}`) as string)
        .filter((trait) => trait !== null || trait !== undefined);
      setTraits(newTraits);
      updateItem(newTraits, ticks);
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
            <ItemSummary
              item={item}
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
          <TypographyP className="mb-2">{description}</TypographyP>
          <b>Slots: {slots}</b>
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
