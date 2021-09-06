FROM node:14-alpine AS builder

WORKDIR /usr/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
COPY ormconfig.docker.ts ./ormconfig.ts
RUN npm run build

FROM node:14-alpine as prod

ENV NODE_ENV=production
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /usr/app/dist ./dist

CMD [ "node", "dist/src/main"]
