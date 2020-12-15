FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN ls -al

EXPOSE 3001

CMD [ "npm", "run", "start" ]