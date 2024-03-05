FROM node:18

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY ./src/index.js ./

EXPOSE 3000

CMD ["node","index.js"]