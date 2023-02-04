FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --production

RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "serve" ]