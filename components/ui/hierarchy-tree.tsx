import { TypographyH3, TypographyH4, TypographyP } from './typography';

export default async function HierarchyTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center">
      <div className="flex flex-col items-center gap-8">
        <TypographyH3>Enforcers</TypographyH3>
        <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyH4 className="text-center">[name] the ROVER</TypographyH4>
          <TypographyP className="text-xs text-center">
            <span className="font-bold">+1d</span> to avoid first overseer
            encountered per mission
          </TypographyP>
        </div>
        <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyH4 className="text-center">
            [name] the CRUMBER
          </TypographyH4>
          <TypographyP className="text-xs text-center">
            <span className="font-bold">+1 food</span> per successful mission
          </TypographyP>
        </div>
        <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyH4 className="text-center">[name] the GORGER</TypographyH4>
          <TypographyP className="text-xs text-center">
            <span className="font-bold">-1 heat</span> when killing is involved
          </TypographyP>
        </div>
        <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyH4 className="text-center">[name] the RAT</TypographyH4>
          <TypographyP className="text-xs text-center">
            <span className="font-bold">+1d</span> when gahering info on fellow
            workers
          </TypographyP>
        </div>
        <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyH4 className="text-center">
            [name] the STALKER
          </TypographyH4>
          <TypographyP className="text-xs text-center">
            <span className="font-bold">+1d</span> to engagement roll when heat
            is 4 or less
          </TypographyP>
        </div>
        <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyH4 className="text-center">
            [name] the SWINDLER
          </TypographyH4>
          <TypographyP className="text-xs text-center">
            <span className="font-bold">+1d</span> to engagement roll when
            deceiving worker faction
          </TypographyP>
        </div>
        <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyH4 className="text-center">[name] the BULLY</TypographyH4>
          <TypographyP className="text-xs text-center">
            may trade <span className="font-bold">1 goodwill</span> for{' '}
            <span className="font-bold">1 rep</span> each agendas phase
          </TypographyP>
        </div>
        <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyH4 className="text-center">
            [name] the TORTURER
          </TypographyH4>
          <TypographyP className="text-xs text-center">
            may trade <span className="font-bold">1 goodwill</span> for{' '}
            <span className="font-bold">1 intel</span> each agendas phase
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
