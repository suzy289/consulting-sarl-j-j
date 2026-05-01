"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Languages, Menu, X } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/lib/constants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { getServicesForLocale } from "@/lib/services-localized";

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/a-propos", key: "nav.about" },
  { href: "/nos-services", key: "nav.services" },
  { href: "/references", key: "nav.references" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const services = useMemo(() => getServicesForLocale(locale), [locale]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = scrolled
    ? "text-[#0A0A0A]/90 hover:text-[#C9A84C] inline-block hover:-translate-y-px"
    : "text-white/90 hover:text-[#C9A84C] inline-block hover:-translate-y-px";
  const menuIconClass = scrolled ? "text-[#0A0A0A]" : "text-white";
  const menuPanelClass = scrolled
    ? "border-gray-200 bg-white"
    : "border-white/20 bg-[#0A0A0A]";
  const contactTicker = `${SITE.phones[0]} · ${SITE.email}`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="border-b border-white/10 bg-[#0A0A0A] text-white">
        <div className="hidden mx-auto h-8 max-w-7xl items-center justify-between px-6 text-[10px] tracking-[0.08em] lg:px-16">
          <p className="font-medium text-white/80">
            Audit | Comptabilite | Fiscalite | Conseil strategique
          </p>
          <p className="text-white/80">
            {SITE.phones[0]} · {SITE.email}
          </p>
        </div>
        <div className="navbar-contact-strip relative mx-auto h-8 w-full overflow-hidden">
          <div className="navbar-contact-ticker flex w-max min-h-8 items-center whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex shrink-0 items-center px-10 text-[10px] font-medium tracking-[0.06em] text-white/85"
                aria-hidden={i !== 0}
              >
                {contactTicker}
              </span>
            ))}
          </div>
          <div className="navbar-contact-shine" aria-hidden="true" />
          <div className="navbar-contact-shine navbar-contact-shine-offset" aria-hidden="true" />
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          scrolled ? "bg-white shadow-[0_10px_32px_rgba(0,0,0,0.16)]" : "bg-[#0A0A0A]/95 backdrop-blur-sm"
        }`}
      >
        <div
          className={`h-px w-full transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-r from-transparent via-[#C9A84C]/45 to-transparent"
              : "bg-gradient-to-r from-transparent via-white/25 to-transparent"
          }`}
        />
        <div className="mx-auto flex h-[4.45rem] w-full max-w-7xl items-center justify-between px-5 lg:px-14 xl:px-16">
          <Link
            href="/"
            className="flex max-h-[4.45rem] flex-shrink-0 items-center justify-center self-center overflow-hidden"
          >
            <Image
              src="/logo.png"
              alt="J & J Consulting SARL"
              width={200}
              height={64}
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "max-h-[2.9rem] brightness-0" : "max-h-[3.2rem] brightness-100"
              }`}
              style={{ width: "auto", height: "auto" }}
              sizes="200px"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {navLinks.map((link) =>
              link.href === "/nos-services" ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`relative text-[13px] font-medium transition-colors ${linkClass} ${
                      pathname === link.href ? "text-[#C9A84C]" : ""
                    }`}
                  >
                    {t(link.key)}
                    {pathname === link.href && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#C9A84C]" />
                    )}
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[280px] rounded-lg border border-gray-100 bg-white py-3 shadow-xl">
                      {services.slice(0, 6).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/nos-services#${s.slug}`}
                          className="block px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-[#F5F5F5] hover:text-[#C9A84C]"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        href="/nos-services"
                        className="mt-2 block border-t border-gray-100 px-4 py-2 text-sm font-semibold text-[#C9A84C]"
                      >
                        {t("nav.allServices")}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] font-medium transition-colors ${linkClass} ${
                    pathname === link.href ? "text-[#C9A84C]" : ""
                  }`}
                >
                  {t(link.key)}
                  {pathname === link.href && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#C9A84C]" />
                  )}
                </Link>
              )
            )}

            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                onBlur={() => setTimeout(() => setLangOpen(false), 120)}
                className={`group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-semibold tracking-widest uppercase transition ${
                  scrolled
                    ? "border-gray-200 bg-white hover:border-[#C9A84C]/35"
                    : "border-white/15 bg-white/5 hover:border-[#C9A84C]/40 hover:bg-white/10"
                }`}
                aria-label={t("lang.label")}
              >
                <Languages className={`h-4 w-4 ${scrolled ? "text-[#0A0A0A]" : "text-white"}`} aria-hidden />
                <span className={scrolled ? "text-[#0A0A0A]/85" : "text-white/85"}>{locale.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl"
                  role="menu"
                >
                  {[
                    { id: "fr", label: t("lang.fr") },
                    { id: "en", label: t("lang.en") },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setLocale(opt.id as "fr" | "en")}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${
                        locale === opt.id ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/8 hover:text-white"
                      }`}
                      role="menuitem"
                    >
                      <span>{opt.label}</span>
                      {locale === opt.id && <span className="text-[#C9A84C]">●</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="jj-btn-slide jj-btn-slide-gold-darktext bg-[#C9A84C] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] shadow-md"
            >
              {t("nav.quote")}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${menuIconClass}`}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className={`border-t py-4 transition-colors lg:hidden ${menuPanelClass}`}>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm ${
                    pathname === link.href ? "font-semibold text-[#C9A84C]" : linkClass
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className={`flex items-center justify-between rounded-lg border px-3 py-2 ${scrolled ? "border-gray-200" : "border-white/15"}`}>
                <span className={`text-xs font-semibold tracking-widest uppercase ${scrolled ? "text-[#0A0A0A]/70" : "text-white/70"}`}>
                  {t("lang.label")}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLocale("fr")}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      locale === "fr"
                        ? "bg-[#C9A84C] text-black"
                        : scrolled
                          ? "bg-black/5 text-[#0A0A0A]/80 hover:bg-black/10"
                          : "bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    FR
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale("en")}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      locale === "en"
                        ? "bg-[#C9A84C] text-black"
                        : scrolled
                          ? "bg-black/5 text-[#0A0A0A]/80 hover:bg-black/10"
                          : "bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
              <div className={`text-xs ${scrolled ? "text-[#0A0A0A]/70" : "text-white/75"}`}>
                NIU: {SITE.niu} · RCCM: {SITE.rccm}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="jj-btn-slide jj-btn-slide-gold-darktext bg-[#C9A84C] px-5 py-2 text-center text-xs font-semibold uppercase tracking-widest shadow-md"
              >
                {t("nav.quote")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
