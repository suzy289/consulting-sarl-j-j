"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  ariaLabelPrev?: string;
  ariaLabelNext?: string;
  /**
   * À partir de `md` (768px) : bandeau infini (marquee), sans flèches.
   * En dessous : défilement horizontal + flèches (mobile / tablette étroite).
   */
  marqueeOnDesktop?: boolean;
  /** Classe d’animation sur la piste du desktop (ex. `animate-formations-mission-marquee`). */
  marqueeClassName?: string;
};

function MarqueeDesktopTrack({
  children,
  trackClassName,
  marqueeClassName,
}: {
  children: ReactNode;
  trackClassName: string;
  marqueeClassName: string;
}) {
  const items = Children.toArray(children);
  const doubled = [0, 1].flatMap((dup) =>
    items.map((child, i) => {
      const key = `marquee-${dup}-${i}`;
      if (isValidElement(child)) {
        return cloneElement(child, { key });
      }
      return (
        <div key={key} className="shrink-0">
          {child}
        </div>
      );
    })
  );

  return (
    <div className="group relative h-full min-h-0 w-full overflow-hidden">
      <div
        className={`flex w-max items-stretch gap-3 sm:gap-4 ${marqueeClassName} group-hover:[animation-play-state:paused] ${trackClassName}`}
      >
        {doubled}
      </div>
    </div>
  );
}

export function HorizontalScrollWithArrows({
  children,
  className = "",
  trackClassName = "",
  ariaLabelPrev = "Défiler vers la gauche",
  ariaLabelNext = "Défiler vers la droite",
  marqueeOnDesktop = false,
  marqueeClassName = "animate-vision-images-marquee",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 6);
    setCanNext(el.scrollLeft < max - 6);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(update);
    });
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    const t = window.setTimeout(update, 200);
    return () => {
      window.clearTimeout(t);
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, [update]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const step = Math.max(160, Math.floor(el.clientWidth * 0.85));
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const mobileScroll = (
    <div className={`relative touch-pan-x ${marqueeOnDesktop ? "md:hidden" : ""} ${className}`}>
      <button
        type="button"
        aria-label={ariaLabelPrev}
        onClick={() => scrollByDir(-1)}
        disabled={!canPrev}
        className="absolute left-0.5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/90 bg-white/95 text-[#0A0A0A] shadow-md backdrop-blur-sm transition hover:border-[#C9A84C]/50 hover:bg-[#FFFCF7] hover:text-[#9E7B2E] disabled:pointer-events-none disabled:opacity-30 sm:left-1 sm:h-10 sm:w-10 md:h-11 md:w-11"
      >
        <ChevronLeft className="h-5 w-5 shrink-0" strokeWidth={2.2} />
      </button>
      <button
        type="button"
        aria-label={ariaLabelNext}
        onClick={() => scrollByDir(1)}
        disabled={!canNext}
        className="absolute right-0.5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/90 bg-white/95 text-[#0A0A0A] shadow-md backdrop-blur-sm transition hover:border-[#C9A84C]/50 hover:bg-[#FFFCF7] hover:text-[#9E7B2E] disabled:pointer-events-none disabled:opacity-30 sm:right-1 sm:h-10 sm:w-10 md:h-11 md:w-11"
      >
        <ChevronRight className="h-5 w-5 shrink-0" strokeWidth={2.2} />
      </button>
      <div
        ref={ref}
        className={`flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 pl-10 pr-10 pt-1 [scrollbar-width:none] sm:gap-4 sm:pl-11 sm:pr-11 md:pl-12 md:pr-12 [&::-webkit-scrollbar]:hidden ${trackClassName}`}
      >
        {children}
      </div>
    </div>
  );

  if (!marqueeOnDesktop) {
    return mobileScroll;
  }

  return (
    <>
      {mobileScroll}
      <div className={`relative hidden min-h-0 md:block ${className}`}>
        <MarqueeDesktopTrack
          trackClassName={trackClassName}
          marqueeClassName={marqueeClassName}
        >
          {children}
        </MarqueeDesktopTrack>
      </div>
    </>
  );
}
