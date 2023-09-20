FROM node:19.1.0

WORKDIR /challenge42i

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
