import { fullAddress, mapsQuery, phoneHref, site } from "@/lib/site";
import { ArrowUpRight, Mail, Phone, Pin } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const items = [
    { icon: Pin, label: "Adresse", value: fullAddress, href: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}` },
    { icon: Phone, label: "Téléphone", value: site.phone, href: phoneHref },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section id="contact" className="scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <span className="eyebrow text-muted">Contact</span>
          <h2 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">
            Passez
            <br />
            <span className="text-brand">au garage</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 lg:grid-cols-[1fr_1.5fr]">
          <div className="grid gap-3">
            {items.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl bg-soft p-6 transition-colors hover:bg-brand hover:text-white"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-muted group-hover:text-white/70">{label}</span>
                  <span className="wide block truncate text-lg font-bold">{value}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:rotate-45" />
              </a>
            ))}
          </div>

          <div className="min-h-[380px] overflow-hidden rounded-3xl bg-soft">
            <iframe
              title="Plan d'accès LK Mécanique"
              src={`https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`}
              className="h-full min-h-[380px] w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
