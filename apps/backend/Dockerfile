FROM node:20-alpine

RUN npm install yarn -g

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

COPY . .

RUN npx prisma generate
RUN yarn run build

EXPOSE 5000

CMD ["yarn", "run", "start:prod"]
