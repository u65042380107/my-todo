FROM node:21

WORKDIR /usr/src/app

COPY package.json package-lock.json ./


# COPY ./src/index.js ./

COPY . ./

RUN npm ci

EXPOSE 3000

CMD ["npm","start"]