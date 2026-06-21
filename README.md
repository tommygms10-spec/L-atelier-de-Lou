# Maison Lou — Esthétique & Onglerie à domicile

Site vitrine premium pour une esthéticienne indépendante, construit avec
Next.js 15, TypeScript, Tailwind CSS, Framer Motion et React Three Fiber.

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

## Build de production

```bash
npm run build
npm run start
```

Prêt à déployer sur **Vercel** ou **Netlify** sans configuration
supplémentaire.

## Structure du projet

```
app/                  Routing Next.js (App Router), layout, SEO, globals.css
components/
  layout/             Header, Footer, SmoothScrollProvider (Lenis)
  sections/           Toutes les sections de la page d'accueil
  three/              Scène 3D du hero (React Three Fiber)
hooks/                Hook useLenis (smooth scroll)
lib/                  Utilitaires (cn pour les classes Tailwind)
public/images/        Photos (CV, réalisations onglerie, portrait de Lou)
```

## Contenu & images

- Le portrait de Lou (`public/images/lou-portrait.jpg`) a été recadré à
  partir de la photo présente sur son CV.
- Les visuels de la galerie, de la section Instagram et du déroulement des
  prestations proviennent des photos de réalisations fournies
  (`public/images/nail-*.jpg`).
- Les tarifs et la timeline du parcours reprennent fidèlement les
  informations du CV et de la fiche tarifs fournis.

## Zone d'intervention

La configuration de la zone desservie (ville centrale, rayon, villes
listées) se modifie directement dans
`components/sections/ZoneIntervention.tsx`, objet `ZONE_CONFIG`.

## À connecter avant mise en production

- **Formulaire de contact** : actuellement un formulaire statique côté
  client. Branchez un service d'envoi (Resend, Formspree, route API Next.js)
  dans `components/sections/Contact.tsx` (`handleSubmit`).
- **Avis Google** : la section avis est prête pour une intégration future de
  l'API Google Places / avis Google.
- **Flux Instagram** : la grille est prête pour un branchement à l'API
  Instagram Graph.
- **Carte interactive** : une iframe Google Maps simple est utilisée par
  défaut ; vous pouvez la remplacer par une clé API Google Maps dédiée.
- **Image Open Graph** : ajoutez un visuel `public/og-image.jpg` (1200x630)
  pour un meilleur rendu au partage sur les réseaux sociaux.

## Stack technique

Next.js 15 (version corrigée 15.5.18) · TypeScript · Tailwind CSS ·
Framer Motion · GSAP · Lenis · Lucide Icons

> Note : la scène 3D du hero (Three.js / React Three Fiber) a été remplacée
> par une animation équivalente en CSS/SVG + Framer Motion
> (`components/visual/AmbientScene.tsx`), pour une compatibilité de
> déploiement plus fiable.
