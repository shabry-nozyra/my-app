
FROM node:10-alpine as build-step
RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app
RUN npm run build

#before
# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/build /usr/share/nginx/html

# Production
FROM nginx:stable-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]