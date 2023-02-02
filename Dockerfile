# syntax=docker/dockerfile:1

FROM node:16

ENV NODE_ENV=production

WORKDIR /Users/heinosa4/weather-app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]