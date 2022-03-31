FROM node:latest as build
WORKDIR /build
COPY package.json ./
RUN npm install


COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /var/www/html
COPY --from=build /build/build /usr/share/nginx/html
