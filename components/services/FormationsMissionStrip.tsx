"use client";

import Image from "next/image";
import { HorizontalScrollWithArrows } from "@/components/ui/HorizontalScrollWithArrows";
import { useI18n } from "@/components/i18n/I18nProvider";

const ITEMS = [
  { src: "/images/WhatsApp%20Image%202026-04-22%20at%2014.32.01.jpeg", altKey: "hub.formations.missionMarqueeAlt1" as const },
  { src: "/images/IMG-20221211-WA0089.jpg", altKey: "hub.formations.missionMarqueeAlt2" as const },
] as const;

export function FormationsMissionStrip() {
  const { t } = useI18n();

  return (
    <div className="relative -mx-6 sm:-mx-8 lg:-mx-16">
      <HorizontalScrollWithArrows
        ariaLabelPrev={t("ui.scroll.prev")}
        ariaLabelNext={t("ui.scroll.next")}
        trackClassName="items-stretch gap-4 py-2 pl-1 pr-1 sm:gap-5 sm:py-3"
        marqueeOnDesktop
        marqueeClassName="animate-formations-mission-marquee"
      >
        {ITEMS.map((item) => (
          <div
            key={item.altKey}
            className="relative h-48 w-[min(78vw,280px)] shrink-0 snap-center overflow-hidden rounded-2xl shadow-lg ring-1 ring-[#C9A84C]/25 sm:h-52 sm:w-[min(72vw,300px)] md:h-56 md:w-[22rem] lg:w-[24rem]"
          >
            <Image
              src={item.src}
              alt={t(item.altKey)}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 78vw, 384px"
            />
          </div>
        ))}
      </HorizontalScrollWithArrows>
      <p className="sr-only">
        {t("hub.formations.missionMarqueeAlt1")} — {t("hub.formations.missionMarqueeAlt2")}
      </p>
    </div>
  );
}
