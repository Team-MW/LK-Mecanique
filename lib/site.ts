// Infos à confirmer avec le client : téléphone, email, ville / code postal, horaires.
export const site = {
  name: "LK Mécanique",
  address: "8 Rue Romain Rolland",
  city: "",
  phone: "06 00 00 00 00",
  email: "contact@lk-mecanique.fr",
  hours: [
    { days: "Lundi – Vendredi", time: "8h30 – 12h / 14h – 18h30" },
    { days: "Samedi", time: "9h – 12h" },
    { days: "Dimanche", time: "Fermé" },
  ],
  googleRating: "4,0",
  googleReviews: 1,
};

export const fullAddress = [site.address, site.city].filter(Boolean).join(", ");
export const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
export const mapsQuery = encodeURIComponent(`${site.name} ${fullAddress}`);
