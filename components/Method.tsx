import Reveal from "./Reveal";

const steps = [
  { title: "Prise de contact", text: "Par téléphone ou via le formulaire, vous nous décrivez le souci." },
  { title: "Diagnostic", text: "On examine le véhicule et on identifie précisément la panne." },
  { title: "Devis validé", text: "Un devis clair, détaillé. Rien n'est fait sans votre accord." },
  { title: "Restitution", text: "On vous explique ce qui a été fait et on vous rend les clés." },
];

export default function Method() {
  return (
    <section id="methode" className="scroll-mt-28 bg-soft py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <span className="eyebrow text-muted">Notre méthode</span>
          <h2 className="display mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            Quatre étapes, <span className="text-brand">zéro flou</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="group flex h-full min-h-[300px] flex-col justify-between rounded-3xl bg-white p-8 transition-colors hover:bg-ink hover:text-white">
                <span className="display text-7xl text-brand-soft transition-colors group-hover:text-brand">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="wide text-xl font-extrabold uppercase">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted group-hover:text-white/60">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
