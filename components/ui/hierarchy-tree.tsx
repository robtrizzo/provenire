import { TypographyH3, TypographyH4, TypographyP } from './typography';

export default async function HierarchyTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 w-[830px]">
      <div className="flex items-center mb-8 gap-16">
        <div className="w-36">
          <TypographyH3 className="text-center">Enforcers</TypographyH3>
        </div>
        <div className="w-36">
          <TypographyH3 className="text-center">Prowlers</TypographyH3>
        </div>
        <div className="w-36">
          <TypographyH3 className="text-center">Marshalls</TypographyH3>
        </div>
        <div className="w-36">
          <TypographyH3 className="text-center">Commander</TypographyH3>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-center gap-8 w-36">
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              KUNI <span className="text-xs">the</span> ROVER
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              <span className="font-bold">+1d</span> to avoid first overseer
              encountered per mission
            </TypographyP>
          </div>
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              SVINTHA <span className="text-xs">the</span> CRUMBER
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              <span className="font-bold">+1 food</span> per successful mission
            </TypographyP>
          </div>
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              AUDO <span className="text-xs">the</span> GORGER
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              may trade <span className="font-bold">1 food</span> for{' '}
              <span className="font-bold">+1d</span> to engagement roll
            </TypographyP>
          </div>
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              RIKS <span className="text-xs">the</span> RAT
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              <span className="font-bold">+1d</span> when gahering info on
              fellow workers
            </TypographyP>
          </div>
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              RADEGOND <span className="text-xs">the</span> STALKER
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              <span className="font-bold">+1d</span> to engagement roll when
              heat is 4 or less
            </TypographyP>
          </div>
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              NARIC <span className="text-xs">the</span> SWINDLER
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              <span className="font-bold">+1d</span> to engagement roll when
              deceiving worker faction
            </TypographyP>
          </div>
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              GISAVA <span className="text-xs">the</span> BULLY
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              may trade <span className="font-bold">1 goodwill</span> for{' '}
              <span className="font-bold">1 rep</span> each agendas phase
            </TypographyP>
          </div>
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              GAILA <span className="text-xs">the</span> DAFT
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              may trade <span className="font-bold">1 goodwill</span> for{' '}
              <span className="font-bold">1 intel</span> each agendas phase
            </TypographyP>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-8 h-36 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-36 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-36 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-36 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-36 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-36 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-36 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-36 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-1 h-[74px]" />
          <div className="w-1 h-[180px] bg-muted-foreground" />
          <div className="w-1 h-[172px]" />
          <div className="w-1 h-[180px] bg-muted-foreground" />
          <div className="w-1 h-[172px]" />
          <div className="w-1 h-[180px] bg-muted-foreground" />
          <div className="w-1 h-[172px]" />
          <div className="w-1 h-[180px] bg-muted-foreground" />
          <div className="w-1 h-[74px]" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-8 h-80 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-80 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-80 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-80 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 w-36">
          <div className="h-18" />
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              MARNGIL <span className="text-xs">the</span> BEAR
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              whenever you gain rep, gain{' '}
              <span className="font-bold">+1 rep</span>
            </TypographyP>
          </div>
          <div className="h-36" />
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              AMALINA <span className="text-xs">the</span> CROW
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              <span className="font-bold">+1d</span> when ga
              <span className="text-xs">the</span>ring info on overseers
            </TypographyP>
          </div>
          <div className="h-36" />
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              ULF <span className="text-xs">the</span> WOLF
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              <span className="font-bold">+1d</span> to engagement roll when
              using stealth to commit murder
            </TypographyP>
          </div>
          <div className="h-36" />
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              DUARA <span className="text-xs">the</span> THINBLOOD
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              <span className="font-bold">+1 materials</span> on successful
              espionage or sabotage
            </TypographyP>
          </div>
          <div className="h-18" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-8 h-80 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-80 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-80 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-80 flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-1 h-[186px]" />
          <div className="w-1 h-[356px] bg-muted-foreground" />
          <div className="w-1 h-[348px]" />
          <div className="w-1 h-[356px] bg-muted-foreground" />
          <div className="w-1 h-[186px]" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-8 h-[672px] flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-[672px] flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-36 h-[672px] flex items-center justify-center">
            <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
              <TypographyH4 className="text-center">
                RADEGON <span className="text-xs">the</span> RAVENOUS
              </TypographyH4>
              <TypographyP className="text-xs text-center">
                may trade a <span className="font-bold">crew contact</span> to
                eliminate an enforcer;{' '}
                <span className="font-bold">2 contacts</span> for a prowler.
              </TypographyP>
            </div>
          </div>
          <div className="w-36 h-[672px] flex items-center justify-center">
            <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
              <TypographyH4 className="text-center">
                THEODORIC <span className="text-xs">the</span> TORTURER
              </TypographyH4>
              <TypographyP className="text-xs text-center">
                may trade <span className="font-bold">1 goodwill</span> for{' '}
                <span className="font-bold">2 blood</span> each agendas phase
              </TypographyP>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-8 h-[672px] flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
          <div className="w-8 h-[672px] flex items-center justify-center">
            <div className="w-8 h-1 bg-muted-foreground" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-1 h-[372px]" />
          <div className="w-1 h-[708px] bg-muted-foreground" />
          <div className="w-1 h-[372px]" />
        </div>
        <div className="flex flex-col">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
        <div className="flex flex-col">
          <div className="h-36 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
            <TypographyH4 className="text-center">
              FRIDA <span className="text-xs">the</span> CRUEL
            </TypographyH4>
            <TypographyP className="text-xs text-center">
              when you roll <span className="font-bold">entanglements</span>,
              roll twice and take better result
            </TypographyP>
          </div>
        </div>
      </div>
    </div>
  );
}
