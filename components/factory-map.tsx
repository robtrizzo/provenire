import Clock from "./clock";

export default function FactoryMap() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center max-w-[900px]">
      <div className="flex flex-col items-center">
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center">
          FOUNDRY
        </div>
        <Clock max={5} current={0} clickable={false} width={32} height={32} />
        <div className="h-36 w-36 bg-secondary text-secondary-foreground flex items-center justify-center">
          FABRICATION
        </div>
        <Clock max={5} current={4} clickable={false} width={32} height={32} />
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center">
          FORGE
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-36 w-8 flex items-center">
          <Clock max={5} current={0} clickable={false} width={32} height={32} />
        </div>
        <div className="h-8 w-8" />
        <div className="h-36 w-8 flex items-center justify-center">
          <div className="h-36 w-8 flex items-center">
            <div className="w-8 h-2 bg-muted-foreground" />
          </div>
        </div>
        <div className="h-8 w-8" />
        <div className="h-36 w-8 flex items-center">
          <Clock max={5} current={0} clickable={false} width={32} height={32} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center">
          GRAFT
        </div>
        <div className="w-36 h-8 flex items-center justify-center ">
          <Clock max={7} current={0} clickable={false} width={32} height={32} />
        </div>
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center">
          PENAL PEN
        </div>
        <Clock max={5} current={0} clickable={false} width={32} height={32} />

        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center">
          ASSEMBLY
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-36 w-8 flex items-center">
          <Clock max={5} current={0} clickable={false} width={32} height={32} />
        </div>
        <div className="h-8 w-8" />
        <div className="h-36 w-8 flex items-center">
          <div className="w-8 h-2 bg-muted-foreground" />
        </div>
        <div className="h-8 w-8" />
        <div className="h-36 w-8 flex items-center justify-center">
          <div className="flex flex-col">
            <Clock
              max={7}
              current={0}
              clickable={false}
              width={32}
              height={32}
            />
            <Clock
              max={7}
              current={0}
              clickable={false}
              width={32}
              height={32}
            />
            <Clock
              max={7}
              current={0}
              clickable={false}
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-80">
          ???
        </div>
        <div className="w-36 h-8 flex items-center justify-center ">
          <Clock max={7} current={0} clickable={false} width={32} height={32} />
        </div>
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-80">
          SPIRE
        </div>
        <div className="w-36 h-8 flex items-center justify-center ">
          <div className="flex">
            <Clock
              max={5}
              current={0}
              clickable={false}
              width={32}
              height={32}
            />
            <Clock
              max={5}
              current={0}
              clickable={false}
              width={32}
              height={32}
            />
            <Clock
              max={5}
              current={0}
              clickable={false}
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-5">
          ???
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="h-36 w-8 flex items-center">
          <Clock max={5} current={0} clickable={false} width={32} height={32} />
        </div>
        <div className="h-8 w-8" />
        <div className="h-36 w-8 flex items-center">
          <div className="w-8 h-2 bg-muted-foreground opacity-70" />
        </div>
        <div className="h-8 w-8" />
        <div className="h-36 w-8 flex items-center">
          <Clock max={5} current={0} clickable={false} width={32} height={32} />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-60">
          ???
        </div>
        <Clock max={5} current={0} clickable={false} width={32} height={32} />
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-60">
          NEXUS
        </div>
        <div className="w-36 h-8 flex items-center justify-center ">
          <div className="flex">
            <Clock
              max={7}
              current={0}
              clickable={false}
              width={32}
              height={32}
            />
            <Clock
              max={7}
              current={0}
              clickable={false}
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-10">
          ???
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="h-36 w-8 flex items-center justify-center">
          <div className="border-2 border-border rounded-full w-8 h-8 flex items-center justify-center">
            ??
          </div>
        </div>
        <div className="h-8 w-8" />
        <div className="h-36 w-8 flex items-center">
          <Clock max={5} current={0} clickable={false} width={32} height={32} />
        </div>
        <div className="h-8 w-8" />
        <div className="h-36 w-8 flex items-center">
          <Clock max={5} current={0} clickable={false} width={32} height={32} />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-20">
          ???
        </div>
        <Clock max={5} current={0} clickable={false} width={32} height={32} />
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-40">
          ???
        </div>
        <Clock max={5} current={0} clickable={false} width={32} height={32} />
        <div className="h-36 w-36 bg-muted-foreground text-primary-foreground flex items-center justify-center opacity-20">
          ???
        </div>
      </div>
    </div>
  );
}
