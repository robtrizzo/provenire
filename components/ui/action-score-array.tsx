export default function ActionScoreArray({
  red,
  blue,
  pink,
}: {
  red: number;
  blue: number;
  pink: number;
}) {
  return (
    <div className="flex gap-2 items-center">
      {Array.from({ length: red }).map((_, i) => (
        <div
          key={`red-${i}`}
          className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"
        />
      ))}
      {Array.from({ length: blue }).map((_, i) => (
        <div
          key={`blue-${i}`}
          className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"
        />
      ))}
      {Array.from({ length: pink }).map((_, i) => (
        <div
          key={`pink-${i}`}
          className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-pink-500"
        />
      ))}
    </div>
  );
}
