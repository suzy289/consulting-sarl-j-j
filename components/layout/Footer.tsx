import Link from "next/link";
import Image from "next/image";
import { SITE, WHATSAPP_LINK } from "@/lib/constants";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="J & J Consulting SARL"
                width={140}
                height={48}
                className="h-6 w-auto"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-white font-semibold text-sm tracking-wider uppercase mt-2">
                J & J Consulting SARL
              </p>
            </Link>
            <p className="text-white/90 mt-3 text-sm leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="text-white/80 mt-2 text-sm">
              {SITE.location}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">
              Nos Services
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/nos-services#${s.slug}`}
                    className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/nos-services"
                  className="text-[#C9A84C] hover:text-[#E4C97A] text-sm font-medium"
                >
                  Voir tous →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">
              Le Cabinet
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors">
                  Références
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">
              Contact
            </h4>
            <p className="text-white/70 text-sm">{SITE.address}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="block text-white/70 hover:text-[#C9A84C] text-sm mt-2 transition-colors"
            >
              {SITE.email}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 - 2026 {SITE.name}. Tous droits réservés.
          </p>
          <p className="text-white/40 text-sm">
            Site conçu avec rigueur et passion — Yaoundé, Cameroun
          </p>
        </div>
      </div>
    </footer>
  );
}
