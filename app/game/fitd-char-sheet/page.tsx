import { TypographyH1 } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default async function Page() {
  return (
    <div>
      <TypographyH1>Provenire Era 3 Arc 1</TypographyH1>
      <div className="flex gap-1 w-full">
        <div className="flex-grow">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name" />
        </div>
        <div>
          <Label htmlFor="alias">Alias</Label>
          <Input id="alias" placeholder="Alias" />
        </div>
      </div>
      <Textarea placeholder="Look" className="my-1" />
      <div className="flex gap-1 w-full">
        <div className="flex-grow">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a heritage" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="border-b-[1px]">
                <SelectLabel className="text-lg border-t-[1px]">
                  Anidinian
                </SelectLabel>
                <SelectItem value="cumerian" className="ml-4">
                  Cumerian
                </SelectItem>
                <SelectItem value="gredoran" className="ml-4">
                  Gredoran
                </SelectItem>
              </SelectGroup>
              <SelectGroup className="border-b-[1px]">
                <SelectLabel className="text-lg border-t-[1px]">
                  Arborian
                </SelectLabel>
                <SelectItem value="argosi" className="ml-4">
                  Argosi
                </SelectItem>
                <SelectItem value="kiposi" className="ml-4">
                  Kiposi
                </SelectItem>
              </SelectGroup>
              <SelectItem value="narscillian" className="ml-4 text-lg">
                Narscillian
              </SelectItem>
              <SelectItem value="kilder" className="ml-4 text-lg">
                Kilder
              </SelectItem>
              <SelectGroup className="border-b-[1px]">
                <SelectLabel className="text-lg border-t-[1px]">
                  Rathi
                </SelectLabel>
                <SelectItem value="bwarhein" className="ml-4">
                  Bwarhein
                </SelectItem>
                <SelectItem value="fenrir" className="ml-4">
                  Fenrir
                </SelectItem>
              </SelectGroup>
              <SelectGroup className="border-b-[1px]">
                <SelectLabel className="text-lg border-t-[1px]">
                  Toran
                </SelectLabel>
                <SelectItem value="heian" className="ml-4">
                  Heian
                </SelectItem>
                <SelectItem value="yaman" className="ml-4">
                  Yaman
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-grow"></div>
      </div>
    </div>
  );
}
