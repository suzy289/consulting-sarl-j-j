import type { Metadata } from "next";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { partners } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Références | J & J Consulting SARL — Ils nous font confiance",
  description:
    "Découvrez les entreprises et institutions qui ont choisi J & J Consulting comme partenaire financier. Témoignages et références clients.",
};

export default function ReferencesPage() {
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
            Références
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Ils nous font confiance
          </h1>
          <p className="text-white/80 max-w-2xl">
            Des entreprises de toutes tailles qui ont choisi J & J Consulting
            comme partenaire financier.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-12">
            Nos partenaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((p, i) => (
              <div
                key={p.id}
                className="group relative flex flex-col items-center p-8 bg-[#F5F5F5] rounded-lg border border-gray-200 cursor-default"
              >
                {p.logo ? (
                  <>
                    <div className="relative h-20 w-40 mb-4 flex items-center justify-center">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={160}
                        height={80}
                        className="object-contain max-h-20 w-auto"
                        style={{ width: "auto", height: "auto" }}
                        loading={i < 3 ? "eager" : undefined}
                      />
                    </div>
                    <h3 className="font-semibold text-[#0A0A0A] text-center">
                      {p.shortName || p.name}
                    </h3>
                    {p.services && (
                      <p className="text-gray-600 text-sm text-center mt-2 leading-relaxed">
                        {p.services}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-gray-700 font-medium text-center">
                    {p.name}
                  </p>
                )}
                {(p.name || p.services) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/50 backdrop-blur-[2px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 text-center pointer-events-none">
                    <p className="text-white font-semibold text-sm mb-2 drop-shadow-md">
                      {p.name}
                    </p>
                    {p.services && (
                      <p className="text-white/95 text-xs leading-relaxed drop-shadow-md">
                        {p.services}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-12">
            Témoignages clients
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-8 rounded-lg border-l-4 border-[#C9A84C]"
              >
                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#0A0A0A]">{t.author}</p>
                  <p className="text-gray-600 text-sm">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-12">
            Nos interventions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video bg-[#F5F5F5] rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400 text-sm">
                  Photo / vidéo conférence
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
