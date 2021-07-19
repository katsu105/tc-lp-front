FROM node:14.15.3-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
CMD cd front-app && npm run dev
