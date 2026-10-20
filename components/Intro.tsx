import Image from "next/image";
import Reveal from "./Reveal";

const facts = [
  { k: "Toutes marques", v: "Essence, diesel, hybride" },
  { k: "Devis offert", v: "Validé avec vous avant travaux" },
  { k: "Rendez-vous rapide", v: "Créneaux sous quelques jours" },
];

function Pill({ src }: { src: string }) {
  return (
    <span className="relative mx-2 inline-block h-[0.85em] w-[1.9em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline">
      <Image src={src} alt="" fill sizes="160px" className="object-cover" />
    </span>
  );
}

export default function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
      <Reveal>
        <span className="eyebrow text-muted">Le garage</span>
        <p className="mt-8 text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.12] font-semibold tracking-tight text-ink">
          Un garage indépendant
          <Pill src="/images/mecanicien.jpg" />
          installé au 8 Rue Romain Rolland, qui répare votre voiture
          <Pill src="/images/moteur.jpg" />
          <span className="text-muted"> comme si c&apos;était la sienne. Simple, honnête, bien fait.</span>
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-3">
        {facts.map((f, i) => (
          <Reveal key={f.k} delay={i * 100} className="bg-white">
            <div className="h-full bg-soft p-8">
              <p className="wide text-xl font-extrabold uppercase">{f.k}</p>
              <p className="mt-2 text-muted">{f.v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
