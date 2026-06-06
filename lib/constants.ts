export const SITE = {
  name: "J & J Consulting SARL",
  tagline: "Votre partenaire en Audit, Comptabilité & Conseils fiscaux",
  location: "Quartier Yaoundé / Quartier Fouda, Yaoundé, Cameroun",
  email: "jjconsultingsarl@gmail.com",
  whatsapp: "237694944616",
  phones: ["(+237) 6 94 94 46 16", "(+237) 6 78 45 67 81"],
  address: "Quartier Yaoundé / Quartier Fouda, Yaoundé, Cameroun",
  niu: "M022416451146F",
  rccm: "RC/YAO/2024/B/474",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}`;
export const WHATSAPP_MESSAGE = "Bonjour, je souhaite des informations sur vos services. Merci.";

/** Fiche Google Maps — J & J Consulting SARL (Yaoundé) */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/J%26J+Consulting.SARL/@3.8804723,11.5327968,17z/data=!3m1!4b1!4m6!3m5!1s0x108bc50023758795:0x322f1b2e02109fb5!8m2!3d3.8804723!4d11.5353717!16s%2Fg%2F11z8h15zkg?entry=ttu";

/** iframe embed (même lieu que GOOGLE_MAPS_URL) */
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.262!2d11.5353717!3d3.8804723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc50023758795%3A0x322f1b2e02109fb5!2sJ%26J%20Consulting.SARL!5e0!3m2!1sfr!2scm!4v1749139200000";

/** Page de réservation Calendly (ex. https://calendly.com/votre-compte/entretien). À définir dans .env.local : NEXT_PUBLIC_CALENDLY_URL */
export const CALENDLY_URL =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_CALENDLY_URL
    ? process.env.NEXT_PUBLIC_CALENDLY_URL.trim()
    : "";
