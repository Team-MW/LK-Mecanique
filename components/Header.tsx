"use client";

import { useState } from "react";
import { phoneHref } from "@/lib/site";
import { ArrowUpRight, Phone } from "./Icons";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#avis", label: "Avis" },
  { href: "#rendez-vous", label: "Rendez-vous" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-5">
      <div className="mx-auto max-w-6xl rounded-full border border-white/40 bg-white/85 py-2 pr-2 pl-5 shadow-[0_8px_30px_rgba(10,15,31,0.08)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-soft hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              aria-label="Appeler"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-soft text-ink transition-colors hover:bg-brand-soft"
            >
              <Phone className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#rendez-vous"
              className="group hidden items-center gap-2 rounded-full bg-ink py-3 pr-3 pl-5 text-sm font-semibold text-white transition-colors hover:bg-brand sm:flex"
            >
              Réserver
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-ink md:hidden"
            >
              <span className={`h-0.5 w-4 bg-white transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`h-0.5 w-4 bg-white transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white p-3 shadow-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="wide block rounded-2xl px-4 py-4 text-lg font-bold uppercase text-ink hover:bg-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
