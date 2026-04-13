FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html