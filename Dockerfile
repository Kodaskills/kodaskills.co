FROM node:23-alpine AS build

USER node

WORKDIR /home/node/

ENV PORT=4321

ADD --chown=node:node package*.json ./

RUN npm install

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
