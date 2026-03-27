export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "J & J Consulting nous a permis de régulariser notre situation fiscale en un temps record. Professionnalisme, discrétion et résultats concrets.",
    author: "Direction Générale",
    role: "Directeur",
    company: "Entreprise Partenaire",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Le Cabinet de M. Darlain a transformé notre gestion comptable. Enfin des chiffres clairs et une équipe disponible quand on en a besoin.",
    author: "Fondatrice",
    role: "Fondatrice",
    company: "Startup Partenaire",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Grâce à leur accompagnement, nous avons optimisé notre fiscalité et dégagé des marges que nous ne soupçonnions pas. Merci !",
    author: "Gérant",
    role: "Gérant",
    company: "PME Partenaire",
    rating: 5,
  },
];
