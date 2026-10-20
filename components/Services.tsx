import Image from "next/image";
import { ArrowUpRight, Brake, Diag } from "./Icons";
import Reveal from "./Reveal";

function ImageCard({
  src,
  title,
  text,
  tag,
  className = "",
}: {
  src: string;
  title: string;
  text: string;
  tag: string;
  className?: string;
}) {
  return (
    <a
      href="#rendez-vous"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 text-white ${className}`}
    >
      <Image
        src={src}
        alt={title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
      <div className="relative flex items-start justify-between">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
          {tag}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-all group-hover:rotate-45 group-hover:bg-brand group-hover:text-white">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="relative">
        <h3 className="wide text-2xl font-extrabold uppercase sm:text-3xl">{title}</h3>
        <p className="mt-2 max-w-sm text-white/70">{text}</p>
      </div>
    </a>
  );
}

const extras = [
  "Révision constructeur",
  "Climatisation",
  "Embrayage",
  "Batterie",
  "Échappement",
  "Amortisseurs",
  "Éclairage",
  "Pré-contrôle technique",
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 px-3 pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-6 px-3 pb-12 lg:flex-row lg:items-end">
          <Reveal>
            <span className="eyebrow text-muted">Nos services</span>
            <h2 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Ce qu&apos;on fait
              <br />
              <span className="text-brand">au quotidien</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-lg text-muted">
              De la vidange à la réparation moteur, sur toutes les marques, avec un devis avant
              chaque intervention.
            </p>
          </Reveal>
        </div>

        <div className="grid auto-rows-[280px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ImageCard
            src="/images/vidange.jpg"
            tag="Le plus demandé"
            title="Entretien & vidange"
            text="Vidange, filtres, niveaux et révision selon le carnet constructeur."
            className="sm:col-span-2 sm:row-span-2"
          />

          <a
            href="#rendez-vous"
            className="group flex flex-col justify-between rounded-3xl bg-brand p-7 text-white"
          >
            <Diag className="h-12 w-12" />
            <div>
              <h3 className="wide text-2xl font-extrabold uppercase">Diagnostic</h3>
              <p className="mt-2 text-white/75">Lecture des défauts, voyants moteur, électronique.</p>
            </div>
          </a>

          <a
            href="#rendez-vous"
            className="group flex flex-col justify-between rounded-3xl bg-ink p-7 text-white"
          >
            <Brake className="h-12 w-12 text-brand" />
            <div>
              <h3 className="wide text-2xl font-extrabold uppercase">Freinage</h3>
              <p className="mt-2 text-white/60">Plaquettes, disques, liquide de frein.</p>
            </div>
          </a>

          <ImageCard
            src="/images/pneus.jpg"
            tag="Montage & équilibrage"
            title="Pneumatiques"
            text="Montage, équilibrage, crevaison, permutation."
            className="sm:col-span-2"
          />

          <ImageCard
            src="/images/atelier.jpg"
            tag="Atelier"
            title="Mécanique moteur"
            text="Distribution, embrayage, accessoires et réparations moteur."
            className="sm:col-span-2"
          />

          <div className="flex flex-col justify-between rounded-3xl bg-soft p-7 sm:col-span-2">
            <h3 className="wide text-2xl font-extrabold uppercase">Et aussi</h3>
            <div className="flex flex-wrap gap-2">
              {extras.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
