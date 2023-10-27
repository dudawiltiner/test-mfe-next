FROM node:18-alpine AS builder

USER node

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

ENV NODE_ENV production

RUN npm run build

FROM node:18-alpine AS production

COPY --chown=node:node --from=builder /usr/src/app/.next/standalone ./
COPY --chown=node:node --from=builder /usr/src/app/.next/static ./.next/static
COPY --chown=node:node --from=builder /usr/src/app/public ./public

RUN apk add wget

EXPOSE 3000

CMD ["node", "server.js"]