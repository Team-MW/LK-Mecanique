import { fullAddress, phoneHref, site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="p-3 pt-0">
      <div className="overflow-hidden rounded-[28px] bg-ink text-white/60">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 pt-16 sm:px-10 md:grid-cols-[1.5fr_1fr_1fr] lg:px-14">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              Garage mécanique toutes marques. Entretien, réparation et diagnostic.
            </p>
          </div>
          <ul className="grid content-start gap-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#methode" className="hover:text-white">Méthode</a></li>
            <li><a href="#rendez-vous" className="hover:text-white">Rendez-vous</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
          <ul className="grid content-start gap-2 text-sm">
            <li>{fullAddress}</li>
            <li><a href={phoneHref} className="hover:text-white">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
          </ul>
        </div>

        <p
          aria-hidden
          className="display mt-16 -mb-[0.1em] px-4 text-center text-[9vw] whitespace-nowrap text-white/[0.06]"
        >
          LK Mécanique
        </p>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-2 px-6 py-6 text-xs sm:flex-row sm:px-10 lg:px-14">
            <p>© {new Date().getFullYear()} {site.name}</p>
            <p>Mentions légales</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
