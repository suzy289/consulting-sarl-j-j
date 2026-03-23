"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/lib/constants";

const serviceTypes = [
  "Assistance comptable",
  "Fiscalité & Social",
  "Audit",
  "Business Plan",
  "Contrôle de gestion",
  "Conseil stratégique",
  "Formation",
  "Autre",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="min-h-[40vh] bg-[#0A0A0A] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 w-full">
          <Image
            src="/logo.png"
            alt="J & J Consulting SARL"
            width={140}
            height={48}
            className="h-5 w-auto mb-6"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold">
            Parlons de votre projet
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-6">
                Informations de contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#0A0A0A]">Adresse</p>
                    <p className="text-gray-600">{SITE.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#0A0A0A]">Téléphones / WhatsApp</p>
                    <div className="text-gray-600 space-y-1">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-[#C9A84C]"
                      >
                        {SITE.phones[0]}
                      </a>
                      <a
                        href="tel:+237678456781"
                        className="block hover:text-[#C9A84C]"
                      >
                        {SITE.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#0A0A0A]">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-gray-600 hover:text-[#C9A84C]"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#0A0A0A]">Horaires</p>
                    <p className="text-gray-600">
                      Lun – Ven : 8h00 – 18h00<br />
                      Sam : 9h00 – 13h00
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 font-semibold transition-colors"
              >
                Discuter sur WhatsApp
              </a>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-6">
                Formulaire de devis
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
                  >
                    <option value="">Sélectionnez...</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Description de votre besoin *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors resize-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="whatsappContact"
                    name="whatsappContact"
                    className="w-4 h-4 border-gray-300 rounded text-[#C9A84C] focus:ring-[#C9A84C]"
                  />
                  <label htmlFor="whatsappContact" className="text-sm text-gray-600">
                    Je souhaite être contacté via WhatsApp
                  </label>
                </div>
                {status === "success" && (
                  <p className="text-green-600 text-sm">
                    Votre message a bien été envoyé. Nous vous recontacterons
                    rapidement.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Une erreur est survenue. Vous pouvez nous contacter
                    directement sur WhatsApp.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#0A0A0A] text-white hover:bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="font-serif text-2xl font-semibold text-[#0A0A0A] mb-6">
            Nous trouver
          </h2>
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127405.52725645406!2d11.5021!3d3.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a5d6e2d13%3A0x3f3d3e3e3e3e3e3e!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1710580800000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation J & J Consulting - Yaoundé"
              className="min-h-[400px]"
            />
          </div>
          <p className="text-gray-600 text-sm mt-4">
            <a
              href="https://maps.google.com/?q=Yaoundé,Cameroun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:underline"
            >
              Voir l&apos;itinéraire sur Google Maps →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
