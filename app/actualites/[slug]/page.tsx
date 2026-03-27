import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<string, { title: string; content: string; date: string }> = {
  "actualites-fiscales-2025": {
    title: "Réformes fiscales 2025 : ce qui change pour les entreprises",
    date: "15 Mars 2025",
    content: `
      L'année 2025 apporte son lot de modifications réglementaires pour les entreprises camerounaises. Voici les points essentiels à retenir pour anticiper et adapter votre gestion fiscale.

      Les principales évolutions concernent la simplification des déclarations, les nouveaux plafonds et les dispositifs d'accompagnement pour les PME. Nous recommandons une veille active et un dialogue régulier avec votre conseil fiscal.
    `,
  },
  "comptabilite-pme": {
    title: "Comptabilité des PME : bonnes pratiques et pièges à éviter",
    date: "10 Mars 2025",
    content: `
      Une tenue comptable rigoureuse est la clé d'une gestion saine. Pour les PME, certains réflexes font la différence : archiver les pièces, respecter les délais de déclaration, et faire contrôler régulièrement vos écritures.

      Les erreurs les plus fréquentes ? La confusion entre trésorerie et résultat, l'oublie des provisions, et le manque de rapprochements bancaires. Un accompagnement personnalisé vous aide à éviter ces écueils.
    `,
  },
  "business-plan-credit": {
    title: "Business Plan : clé d'accès au financement bancaire",
    date: "5 Mars 2025",
    content: `
      Un business plan solide est indispensable pour convaincre les banques et les investisseurs. Il doit démontrer la viabilité de votre projet, la cohérence de vos chiffres et votre capacité à rembourser.

      Les éléments clés : une étude de marché réaliste, des prévisions financières sur 3 à 5 ans, un plan de trésorerie détaillé et une présentation claire de l'équipe. Nous vous accompagnons dans l'élaboration de documents professionnels.
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article | J & J Consulting" };
  return {
    title: `${article.title} | J & J Consulting SARL`,
    description: article.content.slice(0, 160),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <Link
            href="/actualites"
            className="text-[#C9A84C] hover:text-[#E4C97A] text-sm mb-6 inline-block transition-colors"
          >
            ← Retour aux actualités
          </Link>
          <p className="text-white/60 text-sm">{article.date}</p>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mt-2">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <div className="article-content text-gray-700 leading-relaxed text-[17px]">
            {article.content
              .trim()
              .split(/\n\n+/)
              .map((para, i) => (
                <p key={i} className="mb-6">
                  {para.replace(/\n/g, " ")}
                </p>
              ))}
          </div>
          <Link
            href="/contact"
            className="inline-block mt-12 bg-[#0A0A0A] text-white hover:bg-[#C9A84C] px-6 py-3 text-sm font-semibold transition-colors"
          >
            Nous contacter pour en discuter
          </Link>
        </div>
      </section>
    </>
  );
}
