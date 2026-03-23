"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Image
              src="/logo.png"
              alt="J & J Consulting SARL"
              width={150}
              height={30}
              className="h-8 w-auto md:h-10"
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <p className="text-white text-sm md:text-base font-semibold tracking-[3px] uppercase mt-3">
              J & J Consulting SARL
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C9A84C] text-xs md:text-sm font-semibold tracking-[3px] uppercase mb-6"
          >
            Cabinet d&Apos;Audit & de Conseil — Yaoundé, Cameroun
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6"
          >
            L&apos;expertise au service de votre performance financière.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10"
          >
            J & J Consulting SARL accompagne les entreprises, PME, startups et institutions dans la maîtrise de leurs obligations comptables, fiscales et financières. Avec rigueur, intégrité et une vision profondément humaine du conseil.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="bg-white text-black hover:bg-[#C9A84C] hover:text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-center border border-white"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/nos-services"
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-center"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-4 bg-[#C9A84C]/10 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-white/60 text-sm font-medium tracking-widest">
          <span className="inline-block px-8">INTÉGRITÉ</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">CONFIDENTIALITÉ</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">RIGUEUR</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">EXCELLENCE</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">TRANSPARENCE</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">AUDIT</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">COMPTABILITÉ</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">FISCALITÉ</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">FINANCE</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">INTÉGRITÉ</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">CONFIDENTIALITÉ</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">RIGUEUR</span>
          <span className="inline-block px-8">·</span>
          <span className="inline-block px-8">EXCELLENCE</span>
          <span className="inline-block px-8">·</span>
        </div>
      </div>
    </section>
  );
}
