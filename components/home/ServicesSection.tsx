"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { WHATSAPP_LINK } from "@/lib/constants";

const serviceVisuals: Record<
  string,
  { src: string; alt: string; caption: string }
> = {
  "creation-entreprise": {
    src: "/images/services/creation-entreprise.jpg",
    alt: "Deux professionnels échangent autour d'un projet de création d'entreprise.",
    caption: "Transformer une idée en entreprise viable et durable.",
  },
  "assistance-comptable": {
    src: "/images/services/assistance-comptable.jpg",
    alt: "Documents comptables et calculs financiers sur un bureau.",
    caption: "Une comptabilité claire pour piloter vos décisions avec confiance.",
  },
  "fiscalite-social": {
    src: "/images/services/fiscalite-social.jpg",
    alt: "Main signant un document administratif dans un cadre professionnel.",
    caption: "Sécuriser vos obligations fiscales et sociales en toute sérénité.",
  },
  "analyse-financiere": {
    src: "/images/services/analyse-financiere.jpg",
    alt: "Graphiques financiers affichés sur un écran avec analyse de performance.",
    caption: "Lire vos chiffres pour éclairer vos choix stratégiques.",
  },
  "business-plan": {
    src: "/images/services/business-plan.jpg",
    alt: "Équipe en réunion de planification autour d'un business plan.",
    caption: "Structurer votre vision avec un plan convaincant et réaliste.",
  },
  "controle-gestion": {
    src: "/images/services/controle-gestion.jpg",
    alt: "Tableau de bord avec indicateurs de performance et statistiques.",
    caption: "Mesurer, ajuster, améliorer: la performance devient maîtrisée.",
  },
  "systemes-gestion": {
    src: "/images/services/systemes-gestion.jpg",
    alt: "Professionnels collaborant sur des outils numériques de gestion.",
    caption: "Des outils de gestion adaptés à votre rythme de croissance.",
  },
  "conseil-strategique": {
    src: "/images/services/conseil-strategique.jpg",
    alt: "Consultants présentant une stratégie d'entreprise à une équipe.",
    caption: "Décider avec lucidité, avancer avec ambition.",
  },
  formations: {
    src: "/images/services/formations.jpg",
    alt: "Session de formation professionnelle en salle de travail.",
    caption: "Renforcer vos compétences pour des résultats concrets.",
  },
  audit: {
    src: "/images/services/audit.jpg",
    alt: "Professionnels analysant des dossiers dans un contexte d'audit.",
    caption: "Une vision indépendante pour sécuriser et faire progresser votre organisation.",
  },
};

export function ServicesSection() {
  const [selected, setSelected] = useState(0);
  const service = services[selected];
  const ServiceIcon = service.icon;
  const serviceVisual = serviceVisuals[service.slug];

  const whatsappMsg = `Bonjour, je souhaite des informations détaillées sur le service ${service.title}. Merci de m'expliquer les modalités et le déroulement.`;
  const waLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="services" className="relative overflow-hidden">
      {/* En-tête */}
      <div className="bg-[#0A0A0A] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
            Nos expertises
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Des solutions sur mesure pour chaque enjeu financier
          </h2>
          <p className="text-white/70 max-w-2xl">
            Du simple suivi comptable jusqu&apos;à l&apos;audit stratégique, nous intervenons là où votre entreprise a besoin d&apos;un regard expert et fiable.
          </p>
        </div>
      </div>

      {/* Contenu principal - style Meriaz */}
      <div className="bg-white relative">
        {/* Motif décoratif */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A0A0A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:min-h-[520px]">
            {/* Colonne gauche - liste des services */}
            <div className="flex flex-col min-h-[400px] lg:min-h-0">
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-6 shrink-0">
                Sélectionnez un service
              </p>
              <div className="space-y-1 flex-1 min-h-0 overflow-y-auto pr-2">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = selected === i;
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => setSelected(i)}
                      className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                        isActive
                          ? "bg-[#0A0A0A] text-white shadow-lg"
                          : "bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#EEEEEE]"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 shrink-0 ${
                          isActive ? "text-[#C9A84C]" : "text-[#C9A84C]/70"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold truncate">{s.title}</p>
                        <p
                          className={`text-sm truncate ${
                            isActive ? "text-white/70" : "text-gray-500"
                          }`}
                        >
                          {s.subtitle}
                        </p>
                      </div>
                      {isActive && (
                        <ArrowRight className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                      )}
                    </button>
                  );
                })}
              </div>
              <Link
                href="/nos-services"
                className="inline-flex items-center gap-2 mt-6 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all shrink-0"
              >
                Voir tous nos services
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Colonne droite - détail du service sélectionné */}
            <div className="flex flex-col min-h-[400px] lg:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#F8F8F8] rounded-2xl p-8 lg:p-10 border border-gray-100 h-full flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#0A0A0A] flex items-center justify-center shrink-0">
                      <ServiceIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#0A0A0A]">
                        {service.title}
                      </h3>
                      <p className="text-[#C9A84C] text-sm font-medium mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 min-h-0 flex flex-col">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                        {item}
                      </li>
                    ))}
                    </ul>

                    {serviceVisual && (
                      <div className="mt-7 rounded-xl overflow-hidden border border-gray-200 bg-white flex-1 min-h-[220px] relative">
                        <div className="relative h-full min-h-[220px]">
                          <Image
                            src={serviceVisual.src}
                            alt={serviceVisual.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                        </div>
                        <p className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm text-white bg-gradient-to-t from-black/75 to-transparent">
                          {serviceVisual.caption}
                        </p>
                      </div>
                    )}
                  </div>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 font-semibold transition-colors mt-6 shrink-0"
                  >
                    <MessageCircle size={20} />
                    Discuter sur WhatsApp
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
