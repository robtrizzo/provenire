export default function Donum({ children }: { children: React.ReactNode }) {
  return (
    <em>
      <span
        style={{
          textShadow: '#FC0 1px 0 10px',
        }}
      >
        {children}
      </span>
    </em>
  );
}
