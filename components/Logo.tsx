export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#accueil" className="flex items-center gap-2.5">
      <span className="wide flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand text-sm font-extrabold text-white">
        LK
      </span>
      <span
        className={`wide text-[15px] font-extrabold uppercase tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Mécanique
      </span>
    </a>
  );
}
