#FROM node:20.5.1-alpine3.18 AS BUILD_IMAGE
#WORKDIR /app/react-app
#COPY package.json .
#RUN npm install
#COPY . .
#RUN npm run build
#
#FROM node:20.5.1-alpine3.18 AS PRODUCTION_IMAGE
#WORKDIR /app/react-app
#COPY --from=BUILD_IMAGE /app/react-app/dist /app/react-app/dist
#EXPOSE 8081
#COPY package.json .
#COPY vite.config.js .
##RUN npm i -g vite
#EXPOSE 8081
#CMD ["npm", "run", "preview"]
FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
