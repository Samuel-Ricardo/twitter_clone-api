FROM node:18-slim

USER node

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm i

COPY --chown=node:node . .

#CMD ["npm", "run", "start:dev"]
#CMD [ "tails", "-f", "/dev/null" ]
