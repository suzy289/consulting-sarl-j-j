"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Prise de contact",
    desc: "Nous échangeons sur votre situation, vos besoins et vos objectifs. Un premier diagnostic gratuit est réalisé.",
  },
  {
    num: "02",
    title: "Proposition & devis",
    desc: "Nous vous soumettons une offre claire, détaillée et sans frais cachés, adaptée à votre budget et à votre calendrier.",
  },
  {
    num: "03",
    title: "Exécution de la mission",
    desc: "Nos experts prennent en charge votre dossier avec rigueur et confidentialité. Vous êtes informé à chaque étape.",
  },
  {
    num: "04",
    title: "Livraison & suivi",
    desc: "Les livrables sont remis dans les délais convenus. Un suivi post-mission est assuré pour garantir votre satisfaction.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4"
        >
          Comment travaillons-nous ?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A0A0A] mb-16"
        >
          Un processus clair, du premier contact à la mission accomplie
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-300 -translate-y-1/2 z-0" />
              )}
              <div className="relative z-10 bg-white p-8 rounded-lg border border-gray-200">
                <span className="font-serif text-4xl font-bold text-[#C9A84C] block mb-4">
                  {step.num}
                </span>
                <h3 className="font-semibold text-lg text-[#0A0A0A] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
