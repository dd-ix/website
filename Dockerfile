FROM node:18-alpine

COPY dist /app

EXPOSE 4000

CMD ["node", "/app/dist/server.mjs"]
