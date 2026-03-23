import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales | J & J Consulting SARL",
  description: "Mentions légales et informations juridiques du site J & J Consulting SARL.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <Image
            src="/logo.png"
            alt="J & J Consulting SARL"
            width={140}
            height={48}
            className="h-5 w-auto mb-6"
            style={{ width: "auto", height: "auto" }}
          />
          <h1 className="font-serif text-4xl font-semibold">Mentions légales</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-16 prose prose-gray">
          <h2>Éditeur du site</h2>
          <p>
            <strong>J & J Consulting SARL</strong><br />
            Adresse : {SITE.address}<br />
            Téléphones : {SITE.phones.join(" / ")}<br />
            Email : {SITE.email}
          </p>

          <h2>Identifiants légaux</h2>
          <p>
            NIU : {SITE.niu}<br />
            RCCM : {SITE.rccm}
          </p>

          <h2>Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc.</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos, etc.) est
            protégé par le droit d&apos;auteur. Toute reproduction ou utilisation sans
            autorisation préalable est interdite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations collectées via le formulaire de contact sont
            utilisées uniquement pour répondre à vos demandes. Elles ne sont
            pas cédées à des tiers. Conformément à la réglementation en vigueur,
            vous pouvez exercer votre droit d&apos;accès, de rectification ou de
            suppression en nous contactant.
          </p>

          <h2>Crédits</h2>
          <p>
            Site conçu pour J & J Consulting SARL — Yaoundé, Cameroun.
          </p>
        </div>
      </section>
    </>
  );
}
