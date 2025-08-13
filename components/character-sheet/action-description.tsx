import { DictionaryAction } from "@/types/game";

export default function ActionDescription({
  action,
}: {
  action: DictionaryAction;
}) {
  return (
    <div className="flex flex-col">
      <b className="text-lg text-red-500">
        {action.name}
        {!!action.restrictAtStart && (
          <span className="text-amber-500 font-normal">*</span>
        )}
      </b>
      {action.suboptions && (
        <span className="text-xs text-red-700 mb-1">
          {action.suboptions.join(", ")}
        </span>
      )}
      <span className="text-sm text-muted-foreground">
        {action.description}
      </span>
    </div>
  );
}
