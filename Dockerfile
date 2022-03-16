FROM node:alpine

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn install 

CMD [ "yarn", "start" ]