FROM node:18.20.4

WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_ENV=development
RUN npm install
COPY . .
RUN npm install -g nodemon ts-node typescript

EXPOSE 3000

CMD npm run start:dev
