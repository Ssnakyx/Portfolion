# Portfolio - Version Vue 3

Portfolio migré vers Vue 3 + Vite pour faciliter les animations, les effets visuels et l'évolution du design.

## Stack

- Vue 3
- Vite
- Feather Icons
- CSS personnalisé

## Démarrage

1. Installer les dépendances:

```bash
npm install
```

2. Lancer le serveur de développement:

```bash
npm run dev
```

3. Construire en production:

```bash
npm run build
```

4. Prévisualiser le build:

```bash
npm run preview
```

## Structure principale

```text
.
├── index.html
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── components/
│   │   ├── AboutSection.vue
│   │   ├── ContactSection.vue
│   │   ├── HeroSection.vue
│   │   ├── PortfolioHeader.vue
│   │   ├── ProjectModal.vue
│   │   ├── ProjectsGrid.vue
│   │   ├── ProjectsSlider.vue
│   │   └── SiteFooter.vue
│   ├── data/
│   │   └── content.js
│   └── assets/
│       └── styles/
│           └── main.css
├── assets/
├── images/
└── vite.config.js
```

## Personnalisation

- Le contenu principal (projets, compétences, slider, modal) est dans `src/App.vue`.
- Le style global est dans `src/assets/styles/main.css`.
- Les données des projets sont pilotées dans le script Vue (`projects`).
