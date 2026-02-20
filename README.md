# MaviPool - Site Web Professionnel

Site web professionnel pour MaviPool, expert en installation, rénovation et entretien de piscines dans les Alpes-Maritimes.

## À Propos

MaviPool est une entreprise spécialisée dans les prestations de piscine, intervenant de Théoule-sur-Mer à Menton dans les Alpes-Maritimes.

### Services

- **Installation d'équipements** : Local technique, filtration, installation électrique
- **Rénovation** : Revêtement, carrelage, modernisation
- **Dépannage** : Intervention rapide sur site
- **Entretien** : Maintenance régulière et traitement de l'eau

## Design

Le site utilise une palette de couleurs professionnelle :
- **Bleu profond** (#0A2463) - Couleur principale
- **Bleu turquoise** (#00B4D8) - Couleur secondaire
- **Cuivre** (#B87333) - Couleur d'accent

## Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

## Développement

### Option 1 : Développement Local

Lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Option 2 : Avec Docker

**Pour le développement (rechargement automatique) :**
```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

**Pour la production :**
```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

## Build

Pour créer une version de production :

```bash
npm run build
```

Pour lancer la version de production :

```bash
npm start
```

## Structure du Projet

```
Mavipool.fr/
├── components/          # Composants React réutilisables
│   ├── Navbar.js       # Navigation
│   └── Footer.js       # Pied de page
├── pages/              # Pages Next.js
│   ├── index.js        # Page d'accueil
│   ├── entretien.js    # Page Entretien
│   ├── renovation.js   # Page Rénovation
│   ├── depannage.js    # Page Dépannage
│   ├── installation.js # Page Installation
│   ├── a-propos.js     # Page À propos
│   ├── _app.js         # Application principale
│   └── _document.js    # Document HTML
├── styles/             # Fichiers CSS
│   ├── globals.css     # Styles globaux
│   ├── Home.module.css
│   ├── Service.module.css
│   ├── Installation.module.css
│   ├── About.module.css
│   ├── Navbar.module.css
│   └── Footer.module.css
├── public/             # Fichiers statiques
├── package.json
├── next.config.js
└── README.md
```

## Pages

1. **Accueil** (`/`) - Présentation générale, services, zone d'intervention
2. **Entretien** (`/entretien`) - Services d'entretien et formules
3. **Rénovation** (`/renovation`) - Services de rénovation
4. **Dépannage** (`/depannage`) - Services de dépannage d'urgence
5. **Installation** (`/installation`) - Présentation des produits installés chez les clients
6. **À propos** (`/a-propos`) - Histoire, valeurs, équipe

## Responsive

Le site est entièrement responsive et optimisé pour :
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Fonctionnalités

- Design moderne et professionnel
- Navigation responsive avec menu mobile
- Animations et transitions fluides
- Optimisation SEO complète
- Performance optimisée
- Accessibilité
- Docker ready
- Sitemap XML automatique
- Schema.org (données structurées)
- Open Graph & Twitter Cards

## SEO & Référencement

Le site est **entièrement optimisé pour le référencement** :

### Optimisations Techniques
- **Meta tags** optimisés sur chaque page
- **Sitemap XML** dynamique (`/sitemap.xml`)
- **Robots.txt** configuré
- **Schema.org** (LocalBusiness, GeoCoordinates)
- **Open Graph** pour les réseaux sociaux
- **Canonical URLs** pour éviter le contenu dupliqué
- **Headers de sécurité** configurés

### Mots-Clés Ciblés
- Installation piscine Alpes-Maritimes
- Rénovation piscine Cannes, Nice, Monaco
- Entretien piscine Côte d'Azur
- Dépannage piscine 06

## Docker

Le projet est prêt pour Docker avec :
- Dockerfile multi-stage optimisé
- Docker Compose configuré
- Image Alpine légère (~150MB)
- Build standalone Next.js
- Utilisateur non-root pour la sécurité

```bash
docker-compose up -d
```
© 2026 MaviPool. Tous droits réservés.
