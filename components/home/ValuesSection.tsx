"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckSquare, Eye, Star } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Intégrité",
    desc: "Honnêteté absolue dans chaque mission",
  },
  {
    icon: Lock,
    title: "Confidentialité",
    desc: "Protection totale des données clients",
  },
  {
    icon: CheckSquare,
    title: "Rigueur",
    desc: "Précision et exactitude sans compromis",
  },
  {
    icon: Eye,
    title: "Transparence",
    desc: "Clarté des honoraires, méthodes et résultats",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "Dépasser les attentes, toujours",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4"
        >
          Nos valeurs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A0A0A] mb-16"
        >
          Les piliers qui guident chaque mission
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center border-b-2 border-transparent hover:border-[#C9A84C] pb-4 transition-colors"
              >
                <Icon className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-[#0A0A0A] mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
