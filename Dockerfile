FROM node:23-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm i

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]