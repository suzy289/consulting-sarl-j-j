import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À Propos | J & J Consulting SARL — L'histoire d'un cabinet",
  description:
    "Découvrez l'histoire de J & J Consulting SARL et de son fondateur Darlain Dongmo. Un cabinet né de la passion et de l'amour, construit sur l'excellence.",
};

export default function AProposPage() {
  return (
    <>
      <section className="min-h-[50vh] bg-[#0A0A0A] text-white flex items-center relative overflow-hidden">
        {/* Images de fond animées - fondu lent */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-fade-bg-1"
            style={{ backgroundImage: "url(/bg-bat-1.png)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-cover bg-center animate-fade-bg-2"
            style={{ backgroundImage: "url(/bg-bat-2.png)" }}
            aria-hidden
          />
        </div>
        {/* Overlay noir semi-transparent pour réduire la visibilité */}
        <div
          className="absolute inset-0 bg-black/55"
          style={{ zIndex: 5 }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 w-full">
          <Image
            src="/logo.png"
            alt="J & J Consulting SARL"
            width={160}
            height={56}
            className="h-6 w-auto mb-6"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
            À Propos
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            L&apos;histoire d&apos;un homme,
            <br />
            la naissance d&apos;un cabinet.
          </h1>
          <p className="text-white/70">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">
              Accueil
            </Link>
            {" / "}
            À Propos
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#F5F5F5] aspect-[4/5] rounded-lg overflow-hidden relative">
              <Image
                src="/dg-portrait.png"
                alt="Dongmo Djeutebing Darlain Brondon - Directeur Général de J & J Consulting SARL"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                Fondateur & Directeur Général
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#0A0A0A] mb-6">
                Dongmo Djeutebing Darlain Brondon
              </h2>
              <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Né le 15 janvier 1994 au Cameroun, Dongmo Djeutebing Darlain
                  Brondon est un professionnel aguerri de la comptabilité, de
                  l&apos;audit et du contrôle de gestion, résidant à Yaoundé.
                </p>
                <p>
                  Il débute son parcours académique en 2012 avec l&apos;obtention
                  de son Baccalauréat en Comptabilité et Gestion des Entreprises
                  à l&apos;Institut Privé Polyvalent de Bonamoussadi. Il
                  enchaîne avec un BTS à l&apos;École Supérieure de Gestion
                  (2013-2015), puis une Licence Professionnelle en Comptabilité,
                  Contrôle et Audit à l&apos;Institut Universitaire de la Côte en
                  2017. Il couronne sa formation en 2020 par un Master en Audit et
                  Comptabilité de Gestion à l&apos;ISMAT.
                </p>
                <p>
                  Sur le plan professionnel, il fait ses premières armes dès août
                  2015 au cabinet COGEP LTD à Yaoundé. Il y retourne entre 2017
                  et 2018 dans le cadre d&apos;une formation professionnelle. En
                  janvier 2021, il est promu Coordonnateur des Opérations au sein
                  de ce même cabinet. En 2022, il rejoint BETA PRINT SARL en
                  qualité de Contrôleur de Gestion. Depuis 2023, il exerce en tant
                  que consultant indépendant.
                </p>
                <p className="font-medium text-[#0A0A0A]">
                  Puis vient un tournant profond. La vie lui offre l&apos;un de
                  ses plus beaux cadeaux : la naissance de ses jumelles. Un
                  bonheur immense. Et c&apos;est précisément dans cet élan de vie
                  qu&apos;il puise l&apos;inspiration pour franchir le pas. En
                  hommage à ses deux filles, il décide de donner leur initiale à
                  son entreprise et fonde{" "}
                  <strong>J & J Consulting SARL</strong> — le J de l&apos;une, le
                  J de l&apos;autre, réunis pour toujours dans le nom de ce qu&apos;il
                  a bâti de ses propres mains.
                </p>
                <p>
                  J & J Consulting SARL est un cabinet de conseil spécialisé en
                  Audit, Comptabilité, Fiscalité et Finance. Derrière ce
                  cabinet, il y a plus de dix ans d&apos;expérience accumulée, des
                  compétences forgées sur le terrain — et surtout un homme qui a
                  choisi de transformer sa passion en mission, et l&apos;amour de
                  ses enfants en force motrice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                Notre Mission
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A0A0A] mb-6">
                Accompagner, conseiller et sécuriser
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                J & J Consulting SARL a pour mission d&apos;accompagner les entreprises et organisations dans la gestion efficace de leurs obligations comptables, fiscales et financières. Nous apportons des solutions fiables, transparentes et conformes à la réglementation en vigueur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre objectif : vous libérer de la complexité administrative pour que vous puissiez vous concentrer sur le cœur de votre activité.
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden min-h-[280px] relative">
              <video
                src="/v1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden min-h-[280px] relative">
              <Image
                src="/hero-bg.jpg"
                alt="Espace professionnel J & J Consulting - Bureau et accompagnement clients"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                Notre Vision
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Devenir un cabinet de référence
              </h2>
              <p className="text-white/85 leading-relaxed mb-4">
                Nous aspirons à devenir un cabinet de référence en audit, comptabilité et conseil fiscal au Cameroun et en Afrique. Reconnu pour son expertise, son intégrité et la qualité irréprochable de ses services.
              </p>
              <p className="text-white/70 leading-relaxed">
                Une ambition portée par l&apos;excellence opérationnelle et la confiance mutuelle avec nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs - design éditorial */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <p className="text-[#C9A84C] text-[10px] font-semibold tracking-[4px] uppercase mb-4">
                Nos Valeurs
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                Les 6 piliers de notre engagement
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Chaque mission est guidée par des principes fondamentaux qui définissent notre manière de travailler et d&apos;accompagner nos clients.
              </p>
              <div className="mt-10 hidden lg:block">
                <div className="w-24 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-0">
              {[
                { title: "Intégrité", desc: "Nous agissons avec honnêteté et éthique dans chacune de nos missions. La confiance de nos clients est notre capital le plus précieux." },
                { title: "Excellence", desc: "Nous visons la qualité maximale dans chaque prestation. La rigueur et le souci du détail sont au centre de notre approche." },
                { title: "Transparence", desc: "Des rapports clairs, des échanges francs. Nous favorisons une communication ouverte avec tous nos partenaires." },
                { title: "Confidentialité", desc: "Vos données et votre patrimoine informationnel sont protégés. Le secret professionnel guide chacune de nos actions." },
                { title: "Proximité", desc: "Un accompagnement humain et personnalisé. Nous sommes à l&apos;écoute pour comprendre vos enjeux et y répondre." },
                { title: "Innovation", desc: "Nous nous adaptons aux évolutions réglementaires et technologiques pour vous offrir des solutions toujours à jour." },
              ].map((value, i) => (
                <div
                  key={i}
                  className="group py-10 lg:py-12 border-b border-white/10 last:border-0 flex gap-8 items-start hover:border-[#C9A84C]/30 transition-colors"
                >
                  <span className="font-serif text-4xl md:text-5xl font-bold text-[#C9A84C]/40 group-hover:text-[#C9A84C]/70 shrink-0 w-16 text-right tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-xl text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 lg:mt-24 aspect-[21/9] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center border border-white/10 min-h-[180px]">
            {/* Espace pour une bannière ou image illustrative */}
            <span className="text-white/30 text-sm">Image ou bannière à insérer</span>
          </div>
        </div>
      </section>
    </>
  );
}
