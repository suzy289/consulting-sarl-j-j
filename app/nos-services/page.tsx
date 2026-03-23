import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Services | J & J Consulting SARL — Domaines d'intervention",
  description:
    "Découvrez nos 10 domaines d'intervention : création d'entreprise, assistance comptable, fiscalité, analyse financière, business plan, contrôle de gestion et plus.",
};

export default function NosServicesPage() {
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
            Nos domaines d&apos;intervention
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            J & J Consulting SARL est votre partenaire pour une gestion
            d&apos;entreprise performante.
          </h1>
          <p className="text-white/80 max-w-2xl mb-8">
            Spécialistes en Audit, Comptabilité et Conseil Fiscal, nous
            transformons vos défis financiers en opportunités de croissance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A84C] hover:bg-[#E4C97A] text-black px-6 py-3 text-sm font-semibold transition-colors"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Années d'expérience" },
              { value: "100%", label: "Taux de satisfaction visé" },
              { value: "5", label: "Domaines d'expertise" },
              { value: "0", label: "Frais cachés" },
            ].map((stat, i) => (
              <div key={i}>
                <span className="font-serif text-4xl font-bold text-[#C9A84C]">
                  {stat.value}
                </span>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="domaines-intervention" className="py-20 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
            Nos domaines d&apos;intervention
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A0A0A] mb-6">
            J & J Consulting SARL accompagne les entreprises dans la gestion, le
            conseil, l&apos;assistance et la formation.
          </h2>
          <p className="text-gray-600 max-w-3xl mb-16">
            Avec des solutions sur mesure pour optimiser la performance et la
            rentabilité.
          </p>

          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon;
              const whatsappMsg = `Bonjour, je souhaite des informations détaillées sur le service ${service.title}. Merci de m'expliquer les modalités et le déroulement.`;
              const waLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMsg)}`;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="bg-white rounded-lg border border-gray-200 p-8 lg:p-10 hover:border-[#C9A84C]/50 transition-colors scroll-mt-24"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex gap-4">
                      <Icon className="w-10 h-10 text-[#C9A84C] shrink-0" />
                      <div>
                        <span className="text-6xl font-serif font-bold text-gray-100">
                          {String(service.id).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#C9A84C] font-medium text-sm mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold hover:text-[#9E7B2E] transition-colors"
                      >
                        En savoir plus →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold mb-6">
            Prêt à transformer votre gestion financière ?
          </h2>
          <p className="text-white/80 mb-8">
            Nos experts analysent votre situation et vous proposent les solutions
            les plus adaptées à votre entreprise.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 font-semibold transition-colors"
          >
            Contacter un expert maintenant
          </a>
        </div>
      </section>
    </>
  );
}
