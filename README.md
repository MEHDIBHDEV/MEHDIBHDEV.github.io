# Portfolio — Mehdi BOUCHERROUR

Portfolio moderne, responsive et accessible, basé sur React 18 + Vite, Tailwind CSS (mode sombre par classe `dark`), Framer Motion et les icônes `lucide-react`.

## Prérequis
- Node.js 18+

## Installation
```bash
npm install
```

## Développement
```bash
npm run dev
```

## Build & Preview
```bash
npm run build && npm run preview
```

## Modifier les contenus / liens
- Toutes les informations éditables (identité, réseaux, projets, compétences) se trouvent dans `src/data/site.js`.
- Remplacez les placeholders `LIEN_LINKEDIN_A_REMPLACER`, `DEMO_*` et `REPO_*` par vos liens réels.
- Les images de projets se trouvent dans `public/images/projects/`. Remplacez les fichiers `.jpg` de démonstration par de vraies images au ratio 16:9.

## Déploiement
1. Poussez vos changements sur la branche `main` du dépôt GitHub.
2. Créez un compte Vercel (https://vercel.com) puis cliquez sur **New Project → Import Git Repository**.
3. Sélectionnez ce dépôt, conserve le dossier racine (`./`), et laissez `Build Command`=`npm run build`, `Output Directory`=`dist`.
4. Choisissez le nom de projet `portfolio-mehdibhdev` pour obtenir l’URL `https://portfolio-mehdibhdev.vercel.app` (modifiez si le nom est déjà pris, l’URL s’ajustera automatiquement).
5. Cliquez sur **Deploy**. La première build dure ~1‑2 minutes. Dès qu’elle passe au vert, l’application est accessible à l’URL affichée dans le dashboard.

### Checklist post-déploiement
- Ouvrir l’URL publique et vérifier que la page d’accueil charge (HTTP 200).
- Tester les sections et le scroll pour s’assurer que les assets (images, CSS) se chargent bien.
- Vérifier qu’un rafraîchissement sur une ancre (ex. `#projects`) reste fonctionnel.
- Cliquer sur les liens GitHub/démo pour contrôler qu’ils s’ouvrent dans un nouvel onglet.

## Stack
- React 18 (Vite)
- Tailwind CSS (dark mode par classe `dark`)
- Framer Motion (animations: transitions de page, reveal on scroll, micro-interactions)
- Icônes: `lucide-react`

## Accessibilité & SEO
- Balises `<title>` et `<meta name="description">` définies dans `index.html`.
- Icônes avec `aria-label`, focus visible (`focus:ring`), images avec `alt`.
- Objectif Lighthouse > 90.