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

// EXEMPLES PROVISOIRES : à remplacer par les vrais avis de la fiche Google avant la mise en ligne.
export const reviews = [
  {
    name: "Karim B.",
    date: "il y a 2 semaines",
    rating: 5,
    text: "Vidange et plaquettes faites dans la journée. Devis respecté, explications claires, je recommande.",
  },
  {
    name: "Sophie M.",
    date: "il y a 1 mois",
    rating: 5,
    text: "Garage sérieux et à l'écoute. Il a trouvé l'origine du voyant moteur rapidement, prix honnête.",
  },
  {
    name: "Julien D.",
    date: "il y a 1 mois",
    rating: 4,
    text: "Bon accueil et travail propre. Un peu d'attente pour le rendez-vous mais ça valait le coup.",
  },
];

export const fullAddress = [site.address, site.city].filter(Boolean).join(", ");
export const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
export const mapsQuery = encodeURIComponent(`${site.name} ${fullAddress}`);
