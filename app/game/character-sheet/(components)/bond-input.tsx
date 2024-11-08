import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Close } from '@radix-ui/react-popover';
import { X, SaveIcon } from 'lucide-react';
import { TypographyH4, TypographyP } from '@/components/ui/typography';
import { Bond } from '@/types/game';

export default function BondInput({
  bond,
  handleSave,
}: {
  bond: Bond;
  handleSave: (name: string, description: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="hover:bg-secondary hover:cursor-pointer rounded-md box-border p-2 transition-all">
          <TypographyP>
            {bond.name || 'Bond Name'}:{' '}
            <span className="text-muted-foreground text-xs">
              {bond.description || 'Bond Description'}
            </span>
          </TypographyP>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 relative">
        <TypographyH4 className="text-md">Edit Bond</TypographyH4>
        <Input
          id="bond-name"
          placeholder="Bond Name"
          defaultValue={bond.name}
        />
        <Textarea
          id="bond-description"
          placeholder="Bond Description"
          defaultValue={bond.description}
          className="mt-2"
        />
        <div className="mt-2 flex justify-between">
          <Close asChild>
            <Button variant="destructive" className="text-sm">
              <X />
              Cancel
            </Button>
          </Close>
          <Button
            variant="secondary"
            className="text-sm"
            onClick={() => {
              const name =
                (document.getElementById('bond-name') as HTMLInputElement)
                  ?.value || '';
              const description = (
                document.getElementById(
                  'bond-description'
                ) as HTMLTextAreaElement
              ).value;
              handleSave(name, description);
              setOpen(false);
            }}
          >
            <SaveIcon />
            Save
          </Button>
        </div>
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
      </PopoverContent>
    </Popover>
  );
}
