FROM node:12.14.1-alpine

RUN mkdir -p /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

CMD [ "node", "index.js" ]