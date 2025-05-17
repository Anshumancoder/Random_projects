FROM node:18.20.4-alpine

WORKDIR /MAZE

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]