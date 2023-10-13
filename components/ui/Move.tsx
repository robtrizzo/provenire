export default function Move({
  children,
  rgb,
  title,
}: {
  children: React.ReactNode;
  rgb: string;
  title: string;
}) {
  return (
    <article
      className={`bg-[rgb(${rgb})]/20 border-[rgb(${rgb})] border-2 rounded-lg p-6`}
    >
      <span className="text-white text-2xl">{title}</span>
      {children}
    </article>
  );
}
