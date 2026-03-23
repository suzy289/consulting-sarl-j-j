"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
        >
          Prêt à sécuriser et optimiser vos finances ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/80 max-w-2xl mx-auto mb-12"
        >
          Prenez contact avec nous dès aujourd&apos;hui. Nous revenons vers vous sous 24h avec les meilleures options pour votre situation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 text-sm font-semibold transition-colors"
          >
            Nous écrire sur WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-black hover:bg-[#C9A84C] hover:text-white px-8 py-4 text-sm font-semibold transition-colors"
          >
            Remplir le formulaire de contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center text-white/70 text-sm"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={18} className="text-[#C9A84C]" />
            {SITE.location}
          </span>
          <a
            href={`tel:+${SITE.whatsapp}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone size={18} className="text-[#C9A84C]" />
            +237 620 275 758
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail size={18} className="text-[#C9A84C]" />
            {SITE.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
