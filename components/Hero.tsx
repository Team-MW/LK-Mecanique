import Image from "next/image";
import { mapsQuery, site } from "@/lib/site";
import { ArrowUpRight, Star } from "./Icons";

export default function Hero() {
  return (
    <section id="accueil" className="p-3">
      <div className="relative flex min-h-[calc(100svh-24px)] flex-col justify-end overflow-hidden rounded-[28px] bg-ink text-white">
        <Image
          src="/images/hero.jpg"
          alt="Mécanicien intervenant sur un moteur"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/35 via-transparent to-transparent mix-blend-multiply" />

        <div className="relative px-6 pt-40 pb-8 sm:px-10 lg:px-14 lg:pb-12">
          <div className="flex flex-wrap gap-2">
            {["Toutes marques", "Devis gratuit", "Nouveau garage"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="display mt-6 text-[10.6vw] lg:text-[8.6vw]">
            Mécanique
            <br />
            <span className="text-white/40">sans</span> surprise<span className="text-brand">.</span>
          </h1>

          <div className="mt-10 grid gap-6 border-t border-white/15 pt-8 lg:grid-cols-[1fr_auto_auto] lg:items-end lg:gap-12">
            <p className="max-w-md text-lg leading-relaxed text-white/75">
              Entretien, réparation et diagnostic toutes marques. Un devis clair avant chaque
              intervention, un prix juste à la sortie.
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md transition-colors hover:bg-white/15"
            >
              <span className="wide text-3xl font-extrabold">{site.googleRating}</span>
              <span className="text-sm leading-tight">
                <span className="flex gap-0.5 text-amber-400">
                  {[0, 1, 2, 3].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5" />
                  ))}
                  <Star className="h-3.5 w-3.5 text-white/25" />
                </span>
                <span className="mt-1 block text-white/60">Avis Google</span>
              </span>
            </a>

            <a
              href="#rendez-vous"
              className="group flex items-center justify-between gap-6 rounded-full bg-brand py-2.5 pr-2.5 pl-7 font-semibold transition-colors hover:bg-white hover:text-ink"
            >
              Prendre rendez-vous
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:rotate-45 group-hover:bg-brand group-hover:text-white">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
