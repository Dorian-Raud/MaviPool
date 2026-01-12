# 🚀 Guide de Déploiement en Production

Ce guide vous accompagne pour mettre votre site MaviPool en ligne.

## 📋 Prérequis

Avant de déployer, assurez-vous d'avoir :
- ✅ Un nom de domaine (ex: mavipool.fr)
- ✅ Un serveur ou hébergement
- ✅ Accès SSH au serveur (si VPS)
- ✅ Le projet testé en local

## 🌐 Options de Déploiement

### Option 1 : Vercel (Recommandé pour débutants) ⭐

**Avantages** : Gratuit, facile, optimisé pour Next.js

#### Étapes :

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Inscrivez-vous avec GitHub

2. **Connecter votre repository**
   - Créez un repository GitHub avec votre code
   - Importez le projet dans Vercel

3. **Configurer le domaine**
   - Ajoutez votre domaine dans Vercel
   - Configurez les DNS chez votre registrar

4. **Déployer**
   - Vercel déploie automatiquement à chaque push
   - SSL gratuit inclus

**Temps estimé** : 15-30 minutes

---

### Option 2 : VPS avec Docker (Contrôle total) 🐳

**Avantages** : Contrôle total, pas de limite

#### Étapes :

1. **Choisir un VPS**
   - OVH, Scaleway, DigitalOcean, etc.
   - Minimum : 1 CPU, 1GB RAM

2. **Installer Docker**
   ```bash
   # Sur Ubuntu/Debian
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   
   # Installer Docker Compose
   sudo apt install docker-compose
   ```

3. **Cloner le projet**
   ```bash
   cd /var/www
   git clone <votre-repo> mavipool
   cd mavipool
   ```

4. **Lancer avec Docker**
   ```bash
   docker-compose up -d
   ```

5. **Configurer Nginx (reverse proxy)**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/mavipool
   ```

   Contenu du fichier :
   ```nginx
   server {
       listen 80;
       server_name mavipool.fr www.mavipool.fr;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Activer le site :
   ```bash
   sudo ln -s /etc/nginx/sites-available/mavipool /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Installer SSL (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d mavipool.fr -d www.mavipool.fr
   ```

**Temps estimé** : 1-2 heures

---

### Option 3 : Hébergement Partagé (cPanel)

**Note** : Next.js nécessite Node.js. Vérifiez que votre hébergeur le supporte.

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Exporter les fichiers statiques** (si possible)
   - Modifiez `next.config.js` pour ajouter `output: 'export'`
   - Uploadez le dossier `out/` via FTP

**Limitation** : Certaines fonctionnalités Next.js ne fonctionneront pas.

---

## 🔧 Configuration DNS

Chez votre registrar de domaine (OVH, Gandi, etc.) :

### Pour Vercel :
```
Type    Nom     Valeur
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### Pour VPS :
```
Type    Nom     Valeur
A       @       <IP_DE_VOTRE_SERVEUR>
A       www     <IP_DE_VOTRE_SERVEUR>
```

**Propagation DNS** : 24-48h (souvent plus rapide)

---

## ✅ Checklist Avant le Lancement

### Contenu
- [ ] Remplacer le numéro de téléphone
- [ ] Remplacer l'email
- [ ] Ajouter de vraies photos
- [ ] Vérifier tous les textes
- [ ] Tester tous les liens

### Technique
- [ ] Tester sur mobile
- [ ] Tester sur différents navigateurs
- [ ] Vérifier la vitesse (PageSpeed Insights)
- [ ] Tester le formulaire de contact (si ajouté)
- [ ] Vérifier le sitemap.xml
- [ ] Vérifier robots.txt

### SEO
- [ ] Configurer Google Analytics
- [ ] Configurer Google Search Console
- [ ] Soumettre le sitemap
- [ ] Créer Google My Business
- [ ] Vérifier les meta tags

### Sécurité
- [ ] SSL activé (HTTPS)
- [ ] Headers de sécurité configurés
- [ ] Sauvegardes automatiques
- [ ] Firewall configuré (si VPS)

---

## 📊 Après le Lancement

### Jour 1
1. **Vérifier que tout fonctionne**
   - Tester toutes les pages
   - Vérifier sur mobile
   - Tester les formulaires

2. **Soumettre à Google**
   - Google Search Console
   - Soumettre le sitemap

3. **Configurer les outils**
   - Google Analytics
   - Google My Business

### Semaine 1
1. **Surveiller les erreurs**
   - Vérifier les logs
   - Corriger les bugs

2. **Optimiser**
   - Analyser PageSpeed Insights
   - Améliorer si nécessaire

### Mois 1
1. **Analyser les données**
   - Trafic Google Analytics
   - Positions dans Google

2. **Créer du contenu**
   - Premier article de blog
   - Ajouter des photos de réalisations

---

## 🔄 Mises à Jour

### Avec Vercel
```bash
git add .
git commit -m "Mise à jour"
git push
# Vercel déploie automatiquement
```

### Avec Docker sur VPS
```bash
cd /var/www/mavipool
git pull
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

---

## 📈 Monitoring & Maintenance

### Outils Recommandés

1. **Uptime Monitoring**
   - [UptimeRobot](https://uptimerobot.com) (gratuit)
   - Alerte si le site est down

2. **Analytics**
   - Google Analytics
   - Google Search Console

3. **Performance**
   - PageSpeed Insights
   - GTmetrix

### Tâches Régulières

**Hebdomadaire** :
- Vérifier les erreurs dans Search Console
- Répondre aux avis Google

**Mensuel** :
- Analyser le trafic
- Publier du nouveau contenu
- Vérifier les backups

**Trimestriel** :
- Mettre à jour les dépendances
- Audit SEO complet
- Optimisation des performances

---

## 🆘 Dépannage

### Le site ne s'affiche pas
1. Vérifier les DNS (propagation)
2. Vérifier que le serveur est démarré
3. Vérifier les logs : `docker logs mavipool`

### Erreur 502 Bad Gateway
1. Vérifier que le conteneur tourne : `docker ps`
2. Redémarrer : `docker-compose restart`
3. Vérifier Nginx : `sudo nginx -t`

### Site lent
1. Tester avec PageSpeed Insights
2. Vérifier les ressources serveur
3. Activer la compression
4. Optimiser les images

---

## 💰 Coûts Estimés

### Option Vercel (Gratuit)
- Domaine : ~10-15€/an
- Hébergement : Gratuit
- SSL : Gratuit
- **Total : ~15€/an**

### Option VPS
- Domaine : ~10-15€/an
- VPS : ~5-10€/mois
- SSL : Gratuit (Let's Encrypt)
- **Total : ~70-135€/an**

---

## 📞 Support

### Ressources
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Docker](https://docs.docker.com)
- [Guide Vercel](https://vercel.com/docs)

### Communauté
- [Stack Overflow](https://stackoverflow.com)
- [Next.js Discord](https://nextjs.org/discord)

---

## 🎉 Félicitations !

Une fois déployé, votre site sera accessible à :
- **https://www.mavipool.fr**
- **https://mavipool.fr**

N'oubliez pas de :
1. ✅ Partager sur les réseaux sociaux
2. ✅ Ajouter à vos cartes de visite
3. ✅ Référencer dans les annuaires locaux
4. ✅ Créer du contenu régulièrement

**Bon lancement ! 🚀**

---

Dernière mise à jour : 26 novembre 2024
