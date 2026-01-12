# 🐳 Guide Docker - MaviPool

Ce guide vous explique comment utiliser Docker pour le développement et la production.

## 🛠️ Développement Local

Pour travailler sur le site avec rechargement automatique (hot-reload) :

```bash
# Lancer l'environnement de développement
docker-compose -f docker-compose.dev.yml up -d --build

# Voir les logs
docker-compose -f docker-compose.dev.yml logs -f

# Arrêter l'environnement
docker-compose -f docker-compose.dev.yml down
```

Le site sera accessible sur **http://localhost:3000**.
Vos modifications dans le code seront immédiatement visibles.

## 🚀 Production

Pour déployer le site optimisé pour la production :

```bash
# Lancer l'environnement de production
docker-compose -f docker-compose.prod.yml up -d --build

# Voir les logs
docker-compose -f docker-compose.prod.yml logs -f

# Arrêter l'environnement
docker-compose -f docker-compose.prod.yml down
```

Le site sera accessible sur **http://localhost:3000**.

## 📋 Commandes Utiles

### Nettoyage complet

Si vous rencontrez des problèmes, vous pouvez nettoyer tous les conteneurs et images :

```bash
# Arrêter tous les conteneurs
docker stop $(docker ps -aq)

# Supprimer tous les conteneurs
docker rm $(docker ps -aq)

# Supprimer toutes les images
docker rmi $(docker images -q)

# Nettoyage profond (attention, supprime tout le cache Docker)
docker system prune -a
```
