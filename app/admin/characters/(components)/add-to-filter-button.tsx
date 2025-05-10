"use client";

import { Character } from "@/types/game";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter } from "lucide-react";
import { useState } from "react";
import type { CharacterFilter } from "@/types/ui";
import { CharacterFilterSchema } from "@/types/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCharacterFilters } from "../(providers)/character-filters-provider";

const FormSchema = z.object({
  filters: z.array(CharacterFilterSchema),
});

export default function AddToFilterButton({
  character,
}: {
  character: Character;
}) {
  const [open, setOpen] = useState(false);

  const { filters, updateFilters } = useCharacterFilters();

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: { filters: [] },
    resolver: zodResolver(FormSchema),
  });

  function closePopover() {
    setOpen(false);
  }

  const handleSubmit = (data: z.infer<typeof FormSchema>) => {
    const dataFilterNames = data.filters.map((df) => df.name);
    const newFilters = filters.map((f) => {
      // if the filter was selected
      if (dataFilterNames.includes(f.name)) {
        // add character to filter if not already there
        if (!f.characters.includes(character.name)) {
          return {
            ...f,
            characters: [...f.characters, character.name],
          };
        } else {
          return f;
        }
      } else {
        // remove the character from this unselected filter
        return {
          ...f,
          characters: f.characters.filter((c) => c !== character.name),
        };
      }
    });
    updateFilters(newFilters);
    closePopover();
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Filter />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="filters"
              render={() => (
                <FormItem>
                  <div>
                    <FormLabel className="text-base">
                      {character.name} filter groups
                    </FormLabel>
                  </div>
                  {filters.map((f, i) => (
                    <FormField
                      control={form.control}
                      key={f.name + i}
                      name="filters"
                      render={({ field }) => (
                        <FormItem
                          key={f.name}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.some(
                                (v) => v.name === f.name
                              )}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, f])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: CharacterFilter) =>
                                          value.name !== f.name
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel>{f.name}</FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </FormItem>
              )}
            />
            <Button type="submit" size="sm" className="mt-4">
              submit
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
