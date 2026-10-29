FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG APP_VERSION=1.0
ENV APP_VERSION=$APP_VERSION

CMD ["npm", "start"]