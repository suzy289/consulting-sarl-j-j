"use client";

import Image from "next/image";
import { HorizontalScrollWithArrows } from "@/components/ui/HorizontalScrollWithArrows";
import { useI18n } from "@/components/i18n/I18nProvider";

const VISION_IMAGES = [
  encodeURI("/images/WhatsApp Image 2026-04-22 at 14.32.01.jpeg"),
  "/images/IMG-20221211-WA0079.jpg",
  "/images/IMG-20221211-WA0072.jpg",
  "/images/IMG-20221211-WA0076.jpg",
  "/images/IMG-20221211-WA0064.jpg",
  encodeURI("/images/WhatsApp Image 2026-04-22 at 14.28.13.jpeg"),
] as const;

export function VisionImageCarousel() {
  const { t } = useI18n();

  return (
    <div className="relative aspect-[4/3] min-h-[200px] w-full overflow-hidden rounded-2xl bg-gray-100 sm:min-h-[240px]">
      <div className="absolute inset-0 min-h-0">
        <HorizontalScrollWithArrows
          ariaLabelPrev={t("ui.scroll.prev")}
          ariaLabelNext={t("ui.scroll.next")}
          className="h-full min-h-0"
          trackClassName="h-full min-h-[200px] items-stretch gap-3 px-0 sm:gap-4 sm:min-h-[240px]"
          marqueeOnDesktop
        >
          {VISION_IMAGES.map((src) => (
            <div
              key={src}
              className="relative h-full min-h-[200px] w-[min(86vw,320px)] shrink-0 snap-center sm:min-h-[240px] sm:w-[min(70vw,360px)] md:w-[min(45vw,400px)]"
            >
            <Image
              src={src}
              alt="J & J Consulting — équipe et moments professionnels"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 72vw, 48vw"
              draggable={false}
            />
            </div>
          ))}
        </HorizontalScrollWithArrows>
      </div>
    </div>
  );
}
