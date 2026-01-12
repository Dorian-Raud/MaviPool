# Guide de Démarrage Rapide - MaviPool

## 🚀 Installation et Lancement

### Étape 1 : Installer Node.js

Si Node.js n'est pas installé sur votre système :
1. Téléchargez Node.js depuis https://nodejs.org/
2. Installez la version LTS (recommandée)
3. Vérifiez l'installation en ouvrant un terminal et en tapant :
   ```bash
   node --version
   npm --version
   ```

### Étape 2 : Installer les dépendances

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
npm install
```

Cette commande va installer toutes les dépendances nécessaires (React, Next.js, etc.)

### Étape 3 : Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

### Étape 4 : Modifier le site

- Les pages sont dans le dossier `pages/`
- Les styles sont dans le dossier `styles/`
- Les composants réutilisables sont dans `components/`

Toute modification sera automatiquement visible dans le navigateur (hot reload).

## 📝 Personnalisation

### Modifier les informations de contact

Recherchez et remplacez dans tous les fichiers :
- `01 23 45 67 89` → Votre numéro de téléphone
- `contact@mavipool.fr` → Votre email

### Ajouter de vraies images

Les images générées sont des placeholders. Pour ajouter vos propres images :
1. Placez vos images dans le dossier `public/images/`
2. Remplacez les `imagePlaceholder` dans les fichiers de pages par :
   ```jsx
   <img src="/images/votre-image.jpg" alt="Description" />
   ```

### Modifier les couleurs

Les couleurs sont définies dans `styles/globals.css` :
- `--color-primary` : Bleu profond
- `--color-secondary` : Bleu turquoise
- `--color-accent` : Cuivre

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé)

1. Créez un compte sur https://vercel.com
2. Connectez votre repository GitHub
3. Vercel déploiera automatiquement votre site

### Option 2 : Build manuel

```bash
npm run build
npm start
```

Le site sera accessible sur le port 3000.

## ❓ Problèmes Courants

### Le site ne démarre pas
- Vérifiez que Node.js est installé
- Supprimez le dossier `node_modules` et `.next`
- Réinstallez : `npm install`

### Les styles ne s'appliquent pas
- Vérifiez que les fichiers CSS sont bien importés
- Redémarrez le serveur de développement

## 📞 Support

Pour toute question sur le développement du site, consultez :
- Documentation Next.js : https://nextjs.org/docs
- Documentation React : https://react.dev/

---

Bon développement ! 🚀
