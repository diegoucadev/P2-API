#Using node:20
FROM node:lts 

WORKDIR /app

COPY package*.json ./

RUN npm i --production

COPY . ./

CMD ["npm", "start"]