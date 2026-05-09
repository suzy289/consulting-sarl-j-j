"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { SITE, WHATSAPP_LINK } from "@/lib/constants";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const phoneDisplay = SITE.phones[0] ?? `+${SITE.whatsapp}`;
  const telHref = `tel:+${SITE.whatsapp}`;

  return (
    <footer className="relative z-10 bg-[#0A0A0A] text-white">
      <div className="relative mx-auto max-w-7xl px-4 pb-5 pt-4 sm:px-5 sm:pb-8 sm:pt-5 md:px-6 lg:px-16 lg:pb-10 lg:pt-8">
        <div className="relative z-20 mx-auto flex justify-center px-0 sm:px-2 md:px-0">
          <div className="mb-8 w-full max-w-xl -mt-10 rounded-xl border border-[#C9A84C]/35 bg-gradient-to-b from-[#161a22] to-[#0d0f14] px-4 py-4 text-center shadow-[0_16px_40px_rgba(0,0,0,0.45)] sm:mb-12 sm:-mt-16 sm:rounded-2xl sm:px-5 sm:py-6 md:mb-14 md:-mt-20 md:max-w-2xl md:px-8 md:py-7 lg:max-w-4xl lg:-mt-24 lg:px-10 lg:py-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C] sm:text-[10px] sm:tracking-[0.25em]">
              {t("footer.contactCard.title")}
            </p>
            <h2 className="mt-1.5 font-serif text-lg font-semibold leading-snug text-white sm:mt-2 sm:text-xl md:text-2xl">
              {t("footer.contactCard.heading")}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-white/75 sm:text-sm">
              {t("footer.contactCard.copy")}
            </p>
            <div className="mt-4 flex flex-col items-stretch justify-center gap-2 sm:mt-5 sm:flex-row sm:items-center sm:gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="jj-btn-slide jj-btn-slide-whatsapp inline-flex flex-1 items-center justify-center rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-semibold sm:px-5 sm:py-3 sm:text-sm"
              >
                {t("contact.hero.ctaWhatsapp")}
              </a>
              <Link
                href="/contact"
                className="jj-btn-slide jj-btn-slide-white-to-gold inline-flex flex-1 items-center justify-center rounded-lg bg-white px-4 py-2.5 text-xs font-semibold sm:px-5 sm:py-3 sm:text-sm"
              >
                {t("footer.contactCard.form")}
              </Link>
            </div>
            <div className="mt-3 flex flex-col items-center justify-center gap-1.5 border-t border-white/10 pt-3 text-[11px] text-white/65 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-3 sm:pt-4 sm:text-xs">
              <a href={telHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <Phone className="h-3 w-3 shrink-0 text-[#C9A84C] sm:h-3.5 sm:w-3.5" aria-hidden />
                {phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex max-w-full items-center gap-1.5 break-words transition-colors hover:text-white"
              >
                <Mail className="h-3 w-3 shrink-0 text-[#C9A84C] sm:h-3.5 sm:w-3.5" aria-hidden />
                <span className="line-clamp-1 sm:line-clamp-none">{SITE.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
          <div className="-mt-4 sm:-mt-6 lg:-mt-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="J & J Consulting SARL"
                width={96}
                height={32}
                className="h-3 w-auto sm:h-3.5"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white sm:mt-1 sm:text-xs">
                J & J Consulting SARL
              </p>
            </Link>
            <p className="mt-1 text-xs leading-snug text-white/90 sm:text-sm">{SITE.tagline}</p>
            <p className="mt-0.5 text-xs text-white/75 sm:mt-1 sm:text-sm">{SITE.location}</p>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white sm:mb-3 sm:text-sm">
              {t("footer.services")}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/nos-services"
                  className="text-xs font-medium text-[#C9A84C] transition-colors hover:text-[#E4C97A] sm:text-sm"
                >
                  {t("footer.servicesLanding")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-white/70 transition-colors hover:text-[#C9A84C] sm:text-sm"
                >
                  {t("contact.section.formTitle")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white sm:mb-3 sm:text-sm">
              {t("footer.firm")}
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 sm:block sm:space-y-2">
              <li>
                <Link href="/a-propos" className="text-xs text-white/70 transition-colors hover:text-[#C9A84C] sm:text-sm">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-white/70 transition-colors hover:text-[#C9A84C] sm:text-sm">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-xs text-white/70 transition-colors hover:text-[#C9A84C] sm:text-sm">
                  {t("nav.references")}
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-xs text-white/70 transition-colors hover:text-[#C9A84C] sm:text-sm"
                >
                  {t("footer.legal")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white sm:mb-3 sm:text-sm">
              {t("nav.contact")}
            </h4>
            <p className="text-xs leading-snug text-white/70 sm:text-sm">{SITE.address}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 block text-xs text-white/70 transition-colors hover:text-[#C9A84C] sm:mt-2 sm:text-sm"
            >
              {SITE.email}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="jj-btn-slide jj-btn-slide-whatsapp mt-3 inline-flex items-center gap-2 bg-[#25D366] px-3 py-1.5 text-xs font-medium sm:mt-4 sm:px-4 sm:py-2 sm:text-sm"
            >
              {t("contact.cta.whatsappFooter")}
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center sm:mt-7 sm:flex-row sm:gap-3 sm:pt-6 md:mt-8">
          <p className="text-[11px] text-white/60 sm:text-sm">
            © 2025 - 2026 {SITE.name}. {t("footer.rights")}
          </p>
          <p className="text-[11px] text-white/40 sm:text-sm">{t("footer.madeIn")}</p>
        </div>
      </div>
    </footer>
  );
}
