FROM node:21-alpine AS builder
RUN apk update && \
    apk add --no-cache git
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:1.25.3-alpine
RUN apk update && \
    apk add --no-cache curl
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]