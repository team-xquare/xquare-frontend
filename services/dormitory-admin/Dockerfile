FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
ADD ./services/dormitory-admin/package.json ./
ADD yarn.lock ./
RUN yarn install

FROM node:16-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY ./services/dormitory-admin/. .

RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/

COPY ./services/dormitory-admin/.env ./

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT ["node", "server.js"]