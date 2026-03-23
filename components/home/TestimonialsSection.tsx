"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4"
        >
          Témoignages
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A0A0A] mb-16"
        >
          Ils nous font déjà confiance
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F5F5F5] p-10 rounded-lg border-l-4 border-[#C9A84C]"
            >
              <Quote className="w-10 h-10 text-[#C9A84C]/50 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-[#0A0A0A]">
                  {testimonials[current].author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gray-300 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-[#C9A84C] w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-gray-300 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
