# Dockerfile del frontend
FROM node:14

WORKDIR /app/client

COPY package.json package-lock.json /app/client/
RUN npm install

COPY . /app/client

EXPOSE 3000

CMD ["npm", "start"]
