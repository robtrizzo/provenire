import { Die } from "@/components/die";
import { blueHigher, Roll } from "@/types/roll";

export default function DieDetails({ roll }: { roll: Roll }) {
  return (
    <div className="flex gap-1 items-center">
      <div className="mt-2 text-md flex flex-col">
        <span className="font-bold capitalize">{roll.result}</span>
        <span className="text-sm font-semibold capitalize">{`${roll.type}${
          roll.tag ? ` - ${roll.tag}` : ""
        }`}</span>
      </div>
      <div className="flex flex-1 justify-end">
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
                blueHigher(roll) ? "blue" : "red"
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
