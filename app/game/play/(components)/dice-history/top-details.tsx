import { Die } from "@/components/die";
import { blueHigher, Roll } from "@/types/roll";

export default function DieTopDetails({ roll }: { roll: Roll }) {
  return (
    <div className="flex gap-1 items-center relative">
      {roll.charName && (
        <span className="text-muted-foreground text-xs block items-center gap-2 absolute top-0 right-0">
          {roll.charName}
        </span>
      )}
      <div className="mt-2 text-md flex flex-col">
        <span className="font-bold capitalize">{roll.result}</span>
        <span className="text-sm font-semibold capitalize">{`${roll.type}${
          roll.tag ? ` - ${roll.tag}` : ""
        }`}</span>
      </div>
      <div className="flex flex-1 justify-end pt-3">
        {roll.result === "crit" ? (
          <>
            <Die
              roll={6}
              className={`h-12 w-12 text-${
                blueHigher(roll) ? "blue" : "red"
              }-800`}
            />
            <Die
              roll={6}
              className={`h-12 w-12 text-${
                roll.blueDice.filter(d => d === 6).length >= 2 ? "blue" : "red"
              }-800`}
            />
          </>
        ) : (
          <Die
            roll={roll.resultDie}
            className={`h-12 w-12 text-${
              blueHigher(roll) ? "blue" : "red"
            }-800`}
          />
        )}
      </div>
    </div>
  );
}
