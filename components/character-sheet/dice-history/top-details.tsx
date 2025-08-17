import { Die } from "@/components/die";
import { Roll } from "@/types/roll";
import { dieVariants, getHighestRollColor } from "@/lib/roll";
import { cn } from "@/lib/utils";

export default function DieTopDetails({ roll }: { roll: Roll }) {
  const highestColor = getHighestRollColor(roll);
  console.log("highest color is", highestColor);
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
            {/* <Die
              roll={6}
              className={`h-12 w-12 text-${
                blueHigher(roll) ? "blue" : "red"
              }-800`}
            />
            <Die
              roll={6}
              className={`h-12 w-12 text-${
                roll.blueDice.filter((d) => d === 6).length >= 2
                  ? "blue"
                  : "red"
              }-800`}
            /> */}
            {roll.redDice
              .filter((d) => d === 6)
              .map((_, index) => (
                <Die
                  key={`red-${index}`}
                  roll={6}
                  className="h-12 w-12 text-red-800"
                />
              ))}

            {roll.blueDice
              .filter((d) => d === 6)
              .map((_, index) => (
                <Die
                  key={`blue-${index}`}
                  roll={6}
                  className="h-12 w-12 text-blue-800"
                />
              ))}

            {roll.pinkDice
              ?.filter((d) => d === 6)
              .map((_, index) => (
                <Die
                  key={`pink-${index}`}
                  roll={6}
                  className="h-12 w-12 text-pink-800"
                />
              ))}
          </>
        ) : (
          <Die
            roll={roll.resultDie}
            // className={`h-12 w-12 text-${
            //   blueHigher(roll) ? "blue" : "red"
            // }-800`}
            className={cn("h-12 w-12", dieVariants({ type: highestColor }))}
          />
        )}
      </div>
    </div>
  );
}
