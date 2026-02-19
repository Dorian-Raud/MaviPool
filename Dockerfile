# Étape 1: Dépendances
FROM node:24-alpine AS deps
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json ./
RUN npm install --legacy-peer-deps

# Étape 2: Builder
FROM node:24-alpine AS builder
WORKDIR /app

# Copier les dépendances depuis l'étape précédente
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build de l'application Next.js
RUN npm run build

# Étape 3: Runner
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Créer un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "start"]
