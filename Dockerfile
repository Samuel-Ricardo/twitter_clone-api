FROM node:18-slim

RUN apt-get update -y && apt-get install -y openssl

USER node
WORKDIR /home/node/app



COPY --chown=node:node package*.json ./
RUN npm i

COPY --chown=node:node . .

RUN chown -R node:node /home/node/app

#CMD ["npm", "run", "start:dev"]
#CMD [ "tails", "-f", "/dev/null" ]
