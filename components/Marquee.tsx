const items = [
  "Vidange",
  "Freinage",
  "Pneumatiques",
  "Diagnostic",
  "Distribution",
  "Embrayage",
  "Climatisation",
  "Révision",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden py-3">
      <div className="marquee flex w-max items-center">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="display px-8 text-4xl text-ink sm:text-5xl">{t}</span>
            <span className="h-3 w-3 rotate-45 bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
}
