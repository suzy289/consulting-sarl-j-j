"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute -top-28 right-[-10%] w-[90vw] max-w-[900px] h-[980px] opacity-75"
          viewBox="0 0 900 980"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ropeGold" x1="0" y1="0" x2="900" y2="980">
              <stop offset="0%" stopColor="#E4C97A" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#C9A84C" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#9E7B2E" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          <path
            d="M760 10 C690 140 730 230 660 340 C590 450 640 560 560 700 C520 780 500 860 500 960"
            stroke="url(#ropeGold)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M820 40 C760 170 770 250 710 350 C650 450 670 560 610 700 C580 790 560 870 560 960"
            stroke="url(#ropeGold)"
            strokeWidth="1.8"
            strokeOpacity="0.85"
            strokeLinecap="round"
          />
          <path
            d="M700 0 C650 110 670 210 620 300 C570 390 580 510 520 650 C485 760 470 850 470 960"
            stroke="url(#ropeGold)"
            strokeWidth="1.6"
            strokeOpacity="0.7"
            strokeLinecap="round"
          />
          <path
            d="M860 100 C780 210 810 300 740 400 C680 500 700 620 650 740 C620 830 610 900 610 960"
            stroke="url(#ropeGold)"
            strokeWidth="1.4"
            strokeOpacity="0.65"
            strokeLinecap="round"
          />

          <circle cx="760" cy="10" r="4" fill="#E4C97A" />
          <circle cx="820" cy="40" r="3.5" fill="#E4C97A" fillOpacity="0.9" />
          <circle cx="700" cy="0" r="3" fill="#E4C97A" fillOpacity="0.85" />
        </svg>

        <svg
          className="absolute -top-28 left-[-10%] w-[90vw] max-w-[900px] h-[980px] opacity-75 transform-gpu -scale-x-100"
          viewBox="0 0 900 980"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M760 10 C690 140 730 230 660 340 C590 450 640 560 560 700 C520 780 500 860 500 960"
            stroke="url(#ropeGold)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M820 40 C760 170 770 250 710 350 C650 450 670 560 610 700 C580 790 560 870 560 960"
            stroke="url(#ropeGold)"
            strokeWidth="1.8"
            strokeOpacity="0.85"
            strokeLinecap="round"
          />
          <path
            d="M700 0 C650 110 670 210 620 300 C570 390 580 510 520 650 C485 760 470 850 470 960"
            stroke="url(#ropeGold)"
            strokeWidth="1.6"
            strokeOpacity="0.7"
            strokeLinecap="round"
          />
          <path
            d="M860 100 C780 210 810 300 740 400 C680 500 700 620 650 740 C620 830 610 900 610 960"
            stroke="url(#ropeGold)"
            strokeWidth="1.4"
            strokeOpacity="0.65"
            strokeLinecap="round"
          />

          <circle cx="760" cy="10" r="4" fill="#E4C97A" />
          <circle cx="820" cy="40" r="3.5" fill="#E4C97A" fillOpacity="0.9" />
          <circle cx="700" cy="0" r="3" fill="#E4C97A" fillOpacity="0.85" />
        </svg>
      </div>
      
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
