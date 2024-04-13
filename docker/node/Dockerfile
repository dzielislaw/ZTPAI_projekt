FROM node:21

COPY ./frontend/public /var/www/frontend/public
COPY ./frontend/src /var/www/frontend/src
COPY ./frontend/package.json /var/www/frontend/package.json
#RUN chown -R node:node /var/www/frontend

WORKDIR /var/www/frontend

#USER node

RUN npm install

CMD ["npm", "start"]