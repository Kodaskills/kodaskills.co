FROM node:23-alpine AS build

USER node

WORKDIR /home/node/

ENV PORT=4321

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
