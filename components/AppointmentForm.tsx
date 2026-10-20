"use client";

import { FormEvent } from "react";
import { site } from "@/lib/site";

const services = [
  "Entretien / vidange",
  "Freinage",
  "Pneumatiques",
  "Diagnostic électronique",
  "Embrayage / distribution",
  "Autre réparation",
];

export default function AppointmentForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Nom : ${d.get("nom")}`,
      `Téléphone : ${d.get("tel")}`,
      `Véhicule : ${d.get("vehicule")}`,
      `Prestation : ${d.get("service")}`,
      `Date souhaitée : ${d.get("date")}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Demande de rendez-vous"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="nom" required placeholder="Nom" className="field" />
        <input name="tel" required type="tel" placeholder="Téléphone" className="field" />
      </div>
      <input name="vehicule" placeholder="Véhicule (marque, modèle)" className="field" />
      <div className="grid gap-3 sm:grid-cols-2">
        <select name="service" defaultValue="" required className="field">
          <option value="" disabled>
            Prestation
          </option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <input name="date" type="date" className="field" />
      </div>
      <textarea name="message" rows={4} placeholder="Votre message" className="field resize-none" />
      <button
        type="submit"
        className="mt-2 rounded-full bg-brand py-4 font-semibold text-white transition-colors hover:bg-white hover:text-ink"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}
