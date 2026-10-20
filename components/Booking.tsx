import Image from "next/image";
import { phoneHref, site } from "@/lib/site";
import AppointmentForm from "./AppointmentForm";
import { Phone } from "./Icons";
import Reveal from "./Reveal";

export default function Booking() {
  return (
    <section id="rendez-vous" className="scroll-mt-28 p-3">
      <div className="relative overflow-hidden rounded-[28px] bg-ink text-white">
        <Image
          src="/images/reparation.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand/40 blur-[140px]" />

        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-28">
          <Reveal>
            <span className="eyebrow text-white/60">Rendez-vous</span>
            <h2 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Un voyant
              <br />
              allumé<span className="text-brand"> ?</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/65">
              Envoyez-nous votre demande, on vous rappelle pour fixer un créneau et faire le
              point sur votre véhicule.
            </p>

            <a
              href={phoneHref}
              className="wide mt-10 inline-flex items-center gap-4 text-3xl font-extrabold transition-colors hover:text-brand sm:text-4xl"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand">
                <Phone className="h-6 w-6" />
              </span>
              {site.phone}
            </a>

            <dl className="mt-12 grid max-w-md gap-3 border-t border-white/10 pt-8 text-sm">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-white/50">{h.days}</dt>
                  <dd className="font-medium">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-9">
              <h3 className="wide text-2xl font-extrabold uppercase">Demande de rendez-vous</h3>
              <p className="mt-1 mb-7 text-sm text-white/50">Réponse rapide, sans engagement.</p>
              <AppointmentForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
