import { mapsQuery, reviews, site } from "@/lib/site";
import Reveal from "./Reveal";

const googleUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const avatarColors = ["#1a73e8", "#e8710a", "#188038", "#a142f4", "#d93025"];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill={i <= Math.round(rating) ? "#fbbc04" : "#dadce0"}>
          <path d="m12 17.3 6.2 3.7-1.6-7 5.4-4.7-7.2-.6L12 2 9.2 8.7 2 9.3l5.4 4.7-1.6 7z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  const rating = parseFloat(site.googleRating.replace(",", "."));

  return (
    <section id="avis" className="scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <span className="eyebrow text-muted">Avis clients</span>
            <h2 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Ils nous ont
              <br />
              <span className="text-brand">confié leur voiture</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-6 rounded-3xl border border-line bg-white p-6 shadow-[0_1px_3px_rgba(60,64,67,0.15)] sm:flex-nowrap">
              <GoogleG className="h-12 w-12 shrink-0" />
              <div className="font-[Arial,Helvetica,sans-serif]">
                <p className="text-[15px] text-[#3c4043]">Avis Google</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-3xl text-[#202124]">{site.googleRating}</span>
                  <Stars rating={rating} className="h-5 w-5" />
                </div>
                <p className="mt-1 text-sm text-[#70757a]">
                  {site.googleReviews} avis
                </p>
              </div>
              <a
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1a73e8] px-5 py-2.5 font-[Arial,Helvetica,sans-serif] text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#1765cc]"
              >
                Laisser un avis
              </a>
            </div>
          </Reveal>
        </div>

        <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100} className="w-[85%] shrink-0 snap-start md:w-auto">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 font-[Arial,Helvetica,sans-serif] shadow-[0_1px_3px_rgba(60,64,67,0.15)] transition-shadow hover:shadow-[0_4px_16px_rgba(60,64,67,0.18)]">
                <header className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg text-white"
                    style={{ background: avatarColors[i % avatarColors.length] }}
                  >
                    {r.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-medium text-[#202124]">{r.name}</p>
                    <p className="text-xs text-[#70757a]">{r.date}</p>
                  </div>
                  <GoogleG className="h-5 w-5 shrink-0" />
                </header>
                <div className="mt-4">
                  <Stars rating={r.rating} />
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-[#3c4043]">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-[Arial,Helvetica,sans-serif] text-sm font-medium text-[#1a73e8] transition-colors hover:bg-[#f8f9fa]"
          >
            <GoogleG className="h-4 w-4" />
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
