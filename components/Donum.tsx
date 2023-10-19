export default function Donum({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip?: string;
}) {
  return (
    <em>
      <span
        style={{
          textShadow: '#FC0 1px 0 10px',
        }}
        className="has-tooltip"
      >
        {tooltip && (
          <span className="tooltip rounded shadow-lg py-0 px-3 bg-slate-900 text-red-500 -mt-8">
            {tooltip}
          </span>
        )}
        {children}
      </span>
    </em>
  );
}
