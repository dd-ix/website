FROM node:18-alpine
ENV APP_DIR=/app

COPY ./dist /app

EXPOSE 4000

CMD ["node", "/app/server.mjs"]
