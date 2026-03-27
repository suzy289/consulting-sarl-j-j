"use client";

import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Années d'expérience" },
  { value: 5, suffix: "", label: "Domaines d'expertise" },
  { value: 100, suffix: "%", label: "Engagement confidentialité" },
  { value: "∞", suffix: "", label: "Vision long terme" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const step = target / 50;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {typeof target === "number" ? count : target}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-8 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 text-center"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#C9A84C]">
                {typeof stat.value === "number" ? (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>
              <p className="mt-2 text-gray-600 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
