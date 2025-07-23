import { TypographyP } from "@/components/ui/typography";
export default function ConnectingWithOthers() {
  return (
    <div>
      <TypographyP>
        All of your <b>bonds</b> begin at{" "}
        <div className="inline-block ml-1">
          <div className="flex items-center gap-2">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        .
      </TypographyP>
    </div>
  );
}
