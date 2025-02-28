From php:8.1-fpm

# Update package list and install dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    libmariadb-dev \
    imagemagick \
    libmagickwand-dev \
    && docker-php-ext-install pdo pdo_mysql zip mysqli \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && curl -sS https://downloads.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz | tar -xz -C /tmp \
    && mv /tmp/ioncube/ioncube_loader_lin_8.1.so /usr/local/lib/php/extensions/no-debug-non-zts-20210902/ \
    && echo "zend_extension=ioncube_loader_lin_8.1.so" > /usr/local/etc/php/conf.d/00-ioncube.ini

# RUN php artisan config:clear
# RUN php artisan cache:clear
# RUN php artisan config:cache
# RUN php artisan route:clear
# RUN php artisan route:cache
# RUN php artisan view:clear
# RUN php artisan view:cache
# RUN php artisan optimize:clear
# RUN php artisan optimize
# RUN php artisan migrate

# RUN composer install

EXPOSE 9000

CMD ["php-fpm", "-y", "/usr/local/etc/php-fpm.conf", "-R"]
