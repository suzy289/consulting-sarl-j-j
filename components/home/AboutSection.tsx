"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const timeline = [
  { year: "2012", label: "Bac Comptabilité (IPPB)" },
  { year: "2015", label: "BTS + premiers pas terrain (COGEP)" },
  { year: "2020", label: "Master Audit (ISMAT)" },
  { year: "2025", label: "Fondation J & J Consulting SARL" },
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
              Qui sommes-nous
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Une histoire née de la passion et de l&apos;amour
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Né le 15 janvier 1994 à Yaoundé, Darlain a forgé son expertise sur plus d&apos;une décennie de terrain. Fort d&apos;un Master en Audit et Comptabilité de Gestion, il a traversé les rangs des plus grands cabinets avant de fonder <strong>J & J Consulting SARL</strong> — un cabinet dont le nom porte l&apos;empreinte de ses jumelles, sa plus grande fierté.
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              Derrière chaque mission, il y a un homme qui croit profondément que la rigueur et l&apos;humanité ne s&apos;opposent pas. Elles se complètent.
            </p>
            <Link
              href="/a-propos"
              className="inline-block bg-[#C9A84C] hover:bg-[#E4C97A] text-black px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Lire notre histoire complète
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="border border-white/20 rounded-lg p-4 hover:border-[#C9A84C] transition-colors"
                >
                  <span className="font-serif text-2xl font-bold text-[#C9A84C] block">
                    {item.year}
                  </span>
                  <span className="text-white/80 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
