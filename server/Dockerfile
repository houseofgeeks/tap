FROM node:16-alpine3.12

WORKDIR /usr/src/server/
COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "devStart"]
