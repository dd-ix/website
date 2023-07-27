FROM node:18-alpine as builder
RUN npm i -g pnpm@8.6.9

WORKDIR /src

COPY package.json .
COPY pnpm-lock.yaml .

RUN --mount=type=cache,id=pnpm,target=/root/.pnpm-store/v3 pnpm install --frozen-lockfile
COPY . .

RUN pnpm run build:ci

FROM node:18-alpine
ENV APP_DIR=/app

COPY --from=builder /src/dist /app

EXPOSE 4000

CMD ["node", "/app/server.mjs"]
