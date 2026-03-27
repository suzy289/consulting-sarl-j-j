"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/lib/partners";

function PartnerCard({
  partner,
}: {
  partner: (typeof partners)[0];
}) {
  return (
    <div
      className="group relative flex-shrink-0 w-48 h-28 md:w-56 md:h-32 flex items-center justify-center bg-white rounded-lg p-4 mx-4 border border-white/10 hover:border-[#C9A84C]/50 transition-colors overflow-hidden"
      title={partner.services || partner.name}
    >
      {partner.logo ? (
        <div className="relative w-full h-full">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain object-center"
            sizes="224px"
          />
        </div>
      ) : (
        <p className="text-[#0A0A0A] text-sm font-medium text-center">
          {partner.name}
        </p>
      )}
      {(partner.name || partner.services) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 bg-black/70 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 text-center overflow-hidden">
          <p className="text-white font-semibold text-xs mb-1 drop-shadow-md text-center line-clamp-2 w-full">
            {partner.name}
          </p>
          {partner.services && (
            <p className="text-white/95 text-[10px] leading-tight drop-shadow-md line-clamp-2 text-center w-full">
              {partner.services}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function PartnersSection() {
  const mid = Math.ceil(partners.length / 2);
  const row1 = partners.slice(0, mid);
  const row2 = partners.slice(mid);

  return (
    <section className="py-20 lg:py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4"
        >
          Ils nous font confiance
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold"
        >
          Des entreprises et institutions qui comptent sur notre expertise
        </motion.h2>
      </div>

      <div className="px-6 lg:px-16">
        {/* Ligne 1 : défile gauche → droite */}
        <div className="overflow-hidden mb-6">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...row1, ...row1].map((p, i) => (
              <PartnerCard key={`row1-${p.id}-${i}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Ligne 2 : défile droite → gauche */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...row2, ...row2].map((p, i) => (
              <PartnerCard key={`row2-${p.id}-${i}`} partner={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
