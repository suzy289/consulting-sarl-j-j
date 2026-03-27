# J & J Consulting SARL — Site Web

Site institutionnel du cabinet d'Audit, Comptabilité, Conseil Fiscal et Finance.

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## Installation

```bash
cd jj-consulting
npm install
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil (landing complète) |
| `/a-propos` | Histoire du fondateur et du cabinet |
| `/nos-services` | 10 domaines d'intervention (inspiré GIL SERVICES) |
| `/references` | Partenaires et témoignages |
| `/actualites` | Blog / Actualités |
| `/contact` | Formulaire de devis |
| `/mentions-legales` | Mentions légales |

## Structure inspirée de GIL SERVICES

- Hero section + bande défilante
- Compteurs animés
- Grille des 10 services avec détails
- Section valeurs
- Processus de collaboration
- FAQ accordion
- Bouton WhatsApp flottant
- Formulaire de contact

## Personnalisation

- **WhatsApp** : Modifier `lib/constants.ts` (WHATSAPP_NUMBER)
- **Email** : Modifier `lib/constants.ts` (email)
- **Services** : Éditer `lib/services.ts`
- **FAQ** : Éditer `lib/faq.ts`

## Déploiement

Recommandé : [Vercel](https://vercel.com)

```bash
npm run build
```

## Contact

J & J Consulting SARL — Yaoundé, Cameroun
