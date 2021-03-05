FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home
Run chown -R node:node /usr

WORKDIR /home/node/app
COPY ./config/package*.json ./
USER node
RUN npm install

RUN npm init -y
RUN npm i socket.io
RUN npm i --save-dev nodemon

RUN npm install -g http-server
CMD http-server .

COPY --chown=node:node . .
EXPOSE 8080
CMD [ "node", "./config/app.js" ]