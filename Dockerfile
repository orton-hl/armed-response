FROM node:16
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

COPY . .

RUN npm install
# RUN npm run build
# RUN npm install
EXPOSE 3000
CMD [ "node", "dist/main.js" ]