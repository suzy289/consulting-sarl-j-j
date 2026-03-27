import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Actualités | J & J Consulting SARL — Blog & Veille",
  description:
    "Restez informé des actualités fiscales, comptables et financières au Cameroun. Articles et conseils du cabinet J & J Consulting.",
};

const articles = [
  {
    slug: "actualites-fiscales-2025",
    title: "Réformes fiscales 2025 : ce qui change pour les entreprises",
    excerpt:
      "Tour d'horizon des principales modifications réglementaires et leur impact sur la gestion fiscale de votre entreprise.",
    category: "Fiscalité",
    date: "15 Mars 2025",
    image: "/images/actualite-fiscalite.jpg",
  },
  {
    slug: "comptabilite-pme",
    title: "Comptabilité des PME : bonnes pratiques et pièges à éviter",
    excerpt:
      "Guide pratique pour une tenue comptable efficace et conforme aux normes camerounaises.",
    category: "Comptabilité",
    date: "10 Mars 2025",
    image: "/images/actualite-comptabilite.jpg",
  },
  {
    slug: "business-plan-credit",
    title: "Business Plan : clé d'accès au financement bancaire",
    excerpt:
      "Comment structurer un business plan convaincant pour accompagner vos demandes de crédit.",
    category: "Finance",
    date: "5 Mars 2025",
    image: "/images/actualite-finance.jpg",
  },
];

export default function ActualitesPage() {
  return (
    <>
      <section className="min-h-[50vh] bg-[#0A0A0A] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 w-full">
          <Image
            src="/logo.png"
            alt="J & J Consulting SARL"
            width={140}
            height={48}
            className="h-5 w-auto mb-6"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
            Actualités
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Blog & Veille réglementaire
          </h1>
          <p className="text-white/80 max-w-2xl">
            Restez informé des actualités fiscales, comptables et financières au
            Cameroun.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/actualites/${article.slug}`}
                className="group block"
              >
                <div className="aspect-video bg-[#F5F5F5] rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={article.image}
                    alt=""
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase">
                  {article.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#0A0A0A] mt-2 mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-gray-400 text-xs mt-4 block">
                  {article.date}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-12">
            Plus d&apos;articles à venir prochainement.
          </p>
        </div>
      </section>
    </>
  );
}
