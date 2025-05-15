FROM node:23-alpine AS build

USER node

WORKDIR /home/node/

ADD --chown=node:node package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]
