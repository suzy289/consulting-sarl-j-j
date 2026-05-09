"use client";

import Image from "next/image";
import type { Partner } from "@/lib/partners";
import { HorizontalScrollWithArrows } from "@/components/ui/HorizontalScrollWithArrows";
import { useI18n } from "@/components/i18n/I18nProvider";

type Props = {
  row: Partner[];
  rowIndex: number;
};

export function PartnerRowScroller({ row, rowIndex }: Props) {
  const { t } = useI18n();

  return (
    <div className="rounded-2xl border border-gray-200 bg-[#F8F8F8] py-3 md:py-4">
      <HorizontalScrollWithArrows
        ariaLabelPrev={t("ui.scroll.prev")}
        ariaLabelNext={t("ui.scroll.next")}
        trackClassName="items-stretch gap-3 md:gap-4"
        marqueeOnDesktop
        marqueeClassName="animate-formations-mission-marquee"
      >
        {row.map((p) => (
          <div
            key={p.id}
            className="group relative flex w-[min(260px,82vw)] shrink-0 snap-center flex-col items-center rounded-lg border border-gray-200 bg-white p-4 sm:w-[min(280px,78vw)] sm:p-5 md:p-6"
          >
            {p.logo ? (
              <>
                <div className="relative mb-3 flex h-16 w-36 items-center justify-center sm:mb-4 sm:h-20 sm:w-40">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto object-contain sm:max-h-20"
                    style={{ width: "auto", height: "auto" }}
                    loading={rowIndex === 0 ? "eager" : undefined}
                  />
                </div>
                <h3 className="text-center text-sm font-semibold text-[#0A0A0A] sm:text-base">
                  {p.shortName || p.name}
                </h3>
                {p.services && (
                  <p className="mt-2 line-clamp-2 text-center text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {p.services}
                  </p>
                )}
              </>
            ) : (
              <p className="text-center text-sm font-medium text-gray-700">{p.name}</p>
            )}
            {(p.name || p.services) && (
              <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg bg-black/50 p-3 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100 sm:p-4">
                <p className="mb-1 text-xs font-semibold text-white drop-shadow-md sm:mb-2 sm:text-sm">{p.name}</p>
                {p.services && (
                  <p className="text-[11px] leading-relaxed text-white/95 drop-shadow-md sm:text-xs">{p.services}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </HorizontalScrollWithArrows>
    </div>
  );
}
