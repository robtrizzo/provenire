import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TypographyH4 } from '@/components/ui/typography';
import { CloudDownload, HardDriveUpload, X, FileUp } from 'lucide-react';
import { Close } from '@radix-ui/react-popover';

export default function LoadCharacter({
  triggerCharacterLoaded,
}: {
  triggerCharacterLoaded: () => void;
}) {
  const [open, setOpen] = useState(false);

  function loadFromDevice() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.click();
    input.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (!data) {
          return;
        }
        localStorage.setItem('charsheet', data.toString());
        triggerCharacterLoaded();
        setOpen(false);
      };
      reader.readAsText(file);
    });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="secondary" className="text-sm">
          <FileUp />
          Load
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-secondary">
        <div className="flex flex-col gap-2">
          <TypographyH4 className="text-md">Load Character</TypographyH4>
          <span className="font-serif text-sm text-red-600 font-bold mt-0">
            This will overwrite your current character!
          </span>
          <Button variant="outline" onClick={() => loadFromDevice()}>
            <HardDriveUpload />
            Load from Device
          </Button>
          <Button variant="outline" disabled={true}>
            <CloudDownload />
            Load from Cloud
          </Button>
          <Close asChild>
            <Button variant="destructive" className="text-sm">
              <X />
              Cancel
            </Button>
          </Close>
        </div>
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
      </PopoverContent>
    </Popover>
  );
}