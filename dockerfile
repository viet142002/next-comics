FROM node:20.14

# Create app directory
WORKDIR /next-app-docker

COPY ./src /next-app-docker/src
COPY ./public /next-app-docker/public
COPY ./package.json /next-app-docker/package.json
COPY ./.next /next-app-docker/.next
COPY ./node_modules /next-app-docker/node_modules

CMD ["npm", "start"]