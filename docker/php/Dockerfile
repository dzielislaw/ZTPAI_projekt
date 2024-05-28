FROM php:8.3-fpm-alpine

ENV RUN_DEPS \
    zlib \
    libzip \
    libpng \
    libjpeg-turbo \
    postgresql-libs \
    git

ENV BUILD_DEPS \
    zlib-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    postgresql-dev

ENV PHP_EXTENSIONS \
    opcache \
    zip \
    gd \
    bcmath \
    pgsql \
    pdo_pgsql

RUN apk add --no-cache --virtual .build-deps $BUILD_DEPS \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install -j "$(nproc)" $PHP_EXTENSIONS \
    && apk del .build-deps

RUN apk add --no-cache rabbitmq-c-dev
RUN apk add --no-cache autoconf
RUN apk add --no-cache clang
RUN apk add --no-cache make
RUN apk add --no-cache sudo
RUN pecl install amqp && docker-php-ext-enable amqp

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

#symphony CLI
RUN apk add --no-cache bash
#RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.alpine.sh' | distro=alpine version=3.20 codename= sudo -E bash
#RUN apk add symfony-cli

RUN apk add --no-cache --virtual .run-deps $RUN_DEPS

RUN composer require symfony/orm-pack
RUN composer require --dev symfony/maker-bundle
RUN composer require symfony/security-bundle
RUN composer require lexik/jwt-authentication-bundle
RUN composer require api-platform/core
RUN composer require api-platform/api-pack
RUN composer require nelmio/cors-bundle
RUN composer require symfony/amqp-messenger
RUN composer require php-amqplib/php-amqplib

COPY ./backend/. /var/www/backend

VOLUME ["/var/www/backend"]