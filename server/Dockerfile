# Dockerfile del backend
FROM node:14

WORKDIR /app/server

COPY package.json package-lock.json /app/server/
RUN npm install

COPY . /app/server

EXPOSE 5000

CMD ["npm", "start"]
