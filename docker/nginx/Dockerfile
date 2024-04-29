FROM nginx:1.25.5-alpine
COPY ./backend/. /var/www/backend

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./docker/nginx/library.crt /etc/nginx/ssl/library.crt
#COPY ./docker/nginx/library.key /etc/nginx/ssl/library.key
